import type { Metadata } from 'next'
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: 'AI Automation Courses | LadeStack',
  description: 'Master AI automation with hands-on courses at LadeStack. Learn to build AI agents, automate workflows, integrate APIs, and create autonomous systems.',
}

const courseDetails = {
  title: "AI Automation",
  subtitle: "Build intelligent agents that automate everything",
  description: "Learn to build powerful AI automation systems that can handle complex workflows autonomously. From API integrations to building AI agents, master the art of automating with artificial intelligence.",
  duration: "8 weeks",
  level: "Intermediate",
  price: "$249",
  students: "350+",
  projects: "6+",
  modules: [
    {
      title: "Module 1: Automation Fundamentals",
      topics: ["Introduction to AI Automation", "Understanding Workflows", "API Basics & REST", "Webhooks & Events", "Automation Tools Overview", "Setting Up Development Environment"]
    },
    {
      title: "Module 2: Working with APIs",
      topics: ["REST API Deep Dive", "Authentication Methods", "Rate Limiting & Best Practices", "Building API Integrations", "Error Handling", "Testing APIs"]
    },
    {
      title: "Module 3: AI Agents Architecture",
      topics: ["Agent Design Patterns", "Tools & Actions", "Memory Systems", "Planning & Reasoning", "Multi-agent Systems", "Agent Frameworks"]
    },
    {
      title: "Module 4: LLM Integration",
      topics: ["OpenAI API Mastery", "Anthropic & Claude", "Function Calling", "Structured Outputs", "Token Optimization", "Cost Management"]
    },
    {
      title: "Module 5: Building Automation Pipelines",
      topics: ["Data Processing Pipelines", "Trigger-based Automations", "Scheduled Tasks", "Event-driven Architecture", "Monitoring & Logging", "Error Recovery"]
    },
    {
      title: "Module 6: Production Deployment",
      topics: ["Cloud Deployment (AWS, GCP)", "Serverless Functions", "Docker & Containers", "Scaling Strategies", "Security Best Practices", "Monitoring & Maintenance"]
    }
  ]
}

const projects = [
  {
    title: "AI Customer Support Bot",
    description: "Build an intelligent chatbot that handles customer queries automatically with human handoff."
  },
  {
    title: "Automated Content Pipeline",
    description: "Create a system that generates, formats, and publishes content automatically."
  },
  {
    title: "Data Extraction Agent",
    description: "Build an agent that extracts structured data from documents and websites."
  },
  {
    title: "Meeting Summarizer",
    description: "Automate meeting notes by transcribing and generating summaries with AI."
  },
  {
    title: "Social Media Manager",
    description: "Create an AI system that schedules and generates social media content."
  },
  {
    title: "Lead Qualification Engine",
    description: "Build an automated system that scores and qualifies leads using AI."
  }
]

export default function AIAutomation() {
  return (
    <>
      <style>{`
        .automation-page {
          min-height: 100vh;
          background-color: #002b36;
          padding: 120px 30px 80px;
          position: relative;
          overflow: hidden;
        }

        .automation-page::before {
          content: "";
          border-radius: 197.5px 0px;
          opacity: 0.3;
          background: #d33682;
          filter: blur(180px);
          height: 50%;
          width: 60%;
          position: absolute;
          top: 10%;
          right: -30%;
          z-index: 0;
        }

        .automation-page::after {
          content: "";
          border-radius: 197.5px 0px;
          opacity: 0.2;
          background: #cb4b16;
          filter: blur(150px);
          height: 40%;
          width: 50%;
          position: absolute;
          bottom: 10%;
          left: -20%;
          z-index: 0;
        }

        .automation-container {
          max-width: 1100px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .automation-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .automation-badge {
          display: inline-block;
          background: rgba(211, 54, 130, 0.15);
          color: #d33682;
          padding: 8px 20px;
          border-radius: 30px;
          font-family: "Lexend", system-ui, sans-serif;
          font-size: 13px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 20px;
        }

        .automation-title {
          font-family: "Lexend", system-ui, sans-serif;
          font-weight: 700;
          font-size: clamp(48px, 8vw, 80px);
          color: #ffffff;
          text-transform: uppercase;
          line-height: 1.1;
          margin: 0 0 20px;
          letter-spacing: -1px;
        }

        .automation-title span {
          color: #d33682;
        }

        .automation-subtitle {
          font-family: "Lexend", system-ui, sans-serif;
          font-size: 24px;
          color: #ffffff;
          margin: 0 0 20px;
          font-weight: 500;
        }

        .automation-description {
          font-family: "Lexend", system-ui, sans-serif;
          font-size: 18px;
          color: #a0a0a0;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .automation-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 20px;
          margin: 50px 0;
        }

        .automation-stat {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 24px;
          text-align: center;
          backdrop-filter: blur(10px);
        }

        .automation-stat-number {
          font-family: "Lexend", system-ui, sans-serif;
          font-weight: 700;
          font-size: 36px;
          color: #d33682;
          display: block;
        }

        .automation-stat-label {
          font-family: "Lexend", system-ui, sans-serif;
          font-size: 13px;
          color: #a0a0a0;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .course-highlights {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          margin-bottom: 50px;
        }

        .highlight-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          padding: 30px;
          backdrop-filter: blur(10px);
        }

        .highlight-icon {
          width: 50px;
          height: 50px;
          background: rgba(211, 54, 130, 0.15);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
          color: #d33682;
        }

        .highlight-card h3 {
          font-family: "Lexend", system-ui, sans-serif;
          font-weight: 600;
          font-size: 20px;
          color: #ffffff;
          margin: 0 0 12px;
        }

        .highlight-card p {
          font-family: "Lexend", system-ui, sans-serif;
          font-size: 14px;
          color: #a0a0a0;
          line-height: 1.6;
          margin: 0;
        }

        .modules-section {
          margin-bottom: 60px;
        }

        .modules-title {
          font-family: "Lexend", system-ui, sans-serif;
          font-weight: 600;
          font-size: 32px;
          color: #ffffff;
          text-align: center;
          margin: 0 0 40px;
          text-transform: uppercase;
        }

        .module-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 24px;
          margin-bottom: 16px;
          backdrop-filter: blur(10px);
        }

        .module-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }

        .module-title {
          font-family: "Lexend", system-ui, sans-serif;
          font-weight: 600;
          font-size: 18px;
          color: #ffffff;
          margin: 0;
        }

        .module-number {
          background: rgba(211, 54, 130, 0.2);
          color: #d33682;
          padding: 4px 12px;
          border-radius: 12px;
          font-family: "Lexend", system-ui, sans-serif;
          font-size: 12px;
          font-weight: 600;
        }

        .module-topics {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .topic-tag {
          background: rgba(255, 255, 255, 0.05);
          color: #b0b0b0;
          padding: 6px 12px;
          border-radius: 8px;
          font-family: "Lexend", system-ui, sans-serif;
          font-size: 13px;
        }

        .projects-section {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          padding: 50px 40px;
          margin-bottom: 50px;
          backdrop-filter: blur(10px);
        }

        .projects-title {
          font-family: "Lexend", system-ui, sans-serif;
          font-weight: 600;
          font-size: 32px;
          color: #ffffff;
          text-align: center;
          margin: 0 0 40px;
          text-transform: uppercase;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
        }

        .project-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          padding: 20px;
        }

        .project-card h4 {
          font-family: "Lexend", system-ui, sans-serif;
          font-weight: 600;
          font-size: 16px;
          color: #ffffff;
          margin: 0 0 8px;
        }

        .project-card p {
          font-family: "Lexend", system-ui, sans-serif;
          font-size: 13px;
          color: #a0a0a0;
          line-height: 1.5;
          margin: 0;
        }

        .cta-card {
          background: linear-gradient(135deg, rgba(211, 54, 130, 0.2) 0%, rgba(203, 75, 22, 0.2) 100%);
          border: 1px solid rgba(211, 54, 130, 0.4);
          border-radius: 24px;
          padding: 50px 40px;
          text-align: center;
          backdrop-filter: blur(10px);
        }

        .cta-card h3 {
          font-family: "Lexend", system-ui, sans-serif;
          font-weight: 600;
          font-size: 32px;
          color: #ffffff;
          margin: 0 0 16px;
        }

        .cta-card p {
          font-family: "Lexend", system-ui, sans-serif;
          font-size: 16px;
          color: #b0b0b0;
          margin: 0 0 30px;
        }

        .cta-button {
          display: inline-block;
          padding: 16px 40px;
          background: #d33682;
          color: #002b36;
          text-decoration: none;
          font-family: "Lexend", system-ui, sans-serif;
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          border-radius: 50px;
          transition: all 0.3s ease;
        }

        .cta-button:hover {
          background: transparent;
          color: #d33682;
          border: 2px solid #d33682;
        }

        @media (max-width: 768px) {
          .automation-page {
            padding: 100px 16px 60px;
          }
          .projects-section, .cta-card {
            padding: 40px 20px;
          }
        }
      `}</style>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": courseDetails.title,
            "description": courseDetails.description,
            "courseLevel": courseDetails.level,
            "duration": courseDetails.duration,
            "provider": {
              "@type": "Organization",
              "name": "LadeStack",
              "sameAs": "https://ladestack.in"
            },
            "hasCourseInstance": {
              "@type": "CourseInstance",
              "courseMode": "online",
              "courseWorkload": courseDetails.duration,
              "offers": {
                "@type": "Offer",
                "price": courseDetails.price.replace("$", ""),
                "priceCurrency": "USD"
              }
            }
          })
        }}
      />

      <div className="automation-page">
        <div className="automation-container">
          <header className="automation-header">
            <span className="automation-badge">Featured Course</span>
            <h1 className="automation-title">{courseDetails.title} <span>Course</span></h1>
            <p className="automation-subtitle">{courseDetails.subtitle}</p>
            <p className="automation-description">{courseDetails.description}</p>
          </header>

          <div className="automation-stats">
            <div className="automation-stat">
              <span className="automation-stat-number">{courseDetails.duration}</span>
              <span className="automation-stat-label">Duration</span>
            </div>
            <div className="automation-stat">
              <span className="automation-stat-number">{courseDetails.level}</span>
              <span className="automation-stat-label">Level</span>
            </div>
            <div className="automation-stat">
              <span className="automation-stat-number">{courseDetails.students}</span>
              <span className="automation-stat-label">Students</span>
            </div>
            <div className="automation-stat">
              <span className="automation-stat-number">{courseDetails.projects}</span>
              <span className="automation-stat-label">Projects</span>
            </div>
            <div className="automation-stat">
              <span className="automation-stat-number">{courseDetails.price}</span>
              <span className="automation-stat-label">Price</span>
            </div>
          </div>

          <div className="course-highlights">
            <div className="highlight-card">
              <div className="highlight-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
              </div>
              <h3>6 Comprehensive Modules</h3>
              <p>From API basics to building autonomous AI agents that handle complex workflows.</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
              </div>
              <h3>6+ Real-World Projects</h3>
              <p>Build automation systems that streamline business processes with AI power.</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <h3>Expert Instructors</h3>
              <p>Learn from professionals who have built production automation systems.</p>
            </div>
          </div>

          <section className="modules-section">
            <h2 className="modules-title">Course Curriculum</h2>
            {courseDetails.modules.map((module, index) => (
              <div key={index} className="module-card">
                <div className="module-header">
                  <h3 className="module-title">{module.title}</h3>
                  <span className="module-number">Week {index + 1}</span>
                </div>
                <div className="module-topics">
                  {module.topics.map((topic, topicIndex) => (
                    <span key={topicIndex} className="topic-tag">{topic}</span>
                  ))}
                </div>
              </div>
            ))}
          </section>

          <section className="projects-section">
            <h2 className="projects-title">What You'll Build</h2>
            <div className="projects-grid">
              {projects.map((project, index) => (
                <div key={index} className="project-card">
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="cta-card">
            <h3>Ready to Automate with AI?</h3>
            <p>Join {courseDetails.students}+ students building the future of work automation.</p>
            <a href="https://ladestack.in" className="cta-button">Enroll Now</a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
