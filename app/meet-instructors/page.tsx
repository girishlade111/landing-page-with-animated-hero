import type { Metadata } from 'next'
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: 'Meet Our Instructors | LadeStack',
  description: 'Learn from industry experts and experienced AI professionals at LadeStack. Our instructors have years of real-world experience in AI, machine learning, and software development.',
}

export default function MeetInstructors() {
  return (
    <>
      <style>{`
        .instructors-page {
          min-height: 100vh;
          background-color: #002b36;
          padding: 120px 30px 80px;
          position: relative;
          overflow: hidden;
        }

        .instructors-page::before {
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

        .instructors-page::after {
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

        .instructors-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .instructors-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .instructors-title {
          font-family: "Lexend", system-ui, sans-serif;
          font-weight: 700;
          font-size: clamp(48px, 8vw, 80px);
          color: #ffffff;
          text-transform: uppercase;
          line-height: 1.1;
          margin: 0 0 24px;
          letter-spacing: -1px;
        }

        .instructors-title span {
          color: #d33682;
        }

        .instructors-subtitle {
          font-family: "Lexend", system-ui, sans-serif;
          font-size: 20px;
          color: #b0b0b0;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .instructors-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 40px;
          margin-bottom: 80px;
        }

        .instructor-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          padding: 40px 30px;
          text-align: center;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .instructor-card:hover {
          transform: translateY(-8px);
          border-color: rgba(211, 54, 130, 0.4);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .instructor-avatar {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: linear-gradient(135deg, #d33682 0%, #cb4b16 100%);
          margin: 0 auto 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: "Lexend", system-ui, sans-serif;
          font-weight: 700;
          font-size: 40px;
          color: #002b36;
        }

        .instructor-name {
          font-family: "Lexend", system-ui, sans-serif;
          font-weight: 600;
          font-size: 24px;
          color: #ffffff;
          margin: 0 0 8px;
        }

        .instructor-role {
          font-family: "Lexend", system-ui, sans-serif;
          font-size: 14px;
          color: #d33682;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin: 0 0 16px;
        }

        .instructor-bio {
          font-family: "Lexend", system-ui, sans-serif;
          font-size: 15px;
          color: #a0a0a0;
          line-height: 1.7;
          margin: 0 0 20px;
        }

        .instructor-skills {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 8px;
          margin-bottom: 20px;
        }

        .skill-tag {
          background: rgba(211, 54, 130, 0.15);
          color: #d33682;
          padding: 6px 14px;
          border-radius: 20px;
          font-family: "Lexend", system-ui, sans-serif;
          font-size: 12px;
          font-weight: 500;
        }

        .instructor-social {
          display: flex;
          justify-content: center;
          gap: 16px;
        }

        .instructor-social a {
          color: #a0a0a0;
          transition: color 0.3s ease;
        }

        .instructor-social a:hover {
          color: #d33682;
        }

        .values-section {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          padding: 60px 40px;
          margin-bottom: 60px;
          backdrop-filter: blur(10px);
        }

        .values-title {
          font-family: "Lexend", system-ui, sans-serif;
          font-weight: 600;
          font-size: 32px;
          color: #ffffff;
          text-align: center;
          margin: 0 0 40px;
          text-transform: uppercase;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
        }

        .value-item {
          text-align: center;
          padding: 20px;
        }

        .value-icon {
          width: 60px;
          height: 60px;
          background: rgba(211, 54, 130, 0.15);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px;
          color: #d33682;
        }

        .value-title {
          font-family: "Lexend", system-ui, sans-serif;
          font-weight: 600;
          font-size: 18px;
          color: #ffffff;
          margin: 0 0 8px;
        }

        .value-desc {
          font-family: "Lexend", system-ui, sans-serif;
          font-size: 14px;
          color: #a0a0a0;
          line-height: 1.6;
          margin: 0;
        }

        .cta-section {
          text-align: center;
          padding: 60px;
          background: rgba(211, 54, 130, 0.1);
          border-radius: 24px;
          border: 1px solid rgba(211, 54, 130, 0.3);
        }

        .cta-section h3 {
          font-family: "Lexend", system-ui, sans-serif;
          font-weight: 600;
          font-size: 32px;
          color: #ffffff;
          margin: 0 0 20px;
        }

        .cta-section p {
          font-family: "Lexend", system-ui, sans-serif;
          font-size: 18px;
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
          .instructors-page {
            padding: 100px 16px 60px;
          }
          .instructors-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          .values-section {
            padding: 40px 20px;
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
            "@type": "ItemList",
            "name": "Our Instructors",
            "description": "Meet the expert instructors at LadeStack",
            "itemListElement": [
              {
                "@type": "Person",
                "name": "Girish Lade",
                "jobTitle": "Founder & Lead Instructor",
                "description": "Full-stack developer and AI enthusiast with 5+ years of experience",
                "url": "https://ladestack.in/meet-instructors"
              }
            ]
          })
        }}
      />

      <div className="instructors-page">
        <div className="instructors-container">
          <header className="instructors-header">
            <h1 className="instructors-title">Meet Our <span>Instructors</span></h1>
            <p className="instructors-subtitle">
              Learn from industry experts with years of real-world experience in AI, machine learning, and software development.
            </p>
          </header>

          <div className="instructors-grid">
            <div className="instructor-card">
              <div className="instructor-avatar">GL</div>
              <h3 className="instructor-name">Girish Lade</h3>
              <p className="instructor-role">Founder & Lead Instructor</p>
              <p className="instructor-bio">
                Full-stack developer and AI enthusiast with 5+ years of experience building scalable applications. 
                Passionate about teaching and helping others break into tech.
              </p>
              <div className="instructor-skills">
                <span className="skill-tag">React</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">AI/ML</span>
                <span className="skill-tag">AWS</span>
              </div>
              <div className="instructor-social">
                <a href="https://www.linkedin.com/in/girish-lade-075bba201/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="https://github.com/girishlade111" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
                <a href="https://www.instagram.com/girish_lade_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
              </div>
            </div>

            <div className="instructor-card">
              <div className="instructor-avatar">AI</div>
              <h3 className="instructor-name">Coming Soon</h3>
              <p className="instructor-role">AI Specialist</p>
              <p className="instructor-bio">
                We are constantly expanding our team with industry experts. 
                Stay tuned for more talented instructors joining our community.
              </p>
              <div className="instructor-skills">
                <span className="skill-tag">Machine Learning</span>
                <span className="skill-tag">Deep Learning</span>
                <span className="skill-tag">NLP</span>
                <span className="skill-tag">Computer Vision</span>
              </div>
            </div>

            <div className="instructor-card">
              <div className="instructor-avatar">WD</div>
              <h3 className="instructor-name">Coming Soon</h3>
              <p className="instructor-role">Web Development Expert</p>
              <p className="instructor-bio">
                We're always looking for passionate developers to join our teaching team. 
                If you're interested in teaching, we'd love to hear from you.
              </p>
              <div className="instructor-skills">
                <span className="skill-tag">React</span>
                <span className="skill-tag">Next.js</span>
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">Tailwind</span>
              </div>
            </div>
          </div>

          <section className="values-section">
            <h2 className="values-title">What Our Instructors Value</h2>
            <div className="values-grid">
              <div className="value-item">
                <div className="value-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"/><path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"/><circle cx="12" cy="12" r="2"/><path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"/><path d="M19.1 4.9C23 8.8 23 15.1 19.1 19"/></svg>
                </div>
                <h3 className="value-title">Practical Learning</h3>
                <p className="value-desc">We believe in learning by doing. Every concept is reinforced with hands-on projects.</p>
              </div>
              <div className="value-item">
                <div className="value-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </div>
                <h3 className="value-title">Community First</h3>
                <p className="value-desc">Building a supportive environment where everyone can learn and grow together.</p>
              </div>
              <div className="value-item">
                <div className="value-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                </div>
                <h3 className="value-title">Excellence</h3>
                <p className="value-desc">We strive for the highest quality in every course, project, and learning experience.</p>
              </div>
            </div>
          </section>

          <div className="cta-section">
            <h3>Want to Join Our Team?</h3>
            <p>We're always looking for passionate developers and AI experts to share their knowledge.</p>
            <a href="mailto:admin@ladestack.in" className="cta-button">Get In Touch</a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
