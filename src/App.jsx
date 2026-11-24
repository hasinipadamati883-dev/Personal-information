
import React from "react";
import "./App.css";

function App() {
  const hobbies = ["Reading", "Music", "Drawing", "Learning"];

  const skills = [
    "HTML", "CSS", "JavaScript", "React",
    "Communication", "Teamwork"
  ];

  return (
    <div className="website">

      <nav className="navbar">
        <h2>My Portfolio</h2>
        <div>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero" id="home">
        <h1>Hello, I'm Hasini Padamati</h1>
        <h2>B.Tech Biotechnology Student</h2>
        <p>
          Welcome to my personal website.
          I am passionate about science,
          technology and continuous learning.
        </p>
        <a href="#about" className="btn">Explore More</a>
      </section>

      <section className="about" id="about">
        <h2>About Me</h2>
        <p>
          I am Hasini Padamati, a Biotechnology
          student at KL University. I am interested
          in biotechnology, computer science and
          exploring new technologies.
        </p>

        <div className="details">
          <p><b>Full Name:</b> Hasini Padamati</p>
          <p><b>Age:</b> 18</p>
          <p><b>Date of Birth:</b> DD/MM/YYYY</p>
          <p><b>Gender:</b> Female</p>
          <p><b>Nationality:</b> Indian</p>
          <p><b>Department:</b> Biotechnology</p>
          <p><b>College:</b> KL University</p>
          <p><b>Location:</b> Andhra Pradesh, India</p>
        </div>

        <h3>Career Objective</h3>
        <p>
          To develop my knowledge and skills in
          biotechnology and technology while
          contributing to innovative projects.
        </p>
      </section>

      <section className="education" id="education">
        <h2>Education</h2>
        <div className="education-card">
          <h3>B.Tech Biotechnology</h3>
          <p>KL University</p>
          <p>Currently Pursuing</p>
        </div>
      </section>

      <section className="skills" id="skills">
        <h2>My Skills</h2>
        <div className="skill-list">
          {skills.map((skill, index) => (
            <div key={index}>{skill}</div>
          ))}
        </div>

        <h2>My Hobbies</h2>
        <div className="skill-list">
          {hobbies.map((hobby, index) => (
            <div key={index}>{hobby}</div>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <h2>Contact Me</h2>

        <div className="details">
          <p><b>Email:</b> your-email@gmail.com</p>
          <p><b>Phone:</b> +91 XXXXXXXXXX</p>
          <p><b>Address:</b> Your full address</p>
        </div>

        <a
          href="mailto:your-email@gmail.com"
          className="btn contact-btn"
        >
          Send Email
        </a>
      </section>

      <footer>
        <p>© 2026 Hasini Padamati | All Rights Reserved</p>
      </footer>

    </div>
  );
}

export default App;
