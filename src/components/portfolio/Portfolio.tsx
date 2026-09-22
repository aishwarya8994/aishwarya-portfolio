import { useEffect, useState, type ReactNode } from "react";
import { ArrowDownRight, ArrowRight, ExternalLink, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import birdiImage from "@/assets/birdi-case-study.jpg";
import deshImage from "@/assets/desh-apnayen-case-study.jpg";
import ticvaiImage from "@/assets/ticvai-case-study.jpg";
import xaloyImage from "@/assets/xaloy-case-study.jpg";

const navItems = ["Work", "About", "Process", "Skills", "Experience"];

function SectionLabel({ children }: { children: ReactNode }) {
  return <p className="section-label">{children}</p>;
}

function ArrowLink({ href, children, external = false }: { href: string; children: ReactNode; external?: boolean }) {
  return (
    <a className="arrow-link" href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
      <span>{children}</span>
      {external ? <ExternalLink aria-hidden="true" /> : <ArrowRight aria-hidden="true" />}
    </a>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`site-nav ${scrolled ? "is-scrolled" : ""}`}>
      <div className="nav-inner">
        <a href="#top" className="brand" aria-label="Aishwarya More, home">
          <span className="brand-mark">AM</span>
          <span>AISHWARYA</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>
          ))}
        </nav>
        <Button asChild variant="portfolio" size="portfolio" className="nav-cta">
          <a href="#contact">Let's Talk <ArrowRight /></a>
        </Button>
        <Button variant="glassIcon" size="icon" className="menu-button" onClick={() => setOpen((value) => !value)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open && (
        <div className="mobile-menu">
          <nav aria-label="Mobile navigation">
            {navItems.map((item, index) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)}>
                <span>0{index + 1}</span>{item}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)}><span>06</span>Let's Talk</a>
          </nav>
        </div>
      )}
    </header>
  );
}

function WorkspaceVisual() {
  return (
    <div className="workspace" aria-label="Abstract product design workspace">
      <div className="workspace-bar"><span /><span /><span /><small>Product workspace / Booking flow</small></div>
      <div className="workspace-grid">
        <aside className="workspace-tools"><b>F</b><i /><i /><i /><i /></aside>
        <div className="workspace-canvas">
          <div className="metric-card drift-one"><small>Conversion</small><strong>84.2%</strong><span>+12.4%</span></div>
          <div className="chart-card drift-two">
            <div className="chart-head"><span>Weekly bookings</span><small>May 12–18</small></div>
            <div className="bars">{[45, 68, 52, 82, 65, 90, 76].map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}</div>
          </div>
          <div className="mobile-card drift-three">
            <div className="mobile-top"><span>9:41</span><span>•••</span></div>
            <div className="mobile-cover"><small>LIVE</small><strong>Night / Shift</strong><span>May 24 · 8:30 PM</span></div>
            <div className="mobile-seat"><span>2 tickets</span><strong>₹2,840</strong></div>
            <div className="mobile-action">Continue</div>
          </div>
          <div className="component-card drift-four"><small>COMPONENT / 04</small><div className="component-row"><span>Button</span><b>Primary</b></div><div className="component-row"><span>Toggle</span><i /></div><div className="component-input">Email address</div></div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="hero section-shell">
      <div className="hero-copy reveal">
        <SectionLabel>SENIOR UI/UX DESIGNER</SectionLabel>
        <h1>I design digital products that are <span>clear, intuitive</span> &amp; built to scale.</h1>
        <p>With 6+ years of experience, I design thoughtful web and mobile experiences that balance user needs, business goals and visual clarity.</p>
        <div className="hero-actions">
          <Button asChild variant="portfolio" size="portfolioLg"><a href="#work">View My Work <ArrowDownRight /></a></Button>
          <Button asChild variant="portfolioOutline" size="portfolioLg"><a href="#contact">Let's Connect</a></Button>
        </div>
      </div>
      <div className="hero-visual reveal-delay"><WorkspaceVisual /></div>
    </section>
  );
}

const credibility = [
  ["6+ Years", "Experience"], ["Web + Mobile", "Product Design"], ["Design Systems", "Scalable UI"],
  ["Frontend-Aware", "Developer Collaboration"], ["AI-Assisted", "Modern Workflow"],
];

function CredibilityStrip() {
  return <section className="credibility section-shell" aria-label="Expertise summary">{credibility.map(([title, detail], index) => <div key={title}><span>0{index + 1}</span><strong>{title}</strong><small>{detail}</small></div>)}</section>;
}

type Project = {
  number: string; name: string; subtitle: string; category: string; description: string; challenge?: string;
  role: string; platform: string; contribution: string; tags: string[]; image: string; imageAlt: string;
};

const projects: Project[] = [
  { number: "01", name: "TICVAI", subtitle: "Ticket Booking Platform", category: "Product Design · Booking Experience · Responsive Web", description: "Designed a complete ticket booking ecosystem covering events, theme parks, activities, attractions, dining, retail and checkout.", challenge: "Designing a scalable booking experience across multiple entertainment categories while keeping the journey simple and consistent.", role: "Lead UI/UX Designer", platform: "Responsive web + mobile", contribution: "End-to-end UX, UI system, booking flow", tags: ["UI/UX Design", "Product Design", "Responsive Design", "Design System", "Booking Flow"], image: ticvaiImage, imageAlt: "TICVAI ticket booking desktop and mobile interfaces" },
  { number: "02", name: "XALOY CMS", subtitle: "Enterprise Dashboard & CMS", category: "Enterprise UI · Dashboard · Design System", description: "Designed intuitive interfaces for complex administrative workflows, data management and operational dashboards.", challenge: "Complex information architecture, reusable components, data-heavy interfaces and consistent interaction patterns.", role: "Senior UI/UX Designer", platform: "Enterprise web application", contribution: "UX architecture, dashboard UI, component library", tags: ["UI/UX", "Dashboard Design", "Enterprise Product", "Design System", "Responsive UI"], image: xaloyImage, imageAlt: "Xaloy CMS dashboard, data tables and management panels" },
  { number: "03", name: "DESH APNAYEN", subtitle: "Web & Mobile Experience", category: "Web Design · Mobile UI · UX", description: "Designed user-friendly web and mobile experiences focused on content clarity, accessibility and intuitive navigation.", role: "UI/UX Designer", platform: "Website + mobile app", contribution: "Content UX, responsive UI, mobile patterns", tags: ["Mobile UI", "Web Design", "UX Design", "Responsive Design"], image: deshImage, imageAlt: "Desh Apnayen civic learning website and mobile screens" },
  { number: "04", name: "BIRDI", subtitle: "Web Application", category: "Product UI · Web Application", description: "Created a clean and scalable interface system focused on usability, visual hierarchy and consistent user interactions.", role: "Product UI Designer", platform: "Responsive web application", contribution: "Core workflows, forms and component system", tags: ["Product UI", "Web Application", "Design System", "Responsive UI"], image: birdiImage, imageAlt: "BIRDI productivity dashboard and responsive mobile interface" },
];

export function ProjectCard({ project, reverse }: { project: Project; reverse: boolean }) {
  return (
    <article className={`case-study ${reverse ? "is-reverse" : ""}`}>
      <div className="project-image-wrap">
        <img src={project.image} alt={project.imageAlt} loading="lazy" width={1600} height={1008} />
        <span className="project-number">{project.number}</span>
      </div>
      <div className="project-copy">
        <SectionLabel>{project.category}</SectionLabel>
        <h3>{project.name}</h3><h4>{project.subtitle}</h4>
        <p>{project.description}</p>
        {project.challenge && <div className="challenge"><small>{project.number === "01" ? "THE CHALLENGE" : "DESIGN FOCUS"}</small><p>{project.challenge}</p></div>}
        <dl className="project-meta">
          <div><dt>Role</dt><dd>{project.role}</dd></div><div><dt>Platform</dt><dd>{project.platform}</dd></div><div><dt>Contribution</dt><dd>{project.contribution}</dd></div>
        </dl>
        <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        <ArrowLink href="#contact">View Case Study</ArrowLink>
      </div>
    </article>
  );
}

export function CaseStudy() {
  return (
    <section id="work" className="work-section section-shell">
      <div className="section-heading"><div><SectionLabel>SELECTED WORK / 2020—2026</SectionLabel><h2>Selected Work</h2></div><p>Designing clear, scalable experiences for complex digital products.</p></div>
      <div className="case-list">{projects.map((project, index) => <ProjectCard key={project.name} project={project} reverse={index % 2 === 1} />)}</div>
    </section>
  );
}

const processSteps = [
  ["Understand", "Understand requirements, users, business objectives and technical constraints."],
  ["Structure", "Define information architecture, user flows and wireframes."],
  ["Design", "Transform requirements into intuitive and visually refined interfaces."],
  ["Systemize", "Create reusable components and scalable design patterns."],
  ["Validate", "Review usability, responsiveness and developer feasibility."],
  ["Refine", "Iterate based on feedback and continuously improve the experience."],
];

export function ProcessTimeline() {
  return <section id="process" className="process section-shell"><SectionLabel>PROCESS / 06 STEPS</SectionLabel><h2>How I Approach Design</h2><div className="process-rail">{processSteps.map(([title, description], index) => <article key={title}><span>0{index + 1}</span><i /><h3>{title}</h3><p>{description}</p></article>)}</div></section>;
}

export function DesignSystem() {
  return (
    <section className="system-section section-shell">
      <div className="system-copy"><SectionLabel>DESIGN SYSTEMS</SectionLabel><h2>Designing systems,<br />not just screens.</h2><p>I create reusable UI patterns and component structures that maintain consistency across complex products and multiple screen sizes.</p><div className="system-note"><span>12 COL</span><i /><span>8 PT GRID</span><i /><span>AA</span></div></div>
      <div className="specimen-board">
        <div className="specimen-head"><span>ORBIT / UI KIT</span><small>v2.4</small></div>
        <div className="type-spec"><small>TYPE</small><strong>Aa</strong><div><b>Display 48</b><span>Body 16 / 24</span></div></div>
        <div className="color-spec"><small>COLOR</small><div><i className="swatch-one" /><i className="swatch-two" /><i className="swatch-three" /><i className="swatch-four" /></div></div>
        <div className="control-spec"><small>CONTROLS</small><div className="sample-buttons"><button type="button">Primary</button><button type="button">Secondary</button></div><label><span>Email</span><input aria-label="Sample email field" placeholder="name@company.com" /></label></div>
        <div className="table-spec"><div className="tabs"><b>Overview</b><span>Activity</span><span>Settings</span></div>{["Design tokens", "Navigation", "Data table"].map((item, index) => <div className="sample-row" key={item}><span>{item}</span><small>{index === 0 ? "Published" : "In progress"}</small><b>•••</b></div>)}</div>
      </div>
    </section>
  );
}

const skillGroups = [
  ["UX / PRODUCT DESIGN", ["User Flows", "Information Architecture", "Wireframing", "Prototyping", "Interaction Design", "Responsive UX", "Usability Thinking"]],
  ["UI DESIGN", ["Visual Design", "Design Systems", "Component Design", "Dashboard Design", "Mobile UI", "Web Applications", "Responsive Interfaces"]],
  ["DESIGN TOOLS", ["Figma", "FigJam", "Adobe XD", "Photoshop", "Illustrator"]],
  ["FRONTEND AWARENESS", ["HTML", "CSS", "JavaScript", "React", "Next.js", "React Native", "Angular", "Tailwind CSS", "PrimeReact", "PrimeFlex"]],
] as const;

export function SkillGroup({ title, skills, index }: { title: string; skills: readonly string[]; index: number }) {
  return <article className="skill-group"><span>0{index + 1}</span><h3>{title}</h3><div>{skills.map((skill) => <p key={skill}>{skill}</p>)}</div></article>;
}

function Skills() {
  return <section id="skills" className="skills section-shell"><div className="section-heading"><div><SectionLabel>CAPABILITIES</SectionLabel><h2>Skills &amp; craft</h2></div><p>My frontend knowledge helps me design interfaces that are realistic, scalable and developer-friendly.</p></div><div className="skills-grid">{skillGroups.map(([title, items], index) => <SkillGroup key={title} title={title} skills={items} index={index} />)}</div></section>;
}

function AIWorkflow() {
  const tools = ["Claude", "Lovable", "Antigravity", "AI-assisted prototyping", "AI-assisted UI exploration", "Vibe coding"];
  return <section className="ai-section section-shell"><div className="ai-orbit" aria-hidden="true"><div className="orbit-core">AI</div>{tools.slice(0, 4).map((tool, index) => <span key={tool} className={`orbit-label orbit-${index + 1}`}>{tool}</span>)}</div><div className="ai-copy"><SectionLabel>AI &amp; MODERN DESIGN WORKFLOW</SectionLabel><h2>Designing with AI.</h2><p>I use AI-assisted workflows to explore ideas faster, prototype concepts, accelerate repetitive tasks and experiment with new product directions while keeping human-centered design at the core.</p><div className="tag-list">{tools.map((tool) => <span key={tool}>{tool}</span>)}</div><small>AI accelerates exploration. Design judgment stays human.</small></div></section>;
}

export function ExperienceTimeline() {
  const stages = [
    ["FOUNDATION", "UI/UX Design", "Building clear interfaces, responsive layouts and thoughtful interaction patterns for web and mobile."],
    ["PRODUCT THINKING", "Product Design", "Translating business requirements and user needs into flows, prototypes and refined product experiences."],
    ["SCALE", "Design Systems", "Creating reusable components, shared visual language and reliable patterns across complex products."],
    ["COLLABORATION", "Frontend-Aware Design", "Partnering closely with engineers through practical specifications, handoff, QA and continuous UX improvement."],
  ];
  return <section id="experience" className="experience section-shell"><div className="section-heading"><div><SectionLabel>6+ YEARS OF EXPERIENCE</SectionLabel><h2>A practice built through products.</h2></div><p>UI/UX Design → Product Design → Design Systems → Frontend-Aware Design</p></div><div className="experience-list">{stages.map(([kicker, title, copy], index) => <article key={title}><span>0{index + 1}</span><div><small>{kicker}</small><h3>{title}</h3></div><p>{copy}</p></article>)}</div></section>;
}

function About() {
  const flow = ["Idea", "UX", "UI", "System", "Prototype", "Development"];
  return <section id="about" className="about section-shell"><div className="about-copy"><SectionLabel>ABOUT</SectionLabel><h2>A designer who thinks beyond the screen.</h2><p>I'm a UI/UX designer with 6+ years of experience creating digital experiences for web and mobile products. I enjoy simplifying complex workflows, building scalable interface systems and turning product requirements into clear, intuitive experiences.</p><p>My frontend knowledge allows me to collaborate closely with developers and design interfaces that are not only visually refined but also practical to build and scale.</p></div><div className="workflow"><small>FROM QUESTION TO SHIPPED EXPERIENCE</small>{flow.map((item, index) => <div key={item}><span>0{index + 1}</span><strong>{item}</strong>{index < flow.length - 1 && <ArrowDownRight />}</div>)}</div></section>;
}

function Philosophy() {
  const principles = [["Clarity", "Make complex information easy to understand."], ["Consistency", "Create reusable patterns users can learn quickly."], ["Accessibility", "Design experiences that work across different users and contexts."], ["Scalability", "Think beyond a single screen and create systems that can grow."], ["Collaboration", "Work closely with product and development teams."]];
  return <section className="philosophy section-shell"><SectionLabel>DESIGN PHILOSOPHY</SectionLabel><h2>Simple is not easy.<br /><span>It is designed.</span></h2><div className="principles">{principles.map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></section>;
}

export function Contact() {
  return <section id="contact" className="contact section-shell"><SectionLabel>LET'S CREATE SOMETHING USEFUL</SectionLabel><h2>Have a product that needs a better experience?</h2><p>Let's create something intuitive, useful and beautifully designed.</p><div className="contact-actions"><Button asChild variant="portfolioLight" size="portfolioLg"><a href="mailto:aishwarya.more8994@gmail.com">Let's Talk <ArrowRight /></a></Button><Button asChild variant="portfolioOutline" size="portfolioLg"><a href="https://www.linkedin.com/in/aishwarya-more-26789b163" target="_blank" rel="noreferrer">LinkedIn <ExternalLink /></a></Button></div><a className="contact-email" href="mailto:aishwarya.more8994@gmail.com">aishwarya.more8994@gmail.com</a></section>;
}

export function Footer() {
  return <footer className="footer section-shell"><div><strong>AISHWARYA MORE</strong><span>Senior UI/UX Designer</span><p>Designing better digital experiences, one interface at a time.</p></div><nav aria-label="Footer navigation">{["Work", "About", "Process", "Skills", "Contact"].map((item) => <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>)}<a href="https://www.linkedin.com/in/aishwarya-more-26789b163" target="_blank" rel="noreferrer">LinkedIn</a></nav><small>© 2026 Aishwarya More. All rights reserved.</small></footer>;
}

export function Portfolio() {
  return <main><Navbar /><Hero /><CredibilityStrip /><CaseStudy /><ProcessTimeline /><DesignSystem /><Skills /><AIWorkflow /><ExperienceTimeline /><About /><Philosophy /><Contact /><Footer /></main>;
}