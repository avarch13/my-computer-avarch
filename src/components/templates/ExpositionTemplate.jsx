import { useState } from "react";

function ExpositionTemplate({ title, items = [] }) {
    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (item) => {
        setSelectedItem(item);
        if (item.onClick) {
            item.onClick(item);
        }
    };

    return (
        <div style={{
            padding: "20px",
            height: "100%",
            overflow: "auto"
        }}>
            <h2 style={{ marginBottom: "20px", fontSize: "16px" }}>{title}</h2>
            <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px"
            }}>
                {items.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => handleItemClick(item)}
                        style={{
                            padding: "10px 15px",
                            background: "linear-gradient(#f2f2f2 45%, #ebebeb 0, #cfcfcf)",
                            border: "1px solid #8e8f8f",
                            borderRadius: "3px",
                            cursor: "pointer",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}
                    >
                        <span>{item.name}</span>
                        <span style={{ color: "#666", fontSize: "12px" }}>{">"}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ExpositionTemplate;
