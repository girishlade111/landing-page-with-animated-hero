import type { Metadata } from 'next'
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: 'Machine Learning Courses | LadeStack',
  description: 'Master machine learning with hands-on courses at LadeStack. Learn Python, TensorFlow, PyTorch, and build real-world ML projects. From beginner to advanced levels.',
}

const courseDetails = {
  title: "Machine Learning",
  subtitle: "Master the art of teaching computers to learn from data",
  description: "Our comprehensive machine learning course takes you from fundamentals to building production-ready ML models. Learn the mathematics behind the algorithms and apply them to real-world problems.",
  duration: "12 weeks",
  level: "Beginner to Advanced",
  price: "$199",
  students: "500+",
  projects: "10+",
  modules: [
    {
      title: "Module 1: Python Foundations",
      topics: ["Python Basics & Syntax", "Data Types & Variables", "Functions & Modules", "NumPy for Numerical Computing", "Pandas for Data Analysis"]
    },
    {
      title: "Module 2: Mathematics for ML",
      topics: ["Linear Algebra Fundamentals", "Probability & Statistics", "Calculus for Optimization", "Gradient Descent Algorithm", "Matrix Operations"]
    },
    {
      title: "Module 3: Supervised Learning",
      topics: ["Linear Regression", "Logistic Regression", "Decision Trees", "Random Forests", "Support Vector Machines", "Model Evaluation Metrics"]
    },
    {
      title: "Module 4: Unsupervised Learning",
      topics: ["K-Means Clustering", "Hierarchical Clustering", "Dimensionality Reduction (PCA, t-SNE)", "Anomaly Detection", "Association Rules"]
    },
    {
      title: "Module 5: Deep Learning",
      topics: ["Neural Network Fundamentals", "Backpropagation", "TensorFlow Basics", "PyTorch Essentials", "Building CNNs & RNNs"]
    },
    {
      title: "Module 6: Model Deployment",
      topics: ["Flask & FastAPI", "Docker for ML", "Cloud Deployment (AWS, GCP)", "MLOps Basics", "Model Monitoring"]
    }
  ]
}

const projects = [
  {
    title: "House Price Predictor",
    description: "Build a model to predict house prices based on various features like location, size, and amenities."
  },
  {
    title: "Customer Churn Prediction",
    description: "Create a classification model to identify customers likely to churn and help businesses retain them."
  },
  {
    title: "Image Classifier",
    description: "Build a CNN-based image classifier to recognize different objects, animals, or custom categories."
  },
  {
    title: "Sentiment Analyzer",
    description: "Develop an NLP model to analyze sentiment from social media posts, reviews, or customer feedback."
  },
  {
    title: "Recommendation System",
    description: "Build a collaborative filtering or content-based recommendation engine for products or content."
  },
  {
    title: "Fake News Detector",
    description: "Create an NLP model to detect fake news articles using text classification techniques."
  }
]

export default function MachineLearning() {
  return (
    <>
      <style>{`
        .ml-page {
          min-height: 100vh;
          background-color: #002b36;
          padding: 120px 30px 80px;
          position: relative;
          overflow: hidden;
        }

        .ml-page::before {
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

        .ml-page::after {
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

        .ml-container {
          max-width: 1100px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .ml-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .ml-badge {
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

        .ml-title {
          font-family: "Lexend", system-ui, sans-serif;
          font-weight: 700;
          font-size: clamp(48px, 8vw, 80px);
          color: #ffffff;
          text-transform: uppercase;
          line-height: 1.1;
          margin: 0 0 20px;
          letter-spacing: -1px;
        }

        .ml-title span {
          color: #d33682;
        }

        .ml-subtitle {
          font-family: "Lexend", system-ui, sans-serif;
          font-size: 24px;
          color: #ffffff;
          margin: 0 0 20px;
          font-weight: 500;
        }

        .ml-description {
          font-family: "Lexend", system-ui, sans-serif;
          font-size: 18px;
          color: #a0a0a0;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .ml-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 20px;
          margin: 50px 0;
        }

        .ml-stat {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 24px;
          text-align: center;
          backdrop-filter: blur(10px);
        }

        .ml-stat-number {
          font-family: "Lexend", system-ui, sans-serif;
          font-weight: 700;
          font-size: 36px;
          color: #d33682;
          display: block;
        }

        .ml-stat-label {
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
          .ml-page {
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

      <div className="ml-page">
        <div className="ml-container">
          <header className="ml-header">
            <span className="ml-badge">Featured Course</span>
            <h1 className="ml-title">{courseDetails.title} <span>Course</span></h1>
            <p className="ml-subtitle">{courseDetails.subtitle}</p>
            <p className="ml-description">{courseDetails.description}</p>
          </header>

          <div className="ml-stats">
            <div className="ml-stat">
              <span className="ml-stat-number">{courseDetails.duration}</span>
              <span className="ml-stat-label">Duration</span>
            </div>
            <div className="ml-stat">
              <span className="ml-stat-number">{courseDetails.level}</span>
              <span className="ml-stat-label">Level</span>
            </div>
            <div className="ml-stat">
              <span className="ml-stat-number">{courseDetails.students}</span>
              <span className="ml-stat-label">Students</span>
            </div>
            <div className="ml-stat">
              <span className="ml-stat-number">{courseDetails.projects}</span>
              <span className="ml-stat-label">Projects</span>
            </div>
            <div className="ml-stat">
              <span className="ml-stat-number">{courseDetails.price}</span>
              <span className="ml-stat-label">Price</span>
            </div>
          </div>

          <div className="course-highlights">
            <div className="highlight-card">
              <div className="highlight-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
              </div>
              <h3>6 Comprehensive Modules</h3>
              <p>From Python basics to deploying ML models in production. Every concept explained step by step.</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
              </div>
              <h3>10+ Real-World Projects</h3>
              <p>Build portfolio-worthy projects that solve real problems. Apply every concept you learn.</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <h3>Expert Instructors</h3>
              <p>Learn from industry professionals with years of ML experience in top tech companies.</p>
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
            <h3>Ready to Master Machine Learning?</h3>
            <p>Join {courseDetails.students}+ students already learning and building their ML careers.</p>
            <a href="https://ladestack.in" className="cta-button">Enroll Now</a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
