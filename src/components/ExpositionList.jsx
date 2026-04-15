import expositionData from "../data/expositionData.js";

function ExpositionList({ category, onItemClick }) {
    const data = expositionData[category];

    if (!data) return null;

    return (
        <div className="expeditionList has-scrollbar">
            <div>
                <img src={data.titleimage} style={{ width: "100%"}}/>
            </div>
            <div className="generalText" style={{ padding: "20px", fontSize: "14px", whiteSpace: "pre-line", textAlign: "center" }}>{data.principal}</div>
            <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px"
            }}>
                {data.items.map((item) => (
                    <div
                        key={item.id}
                        onClick={() => onItemClick(item)}
                        style={{
                            padding: "14px",
                            background: "linear-gradient(#f2f2f2 45%, #ebebeb 0, #cfcfcf)",
                            border: "1px solid #8e8f8f",
                            borderRadius: "3px",
                            cursor: "pointer"
                        }}
                    >
                        <div style={{ display: "flex", flex: 1, minWidth: 0}}>
                            <div style={{ minWidth: "80%"}}>
                                <div className="titleTextBlue" style={{ fontWeight: "bold", fontSize: "17px", marginBottom: "18px", marginTop: "4px", }}>{item.title}</div>
                                {item.description && (
                                    <div style={{ fontSize: "12px", fontStyle: "italic", color: "#666", marginBottom: "6px" }}>{item.description}</div>
                                )}
                                {item.artist && (
                                    <div style={{ fontSize: "14px", color: "#666", fontStyle: "italic" }}>{item.artist}</div>
                                )}
                            </div>
                                {item.cover && (
                                    <div style={{  position: "relative", border: "1px solid #8e8f8f", borderRadius: "3px", padding: "5px" }}><img style={{ height: "90px", width: "90px"}} src={item.cover}/></div>
                                )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ExpositionList;
