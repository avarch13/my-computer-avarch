import { useEffect, useState } from "react";

function BackgroundImageComponent({ activeWindowId, backgroundMap, defaultBg }) {
  const [currentBg, setCurrentBg] = useState(defaultBg);
  const [nextBg, setNextBg] = useState(null);
  const [visible, setVisible] = useState(false);

  const newBg = backgroundMap?.[activeWindowId] ?? defaultBg;

  useEffect(() => {
    if (!newBg || newBg === currentBg) return;

    const img = new Image();
    img.src = newBg;

    img.onload = () => {
      setNextBg(newBg);
      setVisible(false); // start hidden

      // force next frame so transition can occur
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setVisible(true); // triggers fade
        });
      });

      setTimeout(() => {
        setCurrentBg(newBg);
        setNextBg(null);
        setVisible(false);
      }, 600);
    };
  }, [newBg, currentBg]);

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 0 }}>
      {/* Current */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${currentBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Next (fades in) */}
      {nextBg && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${nextBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: visible ? 1 : 0,
            transition: "opacity 1s ease",
          }}
        />
      )}
    </div>
  );
}

export default BackgroundImageComponent;