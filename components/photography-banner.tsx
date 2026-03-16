"use client"

import type React from "react"
import { useState, useEffect } from "react"

const PhotographyBanner: React.FC = () => {
  const [currentText, setCurrentText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const texts = ["builders.", "FOUNDERS."]

  useEffect(() => {
    const typeSpeed = isDeleting ? 40 : 100
    const currentFullText = texts[currentIndex]

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < currentFullText.length) {
          setCurrentText(currentFullText.substring(0, currentText.length + 1))
        } else {
          // Finished typing, start deleting after delay
          setTimeout(() => setIsDeleting(true), 1500)
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentText.substring(0, currentText.length - 1))
        } else {
          // Finished deleting, move to next text
          setIsDeleting(false)
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length)
        }
      }
    }, typeSpeed)

    return () => clearTimeout(timer)
  }, [currentText, currentIndex, isDeleting, texts])

  return (
    <>
      <style>{`
        /* Font faces */
        @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@700&family=Roboto:wght@400&display=swap');



        /* Component styles */
        .photography-banner,
        .photography-banner * {
          box-sizing: border-box;
        }
        
        .photography-banner {
          margin: 0;
          background-color: #002b36;
          
          background-image: url("https://www.yudiz.com/codepen/photography-banner/frame.png");
          background-size: cover;
          background-repeat: no-repeat;
          overflow-x: hidden;
          min-height: 100vh;
          width: 100%;
        }

        .photography-banner *::selection {
          background-color: rgba(241, 231, 40, 0.2);
          color: #ffffff;
        }

        .info-section {
          height: 100vh;
          min-height: 780px;
          padding: 0 0 0 30px;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          position: relative;
          z-index: 1;
          user-select: none;
          overflow: hidden;
        }

        .info-section::before {
          content: "";
          border-radius: 197.5px 0px;
          opacity: 0.4;
          background: #d33682;
          filter: blur(162px);
          height: 35%;
          width: 55%;
          position: absolute;
          top: -40%;
          left: -66%;
          transform: translate(50%, 50%);
          z-index: -1;
        }

        /* Left part */
        .left-part {
          padding: 20px 0 0;
          overflow: hidden;
        }

        .left-part h1 {
          margin: 0;
          color: #fff;
          font-family: "Lexend", sans-serif;
          font-weight: 700;
          font-size: clamp(48px, 12vw, 160px);
          line-height: 0.75;
          font-style: normal;
          text-transform: uppercase;
        }

        .left-part h1 .text {
          color: #d33682;
          display: block;
          height: clamp(100px, 15vw, 120px);
        }

        .left-part h1 .d-flex {
          display: flex;
          align-items: center;
        }

        .left-part h1 .char {
          transform: translateY(0);
          transition: transform 0.5s;
          animation: slideUp 0.3s ease-out forwards;
        }

        .typed-cursor {
          display: none !important;
        }

        @keyframes slideUp {
          from {
            transform: translateY(-515px);
          }
          to {
            transform: translateY(0);
          }
        }

        .left-part p {
          width: 72%;
          margin: 24px 0 0;
          color: #fff;
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: 1.7;
          font-family: "Lexend", system-ui, sans-serif;
          opacity: 0.85;
        }

        /* Button */
        .book-link {
          margin: 40px 0 0;
          padding: 0;
          border: 0;
          font-size: 18px;
          line-height: 1.4;
          color: #f1f1f1;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          font-family: "Lexend", system-ui, sans-serif;
          font-weight: 600;
          font-style: normal;
          display: inline-flex;
          align-items: center;
          gap: 16px;
          position: relative;
          text-decoration: none;
          cursor: pointer;
        }

        .book-link .linktext {
          position: relative;
          overflow: hidden;
          display: inline-block;
        }

        .book-link .linktext::before {
          position: absolute;
          content: "";
          left: 0;
          bottom: 6px;
          width: 100%;
          height: 3px;
          background-color: #ffffff;
          transform: scaleX(1);
          transition: transform 250ms ease-in-out;
          transform-origin: 0 0;
        }

        .book-link:hover .linktext:before {
          transform: scaleX(0);
          transform-origin: 100% 100%;
        }

        .book-link .arrow {
          height: 36px;
          width: 36px;
          top: -5px;
          display: inline-block;
          position: relative;
          overflow: hidden;
        }

        .book-link .arrow::before,
        .book-link .arrow::after {
          position: absolute;
          content: "";
          background-color: #d33682;
          transition: all ease-in-out 0.35s;
          transform-origin: 0 0;
          border-radius: 30px;
        }

        .book-link .arrow::before {
          height: 2px;
          width: 100%;
          top: 0;
          right: 0;
        }

        .book-link .arrow::after {
          width: 2px;
          height: 100%;
          top: 0;
          right: 0;
        }

        .book-link:hover .arrow::before {
          width: 65%;
        }

        .book-link:hover .arrow::after {
          height: 65%;
        }

        .book-link .arrow span {
          background-color: #d33682;
          height: 2px;
          width: 100%;
          display: inline-block;
          transform: rotate(-45deg) translate(-3px, -1px);
          transform-origin: right top;
          border-radius: 30px;
          position: relative;
          transition: all ease-in-out 0.35s;
          position: absolute;
          top: 0;
          left: 0;
        }

        .book-link .arrow span::before {
          background-color: #d33682;
          content: "";
          height: 100%;
          width: 15px;
          left: -15px;
          top: 0;
          position: absolute;
        }

        /* Right part */
        .right-part {
          background-color: transparent;
          height: 588px;
          width: 588px;
          margin: 0 0 0 auto;
          margin-right: -14px;
          display: block;
          position: relative;
          z-index: 1;
          flex-shrink: 0;
        }

        .right-part::before {
          content: "";
          border-radius: 197.5px 0px;
          opacity: 0.4;
          background: #d33682;
          filter: blur(112px);
          height: 35%;
          width: 55%;
          position: absolute;
          top: 50%;
          right: 33%;
          transform: translate(50%, -50%);
          z-index: -1;
        }

        .particles-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 0;
        }

        .particle {
          position: absolute;
          background: rgba(211, 54, 130, 0.6);
          border-radius: 50%;
          pointer-events: none;
          animation: float linear infinite;
        }

        .particle:nth-child(odd) {
          background: rgba(203, 75, 22, 0.4);
        }

        .particle:nth-child(3n) {
          background: rgba(255, 255, 255, 0.2);
        }

        @keyframes float {
          0% {
            transform: translateX(-100px) translateY(0px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateX(calc(100vw + 100px)) translateY(-100px) rotate(360deg);
            opacity: 0;
          }
        }

        .bg-line {
          position: absolute;
          top: 0;
          right: 0;
          width: 50%;
          height: 85px;
          z-index: -1;
          overflow: hidden;
          display: flex;
          display: -webkit-flex;
          white-space: nowrap;
        }

        .bg-line img {
          position: relative;
          flex-shrink: 0;
          -webkit-flex-shrink: 0;
          animation: 26s linear infinite;
        }

        .bg-line img:nth-child(1) {
          animation-name: first-text;
        }

        .bg-line img:nth-child(2) {
          animation-name: second-text;
        }

        @keyframes first-text {
          50% {
            transform: translateX(-100%);
            opacity: 1;
          }
          50.05% {
            opacity: 0;
          }
          50.1% {
            transform: translateX(100%);
            opacity: 1;
          }
          100% {
            transform: translateX(0%);
          }
        }

        @keyframes second-text {
          50% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(-200%);
          }
          0% {
            transform: translateX(0%);
          }
        }

        .bg-dash-circle {
          position: absolute;
          bottom: -35px;
          right: -13px;
          z-index: -1;
          width: 180px;
          aspect-ratio: 1/1;
        }

        .bg-dash-circle img {
          height: 100%;
          width: 100%;
          object-fit: cover;
          object-position: center center;
          animation: circle-rotate 18s linear infinite;
        }

        @keyframes circle-rotate {
          0% {
            transform: rotate(0);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .hero-image {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80%;
          height: auto;
          z-index: 2;
          border-radius: 12px;
          opacity: 0.9;
        }

        /* Responsive */
        @media screen and (min-width: 1500px) {
          .info-section {
            padding-left: 120px;
          }
        }

        @media screen and (min-width: 1400px) {
          .info-section {
            padding-left: 100px;
          }
        }

        @media screen and (max-width: 1199px) {
          .bg-line {
            height: 68px;
          }
          .right-part {
            height: 400px;
            width: 400px;
          }
          .right-part .d-flex {
            gap: 20px;
          }
          .bg-dash-circle {
            width: 130px;
          }
        }

        @media screen and (max-width: 767px) {
          .photography-banner {
            overflow-x: hidden;
          }
          
          .info-section {
            display: block;
            padding: 0;
            overflow: visible;
            min-height: auto;
            height: auto;
          }
          
          .bg-line {
            height: 52px;
          }
          
          .left-part {
            padding: 40px 16px 60px;
            overflow: visible;
          }
          
          .right-part {
            height: 334px;
            width: 334px;
            margin: 0 auto;
            margin-right: auto;
          }
          
          .left-part h1 .text {
            height: 88px;
          }
          
          .left-part p {
            font-size: 12px;
            width: 96%;
          }
          
          .bg-dash-circle {
            width: 80px;
          }
        }

        /* Features Section */
        .features-section {
          padding: 100px 30px;
          background-color: #073642;
          position: relative;
          overflow: hidden;
        }

        .features-section::before {
          content: "";
          border-radius: 197.5px 0px;
          opacity: 0.3;
          background: #d33682;
          filter: blur(140px);
          height: 40%;
          width: 40%;
          position: absolute;
          top: 20%;
          right: -20%;
          z-index: -1;
        }

        .features-container {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 60px;
          align-items: center;
        }

        .features-content h2 {
          color: #fff;
          font-family: "Lexend", system-ui, sans-serif;
          font-weight: 700;
          font-size: clamp(36px, 5vw, 72px);
          line-height: 1.1;
          margin: 0 0 30px;
          text-transform: uppercase;
          letter-spacing: -0.5px;
        }

        .features-content h2 .highlight {
          color: #d33682;
        }

        .features-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .feature-item {
          padding: 25px 0;
          border-bottom: 1px solid #333;
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .feature-icon {
          width: 50px;
          height: 50px;
          background: #d33682;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          font-weight: bold;
          color: #002b36;
          flex-shrink: 0;
        }

        .feature-text h3 {
          color: #fff;
          font-family: "Lexend";
          font-size: 18px;
          margin: 0 0 8px;
          text-transform: uppercase;
        }

        .feature-text p {
          color: #b0b0b0;
          font-family: "Lexend", system-ui, sans-serif;
          font-size: 15px;
          margin: 0;
          line-height: 1.6;
        }

        /* Testimonials Section */
        .testimonials-section {
          padding: 100px 30px;
          background-color: #002b36;
          position: relative;
          overflow: hidden;
        }

        .testimonials-section::before {
          content: "";
          border-radius: 197.5px 0px;
          opacity: 0.4;
          background: #d33682;
          filter: blur(120px);
          height: 50%;
          width: 30%;
          position: absolute;
          top: 50%;
          left: -15%;
          transform: translateY(-50%);
          z-index: -1;
        }

        .testimonials-container {
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }

        .testimonials-title {
          color: #fff;
          font-family: "Lexend", system-ui, sans-serif;
          font-weight: 700;
          font-size: clamp(36px, 5vw, 64px);
          line-height: 1.1;
          margin: 0 0 80px;
          text-transform: uppercase;
          letter-spacing: -0.5px;
        }

        /* Replaced grid with marquee scroller */
        .testimonials-marquee {
          display: flex;
          animation: scroll 30s linear infinite;
          gap: 40px;
          width: max-content;
        }

        .testimonials-marquee:hover {
          animation-play-state: paused;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .testimonial-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid #333;
          border-radius: 20px;
          padding: 40px 30px;
          position: relative;
          backdrop-filter: blur(10px);
          width: 400px;
          flex-shrink: 0;
        }

        .testimonial-quote {
          color: #e0e0e0;
          font-family: "Lexend", system-ui, sans-serif;
          font-weight: 400;
          font-size: 16px;
          line-height: 1.75;
          margin: 0 0 30px;
          font-style: italic;
        }

        .testimonial-author {
          display: flex;
          font-family: "Lexend", system-ui, sans-serif;
          align-items: center;
          gap: 15px;
        }

        .author-avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: #d33682;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          color: #002b36;
        }

        .author-info h4 {
          color: #cb4b16;
          font-family: "Lexend", system-ui, sans-serif;
          font-size: 14px;
          margin: 0;
          text-transform: uppercase;
          font-weight: 600;
          letter-spacing: 0.5px;
        }

        .author-info p {
          color: #b0b0b0;
          font-family: "Lexend", system-ui, sans-serif;
          font-size: 13px;
          margin: 4px 0 0;
          font-weight: 400;
        }

        /* CTA Section */
        .cta-section {
          padding: 120px 30px;
          background-color: #073642;
          position: relative;
          overflow: hidden;
        }

        .cta-section::before {
          content: "";
          border-radius: 197.5px 0px;
          opacity: 0.6;
          background: #d33682;
          filter: blur(180px);
          height: 60%;
          width: 80%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: -1;
        }

        .cta-container {
          max-width: 800px;
          margin: 0 auto;
        }

        .cta-title {
          color: #fff;
          font-family: "Lexend", system-ui, sans-serif;
          font-weight: 700;
          font-size: clamp(48px, 8vw, 100px);
          line-height: 1;
          margin: 0 0 30px;
          text-transform: uppercase;
          letter-spacing: -1px;
        }

        .cta-subtitle {
          color: #d33682;
          font-family: "Lexend", system-ui, sans-serif;
          font-size: 20px;
          line-height: 1.6;
          margin: 0 0 50px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          font-weight: 400;
        }

        .cta-buttons {
          display: flex;
          gap: 30px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .cta-button {
          padding: 16px 36px;
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
          border: 2px solid #d33682;
        }

        .cta-button:hover {
          background: transparent;
          color: #d33682;
        }

        .cta-button.secondary {
          background: transparent;
          color: #fff;
          border: 2px solid #fff;
        }

        .cta-button.secondary:hover {
          background: transparent;
          color: #d33682;
          border: 2px solid #d33682;
        }

        /* Responsive adjustments for new sections */
        @media screen and (max-width: 1199px) {
          .features-section,
          .testimonials-section,
          .cta-section {
            padding: 80px 20px;
          }
          .features-container {
            gap: 40px;
          }
          .testimonials-marquee {
            gap: 30px;
          }
          .cta-buttons {
            gap: 20px;
          }
        }

        @media screen and (max-width: 767px) {
          .features-section,
          .testimonials-section,
          .cta-section {
            padding: 60px 16px;
          }
          .features-container {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          .testimonials-marquee {
            gap: 25px;
          }
          .testimonial-card {
            padding: 30px 20px;
          }
          .cta-buttons {
            flex-direction: column;
            align-items: center;
            gap: 15px;
          }
          .cta-button {
            width: 100%;
            max-width: 300px;
          }
        }
      `}</style>

      <div className="photography-banner">
        <main>
          <section className="info-section">
            <div className="left-part">
              <h1>
                <span className="d-flex">
                  {["w", "e", " ", "m", "a", "k", "e"].map((char, index) => (
                    <span key={index} className="char tracking-tighter" style={{ animationDelay: `${index * 0.08}s` }}>
                      {char === " " ? "\u00A0" : char}
                    </span>
                  ))}
                </span>
                <span className="text tracking-tighter">{currentText}</span>
              </h1>
              <p className="lexend tracking-widest">
                We create classes every next month with our new talented AI builders
              </p>
              <a href="https://ladestack.in" className="book-link">
                <span className="linktext tracking-tighter text-3xl">Start Building Now</span>
                <span className="arrow">
                  <span></span>
                </span>
              </a>
            </div>
            <div className="right-part">
              <img src="/images/ai-startup.png" alt="AI Startup" className="hero-image" />
              <div className="particles-container">
                {Array.from({ length: 20 }, (_, i) => (
                  <div
                    key={i}
                    className="particle"
                    style={{
                      width: `${Math.random() * 8 + 4}px`,
                      height: `${Math.random() * 8 + 4}px`,
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDuration: `${Math.random() * 20 + 15}s`,
                      animationDelay: `${Math.random() * 10}s`,
                    }}
                  />
                ))}
              </div>
              <div className="bg-line">
                <img
                  src="https://www.yudiz.com/codepen/photography-banner/wave.svg"
                  alt="Line"
                  style={{ filter: "hue-rotate(280deg) saturate(1.5)" }}
                />
                <img
                  src="https://www.yudiz.com/codepen/photography-banner/wave.svg"
                  alt="Line"
                  style={{ filter: "hue-rotate(280deg) saturate(1.5)" }}
                />
              </div>
              <div className="bg-dash-circle">
                <img
                  src="https://www.yudiz.com/codepen/photography-banner/dash-circle.svg"
                  alt="dash-circle"
                  style={{ filter: "hue-rotate(280deg) saturate(1.5)" }}
                />
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="features-section">
            <div className="features-container">
              <div className="features-content">
                <h2>Why Choose Our AI Classes?</h2>
              </div>
              <ul className="features-list">
                <li className="feature-item">
                  <div className="feature-icon">01</div>
                  <div className="feature-text">
                    <h3>AI Industry Experts</h3>
                    <p className="font-light tracking-wider">
                      Learn from industry professionals with years of experience in AI and machine learning
                    </p>
                  </div>
                </li>
                <li className="feature-item">
                  <div className="feature-icon">02</div>
                  <div className="feature-text">
                    <h3>Build Real AI Projects</h3>
                    <p className="tracking-wider">
                      Practice with cutting-edge tools and real-world AI projects to build your portfolio
                    </p>
                  </div>
                </li>
                <li className="feature-item">
                  <div className="feature-icon">03</div>
                  <div className="feature-text">
                    <h3>Small Class Sizes</h3>
                    <p className="tracking-wider">
                      Get personalized attention with our limited enrollment approach for maximum AI learning
                    </p>
                  </div>
                </li>
                <li className="feature-item">
                  <div className="feature-icon">04</div>
                  <div className="feature-text">
                    <h3>AI Career Guidance</h3>
                    <p className="tracking-wider">
                      Network with AI professionals and get guidance on building your tech career
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="testimonials-section">
            <div className="testimonials-container">
              <h2 className="testimonials-title">What Our Students Say</h2>
              {/* Created marquee with duplicated testimonials */}
              <div className="testimonials-marquee">
                <div className="testimonial-card">
                  <p className="testimonial-quote">
                    "The AI automation course completely transformed my perspective. The techniques I learned here are
                    invaluable."
                  </p>
                  <div className="testimonial-author">
                    <div className="author-avatar">SM</div>
                    <div className="author-info">
                      <h4>Sarah Martinez</h4>
                      <p>AI Engineer</p>
                    </div>
                  </div>
                </div>
                <div className="testimonial-card">
                  <p className="testimonial-quote">
                    "Amazing machine learning bootcamp! The instructors are patient and the hands-on approach made all
                    the difference in my learning."
                  </p>
                  <div className="testimonial-author">
                    <div className="author-avatar">DJ</div>
                    <div className="author-info">
                      <h4>David Johnson</h4>
                      <p>ML Engineer</p>
                    </div>
                  </div>
                </div>
                <div className="testimonial-card">
                  <p className="testimonial-quote">
                    "From beginner to professional - this program gave me everything I needed to start my AI startup.
                    Highly recommend this course."
                  </p>
                  <div className="testimonial-author">
                    <div className="author-avatar">EL</div>
                    <div className="author-info">
                      <h4>Emma Lee</h4>
                      <p>AI Startup Founder</p>
                    </div>
                  </div>
                </div>
                {/* Duplicated testimonials for seamless loop */}
                <div className="testimonial-card">
                  <p className="testimonial-quote">
                    "The AI automation course completely transformed my perspective. The techniques I learned here are
                    invaluable."
                  </p>
                  <div className="testimonial-author">
                    <div className="author-avatar">SM</div>
                    <div className="author-info">
                      <h4>Sarah Martinez</h4>
                      <p>AI Engineer</p>
                    </div>
                  </div>
                </div>
                <div className="testimonial-card">
                  <p className="testimonial-quote">
                    "Amazing machine learning bootcamp! The instructors are patient and the hands-on approach made all
                    the difference in my learning."
                  </p>
                  <div className="testimonial-author">
                    <div className="author-avatar">DJ</div>
                    <div className="author-info">
                      <h4>David Johnson</h4>
                      <p>ML Engineer</p>
                    </div>
                  </div>
                </div>
                <div className="testimonial-card">
                  <p className="testimonial-quote">
                    "From beginner to professional - this program gave me everything I needed to start my AI startup.
                    Highly recommend this course."
                  </p>
                  <div className="testimonial-author">
                    <div className="author-avatar">EL</div>
                    <div className="author-info">
                      <h4>Emma Lee</h4>
                      <p>AI Startup Founder</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="cta-section">
            <div className="cta-container">
              <h2 className="cta-title text-center">Ready to Start?</h2>
              <p className="cta-subtitle">
                Join hundreds of builders who have already transformed their skills with AI. Your tech journey starts
                with a single click.
              </p>
              <div className="cta-buttons">
                <a href="https://ladestack.in" className="cta-button">
                  Start Learning
                </a>
                <a href="https://ladestack.in" className="cta-button secondary">
                  View AI Courses
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}

export default PhotographyBanner
