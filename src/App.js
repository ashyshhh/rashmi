import React, { useEffect, useState, useRef } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";
import "./App.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const zoomIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const slideLeft = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

const slideRight = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const projects = [
  {
    img: "https://via.placeholder.com/300x200",
    title: "E-Commerce Website",
    desc: "Built an online store using HTML, CSS, and JavaScript with secure payment integration, reducing payment failures by 15% and improving order management by 20%.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    img: "https://via.placeholder.com/300x200",
    title: "Pizza Sales Analysis",
    desc: "Created an interactive Power BI dashboard with SQL-based insights for orders, revenue, and product trends, enabling real-time filtering and inventory decisions.",
    tech: ["SQL", "Power BI", "DAX"],
  },
  {
    img: "https://via.placeholder.com/300x200",
    title: "House Price Prediction",
    desc: "Developed regression models using Python and Scikit-learn to predict house prices, applying EDA, feature engineering, and hyperparameter tuning for optimal performance.",
    tech: ["Python", "Scikit-learn", "EDA", "Machine Learning"],
  },
];

const skills = {
  frontend: [
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Tailwind", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
    { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  ],
  backend: [
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  ],
  tools: [
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "Jupyter Notebook", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
    { name: "IntelliJ", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg" },
    { name: "Power BI", icon: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  ],
};

const education = [
  { school: "GD Goenka University, Gurugram", date: "July 2023 - May 2025", degree: "MCA, CGPA: 9" },
  { school: "Maulana Mazharul Haque Arabic & Persian University, Patna", date: "Apr 2019 - May 2022", degree: "BCA, 72.92%" },
  { school: "A.M.M College Bahera, Darbhanga", date: "May 2017 - May 2019", degree: "Intermediate, 69%" },
  { school: "Jayanand High School Bahera, Darbhanga", date: "Apr 2016 - May 2017", degree: "Matriculation, 63%" },
];

const work = [
  {
    title: "Trainee Software Engineer @ AfriKKom Global Pty Ltd (Remote / India)",
    date: "Jan 2025 – Present",
    details:
      "Assisting in developing and maintaining user interfaces using React.js for responsive web applications. Learning and applying best practices in frontend development under guidance from senior developers. Working on integrating simple API calls to fetch and display dynamic data. Gaining hands-on experience with version control systems like Git for collaborative development.",
  },
  {
    title: "Data Science Intern @ Celebal Technology (Remote)",
    date: "May 2024 – July 2024",
    details:
      "Analyzed and cleaned large datasets, built predictive models using Python, optimized SQL queries by 30%, and created dashboards to track KPIs and customer behavior trends.",
  },
];


function App() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isMobile, setIsMobile] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);
  const typedRef = useRef(null);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    setIsMobile(mq.matches);
    const handleResize = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", handleResize);
    return () => mq.removeEventListener("change", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setNavScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const text = `Hello, my name is ${name}%0AEmail: ${email}%0A${message}`;
    const phoneNumber = "919693796877";
    const url = `https://wa.me/${phoneNumber}?text=${text}`;
    window.open(url, "_blank");
  };

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: ["Hi, I'm Rashmi Kumari"],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
      });
      return () => typed.destroy();
    }
  }, []);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "work", label: "Work" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="main-container">
      {/* HEADER */}
      <motion.header className="hero-section" id="home" initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.6 }}>
        <nav className={`navbar ${navScrolled ? "scrolled" : ""}`}>
          <h1 className="logo">Rashmi</h1>
          <ul className="nav-links desktop">
            {sections.map((s) => (
              <li key={s.id} onClick={() => scrollTo(s.id)}>{s.label}</li>
            ))}
          </ul>
          <div className="hamburger" onClick={toggleMobileMenu}>☰</div>
          <div className={`mobile-drawer ${isMobileMenuOpen ? "open" : ""}`}>
            <span className="close-btn" onClick={toggleMobileMenu}>×</span>
            <ul>
              {sections.map((s) => (
                <li key={s.id} onClick={() => { scrollTo(s.id); closeMobileMenu(); }}>{s.label}</li>
              ))}
            </ul>
          </div>
        </nav>
        <div className="hero-content">
          <motion.h2 variants={fadeUp}><span ref={typedRef}></span></motion.h2>
          <motion.p variants={fadeUp}>Passionate about Data Science, Web Development & building impactful solutions.</motion.p>
          <motion.div className="hero-buttons" variants={fadeUp}>
            <button onClick={() => scrollTo("projects")} className="btn-outline">View Work</button>
            <button className="btn-filled">
              <a href="https://github.com/Rashmikumari12" target="_blank" rel="noopener noreferrer">Download Resume</a>
            </button>
          </motion.div>
        </div>
      </motion.header>

      {/* ABOUT */}
      <section className="about-section about-section-mob" id="about">
        <h2><span className="highlight">About</span> Me</h2>
        <div className="about-content">
          <motion.div className="about-text" variants={slideRight}>
            <h3>Hello, I’m <span className="highlight">Rashmi Kumari</span></h3>
            <p>
              I am currently pursuing MCA at GD Goenka University with a strong passion for Data Science and Full Stack Development.
              I have hands-on experience in Python, SQL, Power BI, and web technologies like HTML, CSS, Tailwind, and React.js.
            </p>
            <ul className="info-list">
              <li><strong>Location:</strong> Gurugram, India</li>
              <li><strong>Email:</strong> rashmishruti123@gmail.com</li>
              <li>
                <div className="social-icons">
                  <a href="https://www.linkedin.com/in/rashmi-kumari12" target="_blank" rel="noreferrer">
                    <img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" alt="LinkedIn" />
                  </a>
                  <a href="https://github.com/Rashmikumari12" target="_blank" rel="noreferrer">
                    <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt="GitHub" />
                  </a>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="service-section image-bg projects" id="projects">
        <h2><span>My</span> Projects</h2>
        {isMobile ? (
          <Swiper modules={[Navigation, Autoplay]} spaceBetween={20} slidesPerView={1} loop autoplay={{ delay: 3000 }}>
            {projects.map((p, i) => (
              <SwiperSlide key={i}>
                <div className="card project-card">
                  <img src={p.img} alt={p.title} />
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <p className="tech-list"><strong>Technologies:</strong> {p.tech.join(", ")}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="cards">
            {projects.map((p, i) => (
              <div key={i} className="card project-card">
                <img src={p.img} alt={p.title} />
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <p className="tech-list"><strong>Technologies:</strong> {p.tech.join(", ")}</p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* WORK EXPERIENCE */}
      <section className="service-section image-bg work" id="work">
        <h2><span>My</span> Work Experience</h2>
        {work.map((w, i) => (
          <div key={i} className="card wide prettier">
            <h3>{w.title}</h3>
            <p><strong>{w.date}</strong></p>
            <p>{w.details}</p>
          </div>
        ))}
      </section>

      {/* EDUCATION */}
      <section className="service-section image-bg education" id="education">
        <h2><span>My</span> Education</h2>
        {education.map((edu, i) => (
          <div key={i} className="card wide prettier">
            <h3>{edu.degree}</h3>
            <p><strong>{edu.school}</strong></p>
            <p>{edu.date}</p>
          </div>
        ))}
      </section>

      {/* SKILLS */}
      <section className="about-section service-section-mob" id="skills">
        <h2><span>Technical</span> Skills</h2>
        <div className="skills-category">
          {Object.entries(skills).map(([category, list]) => (
            <div className="skill-group" key={category}>
              <h4>{category.toUpperCase()}</h4>
              <div className="skills-grid">
                {list.map((skill) => (
                  <div className="skill-item" key={skill.name}>
                    <img src={skill.icon} alt={skill.name} style={{ width: "20px", marginRight: "8px" }} />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <motion.section className="service-section alt-bg" id="contact" initial="hidden" whileInView="visible" variants={fadeUp}>
        <h2><span>Get</span> In Touch</h2>
        <motion.form className="contact-form" onSubmit={handleSubmit} variants={fadeUp}>
          <motion.input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
          <motion.input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
          <motion.textarea rows="4" name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
          <motion.button type="submit">Send Message</motion.button>
        </motion.form>
      </motion.section>

      {/* FOOTER */}
      <motion.footer className="footer" initial="hidden" animate="visible" variants={fadeUp}>
        <p>© {new Date().getFullYear()} Rashmi Kumari</p>
        <div className="social-icons footer-icons">
          <a href="https://www.linkedin.com/in/rashmi-kumari12" target="_blank" rel="noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" alt="LinkedIn" />
          </a>
          <a href="https://github.com/Rashmikumari12" target="_blank" rel="noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt="GitHub" />
          </a>
        </div>
      </motion.footer>
    </div>
  );
}

export default App;
