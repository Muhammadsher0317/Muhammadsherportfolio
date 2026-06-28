import React, { useState } from "react";
import "./Projects.css";

const allProjects = [
  {
    id: 1,
    title: "Nisa UI/UX Agency",
    cat: "web",
    desc: "UI/UX dizayn agentligi uchun ishlab chiqilgan zamonaviy landing page. Responsive dizayn, chiroyli animatsiyalar va intuitiv foydalanuvchi interfeysi.",
    tech: ["React", "Vite", "CSS3", "JavaScript"],
    year: "2025",
    link: "https://nisauiux-website.vercel.app/",
    image: "/images/wwebsiteimage.png",
  },
  {
    id: 2,
    title: "Premium and Stars Mini App",
    cat: "app",
    desc: "Telegram bot orqali premium obuna olish tizimi. Foydalanuvchilar bot orqali obuna bo'lishlari va to'lovlarni amalga oshirishlari mumkin.",
    tech: ["JavaScript", "React", "Tailwind CSS"],
    year: "2026",
    link: "https://tg-shop-peach.vercel.app/",
    image: "/images/shopimageone.png",
  },
  {
    id: 3,
    title: "IELTS Exam Platform",
    cat: "web",
    desc: "IELTS imtihonlariga tayyorgarlik ko'rish va onlayn test topshirish platformasi. Foydalanuvchilar real vaqt rejimida testlarni yechishlari mumkin.",
    tech: ["React", "JavaScript", "Vite", "CSS3"],
    year: "2025",
    link: "https://ielts-exam-mocha.vercel.app/",
    image: "/images/moclimageone.png",
  },
  {
    id: 4,
    title: "GreenShop E-Commerce",
    cat: "web",
    desc: "Gullar va uy o'simliklari savdosi uchun mo'ljallangan zamonaviy internet-do'kon platformasi. Filtrlash va qulay xarid tizimiga ega.",
    tech: ["React", "JavaScript", "Vite", "Tailwind CSS"],
    year: "2025",
    link: "https://green-shop-react-two.vercel.app/",
    image: "/images/greenwebsite.png",
  },
  {
    title: "Scoot Career Platform",
    desc: "Ish qidiruvchilar va kompaniyalarni bog'lovchi zamonaviy karyera platformasi. Foydalanuvchilar ish o'rinlarini ko'rish, qidirish va onlayn ariza topshirishlari, kompaniyalar esa vakansiyalarni boshqarishlari mumkin.",
    tech: ["React", "JavaScript", "Vite", "CSS3"],
    status: "Ko'rish →",
    link: "https://scootwebsite-liard.vercel.app/",
    image: "/images/scootsimgs.png",
  },
];

const cats = ["all", "web", "app"];

function Projects() {
  const [active, setActive] = useState("all");
  const filtered =
    active === "all"
      ? allProjects
      : allProjects.filter((p) => p.cat === active);

  return (
    <div className="projects-page">
      <div className="container">
        <div className="page-hero">
          <p className="page-sub">Mening ishlarim</p>
          <h1>
            Tanlangan <span className="accent">Loyihalar</span>
          </h1>
          <p className="page-desc">
            Har bir loyiha — bu yangi tajriba va ko'nikmalar. Quyida eng yaxshi
            ishlarimni ko'rishingiz mumkin.
          </p>
        </div>

        <div className="filter-tabs">
          {cats.map((c) => (
            <button
              key={c}
              className={`filter-btn ${active === c ? "active" : ""}`}
              onClick={() => setActive(c)}
            >
              {c === "all" ? "Barchasi" : c === "web" ? "Web" : "App"}
            </button>
          ))}
        </div>

        <div className="projects-list">
          {filtered.map((p) => (
            <div className="proj-item" key={p.id}>
              <div className="proj-preview">
                <img className="projectimages" src={p.image} alt="" />

                <div className="proj-year">{p.year}</div>
              </div>
              <div className="proj-body">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="proj-tech">
                  {p.tech.map((t, i) => (
                    <span key={i} className="tech-badge">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="proj-links">
                  <a
                    href={p.link}
                    className="btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ko'rish →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
