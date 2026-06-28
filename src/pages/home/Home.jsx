import React from "react";
import "./Home.css";
import { Link, NavLink, useNavigate } from "react-router-dom";

const projects = [
  {
    title: "Nisa UI/UX Agency",
    desc: "UI/UX dizayn agentligi uchun ishlab chiqilgan zamonaviy landing page. Responsive dizayn, chiroyli animatsiyalar va intuitiv foydalanuvchi interfeysi orqali kompaniya xizmatlari hamda loyihalarini samarali namoyish etadi.",
    tech: ["React", "Vite", "CSS3", "JavaScript"],
    status: "Ko'rish →",
    link: "https://nisauiux-website.vercel.app/",
    image: "/images/wwebsiteimage.png",
  },
  {
    title: "Premium and Stars Mini App ",
    desc: "Telegram bot orqali premium obuna olish tizimi. Foydalanuvchilar bot orqali obuna bo'lishlari va to'lovlarni amalga oshirishlari mumkin.",
    tech: ["JavaScript", "React", "Tailwind CSS"],
    status: "Ko'rish →",
    link: "https://tg-shop-peach.vercel.app/",
    image: "/images/shopimageone.png",
  },
  {
    title: "IELTS Exam Platform",
    desc: "IELTS imtihonlariga tayyorgarlik ko'rish va onlayn test topshirish platformasi. Foydalanuvchilar real vaqt rejimida testlarni yechishlari va o'z bilimlarini sinab ko'rishlari mumkin.",
    tech: ["React", "JavaScript", "Vite", "CSS3"], // Agar Tailwind ishlatilgan bo'lsa, "Tailwind CSS" deb almashtirishingiz mumkin
    status: "Ko'rish →",
    link: "https://ielts-exam-mocha.vercel.app/",
    image: "/images/moclimageone.png", // Bu yerga rasm nomini to'g'rilab yozasiz
  },
  {
    title: "GreenShop E-Commerce",
    desc: "Gullar va uy o'simliklari savdosi uchun mo'ljallangan zamonaviy internet-do'kon platformasi. Mahsulotlarni filtrlash, saralash va qulay xarid tizimiga ega.",
    tech: ["React", "JavaScript", "Vite", "Tailwind CSS"], // Loyihada ishlatilgan texnologiyalarga qarab o'zgartirishingiz mumkin
    status: "Ko'rish →",
    link: "https://green-shop-react-two.vercel.app/",
    image: "/images/greenwebsite.png", // Rasm nomini o'zingizga moslab to'g'rilab olasiz
  },
];

function Home() {
  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
        <div className="hero-bg-grid"></div>
        <div className="container hero-content">
          <div className="hero-text">
            <p className="hero-greeting">Salom, Men</p>
            <h1 className="hero-name">
              <span className="accent">Muhammadsher</span> Inomov
            </h1>
            <h2 className="hero-title">— Frontend Dasturchi</h2>
            <p className="hero-desc">
              Zamonaviy veb-ilovalar yaratuvchi React mutaxassisi. Foydalanuvchi
              tajribasini birinchi o'ringa qo'ygan holda tez, chiroyli va
              funktsional saytlar yarataman.
            </p>
            <div className="hero-tags">
              <span className="tag">React</span>
              <span className="tag">JavaScript</span>
              <span className="tag">UI/UX</span>
            </div>
            <div className="hero-btns">
              <NavLink to="/projects" className="btn-primary">
                Loyihalarni Ko'rish
              </NavLink>
              <NavLink to="/boglanishla" className="btn-outline">
                Bog'lanish
              </NavLink>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-avatar-wrap">
              <div className="avatar-ring"></div>
              <div className="avatar-inner">
                <span>MH</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Projects */}
      <section className="selected-projects">
        <div className="container">
          <div className="section-header">
            <h2>
              Tanlangan <span className="accent">Loyihalar</span>
            </h2>
            <NavLink to="/projects" className="see-all">
              Barchasini ko'rish →
            </NavLink>
          </div>
          <div className="projects-grid">
            {projects.map((p, i) => (
              <div className="project-card" key={i}>
                <div className="card-screen">
                  <img className="projectimages" src={p.image} alt="" />
                  <div className="screen-lines">
                    {[...Array(5)].map((_, j) => (
                      <div className="sline" key={j}></div>
                    ))}
                  </div>
                </div>
                <div className="card-info">
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <div className="card-techs">
                    {p.tech.map((t, j) => (
                      <span key={j} className="tech-badge">
                        {t}
                      </span>
                    ))}
                  </div>
                  <a href={p.link} className="card-link">
                    {p.status}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-box">
            <h2>
              Keling, ajoyib loyiha{" "}
              <span className="accent">birga yaratamiz!</span>
            </h2>
            <p>
              Yangi loyiha haqida fikringiz bormi? Men bilan bog'laning va
              g'oyangizni hayotga tatbiq etamiz.
            </p>
            <NavLink to="/boglanishla" className="btn-primary">
              Biz bilan bog'laning
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
