import "./App.css";

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <h2>Ashwini</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Home */}
      <section id="home" className="hero">
        <h1> This is Ashwini 👋</h1>

        <h2>Computer Science Student</h2>

        <p>
          Passionate about Frontend Development,
          React and creating beautiful user interfaces.
        </p>
      </section>

      {/* About */}
      <section id="about" className="section">
        <h2>About Me</h2>

        <div className="card">
          <p>
            I am Ashwini, a Computer Science student
            pursuing my degree from 2025–2029.
          </p>

          <p>
            I enjoy building responsive websites,
            React applications and modern user
            interfaces.
          </p>

          <p>
            My interests include Frontend Development,
            UI Design and Problem Solving.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <h2>Projects</h2>

        <div className="projects-grid">
          <div className="project-card">
            <h3>Todo List App</h3>
            <p>
              Task management application built using
              React and CSS.
            </p>
          </div>

          <div className="project-card">
            <h3>Student Management App</h3>
            <p>
              Student dashboard for managing tasks,
              assignments and profiles.
            </p>
          </div>

          <div className="project-card">
            <h3>Restaurant Website</h3>
            <p>
              Responsive restaurant website with
              attractive UI and menu section.
            </p>
          </div>

          <div className="project-card">
            <h3>Travel & Tourism Website</h3>
            <p>
              Tourism platform showcasing destinations
              and travel packages.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <h2>Contact Me</h2>

        <form className="contact-form">
          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <textarea
            placeholder="Your Message"
            rows="5"
          ></textarea>

          <button type="submit">
            Send Message
          </button>
        </form>
      </section>

      <footer>
        © 2025 Ashwini | Portfolio
      </footer>
    </div>
  );
}

export default App;