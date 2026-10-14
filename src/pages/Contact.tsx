import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle, Twitter, Facebook, Instagram, Linkedin } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }
  })
}

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }

const contactItems = [
  {
    icon: <Mail size={20} />,
    label: 'Email Us',
    value: 'info@hoperise.org',
  },
  {
    icon: <Phone size={20} />,
    label: 'Call Us',
    value: '+91 98765 43210',
  },
  {
    icon: <MapPin size={20} />,
    label: 'Head Office',
    value: '4th Floor, Samaj Bhavan, Nariman Point, Mumbai, MH 400021',
  },
]

const subjects = [
  'General Inquiry',
  'Volunteer With Us',
  'Donate / Sponsor',
  'Partnership Proposal',
  'Media & Press',
  'Program Feedback',
]

const socials = [
  { icon: <Twitter size={15} />, label: 'Twitter', handle: '@HopeRiseIndia' },
  { icon: <Facebook size={15} />, label: 'Facebook', handle: 'HopeRiseFoundation' },
  { icon: <Instagram size={15} />, label: 'Instagram', handle: '@hoperise_india' },
  { icon: <Linkedin size={15} />, label: 'LinkedIn', handle: 'HopeRise Foundation' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const formRef = useRef(null)
  const formVisible = useInView(formRef, { once: true, margin: '-80px' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <motion.div className="page-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* ======== PAGE HERO ======== */}
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="container">
          <motion.div className="page-hero-content"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <span className="section-label" style={{ justifyContent: 'center' }}>Reach Out</span>
            </motion.div>
            <motion.h1 className="page-hero-title" variants={fadeUp} custom={0.1}>
              Let's <span className="text-gradient">Connect</span><br />
              & Create Change
            </motion.h1>
            <motion.p className="page-hero-subtitle" variants={fadeUp} custom={0.2}>
              Whether you want to volunteer, donate, partner, or simply learn more —
              we'd love to hear from you. Every message matters.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ======== CONTACT BODY ======== */}
      <section className="section" ref={formRef}>
        <div className="container">
          <motion.div
            className="contact-grid"
            initial="hidden"
            animate={formVisible ? 'visible' : 'hidden'}
            variants={stagger}
          >
            {/* ---- Info Panel ---- */}
            <motion.div className="contact-info-panel" variants={fadeUp}>
              <div>
                <h2 className="contact-info-title">
                  Get in <span className="text-gradient">Touch</span>
                </h2>
                <p className="contact-info-subtitle">
                  Our team responds within 24 hours on weekdays. For urgent matters,
                  please call us directly.
                </p>
              </div>

              {contactItems.map(item => (
                <div key={item.label} className="contact-info-item">
                  <div className="contact-info-icon">{item.icon}</div>
                  <div>
                    <div className="contact-info-label">{item.label}</div>
                    <div className="contact-info-value">{item.value}</div>
                  </div>
                </div>
              ))}

              {/* Map Placeholder */}
              <div className="contact-map-placeholder">
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'repeating-linear-gradient(45deg, rgba(16,185,129,0.03) 0, rgba(16,185,129,0.03) 1px, transparent 1px, transparent 24px)',
                }} />
                <MapPin size={32} color="rgba(16,185,129,0.35)" />
                <span style={{ fontSize: '0.85rem' }}>Nariman Point, Mumbai</span>
                <span style={{ fontSize: '0.75rem', opacity: 0.5 }}>Interactive Map Coming Soon</span>
              </div>

              {/* Social */}
              <div>
                <p style={{ fontSize: '0.82rem', color: 'rgba(167,243,208,0.5)', marginBottom: 12, letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600 }}>
                  Connect Socially
                </p>
                <div className="contact-social">
                  {socials.map(s => (
                    <a key={s.label} href="#" className="contact-social-btn">
                      {s.icon} {s.handle}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* ---- Form Card ---- */}
            <motion.div className="contact-form-card" variants={fadeUp} custom={0.15}>
              {!submitted ? (
                <>
                  <h3 className="form-title">Send Us a Message</h3>
                  <p className="form-subtitle">We read every message personally and respond within 24 hours.</p>

                  <form onSubmit={handleSubmit}>
                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label" htmlFor="name">Full Name *</label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          className="form-input"
                          placeholder="Your full name"
                          value={form.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="email">Email Address *</label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          className="form-input"
                          placeholder="you@example.com"
                          value={form.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="subject">Subject *</label>
                      <select
                        id="subject"
                        name="subject"
                        className="form-select"
                        value={form.subject}
                        onChange={handleChange}
                        required
                        style={{ background: 'rgba(255,255,255,0.04)', color: form.subject ? '#f0fdf4' : '#6b7280' }}
                      >
                        <option value="" disabled>Select a subject...</option>
                        {subjects.map(s => <option key={s} value={s} style={{ background: '#0b1a11' }}>{s}</option>)}
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="message">Your Message *</label>
                      <textarea
                        id="message"
                        name="message"
                        className="form-textarea"
                        placeholder="Write your message here..."
                        value={form.message}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <motion.button
                      type="submit"
                      className="form-submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Send size={16} style={{ display: 'inline', marginRight: 8 }} />
                      Send Message
                    </motion.button>
                  </form>
                </>
              ) : (
                <motion.div
                  className="form-success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    className="success-icon"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                  >
                    <CheckCircle size={36} color="#fff" />
                  </motion.div>
                  <h3 className="success-title">Message Sent!</h3>
                  <p className="success-message">
                    Thank you for reaching out to HopeRise Foundation. Our team will respond to <strong>{form.email}</strong> within 24 hours.
                  </p>
                  <button
                    className="btn btn-outline"
                    style={{ marginTop: 8 }}
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }) }}
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
