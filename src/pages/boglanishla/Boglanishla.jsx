import React from "react";
import "./Boglanishla.css";

function Boglanishla() {
  return (
    <div className="contact-page">
      <div className="container">
        <div className="page-hero">
          <p className="page-sub">Aloqa</p>
          <h1>
            Yangi loyiha haqida <span className="accent">gaplashamizmi?</span>
          </h1>
          <p className="page-desc">
            G'oyangizni hayotga tatbiq etishga tayyorman. Telegram orqali bog'laning 
            yoki ma'lumotlarimni ko'rib chiqing.
          </p>
        </div>

        <div className="contact-grid">
          {/* Telegram Katta Ikonka Qismi */}
          <div className="telegram-block-wrap">
            <h2>Tezkor Aloqa</h2>
            <a 
              href="https://t.me/inomjonov_0317" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="telegram-big-card"
            >
              <div className="tg-icon-wrap">
                <span className="tg-big-icon">✈️</span>
              </div>
              <h3>Telegram orqali yozish</h3>
              <p>Sizni t.me/inomovmuxammadsher manzilida kutaman</p>
              <span className="tg-action-btn">Chatni boshlash →</span>
            </a>
          </div>

          {/* Info Qismi */}
          <div className="contact-info">
            <h2>Bevosita Bog'lanish</h2>
            <div className="info-cards">
              <div className="info-card">
                <span className="info-icon">📧</span>
                <div>
                  <p className="info-label">Email</p>
                  <a href="mailto:inomovmuxammadsher@gmail.com">
                    inomovmuxammadsher@gmail.com
                  </a>
                </div>
              </div>
              <div className="info-card">
                <span className="info-icon">📍</span>
                <div>
                  <p className="info-label">Joylashuv</p>
                  <p>Andijan, Fergana, O'zbekiston</p>
                </div>
              </div>
              <div className="info-card">
                <span className="info-icon">⏱️</span>
                <div>
                  <p className="info-label">Javob vaqti</p>
                  <p>24 soat ichida</p>
                </div>
              </div>
            </div>

            <div className="map-placeholder">
              <div className="map-inner">
                <p>📍 Andijan, O'zbekiston</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Boglanishla;