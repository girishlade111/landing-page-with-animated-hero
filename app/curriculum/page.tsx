import type { Metadata } from 'next'
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: 'Curriculum | LadeStack',
  description: 'Explore our comprehensive AI and tech curriculum at LadeStack. From beginner to advanced levels, learn cutting-edge skills through hands-on projects.',
}

const courses = [
  {
    title: "AI Fundamentals",
    description: "Master the basics of artificial intelligence, machine learning concepts, and practical applications.",
    duration: "4 weeks",
    level: "Beginner",
    modules: [
      "Introduction to AI & Machine Learning",
      "Python for AI Developers",
      "Data Processing & Visualization",
      "Building Your First AI Model",
      "Ethics in AI Development"
    ]
  },
  {
    title: "Web Development Bootcamp",
    description: "Complete web development course covering modern technologies from frontend to backend.",
    duration: "12 weeks",
    level: "Beginner to Intermediate",
    modules: [
      "HTML5 & CSS3 Fundamentals",
      "JavaScript & ES6+",
      "React.js Mastery",
      "Node.js & Express",
      "Database Design (MongoDB & SQL)",
      "Deployment & DevOps Basics"
    ]
  },
  {
    title: "Advanced Machine Learning",
    description: "Deep dive into advanced ML algorithms, neural networks, and production-ready models.",
    duration: "8 weeks",
    level: "Advanced",
    modules: [
      "Deep Learning Fundamentals",
      "Neural Network Architecture",
      "Computer Vision & CNNs",
      "Natural Language Processing",
      "Reinforcement Learning",
      "Model Deployment & MLOps"
    ]
  },
  {
    title: "AI Automation & Agents",
    description: "Learn to build intelligent AI agents and automate complex workflows with AI.",
    duration: "6 weeks",
    level: "Intermediate",
    modules: [
      "AI Agent Architecture",
      "LLM Integration & Prompt Engineering",
      "Building Autonomous Agents",
      "Workflow Automation with AI",
      "API Integration & Webhooks",
      "Real-world AI Automation Projects"
    ]
  }
]

export default function Curriculum() {
  return (
    <>
      <style>{`
        .curriculum-page {
          min-height: 100vh;
          background-color: #002b36;
          padding: 120px 30px 80px;
          position: relative;
          overflow: hidden;
        }

        .curriculum-page::before {
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

        .curriculum-page::after {
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

        .curriculum-container {
          max-width: 1100px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .curriculum-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .curriculum-title {
          font-family: "Lexend", system-ui, sans-serif;
          font-weight: 700;
          font-size: clamp(48px, 8vw, 80px);
          color: #ffffff;
          text-transform: uppercase;
          line-height: 1.1;
          margin: 0 0 24px;
          letter-spacing: -1px;
        }

        .curriculum-title span {
          color: #d33682;
        }

        .curriculum-subtitle {
          font-family: "Lexend", system-ui, sans-serif;
          font-size: 20px;
          color: #b0b0b0;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .curriculum-intro {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
          margin-bottom: 60px;
        }

        .intro-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          padding: 30px;
          text-align: center;
          backdrop-filter: blur(10px);
        }

        .intro-number {
          font-family: "Lexend", system-ui, sans-serif;
          font-weight: 700;
          font-size: 42px;
          color: #d33682;
          display: block;
          margin-bottom: 8px;
        }

        .intro-label {
          font-family: "Lexend", system-ui, sans-serif;
          font-size: 16px;
          color: #a0a0a0;
        }

        .course-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          padding: 40px;
          margin-bottom: 40px;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .course-card:hover {
          border-color: rgba(211, 54, 130, 0.4);
          transform: translateY(-4px);
        }

        .course-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 16px;
          margin-bottom: 20px;
        }

        .course-title {
          font-family: "Lexend", system-ui, sans-serif;
          font-weight: 600;
          font-size: 28px;
          color: #ffffff;
          margin: 0;
        }

        .course-meta {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .meta-tag {
          background: rgba(211, 54, 130, 0.15);
          color: #d33682;
          padding: 6px 16px;
          border-radius: 20px;
          font-family: "Lexend", system-ui, sans-serif;
          font-size: 12px;
          font-weight: 500;
        }

        .course-description {
          font-family: "Lexend", system-ui, sans-serif;
          font-size: 16px;
          color: #a0a0a0;
          line-height: 1.7;
          margin: 0 0 24px;
        }

        .modules-title {
          font-family: "Lexend", system-ui, sans-serif;
          font-weight: 600;
          font-size: 16px;
          color: #ffffff;
          margin: 0 0 16px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .modules-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 12px;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .module-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 18px;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .module-icon {
          width: 32px;
          height: 32px;
          background: rgba(211, 54, 130, 0.2);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #d33682;
          flex-shrink: 0;
        }

        .module-text {
          font-family: "Lexend", system-ui, sans-serif;
          font-size: 14px;
          color: #d0d0d0;
        }

        .learning-path {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          padding: 50px 40px;
          margin-top: 60px;
          backdrop-filter: blur(10px);
        }

        .learning-path-title {
          font-family: "Lexend", system-ui, sans-serif;
          font-weight: 600;
          font-size: 32px;
          color: #ffffff;
          text-align: center;
          margin: 0 0 40px;
          text-transform: uppercase;
        }

        .path-timeline {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
        }

        .path-step {
          flex: 1;
          min-width: 200px;
          text-align: center;
          position: relative;
        }

        .path-step:not(:last-child)::after {
          content: "";
          position: absolute;
          top: 20px;
          right: -10px;
          width: calc(100% - 40px);
          height: 2px;
          background: rgba(211, 54, 130, 0.3);
        }

        .step-number {
          width: 40px;
          height: 40px;
          background: #d33682;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px;
          font-family: "Lexend", system-ui, sans-serif;
          font-weight: 700;
          font-size: 16px;
          color: #002b36;
        }

        .step-title {
          font-family: "Lexend", system-ui, sans-serif;
          font-weight: 600;
          font-size: 18px;
          color: #ffffff;
          margin: 0 0 8px;
        }

        .step-desc {
          font-family: "Lexend", system-ui, sans-serif;
          font-size: 14px;
          color: #a0a0a0;
          margin: 0;
        }

        .cta-section {
          text-align: center;
          margin-top: 60px;
          padding: 50px;
          background: rgba(211, 54, 130, 0.1);
          border-radius: 24px;
          border: 1px solid rgba(211, 54, 130, 0.3);
        }

        .cta-section h3 {
          font-family: "Lexend", system-ui, sans-serif;
          font-weight: 600;
          font-size: 28px;
          color: #ffffff;
          margin: 0 0 16px;
        }

        .cta-section p {
          font-family: "Lexend", system-ui, sans-serif;
          font-size: 16px;
          color: #b0b0b0;
          margin: 0 0 24px;
        }

        .cta-button {
          display: inline-block;
          padding: 14px 36px;
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
          .curriculum-page {
            padding: 100px 16px 60px;
          }
          .course-card {
            padding: 30px 20px;
          }
          .course-header {
            flex-direction: column;
          }
          .modules-list {
            grid-template-columns: 1fr;
          }
          .path-timeline {
            flex-direction: column;
          }
          .path-step:not(:last-child)::after {
            display: none;
          }
        }
      `}</style>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Curriculum",
            "description": "Our comprehensive AI and tech courses curriculum at LadeStack",
            "itemListElement": courses.map((course, index) => ({
              "@type": "Course",
              "name": course.title,
              "description": course.description,
              "courseLevel": course.level,
              "duration": course.duration,
              "hasCourseInstance": {
                "@type": "CourseInstance",
                "courseMode": "online",
                "courseWorkload": course.duration
              }
            }))
          })
        }}
      />

      <div className="curriculum-page">
        <div className="curriculum-container">
          <header className="curriculum-header">
            <h1 className="curriculum-title">Our <span>Curriculum</span></h1>
            <p className="curriculum-subtitle">
              Comprehensive, hands-on courses designed to take you from beginner to professional in AI and web development.
            </p>
          </header>

          <div className="curriculum-intro">
            <div className="intro-card">
              <span className="intro-number">4+</span>
              <span className="intro-label">Comprehensive Courses</span>
            </div>
            <div className="intro-card">
              <span className="intro-number">30+</span>
              <span className="intro-label">Hands-on Modules</span>
            </div>
            <div className="intro-card">
              <span className="intro-number">15+</span>
              <span className="intro-label">Real Projects</span>
            </div>
            <div className="intro-card">
              <span className="intro-number">30</span>
              <span className="intro-label">Weeks Total</span>
            </div>
          </div>

          {courses.map((course, index) => (
            <div key={index} className="course-card">
              <div className="course-header">
                <h2 className="course-title">{course.title}</h2>
                <div className="course-meta">
                  <span className="meta-tag">{course.duration}</span>
                  <span className="meta-tag">{course.level}</span>
                </div>
              </div>
              <p className="course-description">{course.description}</p>
              <h3 className="modules-title">What You'll Learn</h3>
              <ul className="modules-list">
                {course.modules.map((module, modIndex) => (
                  <li key={modIndex} className="module-item">
                    <div className="module-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <span className="module-text">{module}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <section className="learning-path">
            <h2 className="learning-path-title">Suggested Learning Path</h2>
            <div className="path-timeline">
              <div className="path-step">
                <div className="step-number">1</div>
                <h3 className="step-title">Start with Basics</h3>
                <p className="step-desc">Begin with AI Fundamentals to build a strong foundation</p>
              </div>
              <div className="path-step">
                <div className="step-number">2</div>
                <h3 className="step-title">Learn Development</h3>
                <p className="step-desc">Master web development with our comprehensive bootcamp</p>
              </div>
              <div className="path-step">
                <div className="step-number">3</div>
                <h3 className="step-title">Go Advanced</h3>
                <p className="step-desc">Dive deep into advanced machine learning concepts</p>
              </div>
              <div className="path-step">
                <div className="step-number">4</div>
                <h3 className="step-title">Build & Deploy</h3>
                <p className="step-desc">Create AI automation projects and deploy to production</p>
              </div>
            </div>
          </section>

          <div className="cta-section">
            <h3>Ready to Start Learning?</h3>
            <p>Join our courses and transform your career with in-demand AI skills.</p>
            <a href="https://ladestack.in" className="cta-button">Browse Courses</a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
