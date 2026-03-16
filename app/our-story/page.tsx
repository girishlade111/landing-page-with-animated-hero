import type { Metadata } from 'next'
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: 'Our Story | LadeStack',
  description: 'Discover the journey of LadeStack - transforming tech education with cutting-edge AI solutions and empowering the next generation of builders.',
}

export default function OurStory() {
  return (
    <>
      <style>{`
        .our-story-page {
          min-height: 100vh;
          background-color: #002b36;
          padding: 120px 30px 80px;
          position: relative;
          overflow: hidden;
        }

        .our-story-page::before {
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

        .our-story-page::after {
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

        .story-container {
          max-width: 900px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .story-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .story-title {
          font-family: "Lexend", system-ui, sans-serif;
          font-weight: 700;
          font-size: clamp(48px, 8vw, 80px);
          color: #ffffff;
          text-transform: uppercase;
          line-height: 1.1;
          margin: 0 0 24px;
          letter-spacing: -1px;
        }

        .story-title span {
          color: #d33682;
        }

        .story-subtitle {
          font-family: "Lexend", system-ui, sans-serif;
          font-size: 20px;
          color: #b0b0b0;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .story-section {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          padding: 50px 40px;
          margin-bottom: 40px;
          backdrop-filter: blur(10px);
        }

        .story-section h2 {
          font-family: "Lexend", system-ui, sans-serif;
          font-weight: 600;
          font-size: 28px;
          color: #d33682;
          text-transform: uppercase;
          margin: 0 0 24px;
          letter-spacing: 1px;
        }

        .story-section p {
          font-family: "Lexend", system-ui, sans-serif;
          font-size: 17px;
          color: #d0d0d0;
          line-height: 1.8;
          margin: 0 0 16px;
        }

        .story-section p:last-child {
          margin-bottom: 0;
        }

        .story-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 30px;
          margin: 60px 0;
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(211, 54, 130, 0.3);
          border-radius: 20px;
          padding: 40px 30px;
          text-align: center;
        }

        .stat-number {
          font-family: "Lexend", system-ui, sans-serif;
          font-weight: 700;
          font-size: 48px;
          color: #d33682;
          display: block;
          margin-bottom: 8px;
        }

        .stat-label {
          font-family: "Lexend", system-ui, sans-serif;
          font-size: 14px;
          color: #a0a0a0;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .story-cta {
          text-align: center;
          margin-top: 60px;
          padding: 50px;
          background: rgba(211, 54, 130, 0.1);
          border-radius: 24px;
          border: 1px solid rgba(211, 54, 130, 0.3);
        }

        .story-cta h3 {
          font-family: "Lexend", system-ui, sans-serif;
          font-weight: 600;
          font-size: 32px;
          color: #ffffff;
          margin: 0 0 20px;
        }

        .story-cta p {
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
          .our-story-page {
            padding: 100px 16px 60px;
          }
          .story-section {
            padding: 30px 20px;
          }
          .story-stats {
            grid-template-columns: 1fr 1fr;
            gap: 20px;
          }
          .stat-card {
            padding: 30px 20px;
          }
          .stat-number {
            font-size: 36px;
          }
        }
      `}</style>

      <div className="our-story-page">
        <div className="story-container">
          <header className="story-header">
            <h1 className="story-title">Our <span>Story</span></h1>
            <p className="story-subtitle">
              From a simple idea to a movement — we're building the future of tech education, one builder at a time.
            </p>
          </header>

          <div className="story-stats">
            <div className="stat-card">
              <span className="stat-number">500+</span>
              <span className="stat-label">Students Trained</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">50+</span>
              <span className="stat-label">Projects Built</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">20+</span>
              <span className="stat-label">AI Courses</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">10K+</span>
              <span className="stat-label">Community</span>
            </div>
          </div>

          <section className="story-section">
            <h2>The Beginning</h2>
            <p>
              LadeStack started with a simple vision: make cutting-edge AI education accessible to everyone. 
              What began as a small initiative to teach AI basics has grown into a thriving community of 
              builders, creators, and tech enthusiasts.
            </p>
            <p>
              Founded by Girish Lade, a passionate developer and AI enthusiast, we believed that the future 
              belongs to those who can build with AI — not just use it. Our mission is to empower the next 
              generation of tech leaders with practical, hands-on AI skills.
            </p>
          </section>

          <section className="story-section">
            <h2>Our Mission</h2>
            <p>
              We're dedicated to transforming how people learn AI and machine learning. Unlike traditional 
              education, we believe in learning by building real projects that solve real problems.
            </p>
            <p>
              Every course we create is designed with one goal in mind: to help you go from beginner to 
              professional as quickly as possible, with skills that actually matter in the real world.
            </p>
          </section>

          <section className="story-section">
            <h2>What Makes Us Different</h2>
            <p>
              <strong>Hands-On Learning:</strong> No boring lectures. We build real AI applications from day one.
            </p>
            <p>
              <strong>Industry Experts:</strong> Learn from practitioners who work in the AI field daily.
            </p>
            <p>
              <strong>Community First:</strong> Join thousands of builders who support each other's growth.
            </p>
            <p>
              <strong>Cutting-Edge Content:</strong> Our courses are constantly updated to reflect the latest 
              in AI technology and industry trends.
            </p>
          </section>

          <section className="story-section">
            <h2>Looking Forward</h2>
            <p>
              The AI revolution is just beginning, and we're excited to be at the forefront. Our goal is to 
              reach 100,000 builders by 2027 and continue expanding our course catalog to cover every major 
              area of AI and machine learning.
            </p>
            <p>
              Whether you're a complete beginner or an experienced developer looking to upskill, LadeStack 
              is your gateway to the future of technology.
            </p>
          </section>

          <div className="story-cta">
            <h3>Join Our Journey</h3>
            <p>Ready to start building the future with AI?</p>
            <a href="https://ladestack.in" className="cta-button">Get Started</a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
