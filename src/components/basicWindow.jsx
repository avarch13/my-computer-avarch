import "7.css/dist/7.css";
import "../index.css";
import { Rnd } from "react-rnd";

function BasicWindow({

    title = "Window",
    children,
    defaultPosition = { x: 100, y: 100 },
    defaultSize = { width: 400, height: "auto" },
    onClose,
    onFocus,
    style
    }) {

  return (
    <Rnd
      bounds="window"
      enableResizing={false}
      dragHandleClassName="title-bar"
      style={style}
      onMouseDown={onFocus}
      default={{
        x: defaultPosition.x,
        y: defaultPosition.y,
        width: defaultSize.width,
        height: defaultSize.height,
      }}
    >
      <div className="window glass active" style={{ width: "100%" }}>
        {/* Title Bar */}
        <div className="title-bar">
          <div className="title-bar-text no-select">{title}</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize" />
            <button aria-label="Maximize" />
            <button aria-label="Close" onClick={onClose}/>
          </div>
        </div>

        {/* Body */}
        <div className="window-body no-select">
          {children}
        </div>
      </div>
    </Rnd>
  );
}

export default BasicWindow;