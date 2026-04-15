import { useState } from "react";

function MusicExpoTemplate({ title, tracks = [] }) {
    const [selectedTrack, setSelectedTrack] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleBack = () => {
        setSelectedTrack(null);
        setIsPlaying(false);
    };

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <div style={{
            padding: "20px",
            height: "100%",
            overflow: "auto"
        }}>
            <h2 style={{ marginBottom: "20px", fontSize: "16px" }}>
                {selectedTrack && (
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
                {selectedTrack ? selectedTrack.title : title}
            </h2>

            {!selectedTrack ? (
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px"
                }}>
                    {tracks.map((track, index) => (
                        <div
                            key={index}
                            onClick={() => setSelectedTrack(track)}
                            style={{
                                padding: "12px 15px",
                                background: "linear-gradient(#f2f2f2 45%, #ebebeb 0, #cfcfcf)",
                                border: "1px solid #8e8f8f",
                                borderRadius: "3px",
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                gap: "15px"
                            }}
                        >
                            <span style={{
                                width: "30px",
                                height: "30px",
                                background: "#39f",
                                color: "#fff",
                                borderRadius: "50%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "14px"
                            }}>
                                {index + 1}
                            </span>
                            <div style={{ flex: 1 }}>
                                <div style={{ fontWeight: "bold" }}>{track.title}</div>
                                {track.artist && (
                                    <div style={{ fontSize: "12px", color: "#666" }}>{track.artist}</div>
                                )}
                            </div>
                            {track.duration && (
                                <span style={{ fontSize: "12px", color: "#666" }}>{track.duration}</span>
                            )}
                        </div>
                    ))}
                </div>
            ) : (
                <div style={{
                    padding: "20px",
                    background: "#fff",
                    border: "1px solid #8e8f8f",
                    borderRadius: "3px",
                    textAlign: "center"
                }}>
                    <div style={{
                        width: "150px",
                        height: "150px",
                        background: "linear-gradient(#f2f2f2 45%, #ebebeb 0, #cfcfcf)",
                        border: "2px solid #8e8f8f",
                        borderRadius: "3px",
                        margin: "0 auto 20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "48px"
                    }}>
                        {isPlaying ? "▶" : "❚❚"}
                    </div>
                    <div style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "5px" }}>
                        {selectedTrack.title}
                    </div>
                    {selectedTrack.artist && (
                        <div style={{ fontSize: "14px", color: "#666", marginBottom: "20px" }}>
                            {selectedTrack.artist}
                        </div>
                    )}
                    <button
                        onClick={togglePlay}
                        style={{
                            padding: "10px 30px",
                            fontSize: "14px",
                            cursor: "pointer"
                        }}
                    >
                        {isPlaying ? "Pause" : "Play"}
                    </button>
                    {selectedTrack.lyrics && (
                        <div style={{
                            marginTop: "20px",
                            padding: "15px",
                            background: "#f5f5f5",
                            borderRadius: "3px",
                            textAlign: "left",
                            fontSize: "12px",
                            whiteSpace: "pre-line"
                        }}>
                            {selectedTrack.lyrics}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default MusicExpoTemplate;
