import Head from "next/head";
import { useCallback } from "react";

const resume = {
  name: "Alejandro De La Mora",
  role: "Forward Deployed Engineer & AI Solutions Architect",
  contact: {
    phone: "+1 437 243 3693",
    email: "alex@seshwithfriends.org",
    linkedin: "https://www.linkedin.com/in/amorac/",
    website: "http://www.eloruga.com",
    github: "https://github.com/Oruga420",
  },
  summary:
    "Forward Deployed Engineer and AI Solutions Architect with a proven ability to harness the power of AI in mission-critical environments. I specialize in architecting LLM workflows that actually reach production, moving beyond demos to scalable, secure systems. With a background in Next.js, GCP, AWS, and Salesforce, I have shipped over 120 GenAI applications and 90 chatbots. I combine technical versatility with a customer-centric approach, recently driving AI adoption from 47% to 97% at Assent and saving over 20,000 man-hours through metric-driven automation and prompt optimization.",
  skills: [
    "Prompt Optimization",
    "Agentic Workflows",
    "RAG",
    "OpenAI",
    "Anthropic",
    "Gemini",
    "MCP Servers",
    "GCP",
    "AWS",
    "Vercel",
    "Next.js",
    "Python",
    "APIs",
    "Salesforce",
    "QA Engineering",
    "Agile/Scrum",
    "English (Native/Bilingual)",
    "Spanish (Full Professional)",
  ],
  experience: [
    {
      company: "Assent",
      title: "AI Solutions Architect",
      location: "Toronto, Ontario",
      dates: "Feb 2025 - Present",
      bullets: [
        "Enterprise AI Deployment: Bring GenAI into a regulated compliance platform, building secure, auditable architectures using OpenAI, Anthropic, and Gemini.",
        "Metric-Driven Impact: Saved the company over 20,000 man-hours (>$1M savings) in a single year by replacing repetitive operational tasks with Agentic Workflows and GenAI automations.",
        "Adoption Strategy: Successfully drove internal AI adoption from 47% to 97%, empowering teams to use custom MCP tools and chatbots safely.",
        "Production Systems: Developed and maintained custom MCP servers to expose internal data and tools to LLMs safely, moving from prototype to production with strict governance.",
      ],
    },
    {
      company: "Sesh | AI Solutions",
      title: "AI Solutions Architect",
      location: "Toronto, Ontario",
      dates: "Nov 2021 - Present",
      bullets: [
        "Forward Deployed Engineering: Act as the technical bridge for customers, designing architecture for over 120 GenAI applications and 90 chatbots currently in production across 30+ clients.",
        "Customer-Centric Solutions: Deeply understand small business needs to implement AI-powered workflows that connect CRMs and operations, providing immediate value.",
        "Tool Development: Build and deploy AI-ready websites and internal tools using Next.js, Vercel, and AWS.",
        "Community Leadership: Lead a 100+ person community, providing free classes and tutorials to help non-technical users adopt AI tools in their daily work.",
      ],
    },
    {
      company: "Online Business Systems",
      title: "Salesforce Consultant",
      location: "Toronto, Ontario",
      dates: "Jun 2024 - Nov 2024",
      bullets: [
        "Prompt Optimization: Configured Salesforce Agentforce AI assistants, defining use cases and refining prompts (system instructions) to ensure accurate, safe responses for enterprise clients.",
        "Integration: Wired data access safely for Copilot-style experiences, ensuring agents fit into existing sales and marketing workflows rather than disrupting them.",
      ],
    },
    {
      company: "Globalization Partners",
      title: "Salesforce Manager",
      location: "Ontario, Canada",
      dates: "Nov 2018 - Nov 2023",
      bullets: [
        "Early AI Adoption: Led the development of 'GIA', an internal chatbot, and established early GenAI-powered workflows for Jira ticket handling.",
        "Platform Scale: Managed a Salesforce org with 1,000+ licenses, ensuring data models and security protocols supported business-critical operations.",
        "Automation: Transitioned from Project Management to deep technical automation, using APIs and scripts to remove human babysitting from data processes.",
      ],
    },
  ],
  education: [
    {
      degree: "B.S. Systems Engineering",
      school: "Universidad Marista de MAcrida",
      year: "2007",
    },
    {
      degree: "Certifications",
      school: "Salesforce Certified AI Associate (x3), Salesforce Certified Administrator (SCA)",
      year: "",
    },
  ],
};

export default function Home() {
  const handlePrint = useCallback(() => {
    if (typeof window !== "undefined") {
      window.print();
    }
  }, []);

  return (
    <>
      <Head>
        <title>{resume.name} | Resume</title>
        <meta name="description" content={`${resume.name} resume`} />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className="page">
        <div className="resume">
          <div className="floating" aria-hidden="true">
            <span className="bubble" />
            <span className="bubble" />
            <span className="bubble" />
          </div>
          <div className="content">
            <header className="header">
              <div>
                <h1 className="title">{resume.name}</h1>
                <p className="tagline">{resume.role}</p>
              </div>
              <div className="contact-card">
                <p className="contact-title">Contact</p>
                <div className="contact-grid">
                  <span>{resume.contact.phone}</span>
                  <a href={`mailto:${resume.contact.email}`}>{resume.contact.email}</a>
                  <a href={resume.contact.linkedin} target="_blank" rel="noreferrer">
                    LinkedIn
                  </a>
                  <a href={resume.contact.website} target="_blank" rel="noreferrer">
                    Website
                  </a>
                  <a href={resume.contact.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                </div>
              </div>
            </header>

            <section className="section">
              <h2>Professional Summary</h2>
              <div className="summary">{resume.summary}</div>
            </section>

            <section className="section">
              <h2>Areas of Expertise</h2>
              <div className="pill-row">
                {resume.skills.map((skill) => (
                  <span className="pill" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            <section className="section">
              <h2>Work Experience</h2>
              <div className="experience">
                {resume.experience.map((role) => (
                  <article className="role" key={`${role.company}-${role.title}`}>
                    <h3>
                      {role.company} | {role.title}
                    </h3>
                    <div className="meta">
                      <span>{role.location}</span>
                      <span>•</span>
                      <span>{role.dates}</span>
                    </div>
                    <ul className="bullets">
                      {role.bullets.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>

            <section className="section">
              <h2>Education & Certifications</h2>
              <div className="edu-grid">
                {resume.education.map((edu) => (
                  <div className="edu-card" key={edu.degree}>
                    <strong>{edu.degree}</strong>
                    <div>{edu.school}</div>
                    {edu.year ? <div>{edu.year}</div> : null}
                  </div>
                ))}
              </div>
            </section>

            <div className="actions">
              <button className="btn" onClick={handlePrint}>
                Download as PDF
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
