import { useEffect, useState } from "react";

function BackgroundImageComponent({ activeWindowCategory, backgroundModifier, backgroundMap, defaultBg }) {
  const [currentBg, setCurrentBg] = useState({ src: defaultBg, repeat: false });
  const [nextBg, setNextBg] = useState(null);
  const [visible, setVisible] = useState(false);

  const categoryEntry = backgroundMap?.[activeWindowCategory];
  const selectedBg = typeof categoryEntry === "object"
    ? categoryEntry?.[backgroundModifier] ?? categoryEntry?.default
    : categoryEntry;

  const effectiveBg = selectedBg ?? defaultBg;

  useEffect(() => {
    if (!effectiveBg || effectiveBg === currentBg.src) return;

    const img = new Image();
    img.src = effectiveBg;

    img.onload = () => {
      const shouldRepeat = img.width < 200 || img.height < 200;
      setNextBg({ src: effectiveBg, repeat: shouldRepeat });
      setVisible(false);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setVisible(true);
        });
      });

      setTimeout(() => {
        setCurrentBg({ src: effectiveBg, repeat: shouldRepeat });
        setNextBg(null);
        setVisible(false);
      }, 600);
    };
  }, [effectiveBg, currentBg.src]);

  const getBgStyle = (bg) => ({
    position: "absolute",
    inset: 0,
    backgroundImage: `url(${bg.src})`,
    backgroundSize: bg.repeat ? "auto" : "cover",
    backgroundPosition: "center",
    backgroundRepeat: bg.repeat ? "repeat" : "no-repeat",
  });

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 0 }}>
      <div style={getBgStyle(currentBg)} />

      {nextBg && (
        <div
          style={{
            ...getBgStyle(nextBg),
            opacity: visible ? 1 : 0,
            transition: "opacity 1s ease",
          }}
        />
      )}
    </div>
  );
}

export default BackgroundImageComponent;
