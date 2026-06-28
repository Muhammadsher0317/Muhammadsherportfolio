import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <h2 className="footer-logo">
              Inomov<span>.dev</span>
            </h2>
            <p>
              Frontend Dasturchi — React & JavaScript mutaxassisi. Zamonaviy,
              tez va chiroyli veb-ilovalar yarataman.
            </p>
            <div className="footer-socials">
              <a
                href="https://t.me/inomjonov_0317"
                target="_blank"
                rel="noreferrer"
              >
                TG
              </a>
              <a
                href="https://github.com/Muhammadsher0317"
                target="_blank"
                rel="noreferrer"
              >
                GH
              </a>
            </div>
          </div>
          <div className="footer-links">
            <h4>Sahifalar</h4>
            <ul>
              <li>
                <NavLink to="/">Bosh Sahifa</NavLink>
              </li>
              <li>
                <NavLink to="/projects">Loyihalar</NavLink>
              </li>
              <li>
                <NavLink to="/skills">Ko'nikmalar</NavLink>
              </li>
              <li>
                <NavLink to="/boglanishla">Bog'lanish</NavLink>
              </li>
            </ul>
          </div>
          <div className="footer-contact">
            <h4>Bog'lanish</h4>
            <p>📧inomovmuxammadsher@gmail.com</p>
            <p>📞 +998 93 411 03 17</p>
            <p>📍 Andijan, Fergana, Toshkent, O'zbekiston</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Muhammadsher Inomov. Barcha huquqlar himoyalangan.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
