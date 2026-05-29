import "./App.css";

const IconDumbbell = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 5v14M18 5v14M4 8h4M16 8h4M4 16h4M16 16h4"/>
  </svg>
);

const IconLock = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2"/>
    <path d="M7 11V7a5 5 0 0110 0v4"/>
  </svg>
);

const IconShield = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

const IconUsers = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
  </svg>
);

const IconApi = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 6h16M4 12h16M4 18h16M8 6v12"/>
  </svg>
);

const IconDatabase = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3"/>
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
  </svg>
);

const IconDocs = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
    <polyline points="10 9 9 9 8 9"/>
  </svg>
);

const IconCloud = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z"/>
  </svg>
);

const IconExternal = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

const IconGitHub = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const features = [
  { icon: <IconLock />, name: "JWT Authentication", desc: "Secure token-based auth with access & refresh tokens." },
  { icon: <IconShield />, name: "Spring Security", desc: "Full security filter chain with custom configurations." },
  { icon: <IconUsers />, name: "Role-Based Authorization", desc: "Granular access control for ADMIN and USER roles." },
  { icon: <IconApi />, name: "REST APIs", desc: "Clean, versioned endpoints following REST conventions." },
  { icon: <IconDatabase />, name: "PostgreSQL Database", desc: "Production-grade relational database with JPA/Hibernate." },
  { icon: <IconDocs />, name: "Swagger Docs", desc: "Interactive API documentation, auto-generated & live." },
  { icon: <IconCloud />, name: "Docker & Deployment", desc: "Containerized app deployed on Render cloud platform." },
  { icon: <IconDumbbell />, name: "Fitness Endpoints", desc: "CRUD for workouts, exercises, and user progress." },
];

const concepts = [
  "Authentication vs Authorization",
  "JWT Token Flow",
  "Spring Security Filter Chain",
  "UserDetailsService",
  "BCrypt Password Encoding",
  "Role-Based Access Control",
];

const techStack = [
  "Spring Boot", "Spring Security", "JWT", "PostgreSQL",
  "JPA / Hibernate", "Docker", "Swagger", "Render",
];

function App() {
  return (
    <>
      {/* ── Navbar ── */}
      <nav className="navbar">
        <div className="container nav-inner">
          <a href="/" className="nav-logo">
            <div className="nav-logo-icon">
              <IconDumbbell />
            </div>
            <span>FitTracker</span>
          </a>
          <div className="nav-links">
            <a
              href="https://fitness-track-backend-vcwk.onrender.com/swagger-ui/index.html"
              target="_blank"
              rel="noreferrer"
              className="nav-link"
            >
              Swagger
            </a>
            <a
              href="https://github.com/pragya638/fitness-tracker-backend"
              target="_blank"
              rel="noreferrer"
              className="nav-link cta"
            >
              GitHub
            </a>
          </div>
        </div>
      </nav>

      <div className="container">

        {/* ── Hero ── */}
        <section className="hero">
          <div className="hero-content">

            <div className="hero-badge">
              <span className="hero-badge-dot" />
              <span>Spring Boot · Backend API · Live on Render</span>
            </div>

            <h1 className="hero-title">
              Fitness Tracker<br />
              <span className="highlight">Backend API</span>
            </h1>

            <p className="hero-subtitle">
              Production-ready backend built with Spring Boot, Spring Security,
              JWT Authentication, PostgreSQL, Docker and Swagger — all live and
              documented.
            </p>

            <div className="hero-actions">
              <a
                href="https://fitness-track-backend-vcwk.onrender.com/swagger-ui/index.html"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                <IconDocs /> Swagger Docs
              </a>
              <a
                href="https://github.com/pragya638/fitness-tracker-backend"
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
              >
                <IconGitHub /> GitHub Repo
              </a>
            </div>

            <div className="tech-pills">
              {techStack.map((t) => (
                <span className="pill" key={t}>{t}</span>
              ))}
            </div>

          </div>
        </section>

        <div className="divider" />

        {/* ── Core Features ── */}
        <section className="section">
          <div className="section-header">
            <p className="section-label">What's inside</p>
            <h2 className="section-title">Core Features</h2>
          </div>

          <div className="features-grid">
            {features.map((f) => (
              <div className="feature-card" key={f.name}>
                <div className="feature-icon">{f.icon}</div>
                <p className="feature-name">{f.name}</p>
                <p className="feature-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="divider" />

        {/* ── Concepts ── */}
        <section className="section">
          <div className="section-header">
            <p className="section-label">Learning outcomes</p>
            <h2 className="section-title">Concepts Implemented</h2>
          </div>

          <div className="concepts-grid">
            {concepts.map((c, i) => (
              <div className="concept-card" key={c}>
                <div className="concept-num">{String(i + 1).padStart(2, "0")}</div>
                <p className="concept-text">{c}</p>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* ── Footer ── */}
      <footer className="footer">
        <div className="container">
          <p className="footer-name">Pragya Dwivedi</p>
          <p className="footer-copy">Fitness Tracker Backend API · Spring Boot Project</p>
          <div className="footer-links">
            <a
              href="https://fitness-track-backend-vcwk.onrender.com/swagger-ui/index.html"
              target="_blank"
              rel="noreferrer"
              className="footer-link"
            >
              Swagger Docs ↗
            </a>
            <a
              href="https://github.com/pragya638/fitness-tracker-backend"
              target="_blank"
              rel="noreferrer"
              className="footer-link"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
