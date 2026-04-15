import { useState, useEffect } from "react";
import "7.css/dist/7.css";
import '../index.css'
import { Rnd } from "react-rnd";
import ButtonsSidebar from "./ButtonsSidebar.jsx";

function BackgroundWindow({ openWindow }) {


    const getCenteredPosition = () => {
        const width = window.innerWidth * 0.75;
        const height = window.innerHeight * 0.92;
        return {
            width,
            height,
            x: (window.innerWidth - width) / 2,
            y: (window.innerHeight - height) / 2
        };
    };

    const [position, setPosition] = useState(getCenteredPosition);
    const [showTooltip, setShowTooltip] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setPosition(getCenteredPosition());
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    
    return (
        <Rnd
        bounds="window"
        enableResizing={false}
        dragHandleClassName="title-bar"
        style={{ zIndex: 1}}
        size={{ width: position.width, height: position.height }}
        position={{ x: position.x, y: position.y }}
        onDragStop={(e, d) => setPosition(prev => ({ ...prev, x: d.x, y: d.y }))}
        >
        <div style={{ width: "100%", height: "100%", position: "relative"}} className="window glass active" >
            <div className="title-bar">
                <div className="title-bar-text no-select">avarch13.exe</div>
                <div className="title-bar-controls" style={{ position: "relative" }}>
                    <button aria-label="Help" onClick={() => { setShowTooltip(true); setTimeout(() => setShowTooltip(false), 4000); }}></button>
                    <button aria-label="Minimize"></button>
                    <button aria-label="Maximize" disabled=""></button>
                    <button aria-label="Close"></button>
                    {showTooltip && (
                        <div role="tooltip" class="is-bottom is-right" style={{ position: "absolute", top: "90%", left: "0", marginTop: "20px", textAlign: "center", padding: "10px" }}>This was created using <a href="https://khang-nd.github.io/7.css/">7.css</a></div>
                    )}
                </div>
            </div>
            <div style={{ height: "86vh", display: "flex", overflow: "hidden", position: "relative" }} className="window-body" >
                    <div style={{ flex: 1, position: "relative", zIndex: 100 }}>
                        <ul role="menubar" className="can-hover" style={{ position: "relative", zIndex: 100 }}>
                        <li role="menuitem" tabIndex="0" aria-haspopup="true">
                            Welcome
                            <ul role="menu">
                                <li role="menuitem" className="has-divider">
                                <button onClick={() => openWindow("welcome", "Welcome", {type: "welcome", defaultPosition: { x: (window.innerWidth - 400) / 2, y: (window.innerHeight - 400) / 2 } })}>
                                    Welcome <span></span>
                                </button>
                            </li>
                            <li role="menuitem">
                                <button onClick={() => openWindow("aboutme", "About me", { type: "exposition-list", category: "aboutme", defaultPosition: { x: (window.innerWidth - 600) / 2, y: (window.innerHeight - 800) / 2 } })}>
                                    About Me <span>Ctrl+O</span>
                                </button>
                            </li>
                            <li role="menuitem" className="has-divider" aria-disabled="true">
                                <button onClick={() => openWindow("aboutmeplus", "About Me Plus")}>
                                    About Me Plus <span>Ctrl+S</span>
                                </button>
                            </li>
                            
                            <li role="menuitem" aria-disabled="true"><a href="#menubar">Exit</a></li>
                            </ul>
                        </li>
                        <li role="menuitem" tabIndex="0" aria-haspopup="true">
                            Artes
                            <ul role="menu">
                                <li role="menuitem"><button onClick={() => openWindow("games-list", "Games", { type: "exposition-list", category: "games", defaultPosition: { x: (window.innerWidth - 600) / 2, y: (window.innerHeight - 800) / 2 } })}>Games</button></li>
                                <li role="menuitem"><button onClick={() => openWindow("filmes-list", "Filmes", { type: "exposition-list", category: "filmes", defaultPosition: { x: (window.innerWidth - 600) / 2, y: (window.innerHeight - 800) / 2 } })}>Filmes</button></li>
                                <li role="menuitem" className="has-divider"><button onClick={() => openWindow("musica-list", "Música", { type: "exposition-list", category: "musica", defaultPosition: { x: (window.innerWidth - 600) / 2, y: (window.innerHeight - 800) / 2 } })}>Música</button></li>
                                <li role="menuitem" aria-disabled="true"><button onClick={() => openWindow("escrita-list", "Escrita", { type: "exposition-list", category: "escrita", defaultPosition: { x: (window.innerWidth - 600) / 2, y: (window.innerHeight - 800) / 2 } })}>Escrita</button></li>
                            </ul>
                        </li>
                        <li role="menuitem" tabIndex="0" aria-haspopup="true">
                            Galeria
                            <ul role="menu">
                            <li role="menuitem" tabIndex="0" aria-haspopup="true">
                                Somewhere
                                <ul role="menu">
                                <li role="menuitem"><button onClick={() => openWindow("memories", "Memories", { type: "gallery", defaultPosition: { x: (window.innerWidth - 600) / 2, y: (window.innerHeight - 800) / 2 } })}>Memories</button></li>
                                <li role="menuitem" aria-disabled="true"><button>My love</button></li>
                                </ul>
                            </li>
                            <li role="menuitem" aria-disabled="true"><a href="#menubar">In my dreams</a></li>
                            </ul>
                        </li>
                        <li role="menuitem" tabIndex="0" aria-haspopup="true">
                            Help
                            <ul role="menu">
                            <li role="menuitem"><a href="https://www.400monkeys.com/God/" target="_blank" rel="noopener noreferrer">About Religion</a></li>
                            <li role="menuitem" aria-disabled="true"><a href="#menubar">Cool Websites</a></li>
                            </ul>
                        </li>
                        </ul>
                    </div>
                    <ButtonsSidebar />
                    </div>
                    
                <div class="status-bar" style={{ position: "relative", zIndex: 10 }}>
                    <div class="status-bar-field">?</div>
                    <div class="status-bar-field" style={{ flex: "1 1 1000px", maxWidth: "1000px" }}>
                        <div role="progressbar" class="animate">
                            <div style={{width: "64%"}}></div>
                        </div>
                    </div>
                    <div class="status-bar-field" style={{ textAlign: "right", marginLeft: "10px" }}>64%</div>
                </div>
            </div>

        </Rnd>
    );
    
}

export default BackgroundWindow;
