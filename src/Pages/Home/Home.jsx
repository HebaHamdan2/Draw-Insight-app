import React from "react";
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero-banner">
        <div className="hero-content">
          <h1>Discover Your Child’s Inner World Through Their Drawings</h1>
          <p>
            Uncover patterns, emotions, and insights to nurture your child's mental and emotional well-being.
          </p>
          <button className="cta-button" onClick={() => window.location.href = "/signup"}>
            Get Started
          </button>
        </div>
      </section>
      <section className="features">
        <div className="feature-card">
          <h3>Empowering Parents with Insight</h3>
          <p>Use advanced AI to interpret your child’s drawings and monitor their psychological health.</p>
        </div>
        <div className="feature-card">
          <h3>Build a Record of Growth</h3>
          <p>Store and organize a history of your child’s artwork and psychological analysis.</p>
        </div>
        <div className="feature-card">
          <h3>Designed for Your Peace of Mind</h3>
          <p>Keep your family’s data secure with state-of-the-art technology.</p>
        </div>
      </section>
  
    </div>
  );
};

export default Home;
