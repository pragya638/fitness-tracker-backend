function App() {
  return (
    <div
      style={{
        fontFamily: "Arial",
        background: "#0f172a",
        color: "white",
        minHeight: "100vh",
        padding: "60px",
      }}
    >
      <h1
        style={{
          fontSize: "60px",
          marginBottom: "20px",
        }}
      >
        Fitness Tracker Backend API
      </h1>

      <p
        style={{
          fontSize: "22px",
          color: "#cbd5e1",
          maxWidth: "900px",
          lineHeight: "1.6",
        }}
      >
        Production-ready Spring Boot Backend built using JWT Authentication,
        Spring Security, PostgreSQL, Swagger, Docker and Render Deployment.
      </p>

      <hr style={{ margin: "40px 0" }} />

      <h2>Core Features</h2>

      <ul
        style={{
          lineHeight: "2.2",
          fontSize: "20px",
        }}
      >
        <li>JWT Authentication & Authorization</li>
        <li>Spring Security Integration</li>
        <li>REST API Architecture</li>
        <li>PostgreSQL Database</li>
        <li>Swagger API Documentation</li>
        <li>Docker Deployment</li>
        <li>Cloud Deployment on Render</li>
      </ul>

      <hr style={{ margin: "40px 0" }} />

      <h2>Live Project Links</h2>

      <div style={{ marginTop: "25px" }}>

        <a
          href="https://fitness-track-backend-vcwk.onrender.com/swagger-ui/index.html"
          target="_blank"
          style={{
            display: "inline-block",
            padding: "14px 24px",
            background: "#2563eb",
            color: "white",
            textDecoration: "none",
            borderRadius: "10px",
            marginRight: "20px",
            fontSize: "18px",
          }}
        >
          Open Swagger Docs
        </a>

        <a
          href="https://github.com/pragya638/fitness-tracker-backend"
          target="_blank"
          style={{
            display: "inline-block",
            padding: "14px 24px",
            background: "#16a34a",
            color: "white",
            textDecoration: "none",
            borderRadius: "10px",
            fontSize: "18px",
          }}
        >
          GitHub Repository
        </a>

      </div>

      <hr style={{ margin: "50px 0" }} />

      <p style={{ color: "#94a3b8", fontSize: "18px" }}>
        Developed by Pragya Dwivedi
      </p>
    </div>
  );
}

export default App;