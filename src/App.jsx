import { useState, useEffect } from "react";

import BasicWindow from "./components/BasicWindow.jsx";
import BackgroundWindow from "./components/BackgroundWindow.jsx";
import BackgroundImageComponent from "./components/BackgroundImageComponent.jsx";

import GalleryComponent from './components/GalleryComponent.jsx';
import PreviewWindow from './components/ImagePreview.jsx';
import ExpositionList from './components/ExpositionList.jsx';
import ExpositionDetail from './components/ExpositionDetail.jsx';

//pngs
import defaultBg from "./assets/bg/bgMain.png";
import bg2 from "./assets/bg/bg2.png";
import bg3 from "./assets/bg/bg3.png";
import bg4 from "./assets/bg/bg4.png";
import bg5 from "./assets/bg/bg5.png";
import bg6 from "./assets/bg/bg6.png";
import bg7 from "./assets/bg/bg7.png";
//gifs
import bg20 from "./assets/bg/bg20.gif";
import bg21 from "./assets/bg/bg21.gif";
import bg22 from "./assets/bg/bg22.gif";
import bg23 from "./assets/bg/bg23.gif";
import bg24 from "./assets/bg/bg24.gif";
import bg25 from "./assets/bg/bg25.gif";
import bg26 from "./assets/bg/bg26.gif";
import bg27 from "./assets/bg/bg27.gif";
import bg28 from "./assets/bg/bg28.gif";

//Eu e a IA competindo pra ver quem erra mais CSS flex/grid


function App() {

  const backgroundMap = {
    welcome: bg2,
    gallery: bg3,
    preview: bg3,
    "exposition-list": {
      aboutme: bg4,
      games: bg28,
      filmes: bg21,
      musica: bg22,
      escrita: bg23,
      default: bg4,
    },
    "exposition-detail": {
      games: bg24,
      musica: bg25,
      filmes: bg26,
      escrita: bg27,
      default: bg3,
    },
    
  };

  const [windows, setWindows] = useState([]);

  const [topZ, setTopZ] = useState(1);

  useEffect(() => {
    openWindow("welcome", "Welcome", {
      type: "welcome",
      defaultPosition: { x: (window.innerWidth - 400) / 2, y: (window.innerHeight - 300) / 2 }
    });
  }, []);
  

  // const windowCenterScreen = () => {
  //     const width = window.innerWindow * 0.8;
  //     const height = window.innerWindow * 0.8;
  //     return {
  //       width,
  //       height,
  //       x : (window.innerWindow - width) / 2,
  //       y : (window.innerWindow - height) / 2
  //     };
  // }

  // const [position, setPosition] = useState(windowCenterScreen);

  const bringToFront = (id) => {
    setTopZ((prev) => {
      const newZ = prev + 1;

      setWindows((wins) =>
        wins.map((w) =>
          w.id === id ? { ...w, zIndex: newZ } : w
        )
      );

      return newZ;
    });
  };

  const openWindow = (id, title, extra = {}) => {
    setTopZ((prev) => {
      const newZ = prev + 1;

      setWindows((wins) => {
        const exists = wins.find((w) => w.id === id);

        if (exists) {
          return wins.map((w) =>
            w.id === id ? { ...w, zIndex: newZ } : w
          );
        }

        const position = extra.defaultPosition || { x: 100 + (wins.length * 30), y: 200 + (wins.length * 30) };

        return [...wins, { id, title, zIndex: newZ, defaultPosition: position, ...extra }];
      });

      return newZ;
    });
  };


  const closeWindow = (id) => {
    setWindows((wins) => wins.filter((w) => w.id !== id));
  };

  const topWindow = windows.reduce((top, current) => {
    if (!top || current.zIndex > top.zIndex) return current;
    return top;
  }, null);

  const backgroundWindow = (() => {
    if (!topWindow) return null;
    if (topWindow.type !== "preview") return topWindow;

    return [...windows]
      .sort((a, b) => b.zIndex - a.zIndex)
      .find((w) => w.id !== topWindow.id && w.type !== "preview") || topWindow;
  })();

  const openPreview = (img) => {
    const image = new Image();
    image.src = img.src;

    image.onload = () => {
      const size = img.size || getFittedSize(image);

      openWindow(
        `preview`,
        "",
        {
          type: "preview",
          image: { ...img, size },
          size,
          defaultPosition: { x: (window.innerWidth - size.width) / 2, y: (window.innerHeight - size.height) / 2 },
        }
      );
    };
  };

  const openExpositionItem = (item, category) => {
    openWindow(
      `${category}-${item.id}`,
      item.title,
      {
        type: "exposition-detail",
        category,
        backgroundModifier: category,
        item: item,
        defaultPosition: { x: (window.innerWidth - 600) / 2, y: (window.innerHeight - 800) / 2 },
      }
    );
  };

  //porque fiz duas vezes?
  const getFittedSize = (img) => {
    const maxWidth = window.innerWidth * 0.9;
    const maxHeight = window.innerHeight * 0.9;

    const ratio = Math.min(
      maxWidth / img.width,
      maxHeight / img.height,
      1 // never upscale
    );

    return {
      width: img.width * ratio,
      height: img.height * ratio,
    };
  };

  
  return (
    <>
      <BackgroundImageComponent
        activeWindowCategory={backgroundWindow?.type}
        backgroundModifier={backgroundWindow?.backgroundModifier ?? backgroundWindow?.category}
        backgroundMap={backgroundMap}
        defaultBg={defaultBg}
      />
      <BackgroundWindow openWindow={openWindow} />
      {windows.map((win) => (
        <BasicWindow
          key={win.id}
          title={win.title}
          onClose={() => closeWindow(win.id)}
          onFocus={() => bringToFront(win.id)}
          style={{ zIndex: win.zIndex + 10 }}
          defaultPosition={win.defaultPosition}
          defaultSize={
            win.type === "preview"
              ? win.size
              : win.type === "gallery"
                ? { width: 600, height: 800 }
                : win.type === "exposition-list"
                  ? { width: 600, height: 800 }
                  : win.type === "exposition-detail"
                    ? { width: 600, height: 800 }
                    : { width: 400, height: 320 }
          }
        >{/*body*/}
          <>
            {win.type === "gallery" && (
                <GalleryComponent openPreview={openPreview} />
              )}

            {win.type === "preview" && (
                <PreviewWindow image={win.image} />
              )}
            {win.type === "exposition-list" && (
                <ExpositionList category={win.category} onItemClick={(item) => openExpositionItem(item, win.category)} />
              )}
            {win.type === "exposition-detail" && (
                <ExpositionDetail item={win.item} openPreview={openPreview} />
              )}
            {win.type === "welcome" && (
              <div style={{ textAlign: "center", padding: "10px" }}>
              <h2 className="titleTextBlue" style={{fontSize: "24px"}}>Bem Vindo!</h2>
              <div style={{ margin: "10px", fontSize: "14px"}}>Construi esse espaco depois de muito tempo pensando sobre uma lugar para agrupar meus diversos interesses. Tambem usei para treinar HTML, CSS e Javascript usando React (Vite). Está meio vazio ainda, tenho muita coisa pra importar de outros lugares como sites de reviews, listas, etc.</div>
              <div>(Pode conter temas inapropriados para criancas ou trabalho.)</div>
              </div>
              )}
            {!win.type && <div></div>}
          </>
        </BasicWindow>
      ))}
    </>
  );
}

export default App;