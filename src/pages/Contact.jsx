import React from 'react';

const Contact = () => {
    return (
        <div className="page-container fade-in">
            <header className="page-header">
                <h1>Contact Us</h1>
                <p>We'd love to hear from you</p>
            </header>
            <div className="section contact-section">
                <div className="contact-info-card">
                    <h3>Visit Our Showroom</h3>
                    <p>123 Gold Street, Jewellery City, India.</p>
                    <p><strong>Phone:</strong> +91 98765 43210</p>
                    <p><strong>Email:</strong> support@srilakshmi.com</p>
                    <p><strong>Hours:</strong> 10:00 AM - 9:00 PM</p>
                </div>

                <div className="contact-form-card">
                    <h3>Send a Message</h3>
                    <form className="contact-form">
                        <input type="text" placeholder="Your Name" />
                        <input type="email" placeholder="Your Email" />
                        <input type="tel" placeholder="Phone Number" />
                        <textarea rows="5" placeholder="Message"></textarea>
                        <button type="button" className="primary-btn">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
