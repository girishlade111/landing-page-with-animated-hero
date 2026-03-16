import type { Metadata } from 'next'
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: 'Careers | LadeStack',
  description: 'Join the LadeStack team! Explore career opportunities in AI education, web development, and tech. Work with cutting-edge technology and help shape the future of tech education.',
}

const jobOpenings = [
  {
    title: "AI Course Instructor",
    type: "Full-time",
    location: "Remote",
    description: "Teach AI and machine learning courses to students worldwide. Create engaging content and mentor learners through their journey.",
    requirements: [
      "3+ years of experience in AI/ML development",
      "Strong communication and presentation skills",
      "Experience teaching or mentoring",
      "Proficiency in Python, TensorFlow, or PyTorch"
    ]
  },
  {
    title: "Full-Stack Developer",
    type: "Full-time",
    location: "Remote",
    description: "Build and maintain our learning platform. Work on exciting features and improve the student experience.",
    requirements: [
      "2+ years of full-stack development experience",
      "Proficiency in React, Next.js, and Node.js",
      "Experience with databases (MongoDB, PostgreSQL)",
      "Strong problem-solving skills"
    ]
  },
  {
    title: "Content Writer - Tech",
    type: "Part-time",
    location: "Remote",
    description: "Create high-quality educational content for our courses. Translate complex technical concepts into easy-to-learn materials.",
    requirements: [
      "Strong writing skills in English",
      "Technical background in web development or AI",
      "Ability to explain concepts clearly",
      "Experience creating educational content"
    ]
  },
  {
    title: "Community Manager",
    type: "Full-time",
    location: "Remote",
    description: "Build and nurture our student community. Organize events, answer questions, and create engaging experiences.",
    requirements: [
      "Excellent communication skills",
      "Experience in community management",
      "Tech-savvy and quick learner",
      "Customer-focused mindset"
    ]
  }
]

const benefits = [
  {
    icon: "🏠",
    title: "Remote First",
    description: "Work from anywhere in the world. We care about your results, not your location."
  },
  {
    icon: "💰",
    title: "Competitive Pay",
    description: "Salary packages that match or exceed industry standards. Your skills deserve fair compensation."
  },
  {
    icon: "📚",
    title: "Learning Budget",
    description: "Annual budget for courses, conferences, and books. We invest in your growth."
  },
  {
    icon: "🏥",
    title: "Health Benefits",
    description: "Comprehensive health insurance for you and your family. Your wellbeing matters to us."
  },
  {
    icon: "⏰",
    title: "Flexible Hours",
    description: "Work when you're most productive. We focus on outcomes, not hours logged."
  },
  {
    icon: "🌱",
    title: "Career Growth",
    description: "Clear growth paths and regular performance reviews. We want to see you succeed."
  }
]

export default function Careers() {
  return (
    <>
      <style>{`
        .careers-page {
          min-height: 100vh;
          background-color: #002b36;
          padding: 120px 30px 80px;
          position: relative;
          overflow: hidden;
        }

        .careers-page::before {
          content: "";
          border-radius: 197.5px 0px;
          opacity: 0.3;
          background: #d33682;
          filter: blur(180px);
          height: 50%;
          width: 60%;
          position: absolute;
          top: 10%;
          left: -30%;
          z-index: 0;
        }

        .careers-page::after {
          content: "";
          border-radius: 197.5px 0px;
          opacity: 0.2;
          background: #cb4b16;
          filter: blur(150px);
          height: 40%;
          width: 50%;
          position: absolute;
          bottom: 10%;
          right: -20%;
          z-index: 0;
        }

        .careers-container {
          max-width: 1000px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .careers-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .careers-title {
          font-family: "Lexend", system-ui, sans-serif;
          font-weight: 700;
          font-size: clamp(48px, 8vw, 80px);
          color: #ffffff;
          text-transform: uppercase;
          line-height: 1.1;
          margin: 0 0 24px;
          letter-spacing: -1px;
        }

        .careers-title span {
          color: #d33682;
        }

        .careers-subtitle {
          font-family: "Lexend", system-ui, sans-serif;
          font-size: 20px;
          color: #b0b0b0;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .why-join {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          padding: 50px 40px;
          margin-bottom: 50px;
          backdrop-filter: blur(10px);
        }

        .why-join-title {
          font-family: "Lexend", system-ui, sans-serif;
          font-weight: 600;
          font-size: 32px;
          color: #ffffff;
          text-align: center;
          margin: 0 0 40px;
          text-transform: uppercase;
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
        }

        .benefit-card {
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }

        .benefit-icon {
          font-size: 32px;
          flex-shrink: 0;
        }

        .benefit-content h3 {
          font-family: "Lexend", system-ui, sans-serif;
          font-weight: 600;
          font-size: 18px;
          color: #ffffff;
          margin: 0 0 8px;
        }

        .benefit-content p {
          font-family: "Lexend", system-ui, sans-serif;
          font-size: 14px;
          color: #a0a0a0;
          line-height: 1.6;
          margin: 0;
        }

        .openings-title {
          font-family: "Lexend", system-ui, sans-serif;
          font-weight: 600;
          font-size: 32px;
          color: #ffffff;
          text-align: center;
          margin: 0 0 40px;
          text-transform: uppercase;
        }

        .job-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          padding: 30px;
          margin-bottom: 24px;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .job-card:hover {
          border-color: rgba(211, 54, 130, 0.4);
          transform: translateY(-2px);
        }

        .job-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 12px;
        }

        .job-title {
          font-family: "Lexend", system-ui, sans-serif;
          font-weight: 600;
          font-size: 22px;
          color: #ffffff;
          margin: 0;
        }

        .job-tags {
          display: flex;
          gap: 8px;
        }

        .job-tag {
          background: rgba(211, 54, 130, 0.15);
          color: #d33682;
          padding: 4px 12px;
          border-radius: 16px;
          font-family: "Lexend", system-ui, sans-serif;
          font-size: 12px;
          font-weight: 500;
        }

        .job-description {
          font-family: "Lexend", system-ui, sans-serif;
          font-size: 15px;
          color: #a0a0a0;
          line-height: 1.6;
          margin: 0 0 16px;
        }

        .job-requirements-title {
          font-family: "Lexend", system-ui, sans-serif;
          font-weight: 600;
          font-size: 14px;
          color: #ffffff;
          margin: 0 0 12px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .job-requirements {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .requirement-item {
          background: rgba(255, 255, 255, 0.05);
          color: #b0b0b0;
          padding: 6px 12px;
          border-radius: 8px;
          font-family: "Lexend", system-ui, sans-serif;
          font-size: 13px;
        }

        .culture-section {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          padding: 50px 40px;
          margin-top: 50px;
          backdrop-filter: blur(10px);
        }

        .culture-title {
          font-family: "Lexend", system-ui, sans-serif;
          font-weight: 600;
          font-size: 32px;
          color: #ffffff;
          text-align: center;
          margin: 0 0 40px;
          text-transform: uppercase;
        }

        .culture-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
        }

        .culture-item {
          text-align: center;
          padding: 20px;
        }

        .culture-icon {
          width: 60px;
          height: 60px;
          background: rgba(211, 54, 130, 0.15);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px;
          font-size: 28px;
        }

        .culture-item h3 {
          font-family: "Lexend", system-ui, sans-serif;
          font-weight: 600;
          font-size: 18px;
          color: #ffffff;
          margin: 0 0 8px;
        }

        .culture-item p {
          font-family: "Lexend", system-ui, sans-serif;
          font-size: 14px;
          color: #a0a0a0;
          line-height: 1.6;
          margin: 0;
        }

        .cta-section {
          text-align: center;
          margin-top: 50px;
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
          .careers-page {
            padding: 100px 16px 60px;
          }
          .why-join, .culture-section {
            padding: 40px 20px;
          }
          .job-card {
            padding: 24px 20px;
          }
          .cta-section {
            padding: 40px 20px;
          }
        }
      `}</style>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "LadeStack",
            "jobPosting": jobOpenings.map(job => ({
              "@type": "JobPosting",
              "title": job.title,
              "description": job.description,
              "employmentType": job.type.toUpperCase().replace("-", "_"),
              "jobLocation": {
                "@type": "Place",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": job.location,
                  "addressCountry": "IN"
                }
              },
              "hiringOrganization": {
                "@type": "Organization",
                "name": "LadeStack",
                "sameAs": "https://ladestack.in"
              }
            }))
          })
        }}
      />

      <div className="careers-page">
        <div className="careers-container">
          <header className="careers-header">
            <h1 className="careers-title">Join Our <span>Team</span></h1>
            <p className="careers-subtitle">
              Build the future of AI education with us. We're looking for passionate people to help shape how the world learns.
            </p>
          </header>

          <section className="why-join">
            <h2 className="why-join-title">Why Join LadeStack?</h2>
            <div className="benefits-grid">
              {benefits.map((benefit, index) => (
                <div key={index} className="benefit-card">
                  <span className="benefit-icon">{benefit.icon}</span>
                  <div className="benefit-content">
                    <h3>{benefit.title}</h3>
                    <p>{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <h2 className="openings-title">Open Positions</h2>

          {jobOpenings.map((job, index) => (
            <div key={index} className="job-card">
              <div className="job-header">
                <h3 className="job-title">{job.title}</h3>
                <div className="job-tags">
                  <span className="job-tag">{job.type}</span>
                  <span className="job-tag">{job.location}</span>
                </div>
              </div>
              <p className="job-description">{job.description}</p>
              <h4 className="job-requirements-title">Requirements</h4>
              <div className="job-requirements">
                {job.requirements.map((req, reqIndex) => (
                  <span key={reqIndex} className="requirement-item">{req}</span>
                ))}
              </div>
            </div>
          ))}

          <section className="culture-section">
            <h2 className="culture-title">Our Culture</h2>
            <div className="culture-grid">
              <div className="culture-item">
                <div className="culture-icon">🚀</div>
                <h3>Innovation First</h3>
                <p>We encourage creative solutions and new ideas. Your innovations can directly impact thousands of students.</p>
              </div>
              <div className="culture-item">
                <div className="culture-icon">🤝</div>
                <h3>Collaborative</h3>
                <p>We work together across teams. Everyone's voice matters and contributes to our success.</p>
              </div>
              <div className="culture-item">
                <div className="culture-icon">🎯</div>
                <h3>Results Driven</h3>
                <p>We focus on what matters most. Clear goals and measurable outcomes guide our decisions.</p>
              </div>
              <div className="culture-item">
                <div className="culture-icon">💡</div>
                <h3>Continuous Learning</h3>
                <p>We never stop growing. Learning is part of our daily work, not just a buzzword.</p>
              </div>
            </div>
          </section>

          <div className="cta-section">
            <h3>Don't See the Right Role?</h3>
            <p>We're always looking for talented people. Send us your resume and we'll keep you in mind for future opportunities.</p>
            <a href="mailto:admin@ladestack.in?subject=General%20Inquiry" className="cta-button">Get In Touch</a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
