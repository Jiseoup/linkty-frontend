import React from "react";

function UrlInput({ value, onChange, onSubmit }) {
    return (
        <form onSubmit={onSubmit} style={{ display: "flex", gap: "12px", width: "100%", marginBottom: "20px" }}>
            <input
                type="url"
                placeholder="단축할 URL을 입력하세요."
                value={value}
                onChange={onChange}
                style={{
                    flex: 1,
                    padding: "12px 16px",
                    borderRadius: "8px",
                    border: "1px solid #ddd",
                    fontSize: "16px",
                    outline: "none",
                }}
                required
            />
            <button
                type="submit"
                style={{
                    padding: "12px 24px",
                    borderRadius: "8px",
                    border: "none",
                    background: "linear-gradient(90deg, #6a82fb 0%, #fc5c7d 100%)",
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: "16px",
                    cursor: "pointer",
                }}
            >
                단축하기
            </button>
        </form>
    );
}

export default UrlInput;
