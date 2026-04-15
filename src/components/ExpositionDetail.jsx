
function ExpositionDetail({ item, openPreview }) {
    if (!item) return null;

    const handleImageClick = (img) => {
        if (!openPreview) return;
        
        const imgSrc = typeof img === 'string' ? img : img.src;
        const image = new Image();
        image.src = imgSrc;
        
        image.onload = () => {
            const maxWidth = window.innerWidth;
            const maxHeight = window.innerHeight;
            
            const ratio = Math.min(
                maxWidth / image.width,
                maxHeight / image.height,
                1
            );
            
            const size = {
                width: image.width * ratio,
                height: image.height * ratio
            };
            
            openPreview({
                src: imgSrc,
                name: item.title,
                size
            });
        };
    };

    return (
        <div className="expeditionDetail has-scrollbar">
            <div>
                <img src={item.titleimage} style={{ width: "100%"}}/>
            </div>
            <h2 style={{ marginBottom: "10px", fontSize: "18px", padding: "2px" }}>{item.title}</h2>
            {item.artist && (
                <div style={{ fontSize: "14px", color: "#666", fontStyle: "italic", marginBottom: "15px", padding: "2px" }}>
                    {item.artist}
                </div>
            )}
            {item.description && (
                <div style={{ fontSize: "14px", color: "#666", marginBottom: "15px", padding: "2px" }}>
                    {item.description}
                </div>
            )}
            
            <div style={{
                padding: "20px",
                background: "#fff",
                border: "1px solid #8e8f8f",
                borderRadius: "3px",
                marginBottom: "15px",
                paddingBottom: "30px"
            }}>
                <div style={{
                    whiteSpace: "pre-line",
                    lineHeight: "1.6",
                    fontSize: "14px"
                }}>
                    {item.mainText}
                </div>
            </div>

            {item.lyrics && (
                <div style={{
                    padding: "15px",
                    background: "linear-gradient(#f2f2f2 45%, #ebebeb 0, #cfcfcf)",
                    border: "1px solid #8e8f8f",
                    borderRadius: "3px"
                }}>
                    
                    <div style={{
                        whiteSpace: "pre-line",
                        lineHeight: "1.6",
                        fontSize: "13px",
                        fontStyle: "italic"
                    }}>
                        {item.lyrics}
                    </div>
                </div>
            )}

            {item.images && item.images.length > 0 && (
                <div style={{ marginTop: "15px" }}>

                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
                        gap: "10px"
                    }}>
                        {item.images.map((img, index) => {
                            const imgSrc = typeof img === 'string' ? img : img.src;
                            return (
                                <img
                                    key={index}
                                    src={imgSrc}
                                    alt={item.title}
                                    onClick={() => handleImageClick(img)}
                                    style={{
                                        width: "100%",
                                        border: "1px solid #8e8f8f",
                                        borderRadius: "3px",
                                        cursor: openPreview ? "pointer" : "default"
                                    }}
                                />
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
}

export default ExpositionDetail;
