import type { Metadata } from 'next'
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: 'Computer Vision Courses | LadeStack',
  description: 'Master computer vision with hands-on courses at LadeStack. Learn image processing, CNNs, object detection, and build real-world CV projects. From beginner to advanced levels.',
}

const courseDetails = {
  title: "Computer Vision",
  subtitle: "Teach machines to see and understand images",
  description: "Our comprehensive computer vision course takes you from image processing fundamentals to building advanced deep learning models for object detection, face recognition, and more. Learn to build applications that can interpret visual data like humans do.",
  duration: "10 weeks",
  level: "Intermediate to Advanced",
  price: "$249",
  students: "300+",
  projects: "8+",
  modules: [
    {
      title: "Module 1: Image Processing Fundamentals",
      topics: ["Introduction to Digital Images", "Image Representation & Formats", "Pixel Operations", "Image Filtering & Convolution", "Edge Detection (Sobel, Canny)", "Image Transformations"]
    },
    {
      title: "Module 2: Classical Computer Vision",
      topics: ["Color Spaces (RGB, HSV, LAB)", "Histogram Analysis", "Feature Detection (SIFT, SURF, ORB)", "Image Segmentation", "Morphological Operations", "Template Matching"]
    },
    {
      title: "Module 3: Deep Learning for Images",
      topics: ["Convolutional Neural Networks (CNN)", "Building CNNs from Scratch", "Transfer Learning", "Popular Architectures (ResNet, VGG)", "Data Augmentation", "Training Best Practices"]
    },
    {
      title: "Module 4: Object Detection",
      topics: ["Introduction to Object Detection", "R-CNN Family (Fast R-CNN, Faster R-CNN)", "YOLO Architecture", "SSD (Single Shot Detection)", "Real-time Object Detection", "Evaluation Metrics (IoU, mAP)"]
    },
    {
      title: "Module 5: Image Segmentation",
      topics: ["Semantic Segmentation", "Instance Segmentation", "U-Net Architecture", "Mask R-CNN", "Medical Image Segmentation", "Autonomous Driving Applications"]
    },
    {
      title: "Module 6: Advanced CV Applications",
      topics: ["Face Recognition Systems", "Pose Estimation", "Image Generation (GANs basics)", "Video Analysis", "CV in Edge Devices", "Deployment & Optimization"]
    }
  ]
}

const projects = [
  {
    title: "Face Detection & Recognition",
    description: "Build a system that detects faces in images and recognizes who they belong to."
  },
  {
    title: "Object Detection System",
    description: "Create a real-time object detector that can identify multiple objects in frames."
  },
  {
    title: "Image Segmentation App",
    description: "Build a semantic segmentation model to segment different regions in images."
  },
  {
    title: "Gesture Recognition",
    description: "Develop a model that recognizes hand gestures for human-computer interaction."
  },
  {
    title: "License Plate Reader",
    description: "Create an OCR-based system to read and recognize vehicle license plates."
  },
  {
    title: "Pose Estimation",
    description: "Build a model to detect human poses and key body points in images."
  }
]

export default function ComputerVision() {
  return (
    <>
      <style>{`
        .cv-page {
          min-height: 100vh;
          background-color: #002b36;
          padding: 120px 30px 80px;
          position: relative;
          overflow: hidden;
        }

        .cv-page::before {
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

        .cv-page::after {
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

        .cv-container {
          max-width: 1100px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .cv-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .cv-badge {
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

        .cv-title {
          font-family: "Lexend", system-ui, sans-serif;
          font-weight: 700;
          font-size: clamp(48px, 8vw, 80px);
          color: #ffffff;
          text-transform: uppercase;
          line-height: 1.1;
          margin: 0 0 20px;
          letter-spacing: -1px;
        }

        .cv-title span {
          color: #d33682;
        }

        .cv-subtitle {
          font-family: "Lexend", system-ui, sans-serif;
          font-size: 24px;
          color: #ffffff;
          margin: 0 0 20px;
          font-weight: 500;
        }

        .cv-description {
          font-family: "Lexend", system-ui, sans-serif;
          font-size: 18px;
          color: #a0a0a0;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .cv-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 20px;
          margin: 50px 0;
        }

        .cv-stat {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 24px;
          text-align: center;
          backdrop-filter: blur(10px);
        }

        .cv-stat-number {
          font-family: "Lexend", system-ui, sans-serif;
          font-weight: 700;
          font-size: 36px;
          color: #d33682;
          display: block;
        }

        .cv-stat-label {
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
          .cv-page {
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

      <div className="cv-page">
        <div className="cv-container">
          <header className="cv-header">
            <span className="cv-badge">Featured Course</span>
            <h1 className="cv-title">{courseDetails.title} <span>Course</span></h1>
            <p className="cv-subtitle">{courseDetails.subtitle}</p>
            <p className="cv-description">{courseDetails.description}</p>
          </header>

          <div className="cv-stats">
            <div className="cv-stat">
              <span className="cv-stat-number">{courseDetails.duration}</span>
              <span className="cv-stat-label">Duration</span>
            </div>
            <div className="cv-stat">
              <span className="cv-stat-number">{courseDetails.level}</span>
              <span className="cv-stat-label">Level</span>
            </div>
            <div className="cv-stat">
              <span className="cv-stat-number">{courseDetails.students}</span>
              <span className="cv-stat-label">Students</span>
            </div>
            <div className="cv-stat">
              <span className="cv-stat-number">{courseDetails.projects}</span>
              <span className="cv-stat-label">Projects</span>
            </div>
            <div className="cv-stat">
              <span className="cv-stat-number">{courseDetails.price}</span>
              <span className="cv-stat-label">Price</span>
            </div>
          </div>

          <div className="course-highlights">
            <div className="highlight-card">
              <div className="highlight-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
              </div>
              <h3>6 Comprehensive Modules</h3>
              <p>From image processing basics to advanced deep learning architectures for visual recognition tasks.</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
              </div>
              <h3>8+ Real-World Projects</h3>
              <p>Build applications like face recognition, object detection, and pose estimation systems.</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <h3>Expert Instructors</h3>
              <p>Learn from industry professionals with years of computer vision experience.</p>
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
            <h3>Ready to Master Computer Vision?</h3>
            <p>Join {courseDetails.students}+ students building the future of visual AI.</p>
            <a href="https://ladestack.in" className="cta-button">Enroll Now</a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
