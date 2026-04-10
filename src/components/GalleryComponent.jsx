import images from '../data/galleryData';

function GalleryComponent({ openPreview }) {
  return (
    <div className="gallery-container has-scrollbar">
        <div className="gallery">
        {images.map((img, i) => (
            <img 
            key={i}
            src={img.src}
            onClick={() => openPreview(img)}
            
            />
        ))}
        </div>
    </div>
  );
}

export default GalleryComponent;