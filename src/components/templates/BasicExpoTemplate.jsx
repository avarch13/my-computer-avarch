import { useState } from "react";

function BasicExpoTemplate({ title, items = [], content = null }) {
    const [selectedItem, setSelectedItem] = useState(null);

    const handleBack = () => {
        setSelectedItem(null);
    };

    return (
        <div style={{
            padding: "20px",
            height: "100%",
            overflow: "auto"
        }}>
            <h2 style={{ marginBottom: "20px", fontSize: "16px" }}>
                {selectedItem && (
                    <button
                        onClick={handleBack}
                        style={{
                            marginRight: "10px",
                            padding: "2px 10px",
                            cursor: "pointer"
                        }}
                    >
                        {"<"} Back
                    </button>
                )}
                {selectedItem ? selectedItem.name : title}
            </h2>

            {!selectedItem ? (
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px"
                }}>
                    {items.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => setSelectedItem(item)}
                            style={{
                                padding: "15px",
                                background: "linear-gradient(#f2f2f2 45%, #ebebeb 0, #cfcfcf)",
                                border: "1px solid #8e8f8f",
                                borderRadius: "3px",
                                cursor: "pointer"
                            }}
                        >
                            <div style={{ fontWeight: "bold", marginBottom: "5px" }}>{item.name}</div>
                            {item.description && (
                                <div style={{ fontSize: "12px", color: "#666" }}>{item.description}</div>
                            )}
                        </div>
                    ))}
                </div>
            ) : (
                <div style={{
                    padding: "15px",
                    background: "#fff",
                    border: "1px solid #8e8f8f",
                    borderRadius: "3px"
                }}>
                    {content || selectedItem.content || (
                        <p>Content for {selectedItem.name} goes here...</p>
                    )}
                </div>
            )}
        </div>
    );
}

export default BasicExpoTemplate;
