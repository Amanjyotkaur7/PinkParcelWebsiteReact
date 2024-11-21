import React, { useState } from "react";
import "./GynacConsultation.css";
import "./Global.css";

const GynacConsultation = () => {
  const [appointments, setAppointments] = useState({
    priya: false,
    anjali: false,
    ritu: false,
  });

  const handleBookNow = (doctor) => {
    setAppointments((prev) => ({ ...prev, [doctor]: true }));
  };

  return (
    <div className="gynac-container">
      {/* Header Section */}
      <div className="gynac-header">
        <h1>Gynac Consultation</h1>
        <p>Your health, our priority. Consult top gynecologists for expert advice.</p>
      </div>

      {/* Why Choose Us Section */}
      <div className="why-choose-us">
        <h2>Why Choose Us?</h2>
        <div className="reasons-card-container">
          <div className="reason-card">
            <i className="bi bi-person-check-fill"></i>
            <h3>Experienced Specialists</h3>
            <p>Highly experienced gynecologists with years of expertise.</p>
          </div>
          <div className="reason-card">
            <i className="bi bi-heart-pulse"></i>
            <h3>Personalized Care</h3>
            <p>Tailored health solutions to meet your unique needs.</p>
          </div>
          <div className="reason-card">
            <i className="bi bi-laptop"></i>
            <h3>Online Consultations</h3>
            <p>Convenient access to health advice from the comfort of your home.</p>
          </div>
          <div className="reason-card">
            <i className="bi bi-wallet2"></i>
            <h3>Affordable Services</h3>
            <p>Quality care that is accessible and budget-friendly.</p>
          </div>
        </div>
      </div>

      {/* Doctors Section */}
      <div className="gynac-doctors">
        <h2>Meet Our Specialists</h2>
        <div className="doctor-card-container">
          {/* Doctor 1 */}
          <div className="doctor-card">
            <img
             src="./img/d1.jpg"
              alt="Dr. Priya Sharma"
              className="doctor-img"
            />
            <h3>Dr. Priya Sharma</h3>
            <p>Specialist in reproductive health and menstrual disorders.</p>
            {appointments.priya ? (
              <p className="appointment-booked">Appointment Booked</p>
            ) : (
              <button
                className="book-now-btn"
                onClick={() => handleBookNow("priya")}
              >
                Book Now
              </button>
            )}
          </div>

          {/* Doctor 2 */}
          <div className="doctor-card">
            <img
               src="./img/d2.jpg"
              alt="Dr. Anjali Mehta"
              className="doctor-img"
            />
            <h3>Dr. Anjali Mehta</h3>
            <p>Expert in prenatal and postnatal care.</p>
            {appointments.anjali ? (
              <p className="appointment-booked">Appointment Booked</p>
            ) : (
              <button
                className="book-now-btn"
                onClick={() => handleBookNow("anjali")}
              >
                Book Now
              </button>
            )}
          </div>

          {/* Doctor 3 */}
          <div className="doctor-card">
            <img
              src="./img/d3.webp"
              alt="Dr. Ritu Singh"
              className="doctor-img"
            />
            <h3>Dr. Ritu Singh</h3>
            <p>Focus on hormonal health and menopause management.</p>
            {appointments.ritu ? (
              <p className="appointment-booked">Appointment Booked</p>
            ) : (
              <button
                className="book-now-btn"
                onClick={() => handleBookNow("ritu")}
              >
                Book Now
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-card-container">
          <div className="testimonial-card">
            <p>
              “Dr. Priya's advice changed my life. She was so understanding and
              helpful throughout the process.”
            </p>
            <h4>- Shweta Singh</h4>
          </div>
          <div className="testimonial-card">
            <p>
              “Dr. Anjali is the best! She made my prenatal journey so smooth
              and stress-free. Highly recommended.”
            </p>
            <h4>- Meera Patel</h4>
          </div>
          <div className="testimonial-card">
            <p>
              “Dr. Ritu explained everything about menopause management in such
              a simple way. I feel confident now.”
            </p>
            <h4>- Anu Kapoor</h4>
          </div>
        </div>
      </div>
      <div className="sub">
                <h1>Subscribe to our emails</h1>
                <h3>Join our email list for exclusive offers and the latest news.</h3>
            </div>

            <div className="email-input-container">
                <input type="email" placeholder="Email" className="email-input" />
                <button className="arrow-button">→</button>
            </div>

            {/* Footer Section */}
            <div className="footer-section">
                <p className="company-name">PinkParcel Services LLP</p>
                <p className="contact-number">+91 98778 29376</p>
                <p className="contact-email">getpinkparcelindia@gmail.com</p>
            </div>

            <div className="policies">
                <span>© 2024, Pink Parcel Powered by Shopify · </span>
                <a href="#refund-policy" className="policy-link">Refund policy</a> ·
                <a href="#privacy-policy" className="policy-link">Privacy policy</a> ·
                <a href="#terms-service" className="policy-link">Terms of service</a> ·
                <a href="#shipping-policy" className="policy-link">Shipping policy</a>
            </div>
    </div>

  );
};

export default GynacConsultation;
