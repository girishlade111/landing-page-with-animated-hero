import type { Metadata } from 'next'
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: 'Large Language Models (LLM) Courses | LadeStack',
  description: 'Master Large Language Models with hands-on courses at LadeStack. Learn GPT, transformer architecture, fine-tuning, RAG, and build production-ready LLM applications.',
}

const courseDetails = {
  title: "Large Language Models",
  subtitle: "Build intelligent applications with the power of LLMs",
  description: "Our comprehensive LLM course takes you from transformer fundamentals to building production-ready AI applications. Learn prompt engineering, fine-tuning, RAG architecture, and how to deploy LLMs at scale.",
  duration: "10 weeks",
  level: "Intermediate to Advanced",
  price: "$299",
  students: "400+",
  projects: "8+",
  modules: [
    {
      title: "Module 1: NLP Fundamentals",
      topics: ["Text Preprocessing", "Tokenization & Embeddings", "Word2Vec & GloVe", "Sequence Models (RNN, LSTM)", "Attention Mechanism", "Introduction to Transformers"]
    },
    {
      title: "Module 2: Transformer Architecture",
      topics: ["Encoder-Decoder Architecture", "Self-Attention Mechanism", "Multi-Head Attention", "Positional Encoding", "Feed-Forward Networks", "Residual Connections & Layer Norm"]
    },
    {
      title: "Module 3: GPT & BERT Models",
      topics: ["GPT Architecture", "BERT & Its Variants", "Model Architectures Comparison", "Pre-training vs Fine-tuning", "Hugging Face Transformers", "Model Loading & Inference"]
    },
    {
      title: "Module 4: Prompt Engineering",
      topics: ["Prompt Design Principles", "Zero-shot & Few-shot Learning", "Chain-of-Thought Prompting", "ReAct Prompting", "Prompt Optimization", "Building Prompt Templates"]
    },
    {
      title: "Module 5: Fine-Tuning LLMs",
      topics: ["LoRA & QLoRA", "Parameter-Efficient Fine-tuning", "Full Model Fine-tuning", "Instruction Tuning", "RLHF (Reinforcement Learning from Human Feedback)", "Dataset Preparation"]
    },
    {
      title: "Module 6: RAG & LLM Applications",
      topics: ["Retrieval-Augmented Generation", "Vector Databases (Pinecone, Chroma)", "Chunking & Embedding Strategies", "Building AI Agents", "LLM Deployment & APIs", "Cost Optimization & Caching"]
    }
  ]
}

const projects = [
  {
    title: "AI Chatbot with RAG",
    description: "Build a chatbot that retrieves relevant context from documents before generating responses."
  },
  {
    title: "Content Generator",
    description: "Create an LLM-powered application for generating marketing content, emails, and articles."
  },
  {
    title: "Code Assistant",
    description: "Build an AI coding assistant that helps with code completion and debugging."
  },
  {
    title: "Question Answering System",
    description: "Develop a system that answers questions based on custom document collections."
  },
  {
    title: "Fine-tuned Sentiment Analyzer",
    description: "Fine-tune an LLM for domain-specific sentiment analysis tasks."
  },
  {
    title: "AI Agent Workflow",
    description: "Build an autonomous AI agent that can plan and execute multi-step tasks."
  }
]

export default function LargeLanguageModels() {
  return (
    <>
      <style>{`
        .llm-page {
          min-height: 100vh;
          background-color: #002b36;
          padding: 120px 30px 80px;
          position: relative;
          overflow: hidden;
        }

        .llm-page::before {
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

        .llm-page::after {
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

        .llm-container {
          max-width: 1100px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .llm-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .llm-badge {
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

        .llm-title {
          font-family: "Lexend", system-ui, sans-serif;
          font-weight: 700;
          font-size: clamp(48px, 8vw, 80px);
          color: #ffffff;
          text-transform: uppercase;
          line-height: 1.1;
          margin: 0 0 20px;
          letter-spacing: -1px;
        }

        .llm-title span {
          color: #d33682;
        }

        .llm-subtitle {
          font-family: "Lexend", system-ui, sans-serif;
          font-size: 24px;
          color: #ffffff;
          margin: 0 0 20px;
          font-weight: 500;
        }

        .llm-description {
          font-family: "Lexend", system-ui, sans-serif;
          font-size: 18px;
          color: #a0a0a0;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .llm-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 20px;
          margin: 50px 0;
        }

        .llm-stat {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 24px;
          text-align: center;
          backdrop-filter: blur(10px);
        }

        .llm-stat-number {
          font-family: "Lexend", system-ui, sans-serif;
          font-weight: 700;
          font-size: 36px;
          color: #d33682;
          display: block;
        }

        .llm-stat-label {
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
          .llm-page {
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

      <div className="llm-page">
        <div className="llm-container">
          <header className="llm-header">
            <span className="llm-badge">Featured Course</span>
            <h1 className="llm-title">{courseDetails.title} <span>Course</span></h1>
            <p className="llm-subtitle">{courseDetails.subtitle}</p>
            <p className="llm-description">{courseDetails.description}</p>
          </header>

          <div className="llm-stats">
            <div className="llm-stat">
              <span className="llm-stat-number">{courseDetails.duration}</span>
              <span className="llm-stat-label">Duration</span>
            </div>
            <div className="llm-stat">
              <span className="llm-stat-number">{courseDetails.level}</span>
              <span className="llm-stat-label">Level</span>
            </div>
            <div className="llm-stat">
              <span className="llm-stat-number">{courseDetails.students}</span>
              <span className="llm-stat-label">Students</span>
            </div>
            <div className="llm-stat">
              <span className="llm-stat-number">{courseDetails.projects}</span>
              <span className="llm-stat-label">Projects</span>
            </div>
            <div className="llm-stat">
              <span className="llm-stat-number">{courseDetails.price}</span>
              <span className="llm-stat-label">Price</span>
            </div>
          </div>

          <div className="course-highlights">
            <div className="highlight-card">
              <div className="highlight-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
              </div>
              <h3>6 Comprehensive Modules</h3>
              <p>From NLP basics to building production LLM applications with RAG and agent workflows.</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
              </div>
              <h3>8+ Real-World Projects</h3>
              <p>Build chatbots, code assistants, and AI agents using the latest LLM technologies.</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <h3>Expert Instructors</h3>
              <p>Learn from professionals who have built production LLM systems at scale.</p>
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
            <h3>Ready to Master LLMs?</h3>
            <p>Join {courseDetails.students}+ students building the next generation of AI applications.</p>
            <a href="https://ladestack.in" className="cta-button">Enroll Now</a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
