"use client";

import { FormEvent, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Bot,
  BrainCircuit,
  Check,
  ChevronDown,
  CircleDot,
  Code2,
  Database,
  Github,
  GitBranch,
  Globe2,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  MoveUpRight,
  Network,
  Server,
  Sparkles,
  Terminal,
  X,
} from "lucide-react";

type ProjectCategory = "All" | "AI/LLM" | "Machine Learning" | "Backend" | "Data";

const projects = [
  {
    number: "01",
    name: "AI DevOps Agent",
    category: "AI/LLM" as ProjectCategory,
    description:
      "An AI pipeline that analyzes GitHub Actions CI/CD failures, identifies root causes, and generates automated patch pull requests.",
    details: ["Multi-LLM cascading", "FAISS-based code retrieval", "AST validation + sandbox checks", "Streamlit monitoring dashboard"],
    tech: ["Python", "LLMs", "RAG", "FAISS", "GitHub Actions", "Docker"],
    href: "https://github.com/Shubhamjkd01/AI_DevOps_X",
    featured: true,
  },
  {
    number: "02",
    name: "Olympic Medal Prediction",
    category: "Machine Learning" as ProjectCategory,
    description: "A machine learning system for predicting Olympic medal counts from historical performance data.",
    details: ["Historical performance data", "Python data preprocessing", "Predictive ML workflow"],
    tech: ["Python", "Machine Learning", "Data Analysis"],
    href: "https://github.com/Shubhamjkd01/Olympic-Medal-Prediction",
    featured: false,
  },
  {
    number: "03",
    name: "GDP Data Extraction",
    category: "Data" as ProjectCategory,
    description: "A Python workflow for extracting, cleaning, transforming, and exploring GDP datasets.",
    details: ["Dataset extraction", "Data cleaning + transformation", "Exploratory analysis"],
    tech: ["Python", "Data Analysis", "EDA"],
    href: "https://github.com/Shubhamjkd01/GDP-Data-extraction",
    featured: false,
  },
];

const serviceItems = [
  { icon: Bot, title: "AI Agents", text: "Task-oriented agents with tools, workflows and decision logic." },
  { icon: Network, title: "RAG Applications", text: "Document Q&A and knowledge systems with retrieval and vector search." },
  { icon: Server, title: "Python & Backend", text: "APIs, automation tools and backend services with Python, FastAPI or Django." },
  { icon: BrainCircuit, title: "Machine Learning", text: "Prediction, classification and data-driven ML solutions." },
  { icon: GitBranch, title: "AI Automation", text: "Repetitive workflows automated with APIs, LLMs and Python." },
  { icon: Globe2, title: "Web Development", text: "Responsive, modern websites and web interfaces that feel effortless to use." },
];

const skillGroups = [
  { label: "Programming", skills: ["Python", "C++", "SQL"] },
  { label: "AI / ML", skills: ["Machine Learning", "Neural Networks", "Recommender Systems", "Reinforcement Learning", "Genetic Algorithms"] },
  { label: "Generative AI", skills: ["LLMs", "RAG", "AI Agents", "Prompt Engineering", "Vector Search"] },
  { label: "Backend", skills: ["FastAPI", "Django", "REST APIs"] },
  { label: "Infrastructure", skills: ["Docker", "GitHub Actions", "CI/CD"] },
  { label: "Tools", skills: ["Git", "GitHub", "FAISS", "Streamlit"] },
];

const techStrip = ["Python", "Machine Learning", "LLMs", "RAG", "AI Agents", "FastAPI", "Django", "Docker", "GitHub Actions", "FAISS"];
const categories: ProjectCategory[] = ["All", "AI/LLM", "Machine Learning", "Backend", "Data"];

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? undefined : { opacity: 0, y: 22 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return <p className="section-label"><span>{number}</span>{children}</p>;
}

function SocialLinks() {
  return (
    <div className="social-links" aria-label="Social links">
      <a href="https://github.com/Shubhamjkd01" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a>
      <a href="https://www.linkedin.com/in/shubhamraj-654437383" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a>
      <a href="mailto:rrshubham099@gmail.com" aria-label="Email Shubham"><Mail size={17} /></a>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("All");
  const [formStatus, setFormStatus] = useState("");
  const visibleProjects = useMemo(
    () => selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory),
    [selectedCategory],
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const data = new FormData(form);
    const subject = encodeURIComponent(`Project enquiry from ${data.get("name")}`);
    const body = encodeURIComponent(`Name: ${data.get("name")}\nEmail: ${data.get("email")}\nProject type: ${data.get("type")}\n\n${data.get("message")}`);
    setFormStatus("Opening your email client…");
    window.location.href = `mailto:rrshubham099@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <main>
      <header className="site-header">
        <div className="container nav-wrap">
          <a href="#home" className="wordmark" onClick={() => setMenuOpen(false)}><span>SR</span> SHUBHAM RAJ</a>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <nav className={menuOpen ? "main-nav open" : "main-nav"} aria-label="Main navigation">
            {["Home", "Projects", "Skills", "Experience", "About", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>
            ))}
            <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Hire Me <ArrowUpRight size={15} /></a>
          </nav>
        </div>
      </header>

      <section id="home" className="hero container">
        <div className="hero-copy">
          <Reveal><div className="eyebrow"><span className="status-dot" /> AVAILABLE FOR FREELANCE PROJECTS</div></Reveal>
          <Reveal delay={0.08}><h1>Building practical <em>AI systems</em> that solve real problems.</h1></Reveal>
          <Reveal delay={0.16}><p className="hero-text">I build AI agents, RAG systems, machine learning applications, automation workflows, APIs, and backend systems using Python and modern AI technologies.</p></Reveal>
          <Reveal delay={0.24}><div className="hero-actions"><a className="button button-primary" href="#projects">View projects <ArrowDownRight size={17} /></a><a className="button button-ghost" href="#contact">Hire me <ArrowUpRight size={17} /></a></div></Reveal>
          <Reveal delay={0.32}><div className="hero-bottom"><SocialLinks /><span className="hero-email">rrshubham099@gmail.com</span></div></Reveal>
        </div>
        <Reveal delay={0.18} className="hero-visual-wrap">
          <div className="hero-visual" aria-label="Abstract AI system diagram">
            <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" />
            <div className="visual-core"><Sparkles size={22} /><span>AI<br /><b>CORE</b></span></div>
            <span className="node node-a">Python</span><span className="node node-b">RAG</span><span className="node node-c">LLM</span><span className="node node-d">API</span>
            <span className="pulse pulse-a" /><span className="pulse pulse-b" /><span className="pulse pulse-c" />
          </div>
        </Reveal>
      </section>

      <div className="tech-marquee" aria-label="Technologies">
        <div className="container tech-list">{techStrip.map((tech) => <span key={tech}><CircleDot size={10} />{tech}</span>)}</div>
      </div>

      <section id="projects" className="section container projects-section">
        <Reveal><div className="section-heading-row"><div><SectionLabel number="01">SELECTED WORK</SectionLabel><h2>Built to be useful.<br /><span>Designed to deliver.</span></h2></div><p className="heading-note">A few systems and data products I’ve built with a focus on practical outcomes, reliability, and clean engineering.</p></div></Reveal>
        <Reveal delay={0.1}><div className="filter-row" role="tablist" aria-label="Filter projects">{categories.map((category) => <button key={category} role="tab" aria-selected={selectedCategory === category} className={selectedCategory === category ? "filter active" : "filter"} onClick={() => setSelectedCategory(category)}>{category}</button>)}</div></Reveal>
        <div className="project-grid">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, index) => (
              <motion.article layout key={project.name} className={project.featured ? "project-card featured" : "project-card"} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -14 }} transition={{ duration: 0.35, delay: index * 0.04 }}>
                <div className="project-top"><span className="project-number">{project.number}</span><span className="project-category">{project.category}</span></div>
                <div className="project-icon">{project.featured ? <BrainCircuit size={24} /> : project.category === "Data" ? <Database size={23} /> : <Code2 size={23} />}</div>
                <h3>{project.name}</h3><p>{project.description}</p>
                <ul className="feature-list">{project.details.map((detail) => <li key={detail}><Check size={14} />{detail}</li>)}</ul>
                <div className="tag-row">{project.tech.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <a className="project-link" href={project.href} target="_blank" rel="noreferrer">View on GitHub <MoveUpRight size={15} /></a>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </section>

      <section className="section system-section">
        <div className="container">
          <Reveal><SectionLabel number="02">THE BUILDING BLOCKS</SectionLabel><div className="system-heading"><h2>How I build<br /><span>AI systems.</span></h2><p>Reliable systems are more than a prompt and a model. I connect the right inputs, tools, retrieval, and validation so the result can actually be trusted.</p></div></Reveal>
          <Reveal delay={0.1}><div className="pipeline" aria-label="AI system pipeline">
            {[{ icon: Terminal, label: "User", sub: "Intent" }, { icon: Code2, label: "API / Application", sub: "Orchestration" }, { icon: Layers3, label: "Retrieval / Tools", sub: "Context" }, { icon: BrainCircuit, label: "LLM / ML Model", sub: "Reasoning" }, { icon: Check, label: "Validation", sub: "Guardrails" }, { icon: ArrowRight, label: "Response / Action", sub: "Outcome" }].map(({ icon: Icon, label, sub }, index) => <div className="pipeline-step" key={label}><div className={index === 3 ? "pipeline-icon highlight" : "pipeline-icon"}><Icon size={21} /></div><strong>{label}</strong><small>{sub}</small>{index < 5 && <ArrowRight className="pipeline-arrow" size={17} />}</div>)}
          </div></Reveal>
        </div>
      </section>

      <section className="section container services-section">
        <Reveal><div className="section-heading-row"><div><SectionLabel number="03">WHAT I CAN BUILD</SectionLabel><h2>From idea to<br /><span>working system.</span></h2></div><p className="heading-note">Need a technical partner who can move between the model, the API, and the product interface? That’s where I do my best work.</p></div></Reveal>
        <div className="services-grid">{serviceItems.map(({ icon: Icon, title, text: description }, index) => <Reveal key={title} delay={index * 0.05}><article className="service-card"><div className="service-icon"><Icon size={21} /></div><h3>{title}</h3><p>{description}</p><span className="service-arrow"><ArrowUpRight size={16} /></span></article></Reveal>)}</div>
      </section>

      <section id="skills" className="section skills-section">
        <div className="container"><Reveal><SectionLabel number="04">TOOLS OF THE TRADE</SectionLabel><div className="skills-heading"><h2>A focused stack.<br /><span>Wide enough to ship.</span></h2><p>I keep the stack intentional: dependable fundamentals, modern AI capabilities, and the infrastructure needed to take an idea beyond a notebook.</p></div></Reveal><div className="skills-grid">{skillGroups.map(({ label, skills }, index) => <Reveal key={label} delay={index * 0.04}><div className="skill-group"><h3>{label}</h3><div>{skills.map((skill) => <span key={skill}>{skill}</span>)}</div></div></Reveal>)}</div></div>
      </section>

      <section id="experience" className="section container experience-section">
        <Reveal><SectionLabel number="05">THE PATH SO FAR</SectionLabel><div className="experience-heading"><h2>Experience &<br /><span>education.</span></h2><a href="mailto:rrshubham099@gmail.com">Let’s talk <ArrowUpRight size={16} /></a></div></Reveal>
        <div className="timeline">
          <Reveal><article className="timeline-item"><div className="timeline-date">MAR 2026 — PRESENT</div><div><p className="timeline-kicker">GOOGLE DEVELOPERS GROUP</p><h3>Technical Team Member</h3><p>Contribute to technical initiatives, developer events, workshops, and community projects.</p></div></article></Reveal>
          <Reveal delay={0.08}><article className="timeline-item"><div className="timeline-date">2026</div><div><p className="timeline-kicker">SMARTSCHEDULER</p><h3>Developer & AI Intern</h3><p>Developed a genetic-algorithm-based college timetable scheduling system for automated faculty, room, and laboratory allocation, with constraint handling and conflict resolution.</p></div></article></Reveal>
          <Reveal delay={0.16}><article className="timeline-item"><div className="timeline-date">AUG 2025 — JUN 2029</div><div><p className="timeline-kicker">J.C. BOSE UNIVERSITY OF SCIENCE AND TECHNOLOGY, YMCA</p><h3>B.Tech — Electronics & Computer Engineering</h3><p>Faridabad, Haryana</p></div></article></Reveal>
        </div>
      </section>

      <section id="about" className="section about-section"><div className="container about-grid"><Reveal><SectionLabel number="06">A LITTLE ABOUT ME</SectionLabel><h2>Curious by nature.<br /><span>Practical by default.</span></h2></Reveal><Reveal delay={0.1}><div className="about-copy"><p>I’m an Electronics & Computer Engineering student focused on AI, machine learning, Python development, and practical AI systems.</p><p>My approach is simple: understand the problem first, choose the simplest suitable technology, build a working solution, test it properly, then optimize.</p><div className="certifications"><span>ALSO LEARNING</span><p>Python for Data Science, Advanced Learning Algorithms, Machine Learning, Introduction to Artificial Intelligence</p></div></div></Reveal></div></section>

      <section className="cta-section"><div className="container cta-inner"><Reveal><p className="section-label"><span>07</span>READY WHEN YOU ARE</p><h2>Have an AI or software idea?<br /><em>Let’s build it.</em></h2><p>Whether you need an AI agent, RAG application, ML model, Python automation, API, backend system, or modern website, I can help turn the requirement into a working solution.</p><div className="hero-actions"><a className="button button-primary" href="#contact">Start a project <ArrowUpRight size={17} /></a><a className="button button-ghost" href="mailto:rrshubham099@gmail.com">Email me <Mail size={16} /></a></div></Reveal></div></section>

      <section id="contact" className="section container contact-section"><Reveal><div className="contact-heading"><div><SectionLabel number="08">START A CONVERSATION</SectionLabel><h2>Let’s make something<br /><span>worth shipping.</span></h2></div><p>Tell me what you’re working on. I’ll get back to you at <a href="mailto:rrshubham099@gmail.com">rrshubham099@gmail.com</a>.</p></div></Reveal><div className="contact-grid"><Reveal><form className="contact-form" onSubmit={handleSubmit} noValidate><label>Name<input name="name" type="text" placeholder="Your name" required minLength={2} /></label><label>Email<input name="email" type="email" placeholder="you@company.com" required /></label><label>Project type<div className="select-wrap"><select name="type" defaultValue="" required><option value="" disabled>Select one</option><option>AI agent or RAG app</option><option>Machine learning</option><option>Backend or API</option><option>Automation</option><option>Website</option><option>Something else</option></select><ChevronDown size={16} /></div></label><label>Message<textarea name="message" placeholder="A little about your idea…" required minLength={10} rows={5} /></label><button className="button button-primary" type="submit">Send enquiry <ArrowUpRight size={17} /></button>{formStatus && <p className="form-status" role="status">{formStatus}</p>}</form></Reveal><Reveal delay={0.1}><aside className="contact-aside"><div className="aside-block"><span>DIRECT LINE</span><a href="mailto:rrshubham099@gmail.com">rrshubham099@gmail.com</a></div><div className="aside-block"><span>BASED IN</span><p>Faridabad, Haryana<br />India</p></div><div className="aside-block"><span>FIND ME ONLINE</span><a href="https://github.com/Shubhamjkd01" target="_blank" rel="noreferrer"><Github size={15} /> GitHub</a><a href="https://www.linkedin.com/in/shubhamraj-654437383" target="_blank" rel="noreferrer"><Linkedin size={15} /> LinkedIn</a></div></aside></Reveal></div></section>

      <footer className="site-footer"><div className="container footer-inner"><a href="#home" className="wordmark"><span>SR</span> SHUBHAM RAJ</a><p>AI & Python Developer</p><SocialLinks /><small>© 2026 Shubham Raj</small></div></footer>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Person", name: "Shubham Raj", jobTitle: "AI & Python Developer", email: "rrshubham099@gmail.com", address: { "@type": "PostalAddress", addressLocality: "Faridabad", addressRegion: "Haryana", addressCountry: "India" }, sameAs: ["https://github.com/Shubhamjkd01", "https://www.linkedin.com/in/shubhamraj-654437383"] }) }} />
    </main>
  );
}
