import { useState } from "react";
import "7.css/dist/7.css";
import '../index.css'
import { Rnd } from "react-rnd";

function BackgroundWindow({ openWindow }) {

    const [windows, setWindows] = useState({
        open: false,
        save: false,
    });


    const styleText = {
        WebkitUserSelect: 'none',
        msUserSelect: 'none',
        userSelect: 'none'
    };

    


    return (
        <Rnd
        bounds="window"
        enableResizing={false}
        dragHandleClassName="title-bar"
        style={{ zIndex: 1}}
        >
        <div style={{ width: "75vw", height: "91.6vh", position: "relative"}} className="window glass active" >
            <div className="title-bar">
                <div className="title-bar-text no-select">avarch13.exe</div>
                <div className="title-bar-controls">
                    <button aria-label="Help"></button>
                    <button aria-label="Minimize"></button>
                    <button aria-label="Maximize" disabled=""></button>
                    <button aria-label="Close"></button>
                </div>
            </div>
            <div style={{ height: "86vh"}} className="window-body" >
                    <div>
                        <ul role="menubar" className="can-hover">
                        <li role="menuitem" tabIndex="0" aria-haspopup="true">
                            File
                            <ul role="menu">
                            <li role="menuitem">
                                <button onClick={() => openWindow("open", "Open File")}>
                                    Open <span>Ctrl+O</span>
                                </button>
                            </li>
                            <li role="menuitem">
                                <button onClick={() => openWindow("save", "Save File")}>
                                    Save <span>Ctrl+S</span>
                                </button>
                            </li>
                            <li role="menuitem" className="has-divider">
                                <button onClick={() => openWindow("saveAs", "Save As")}>
                                    Save As <span>Ctrl+Shift+S</span>
                                </button>
                            </li>
                            <li role="menuitem"><a href="#menubar">No Exit</a></li>
                            </ul>
                        </li>
                        <li role="menuitem" tabIndex="0" aria-haspopup="true">
                            Edit
                            <ul role="menu">
                                <li role="menuitem"><a href="#menubar">Undo</a></li>
                                <li role="menuitem"><a href="#menubar">Copy</a></li>
                                <li role="menuitem"><a href="#menubar">Cut</a></li>
                                <li role="menuitem" className="has-divider"><a href="#menubar">Paste</a></li>
                                <li role="menuitem"><a href="#menubar">Delete</a></li>
                                <li role="menuitem"><a href="#menubar">Find...</a></li>
                                <li role="menuitem"><a href="#menubar">Replace...</a></li>
                                <li role="menuitem"><a href="#menubar">Go to...</a></li>
                            </ul>
                        </li>
                        <li role="menuitem" tabIndex="0" aria-haspopup="true">
                            View
                            <ul role="menu">
                            <li role="menuitem" tabIndex="0" aria-haspopup="true">
                                Somewhere
                                <ul role="menu">
                                <li role="menuitem"><button>There's a place you can be happy</button></li>
                                <li role="menuitem"><button>The world has failed you</button></li>
                                </ul>
                            </li>
                            <li role="menuitem"><a href="#menubar">Status ?</a></li>
                            </ul>
                        </li>
                        <li role="menuitem" tabIndex="0" aria-haspopup="true">
                            Help
                            <ul role="menu">
                            <li role="menuitem"><a href="#menubar">I need help</a></li>
                            <li role="menuitem"><a href="#menubar">You need help</a></li>
                            </ul>
                        </li>
                        </ul>
                    </div>
            </div>
                <div class="status-bar">
                    <p class="status-bar-field">Press F1 for help</p>
                    <p class="status-bar-field">Slide 1</p>
                    <p class="status-bar-field">CPU Usage: 14%</p>
                </div>
        </div>
        </Rnd>
    );
    
}

export default BackgroundWindow;

