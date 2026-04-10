function ImagePreview({ image }) {
  if (!image) return null;

  return (
    <div className="preview-container">
      <img
        className="preview-image"
        src={image.src}
      />

      {image.description && (
        <p style={{ marginTop: "10px" }}>
          {image.description}
        </p>
      )}
    </div>
  );
}

export default ImagePreview;