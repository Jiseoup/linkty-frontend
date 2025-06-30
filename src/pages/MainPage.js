import React, { useState } from "react";
import UrlInput from "../components/UrlInput";
import ShortenUrlBox from "../components/ShortenUrlBox";
import TitleLogo from '../assets/TitleLogo.svg';

function MainPage() {
    const [originalUrl, setOriginalUrl] = useState("");
    const [shortenUrl, setShortenUrl] = useState("");

    const handleShorten = (e) => {
        e.preventDefault();
        // TODO: API Call
        setShortenUrl("https://linkty.kr/shorten-url");
    };

    return (
        <div style={{
            minHeight: "100vh",
            background: "linear-gradient(135deg, #6a82fb 0%, #fc5c7d 100%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
        }}>
            <div style={{
                background: "#fff",
                borderRadius: "20px",
                boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.2)",
                padding: "56px 48px",
                minWidth: "700px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}>
                <img
                    src={TitleLogo}
                    alt="Title Logo"
                    width={320}
                    style={{ marginBottom: "20px" }}
                />
                <div
                    style={{
                        marginBottom: "30px",
                        color: "#888",
                        fontSize: "20px",
                        fontWeight: 500,
                        letterSpacing: "1px",
                        textAlign: "center"
                    }}
                >
                    Linkty는 무료로 이용할 수 있는 URL 단축 서비스입니다.
                </div>
                <UrlInput
                    value={originalUrl}
                    onChange={e => setOriginalUrl(e.target.value)}
                    onSubmit={handleShorten}
                />
                <ShortenUrlBox shortenUrl={shortenUrl} />
            </div>
            <footer style={{ marginTop: "40px", color: "#fff", fontSize: "20px", opacity: 0.8 }}>
                © 2025 Linkty. All rights reserved.
            </footer>
        </div>
    );
}

export default MainPage;
