import { useState } from "react";
import BasicWindow from "./components/basicWindow.jsx";
import BackgroundWindow from "./components/backgroundWindow.jsx";
import defaultBg from "./assets/pngs/backgroundTESTE.png";

import BackgroundImageComponent from "./components/BackgroundImageComponent.jsx";
import chatBg from "./assets/pngs/backgroundTESTE.png";
import openBg from "./assets/pngs/bgteste2.png";




function App() {

  const backgroundMap = {
    chat: chatBg,
    open: openBg,
  };


  const [windows, setWindows] = useState([
    { id: "chat", title: "Chat", zIndex: 1 }
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

  const openWindow = (id, title) => {
    setTopZ((prev) => {
      const newZ = prev + 1;

      setWindows((wins) => {
        const exists = wins.find((w) => w.id === id);

        if (exists) {
          // just bring to front
          return wins.map((w) =>
            w.id === id ? { ...w, zIndex: newZ } : w
          );
        }

        // create new window
        return [...wins, { id, title, zIndex: newZ }];
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
        >
          <p>{win.title} content</p>
        </BasicWindow>
      ))}
    </>
  );
}



export default App;