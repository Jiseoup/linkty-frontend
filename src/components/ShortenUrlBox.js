import React from "react";

function ShortenUrlBox({ shortenUrl }) {
    if (!shortenUrl) return null;
    return (
        <div style={{
            marginTop: "16px",
            background: "#f5f6fa",
            borderRadius: "8px",
            padding: "12px 20px",
            fontSize: "15px",
            color: "#222",
            display: "flex",
            alignItems: "center",
            gap: "8px",
        }}>
            <span>단축 URL : </span>
            <a href={shortenUrl} target="_blank" rel="noopener noreferrer" style={{ color: "#6a82fb", fontWeight: "bold", textDecoration: "none" }}>
                {shortenUrl}
            </a>
        </div>
    );
}

export default ShortenUrlBox;
