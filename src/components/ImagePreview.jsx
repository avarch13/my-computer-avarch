import { useState } from "react";

function ImagePreview({ image }) {
  const [showDescription, setShowDescription] = useState(false);

  if (!image) return null;

  return (
    <div 
      className="preview-container" 
      style={{ display: 'grid', width: '100%', height: '100%', cursor: image.description ? 'pointer' : 'default', position: 'relative' }}
      onClick={() => image.description && setShowDescription(!showDescription)}
    >
      <img
        className="preview-image"
        src={image.src}
      />

      {image.description && showDescription && (
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '300px', padding: '10px', backgroundColor: 'rgba(255,255,255,0.9)', border: '1px solid #ccc' }}>
          <p style={{ textAlign: 'center', margin: 0, padding: "30px", whiteSpace: "pre-line" }}>
            {image.description}
          </p>
        </div>
      )}
    </div>
  );
}

export default ImagePreview;