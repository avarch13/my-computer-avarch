import { useState } from "react";

import BasicWindow from "./components/BasicWindow.jsx";
import BackgroundWindow from "./components/BackgroundWindow.jsx";
import BackgroundImageComponent from "./components/BackgroundImageComponent.jsx";

import GalleryComponent from './components/GalleryComponent.jsx';
import PreviewWindow from './components/ImagePreview.jsx';

import defaultBg from "./assets/bg/photo1.png";



function App() {

  const backgroundMap = {};

  const [windows, setWindows] = useState([
    { id: "init", title: "Welcome", zIndex: 1, type: "welcome" }
  ]);

  const [topZ, setTopZ] = useState(1);

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

        return [...wins, { id, title, zIndex: newZ, ...extra }];
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

  const openPreview = (img) => {
    const image = new Image();
    image.src = img.src;

    image.onload = () => {
      const size = getFittedSize(image);

      openWindow(
        `preview-${Date.now()}`,
        "",
        {
          type: "preview",
          image: img,
          size,
        }
      );
    };
  };

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
        activeWindowId={topWindow?.id}
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
          defaultSize={
            win.type === "preview"
              ? win.size
              : win.type === "gallery"
                ? { width: 600, height: 800 }
                : { width: 400, height: 300 }
          }
        >{/*body*/}
          <>
            {win.type === "gallery" && (
                <GalleryComponent openPreview={openPreview} />
              )}

            {win.type === "preview" && (
                <PreviewWindow image={win.image} />
              )}
            {win.type === "welcome" && (
              <div style={{ textAlign: "center" }}>
              <h2>Bem Vindo!</h2>
              <span style={{padding: "0px", margin: "15px"}}>Construi esse espaco depois de muito tempo pensando sobre uma lugar para agrupar meus diversos intereses.</span>
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