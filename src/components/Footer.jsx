import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-col brand-col">
                    <h3>Sri Lakshmi Jewellers</h3>
                    <p className="tagline">Timeless Elegance, Pure Trust.</p>
                    <div className="socials">
                        <span className="social-icon">FB</span>
                        <span className="social-icon">IG</span>
                        <span className="social-icon">TW</span>
                    </div>
                </div>

                <div className="footer-col links-col">
                    <h4>Quick Links</h4>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Services</li>
                        <li>Blog</li>
                    </ul>
                </div>

                <div className="footer-col collections-col">
                    <h4>Collections</h4>
                    <ul>
                        <li>Gold Jewellery</li>
                        <li>Silver Articles</li>
                        <li>Diamond Sets</li>
                        <li>Bridal Wear</li>
                    </ul>
                </div>

                <div className="footer-col contact-col">
                    <h4>Contact Us</h4>
                    <p>123 Gold Street, Jewellery City</p>
                    <p>+91 98765 43210</p>
                    <p>contact@srilakshmijewellers.com</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2026 Sri Lakshmi Jewellers. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
