import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <section className="foooter">
      <div className="quick-links">
        <h3>Quick Links</h3>
    <ul>
      <li>Home</li>
      <li>FAQs</li>
      <li>Privacy Policy</li>
    </ul>
      </div>
      <div className="social-media">
        <h3>Social Media</h3>
    <ul>
      <li><a href="facbook.com">Facebook</a></li>
      <li><a href="instagram.com">Instagram</a></li>
      <li><a href="Twitter.com"></a>Twitter</li>
      <li><a href="Pinterest.com"></a>Pinterest</li>
    </ul>
      </div>
      <div className="contact-info">
        <h3>Contact Information</h3>
    <ul>
      <li>123 Toy St, Toyland</li>
      <li>Phone: 123-456-7890</li>
      <li>Email: info@playfultoys.com</li>
    </ul>
      </div>
    </section>
  )
}
export default Footer;