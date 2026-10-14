import { NavLink } from 'react-router-dom'
import { Leaf, Twitter, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'

const quickLinks = ['Home', 'About', 'Programs', 'Contact']
const programs = ['Child Education', 'Rural Healthcare', 'Reforestation', "Women's Empowerment", 'Clean Water', 'Emergency Relief']
const quickRoutes: Record<string, string> = {
  Home: '/', About: '/about', Programs: '/programs', Contact: '/contact'
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <NavLink to="/" className="navbar-logo footer-logo-section" style={{ display: 'inline-flex' }}>
              <div className="logo-icon">
                <Leaf size={20} color="#fff" />
              </div>
              <div className="logo-text">
                <span className="logo-name">HopeRise Foundation</span>
                <span className="logo-tagline">Empowering Communities Since 2010</span>
              </div>
            </NavLink>
            <p className="footer-desc">
              We believe every individual deserves dignity, opportunity, and a healthy environment. Together, we build brighter
              futures for underserved communities across India.
            </p>
            <div className="footer-social">
              {[
                { Icon: Twitter, label: 'Twitter' },
                { Icon: Facebook, label: 'Facebook' },
                { Icon: Instagram, label: 'Instagram' },
                { Icon: Linkedin, label: 'LinkedIn' },
                { Icon: Youtube, label: 'YouTube' }
              ].map(({ Icon, label }) => (
                <a key={label} href="#" className="footer-social-link" aria-label={label}>
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map(link => (
                <li key={link}>
                  <NavLink to={quickRoutes[link]} className="footer-link">{link}</NavLink>
                </li>
              ))}
              <li><a href="#" className="footer-link">Annual Report</a></li>
              <li><a href="#" className="footer-link">Media & Press</a></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="footer-col-title">Our Programs</h4>
            <ul className="footer-links">
              {programs.map(prog => (
                <li key={prog}>
                  <a href="#" className="footer-link">{prog}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="footer-col-title">Stay Updated</h4>
            <p className="footer-desc" style={{ marginBottom: 16 }}>
              Get our monthly impact report and stories of change delivered to your inbox.
            </p>
            <div className="newsletter-input-wrap">
              <input
                type="email"
                className="newsletter-input"
                placeholder="Your email address"
              />
              <button className="newsletter-btn">Join</button>
            </div>
            <p style={{ marginTop: 16, fontSize: '0.76rem', color: 'rgba(167,243,208,0.35)' }}>
              🔒 No spam, ever. Unsubscribe at any time.
            </p>
          </div>
        </div>

        <div className="divider" />

        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2024 HopeRise Foundation. All rights reserved. Registered NGO · CIN: U85300MH2010NPL12345
          </p>
          <div className="footer-bottom-links">
            <a href="#" className="footer-bottom-link">Privacy Policy</a>
            <a href="#" className="footer-bottom-link">Terms of Use</a>
            <a href="#" className="footer-bottom-link">80G Certificate</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
