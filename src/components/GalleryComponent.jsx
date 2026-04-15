import images from '../data/galleryData';

function GalleryComponent({ openPreview }) {
  const textGallery = "Um dos arrependimentos da minha vida foi não ter guardado e cuidado de alguns artefatos, na maioria fotografias, da minha vida e de pessoas ao meu redor. \n\nInúmeras vezes, entre formatações de computadores ou perda de contas de armazenamento, perdi várias fotos e documentos que se foram para sempre. \n\nAssim, eu entendo a efemeridade das coisas; tudo bem as coisas se perderem no tempo (assim como nós), mas algumas coisas guardam lembranças que confortam em momentos difíceis. \n\nAqui vou guardar memórias minhas e de pessoas amadas.";
  return (
    <div className="gallery-container has-scrollbar">
      <div className="generalText" style={{ padding: "20px", fontSize: "14px", whiteSpace: "pre-line", textAlign: "center" }}>{textGallery}</div>
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