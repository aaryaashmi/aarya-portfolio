import React, { useState } from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import TimelineCard from "./components/TimelineCard";
import "./styles.css";

export default function AaryaAshmiPortfolio() {
  const [activePage, setActivePage] = useState("home");

  // ===== Data Sections =====
  const projects = [
    {
      title: "Snake Game - Eat, Grow & Score",
      tech: "HTML5, CSS3, JavaScript, React (Vite)",
      desc: "A classic Snake Game featuring smooth gameplay, score tracking, and collision detection.",
      img: "/images/snake_game.webp",
    },
    {
      title: "Simon Says - Color Memory Game",
      tech: "HTML5, CSS3, JavaScript",
      desc: "An interactive Simon Says Game that challenges memory and concentration through progressively complex color sequences.",
      github : "https://github.com/aaryaashmi/simon-game",
      img: "/images/simon_game.png",
    },
    {
      title: "Task Management System",
      tech: "React.js, MongoDB, Django, JWT",
      desc: "A task management system with secure user authentication, task organization, categories, deadlines, and CRUD functionality.",
      img: "/images/task_management.jpg",
    },
    {
      title: "URL Shortener",
      tech: "FastAPI, Python, MySQL",
      desc: "An URL shortener that converts long URLs into compact, shareable links with fast redirection.",
      img: "/images/url_shortener.jpg",
    },
  ];

  const education = [
    {
      school: "Baderia Global Institute of Engineering and Management, Jabalpur, M.P",
      degree: "B.Tech CSE",
      year: "2022 – 2026",
      score: "CGPA: 8.11",
      img: "/images/graduation.png",
    },
    {
      school: "Manas International Public School, Jehanabad, Bihar",
      degree: "Class 12th • PCM • CBSE Board",
      year: "2022",
      score: "Percentage: 80%",
      img: "/images/school1.png",
    },
    {
      school: "Kainat International School, Jehanabad, Bihar",
      degree: "Class 10th • CBSE Board",
      year: "2020",
      score: "Percentage: 87.2%",
      img: "/images/school2.jpeg",
    },
  ];

  const certificates = [
    { title: "Workshop on JavaScript & React JS", img: "/images/certificate1.jpeg" },
    { title: "Cybersecurity Essentials — Cisco", img: "/images/certificate2.png" },
    { title: "Participation in Smart India Hackathon", img: "/images/certificate3.jpeg" }
  ];

  // const awards = [
  //   { title: "1st Runner-Up — Smart India Hackathon", img: "/images/SIH.png" },
  //   { title: "Branch Topper — 2023, 2024, 2025", img: "/images/award1.jpg" },
  //   { title: "Best Girls Team Award — Hack SRIT 2025", img: "/images/award2.jpg" },
  //   { title: "1st Runner-Up — Ecopreneur Hackathon", img: "/images/award3.jpg" },
  //   { title: "3rd Position — Slide The Change at IEEE SHE ASPIRE 2.0", img: "/images/award4.jpg" },
  // ];

  const hackathons = [
    {
      title: "Global Entrepreneurship Summit 2025",
      desc: "IIT Kharagpur",
      img: "/images/hackathon.jpeg",
    },
    {
      title: "Smart India Hackathon 2023",
      desc: "Internal Hackathon",
      img: "/images/hackathon2.jpeg",
    }
  ];

  return (
    <div>
      {/* ===== Header ===== */}
      <header>
        <h1>Aarya Ashmi</h1>
        <nav>
          {["home", "about", "projects", "education", "hackathons", "certificates"].map((page) => (
            <button
              key={page}
              onClick={() => setActivePage(page)}
              className={activePage === page ? "active" : ""}
            >
              {page.charAt(0).toUpperCase() + page.slice(1)}
            </button>
          ))}
        </nav>
      </header>

      {/* ===== Home Section ===== */}
      {activePage === "home" && (
        <section className="hero">
          <div className="particle-bg">
            <span></span><span></span><span></span><span></span><span></span>
          </div>
          <div className="hero-text">
            <h2>
              Hi There, I'm <span className="highlight">Aarya Ashmi</span>
            </h2>
            <h3>
              I Am Into{" "}
              <span className="typing-container">
                <span className="typing">Web Development | Software Engineering</span>
              </span>
            </h3>
            <p>
              An adaptive and proactive learner with strong problem-solving
              and critical-thinking skills. Driven by continuous learning,
              effective collaboration, and delivering innovative software solutions.
              Committed to excellence through punctuality, time management, and a
              detail-oriented approach.
            </p>

            <div className="hero-buttons">
              <button className="cta" onClick={() => setActivePage("projects")}>View Projects</button>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=ashmiaarya21@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="cta"
              >
                Contact Me
              </a>
              <a
                href={process.env.PUBLIC_URL + "/images/Aarya_Ashmi_cv.pdf"}
                target="_blank"
                rel="noopener noreferrer"
                className="cta"
              >
                View Resume
              </a>
            </div>

            <div className="social-icons">
              <a href="https://linkedin.com/in/aarya-ashmi-647317258" target="_blank" rel="noreferrer"><Linkedin size={18} /></a>
              <a href="https://github.com/aaryaashmi" target="_blank" rel="noreferrer"><Github size={18} /></a>
              <a href="mailto:ashmiaarya21@gmail.com"><Mail size={18} /></a>
              {/* <a href="https://leetcode.com/u/riyaaa19/" target="_blank" rel="noreferrer">LC</a>
              <a href="https://www.hackerrank.com/profile/riyasaraf19" target="_blank" rel="noreferrer">HR</a> */}
            </div>
          </div>
          <div className="hero-img">
            <div className="avatar-circle">
              <img src="\images\aarya-photo.jpeg" alt="Aarya Ashmi" />
            </div>
          </div>
        </section>
      )}

      {/* ===== About Section ===== */}
      {activePage === "about" && (
        <section className="about">
          <h2>About Me</h2>
          <div className="about-container" style={{ display: "flex", flexWrap: "wrap", gap: "40px", alignItems: "flex-start" }}>
            
            {/* Left Side: About Text + Skills */}
            <div style={{ flex: 1 }}>
              <ul style={{ paddingLeft: "0", lineHeight: "1.8", listStyle: "none" }}>
                {[
                  "Strong academic record with consistent performance in Computer Science.",
                  "Proficient in C, C++, Python and React.js, with a strong foundation in software development.",
                  "Passionate about learning new technologies and contributing to impactful software development.",
                  "Known for being punctual, observant, and organized while managing responsibilities effectively.",
                  "A highly adaptive and observant individual with strong problem-solving and analytical skills.",
                  "Eager to contribute to innovative software solutions while thriving in collaborative environments."
                ].map((point, index) => (
                  <li key={index} style={{ position: "relative", paddingLeft: "25px", marginBottom: "12px", fontSize: "16px", color: "#333" }}>
                    <span style={{ position: "absolute", left: 0, color: "#ff4da6", fontWeight: "bold", fontSize: "20px", lineHeight: "1" }}>•</span>
                    {point}
                  </li>
                ))}
              </ul>

              {/* Skills Section */}
              <h3 className="skills-heading">Skills</h3>
              <div className="skills-section" style={{ display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "center" }}>
                {[
                  "C", "C++", "Python", "HTML", "CSS", "JavaScript",
                  "FastAPI", "Django", "React.js",
                  "Git", "GitHub", "VS Code", "MySQL"
                ].map((skill) => (
                  <span key={skill} className="skills-card" style={{
                    backgroundColor: "silver",
                    color: "purple",
                    padding: "6px 12px",
                    borderRadius: "20px",
                    fontSize: "14px",
                    fontWeight: "500"
                  }}>{skill}</span>
                ))}
              </div>
            </div>

            {/* Right Side: About Image */}
            <div className="about-img" >
              <div className="avatar-circle">
                <img
                  src="/images/about.jpeg"
                  alt="About Me"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ===== Projects Section ===== */}
      {activePage === "projects" && (
        <section>
          <h2>Projects</h2>
          <div className="grid">
            {projects.map((p, i) => (
              <TimelineCard
                key={i}
                title={p.title}
                subtitle={p.tech}
                img={p.img}
                score={<span style={{ color: "#555" }}>{p.desc}</span>}
                github={p.github}
                live={p.live}
                type="project"
              />
            ))}
          </div>
        </section>
      )}

      {/* ===== Education Section ===== */}
      {activePage === "education" && (
        <section>
          <h2>Education</h2>
          <div className="timeline">
            {education.map((e, i) => (
              <TimelineCard
                key={i}
                title={e.school}
                subtitle={e.degree}
                year={e.year}
                score={e.score}
                img={e.img}
                type="education"
              />
            ))}
          </div>
        </section>
      )}

      {/* ===== Certificates Section ===== */}
      {activePage === "certificates" && (
        <section>
          <h2>Certificates</h2>
          <div className="grid">
            {certificates.map((c, i) => (
              <TimelineCard key={i} title={c.title} img={c.img} type="certificate" />
            ))}
          </div>
        </section>
      )}

      {/* ===== Awards Section ===== */}
      {/* {activePage === "awards" && (
        <section>
          <h2>Awards</h2>
          <div className="grid">
            {awards.map((a, i) => (
              <TimelineCard key={i} title={a.title} img={a.img} type="award" />
            ))}
          </div>
        </section>
      )} */}

      {/* ===== Hackathons Section =====  */}
      {activePage === "hackathons" && (
        <section>
          <h2>Hackathons & Conferences</h2>
          <div className="grid">
            {hackathons.map((h, i) => (
              <TimelineCard key={i} title={h.title} subtitle={h.desc} img={h.img} type="certificate" />
            ))}
          </div>
        </section>
      )}

      {/* ===== Footer ===== */}
      <footer>© {new Date().getFullYear()} Aarya Ashmi — Built with ♡</footer>
    </div>
  );
}
