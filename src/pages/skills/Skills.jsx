import React from "react";
import "./Skills.css";

const techStack = [
   { name: "React", level: 90, icon: "⚛️" },
  { name: "JavaScript", level: 88, icon: "🟨" },
  { name: "TypeScript", level: 75, icon: "🔷" },
  { name: "HTML/CSS", level: 95, icon: "🎨" },
  { name: "Git", level: 85, icon: "🔀" },
  { name: "Redux Toolkit", level: 78, icon: "💜" },
  { name: "Vite", level: 82, icon: "⚡" },
  { name: "REST API", level: 85, icon: "🔗" },
  { name: "Responsive Design", level: 92, icon: "📱" },
  { name: "UI/UX", level: 85, icon: "🎯" },
  { name: "Figma", level: 80, icon: "🎨" },
  { name: "IELTS (Band 5.5)", level: 55, icon: "📘" },
];

const experience = [
  {
    role: "Frontend Developer (Freelance)",
    company: "Self-Employed",
    period: "2026 boshidan — Hozirgi vaqtda",
    desc: "Turli mijozlar uchun zamonaviy va responsiv veb-saytlar ishlab chiqdim. React yordamida foydalanuvchi interfeyslarini yaratdim, API integratsiyasi va dizaynlarni kodga aylantirish bilan shug'ullandim.",
    techs: ["React", "JavaScript", "CSS3", "Vite", "Git"],
  },
  {
    role: "Assistant Mentor",
    company: "Codial Academy",
    period: "2025 — 2026",
    desc: "Frontend yo'nalishida o'quvchilarga amaliy mashg'ulotlarda yordam berdim, loyihalarini tekshirdim va HTML, CSS, JavaScript hamda React bo'yicha yo'l-yo'riq ko'rsatdim.",
    techs: ["HTML", "CSS", "JavaScript", "React"],
  },
];

function Skills() {
  return (
    <div className="skills-page">
      <div className="container">
        <div className="page-hero">
          <p className="page-sub">Mening salohiyatim</p>
          <h1>
            Ko'nikmalar & <span className="accent">Tajriba</span>
          </h1>
          <p className="page-desc">
            Frontend dasturlashda 3+ yillik tajribaga egaman. Quyida texnologik
            stegim va ish tajribam.
          </p>
        </div>

        {/* Tech Stack */}
        <div className="skills-section">
          <h2 className="section-title">
            Texnologik <span className="accent">Stack</span>
          </h2>
          <div className="skills-grid">
            {techStack.map((s, i) => (
              <div className="skill-card" key={i}>
                <div className="skill-top">
                  <span className="skill-icon">{s.icon}</span>
                  <span className="skill-name">{s.name}</span>
                  <span className="skill-percent">{s.level}%</span>
                </div>
                <div className="skill-bar-bg">
                  <div
                    className="skill-bar-fill"
                    style={{ width: `${s.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="skills-section">
          <h2 className="section-title">
            Ish <span className="accent">Tajribasi</span>
          </h2>
          <div className="experience-list">
            {experience.map((e, i) => (
              <div className="exp-item" key={i}>
                <div className="exp-dot"></div>
                <div className="exp-content">
                  <div className="exp-header">
                    <div>
                      <h3>{e.role}</h3>
                      <p className="exp-company">{e.company}</p>
                    </div>
                    <span className="exp-period">{e.period}</span>
                  </div>
                  <p className="exp-desc">{e.desc}</p>
                  <div className="exp-techs">
                    {e.techs.map((t, j) => (
                      <span key={j} className="tech-badge">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="skills-cta">
          <div className="cta-terminal">
            <div className="terminal-top">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <p className="terminal-text">{"{ BUILD. SCALE. DEPLOY. }"}</p>
            <p className="terminal-sub">
              Muhammadsher Inomov — Frontend mutaxassisi
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
