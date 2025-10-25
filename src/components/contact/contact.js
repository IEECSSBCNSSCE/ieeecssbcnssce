import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p className="lead">
            Get in touch with IEEE SB CS NSSCE — we'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="contact-info container">
        <h2>Contact Information</h2>
        <div className="info-grid">
          <div className="info-card">
            <div className="icon">📍</div>
            <h3>Address</h3>
            <p>
              NSS College of Engineering Palakkad, Akathethara, Kerala, India
              PIN - 678008
            </p>
          </div>
          <div className="info-card">
            <div className="icon">📧</div>
            <h3>Email</h3>
            <p>
              <a href="mailto:ieeecssbcnssce@gmail.com">
                ieeecssbcnssce@gmail.com
              </a>
            </p>
          </div>
          <div className="info-card">
            <div className="icon">🔗</div>
            <h3>LinkedIn</h3>
            <p>
              <a
                href="https://www.linkedin.com/in/ieee-cs-sbc-nssce-62878a357/"
                target="_blank"
                rel="noreferrer"
              >
                IEEE CS SB NSSCE
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="team-section container">
        <h2>Our Team</h2>
        <div className="team-panels">
          <div className="panel">
            <h3>IEEE SB Panel</h3>
            <ul className="team-list">
              <li>
                <strong>Branch Counselor:</strong> Dr. Vijitha S
              </li>
              <li>
                <strong>SB Chair:</strong> Adithya C
              </li>
              <li>
                <strong>SB Vice Chair:</strong> Jyotsna Menon
              </li>
              <li>
                <strong>SB Treasurer:</strong> Abhijith M, Athul S Menon
              </li>
            </ul>
          </div>
          <div className="panel">
            <h3>IEEE SB CS Society Panel</h3>
            <ul className="team-list">
              <li>
                <strong>Chair:</strong> Abhijith M
              </li>
              <li>
                <strong>Vice Chair:</strong> Jyotsna Menon
              </li>
              <li>
                <strong>Secretary:</strong> John Varghese Benny
              </li>
              <li>
                <strong>Treasurer:</strong> Karunya S
              </li>
            </ul>
            <h4>Core Members</h4>
            <ul className="core-members">
              <li>Ardra A R</li>
              <li>Athul S Menon</li>
              <li>Krishna M Nair</li>
              <li>Nasiya K</li>
              <li>Karthika C</li>
              <li>Badhra Krishna</li>
              <li>Bliss Shite</li>
              <li>Bithov K</li>
            </ul>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Contact;
