import "./css/MainPage.css";

function MainPage() {
  return (
    <div className="MainPage">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <span className="logo">jess.dev</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="home-section d-flex align-items-center">
      <video className="fullscreen-bg-video" autoPlay loop muted>
          <source src="src/components/pics/octagon_-_5192(Original).mp4" type="video/mp4" />
        </video>
        <div className="container home-container">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center justify-content-center">
              <div className="home-content">
                <h1 className="mb-3">Hi, I am Jessica 👋🏼</h1>
                <p>A Full Stack Developer based in Vienna, Austria 📍</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="home-image">
                <img className="pic" src="src/components/pics/IMG_0721-modified copy.png" alt="Profile" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="about-image">
                <img src="path/to/about-pic.jpg" alt="About" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="about-content">
                <h2>About Me</h2>
                <p>
                  Add your short description about yourself and the tech stacks you're using.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="container">
          <div className="row">
            {/* Project 1 */}
            <div className="col-md-6">
              <div className="project-item">
                <img src="path/to/project1-screenshot.jpg" alt="Project 1" />
                <p>Project 1 description</p>
              </div>
            </div>
            {/* Project 2 */}
            <div className="col-md-6">
              <div className="project-item reversed">
                <img src="path/to/project2-screenshot.jpg" alt="Project 2" />
                <p>Project 2 description</p>
              </div>
            </div>
            {/* Add more projects here */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        {/* Add your contact form or contact details here */}
      </section>
    </div>
  );
}

export default MainPage;

