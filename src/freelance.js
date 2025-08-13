import React, { useEffect,useState, useRef } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";
import "./App.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



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
  img: "https://github.com/ashyshhh/Trackify/blob/main/Screenshot%202025-07-25%20140312.png?raw=true",
  title: "Toyota (IBM Client)",
desc: "Built frontend modules and integrated APIs for Toyota’s manufacturing dashboards, improving production tracking and analytics.",
  tech: ["React.js", "Node.js", "Express.js", "MongoDB", "GraphQL", "Docker"],
  },
    {
    img: "https://github.com/ashyshhh/myPortfolio/blob/master/Screenshot%202024-05-05%20155111.png?raw=true",
    title: "Snapdeal",
    desc: "Worked on Snapdeal's e-commerce frontend to improve UX and performance. Implemented new features and resolved issues for seamless user shopping experience.",
    tech: [
      "React.js",
      "JavaScript",
      "CSS",
      "HTML",
      "RESTful APIs",
    ],
  },
    {
    img: "https://github.com/ashyshhh/Trackify/blob/main/Screenshot%202025-07-25%20140729.png?raw=true",
    title: "IBM Enterprise Analytics Dashboard",
    desc: "Internal analytics tool for IBM to track KPIs across global teams with real-time data visualization and reporting.",
    tech: ["React.js", "GraphQL", "Node.js", "Recharts", "IBM Cloud"],
  },
  {
    img: "https://github.com/ashyshhh/myPortfolio/blob/master/Screenshot%202024-04-03%20000324.png?raw=true",
    title: "Afrikkom Global",
    desc: "Company website developed in Next.js to showcase services, team, and portfolio with elegant design of the website.",
    tech: [
      "Next.js",
      "React.js",
      "JavaScript",
      "CSS",
      "HTML",
      "Bootstrap",
    ],
  },
    {
    img: "https://github.com/ashyshhh/myPortfolio/blob/master/Screenshot%202024-03-11%20144144.png?raw=true",
    title: "AM CHAT AI",
    desc: "Smart chat app with document upload and reading. Built using React.js, TypeScript, REST APIs, and Node.js for intelligent real-time communication.",
    tech: [
      "React Js",
      "TypeScript",
      "CSS",
      "HTML",
      "Redux",
      "JavaScript",
      "RESTful APIs",
      "NodeJs",
      "ExpressJS",
      "MongoDB",
    ],
  },

  {
  img: "https://github.com/ashyshhh/Trackify/blob/main/Screenshot%202025-07-25%20141014.png?raw=true",
  title: "TravelEase Tours Website",
  desc: "Created a travel booking website with WordPress and custom PHP APIs for real-time package availability and booking management. Integrated Stripe for payments and dynamic package filters.",
  tech: ["WordPress", "PHP", "WooCommerce", "Stripe API", "MySQL"],
},
  {
    img: "https://ashyshhfileupload.s3.eu-north-1.amazonaws.com/new/Screenshot+2025-06-17+195729.png",
    title: "LONGENY",
    desc: "Multifunctional full-stack platform combining e-commerce, CMS, & analytics. Built with React.js & Node.js, integrated WooCommerce and WordPress, CRM and optimized SEO.",
    tech: [
      "React Js",
      "Node JS",
      "PHP",
      "WordPress",
      "WooCommerce",
      "Brevo",
      "Gallabox",
      "RESTful APIs",
      "JavaScript",
      "CI/CD",
      "SEO",
    ],
  },

  {
    img: "https://github.com/ashyshhh/myPortfolio/blob/master/Screenshot%202024-03-11%20143922.png?raw=true",
    title: "LMS",
    desc: "Educational platform supporting Google & JWT Auth. Built for managing and delivering training content with a responsive UI.",
    tech: [
      "React Js",
      "Next.js",
      "Javascript",
      "Bootstrap",
      "Redux",
      "RESTful APIs",
      "HTML5",
      "CSS3",
    ],
  },
  {
    img: "https://github.com/ashyshhh/myPortfolio/blob/master/Screenshot%202024-04-08%20230836.png?raw=true",
    title: "Physician App",
    desc: "Healthcare management system with secure role-based access and encrypted records. Built with React.js and Node.js.",
    tech: [
      "React.js",
      "JavaScript",
      "CSS",
      "HTML",
      "Bootstap",
      "Redux",
      "RESTful APIs",
      "NodeJs",
      "ExpressJS",
      "MySql",
    ],
  },
    {
    img: "https://github.com/ashyshhh/Trackify/blob/main/Screenshot%202025-07-25%20141355.png?raw=true",
    title: "TaskMaster Pro",
    desc: "A productivity mobile app to manage tasks, reminders, and deadlines with offline sync & notifications.",
    tech: ["React Native", "Firebase", "Redux", "Push Notifications"],
  },
  {
    img: "https://github.com/ashyshhh/Trackify/blob/main/Screenshot%202025-07-25%20142222.png?raw=true",
    title: " NextGen Store",
    desc: "Cross-platform e-commerce app with real-time inventory, cart, checkout, and payment integration.",
    tech: ["React.js", "Next.js", "MongoDB", "Stripe API", "Node.js"],
  },




  {
    img: "https://github.com/ashyshhh/Trackify/blob/main/Screenshot%202025-07-25%20140807.png?raw=true",
    title: "HealthMate Tracker",
    desc: "Health monitoring app to track vitals, appointments, diet, and daily exercise logs.",
    tech: ["React Native", "Node.js", "JWT Auth", "MongoDB"],
  },
  {
    img: "https://github.com/ashyshhh/Trackify/blob/main/Screenshot%202025-07-25%20140843.png?raw=true",
    title: "EduZone LMS",
    desc: "Learning Management System supporting quizzes, assignments, progress tracking & video content.",
    tech: ["Next.js", "Tailwind CSS", "Strapi CMS", "PostgreSQL"],
  },



  {
    img: "https://github.com/ashyshhh/Trackify/blob/main/Screenshot%202025-07-25%20141000.png?raw=true",
    title: "Travelopia",
    desc: "Travel booking platform with advanced filtering, custom itinerary builder and CMS.",
    tech: ["WordPress", "Elementor", "PHP APIs", "MySQL"],
  },


  {
    img: "https://images.unsplash.com/photo-1556155092-8707de31f9c4?w=800",
    title: "Resume Builder Web App",
    desc: "Responsive resume builder with downloadable PDF support and pre-designed templates.",
    tech: ["React.js", "html2pdf", "Firebase Auth", "Styled Components"],
  },
  {
    img: "https://github.com/ashyshhh/Trackify/blob/main/Screenshot%202025-07-25%20141115.png?raw=true",
    title: "EQ Crypto Dashboard",
    desc: "Real-time crypto tracking dashboard with dynamic charts and token info.",
    tech: ["React.js", "Coingecko API", "Chart.js", "Tailwind CSS"],
  },
  {
    img: "https://user-images.githubusercontent.com/64485885/234602896-a1bd8bcc-b72b-4821-83d6-8ad885bf435e.png",
    title: "Podstream",
    desc: "Full-stack podcast platform with search, playback, and user authentication using Google Auth and JWT.",
    tech: ["React Js", "MongoDb", "Node Js", "Express Js", "Redux"],
  },
  
];


const skills = {
  frontend: [
    { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "Material UI", icon: "https://mui.com/static/logo.png" },
  ],
  backend: [
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "WooCommerce", icon: "https://cmscritic.com/ms-content/uploads/2023/08/woocommerce-product-logo.png" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    
  ],
  tools: [
    { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
    { name: "WordPress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },

    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "Postman", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  ],
};

const education = [
  { school: "Technocrat Institute Of Technology, Bhopal", date: "Aug 2018 - July 2022", degree: "B.Tech, ECE" },
  { school: "Singhia College", date: "May 2016 - Apr 2018", degree: "ISC (XII), Science" },
  { school: "BNB High School", date: "May 2014 - Apr 2016", degree: "ICSC (X)" },
];

const work = [
  {
    title: "Associate Fullstack Developer @ IBM",
    date: "May 2024 – Present",
    details:
      "Contributed to enterprise-level web applications using React.js, Node.js, and Express.js. Designed scalable MySQL databases and implemented RESTful APIs for internal tools and client-facing platforms. Integrated cloud-based services and optimized application performance, reducing load times by 30%. Collaborated with cross-functional teams following Agile methodologies to deliver secure and high-quality solutions.",
  },
  {
    title: "Software Engineer @ Areteminds",
    date: "Feb 2023 – May 2024",
    details:
      "Developed responsive UI components using React.js, HTML, and CSS. Built and tested RESTful APIs with Node.js and Express.js, integrating MySQL databases for dynamic content. Assisted in migrating legacy systems to modern tech stacks and participated in Agile sprints to ensure timely feature delivery.",
  },
  {
    title: "Associate Software Engineer @ Linkquest Telecom",
    date: "Dec 2021 – Jan 2023",
    details:
      "Developed mobile-first web applications and optimized front-end performance with React.js and JavaScript. Created reusable components and integrated APIs with MySQL backends. Collaborated with telecom teams to build dashboards and analytics tools, ensuring seamless user experiences across devices.",
  },
];

const services = [
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/841/841364.png',
    title: 'Website Development',
    description:
      'Responsive and high-performance websites built using modern technologies like React, Node.js, and WordPress.',
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/6062/6062646.png',
    title: 'Mobile App Development',
    description:
      'Cross-platform Android and iOS apps using React Native or Flutter, optimized for performance and user experience.',
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/1055/1055687.png',
    title: 'UI/UX Design',
    description:
      'Clean and user-centric interfaces that enhance usability and increase engagement across all devices.',
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/1822/1822899.png',
    title: 'API Development & Integration',
    description:
      'Secure and scalable RESTful or GraphQL APIs, with seamless third-party service integrations.',
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/174/174881.png',
    title: 'CMS & Content Solutions',
    description:
      'Flexible CMS solutions using WordPress or custom builds, allowing easy content management and scalability.',
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/1170/1170576.png',
    title: 'E-commerce Solutions',
    description:
      'End-to-end online store development with product management, payment gateways, and secure checkout systems.',
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/122/122932.png',
    title: 'SEO & Performance Optimization',
    description:
      'Improve search rankings, website speed, and overall performance using modern SEO strategies.',
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/1006/1006557.png',
    title: 'Maintenance & Support',
    description:
      'Continuous monitoring, updates, and support to ensure your website or app runs smoothly at all times.',
  },
];



function App() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
  name: "",
  email: "",
  message: ""
});
const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  const mq = window.matchMedia("(max-width: 768px)");
  setIsMobile(mq.matches);
  const handleResize = (e) => setIsMobile(e.matches);
  mq.addEventListener("change", handleResize);
  return () => mq.removeEventListener("change", handleResize);
}, []);
const [navScrolled, setNavScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setNavScrolled(scrollTop > 50); // Add background after 50px scroll
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);
const closeMobileMenu = () => setMobileMenuOpen(false);

  const typedRef = useRef(null);
const handleSubmit = (e) => {
  e.preventDefault();

  const { name, email, message } = formData;

  const text = `Hello, my name is ${name}%0AEmail: ${email}%0A${message}`;
  const phoneNumber = "917070919112"; 

  const url = `https://wa.me/${phoneNumber}?text=${text}`;

  window.open(url, "_blank");
};

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
strings: [
  "Hi, I'm Ashish Jha",
  "I'm a Full Stack Developer",
],

        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
      });

      return () => {
        typed.destroy(); // Clean up on unmount
      };
    }
  }, []);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
        { id: "services", label: "Services" },
    { id: "projects", label: "Projects" },
    { id: "work", label: "Work" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="main-container">
      <div className="animation-bg home-animation"></div>


      <motion.header className="hero-section" id="home" initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.6 }}>
<nav className={`navbar ${navScrolled ? "scrolled" : ""}`}>

<h1 className="logo">
  {/* <img
    src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
    alt="Portfolio Icon"
    style={{ width: "24px", marginRight: "8px", verticalAlign: "middle" }}
  /> */}
  Ashish
</h1>

  <ul className="nav-links desktop">
    {sections.map((s) => (
      <li key={s.id} onClick={() => scrollTo(s.id)}>{s.label}</li>
    ))}
  </ul>

  <div className="hamburger" onClick={toggleMobileMenu}>
    ☰
  </div>

  <div className={`mobile-drawer ${isMobileMenuOpen ? "open" : ""}`}>
    <span className="close-btn" onClick={toggleMobileMenu}>×</span>
    <ul>
      {sections.map((s) => (
        <li key={s.id} onClick={() => { scrollTo(s.id); closeMobileMenu(); }}>
          {s.label}
        </li>
      ))}
    </ul>
  </div>
</nav>
  <div className="animation-bg section-home mob-hide">
    {[...Array(10)].map((_, i) => (
      <div className="animated-shape" style={{ left: `${10 * i}%`, animationDelay: `${i * 2}s` }} key={i} />
    ))}
  </div>
    <div className="hero-content">
<motion.h2 variants={fadeUp}>
  <span ref={typedRef}></span>
</motion.h2>

      <motion.p variants={fadeUp}>
       Building modern web apps with React.js & Node.js


      </motion.p>
      <motion.div className="hero-buttons" variants={fadeUp}>
        <button onClick={() => scrollTo("projects")} className="btn-outline">
          View Work
        </button>
        <button className="btn-filled" onClick={() => scrollTo("contact")}>
          {/* <a
            href="https://ashyshhfileupload.s3.eu-north-1.amazonaws.com/new/Ashish_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a> */}
          Contact Me
        </button>
      </motion.div>
    </div>
      </motion.header>

<section className="about-section about-section-mob " id="about">
  <h2><span className="highlight">About</span> Me</h2>
  <p className="section-subtext mob-hide">
     Full Stack Developer with 4+ years experience building scalable and maintainable applications.
  </p>
  <div className="about-content">
    <img
      src="https://github.com/ashyshhh/myPortfolio/blob/master/ashishimg.jpg?raw=true"
      alt="Ashish Jha"
      className="about-image mob-hide"
    />
    <motion.div className="about-text" variants={slideRight}>
      <h3>Hello, I’m <span className="highlight">Ashish Jha</span></h3>
      <p>
        I'm a passionate freelance Full Stack Developer with 4+ years of experience helping clients turn ideas into high-performing digital products. Whether you're launching a new app, scaling your business website, or integrating complex APIs, I bring a hands-on approach with clean, maintainable code and end-to-end ownership. I work with technologies like React.js, Node.js, Express, MongoDB, and WordPress to deliver pixel-perfect UIs, fast backends, and seamless user experiences. Let’s build something great together.
      </p>
      <ul className="info-list">
        <li><strong>Location:</strong> Bengaluru, India</li>
        <li><strong>Email:</strong> ashyshhh@gmail.com</li>
        <li>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/ashyshhh" target="_blank" rel="noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" alt="LinkedIn" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/145/145812.png" alt="Twitter" />
            </a>
            <a href="https://facebook.com/" target="_blank" rel="noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/145/145802.png" alt="Facebook" />
            </a>
            <a href="https://github.com/ashyshhh" target="_blank" rel="noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt="GitHub" />
            </a>
          </div>
        </li>
      </ul>
    </motion.div>
  </div>
</section>

 <section className="ido-section service-section  " id="services">
      <h2><span>What</span> I Do</h2>
      <div className="ido-container">
        {services.map((service, index) => (
          <div className="ido-card" style={{ '--i': index + 1 }} key={index}>
            <img src={service.icon} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
      <section className="service-section image-bg projects" id="projects">
<div className="animation-bg section-projects">
  {[...Array(12)].map((_, i) => (
    <div className="animated-shape" style={{ left: `${i * 10}%`, top: `${i * 5}%`, animationDelay: `${i * 1.5}s` }} key={i} />
  ))}
</div>
<div className="animation-bg projects-animation"></div>

        <h2><span>My</span> Projects</h2>
{isMobile ? (
  <div className="mobile-swiper-wrapper">
<Swiper
  modules={[Navigation, Autoplay]}
  spaceBetween={20}
  slidesPerView={1}
  loop={true}
  autoplay={{
    delay: 3000,
    disableOnInteraction: false,
  }}
  navigation={{
    nextEl: ".custom-next",
    prevEl: ".custom-prev",
  }}
>

      {projects.map((p, i) => (
        <SwiperSlide key={i}>
          <div className="card project-card">
            <img src={p.img} alt={p.title} />
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <p className="tech-list">
              <strong>Technologies:</strong> {p.tech.join(", ")}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>

    {/* Custom Arrows */}
    <div className="custom-swiper-arrows">
      <div className="custom-prev">←</div>
      <div className="custom-next">→</div>
    </div>
  </div>
) : (
  <div className="cards">
    {projects.map((p, i) => (
      <div key={i} className="card project-card">
        <img src={p.img} alt={p.title} />
        <h3>{p.title}</h3>
        <p>{p.desc}</p>
        <p className="tech-list">
          <strong>Technologies:</strong> {p.tech.join(", ")}
        </p>
      </div>
    ))}
  </div>
)}

      </section>

      <section className="service-section service-section-mob image-bg work" id="work">
        <div className="bubble-container work-bubbles">
  {[...Array(10)].map((_, i) => (
    <div className={`bubble bubble-${(i % 5) + 1}`} key={i}></div>
  ))}
</div>

        <h2><span>My</span> Work Experience</h2>
        {work.map((w,i) => (
          <div key={i} className="card wide prettier">
            <h3>{w.title}</h3>
            <p><strong>{w.date}</strong></p>
            <p>{w.details}</p>
          </div>
        ))}
      </section>

      <section className="service-section service-section-mob image-bg education" id="education">
<div className="animation-bg work-animation"></div>

        <h2><span>My</span> Education</h2>
        {education.map((edu,i) => (
          <div key={i} className="card wide prettier">
            <h3>{edu.degree}</h3>
            <p><strong>{edu.school}</strong></p>
            <p>{edu.date}</p>
          </div>
        ))}
      </section>

<section className="about-section service-section-mob" id="skills">

<div className="animation-bg section-skills">
  {[...Array(15)].map((_, i) => (
    <div className="animated-shape" style={{ left: `${Math.random() * 100}%`, animationDelay: `${i * 1.2}s` }} key={i} />
  ))}
</div>
<div className="animation-bg home-animation"></div>

  <h2><span>Technical</span> Skills</h2>
  <div className="skills-category">
    {Object.entries(skills).map(([category, list]) => (
      <div className="skill-group" key={category}>
        <h4>{category.toUpperCase()}</h4>
        <div className="skills-grid">
          {list.map((skill) => (
            <div className="skill-item" key={skill.name}>
              <img
                src={skill.icon}
                alt={skill.name}
                style={{
                  width: "20px",
                  height: "20px",
                  marginRight: "8px",
                  verticalAlign: "middle",
                }}
              />
              <span style={{ verticalAlign: "middle" }}>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
</section>


      <motion.section className="service-section alt-bg" id="contact" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        <h2><span>Get</span> In Touch</h2>
<motion.form className="contact-form" onSubmit={handleSubmit} variants={fadeUp}>
  <motion.input
    type="text"
    name="name"
    placeholder="Your Name"
    value={formData.name}
    onChange={handleChange}
    required
  />
  <motion.input
    type="email"
    name="email"
    placeholder="Your Email"
    value={formData.email}
    onChange={handleChange}
    required
  />
  <motion.textarea
    rows="4"
    name="message"
    placeholder="Your Message"
    value={formData.message}
    onChange={handleChange}
    required
  />
  <motion.button type="submit">Send Message</motion.button>
</motion.form>

      </motion.section>

      <motion.footer className="footer" initial="hidden" animate="visible" variants={fadeUp}>
        
        <p>© {new Date().getFullYear()} Ashish Jha </p>
         <ul className="info-list">

<li>
  <div className="social-icons footer-icons">
    <a href="https://www.linkedin.com/in/ashyshhh" target="_blank" rel="noreferrer">
      <img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" alt="LinkedIn" />
    </a>
    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
      <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" />
    </a>
    <a href="https://twitter.com/" target="_blank" rel="noreferrer">
      <img src="https://cdn-icons-png.flaticon.com/512/145/145812.png" alt="Twitter" />
    </a>
    <a href="https://facebook.com/" target="_blank" rel="noreferrer">
      <img src="https://cdn-icons-png.flaticon.com/512/145/145802.png" alt="Facebook" />
    </a>
    <a href="https://github.com/ashyshhh" target="_blank" rel="noreferrer">
      <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt="GitHub" />
    </a>
  </div>
</li>
            </ul>
      </motion.footer>
    </div>
  );
}

export default App;
