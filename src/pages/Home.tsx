import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import {
  Heart, ArrowRight, Users, Globe, Star, BookOpen,
  Stethoscope, Leaf, Award, ChevronRight
} from 'lucide-react'

/* ---- Animation helpers ---- */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }
  })
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
}

/* ---- Stats counter ---- */
const stats = [
  { icon: <Users size={22} />, number: '150K+', label: 'Lives Impacted' },
  { icon: <Globe size={22} />, number: '18', label: 'States Covered' },
  { icon: <Star size={22} />, number: '240+', label: 'Active Projects' },
  { icon: <Award size={22} />, number: '12K+', label: 'Volunteers' },
]

/* ---- Featured programs ---- */
const programs = [
  {
    img: '/prog1.png',
    badge: 'Education',
    title: 'Quality Education for All',
    desc: 'Providing free schooling, digital literacy, and scholarships to children in rural and underserved communities.',
    impact: '47,000+ children enrolled',
    icon: <BookOpen size={14} />
  },
  {
    img: '/prog2.png',
    badge: 'Healthcare',
    title: 'Rural Health Camps',
    desc: 'Mobile clinics, free medicines, and preventive care for remote villages without access to doctors.',
    impact: '82,000+ patients treated',
    icon: <Stethoscope size={14} />
  },
  {
    img: '/prog3.png',
    badge: 'Environment',
    title: 'Green Earth Initiative',
    desc: 'Planting millions of trees and building sustainable ecosystems to protect biodiversity.',
    impact: '2.4M trees planted',
    icon: <Leaf size={14} />
  },
]

/* ---- Testimonials ---- */
const testimonials = [
  {
    text: "HopeRise gave my daughter a chance at education I could never afford. She is now studying engineering. This organization changed our family's destiny.",
    author: 'Ramadevi S.',
    location: 'Villupuram, Tamil Nadu',
    initials: 'R'
  },
  {
    text: 'The mobile health camp reached our village for the first time in 20 years. I received treatment for chronic diabetes that I had ignored for years.',
    author: 'Bhimrao T.',
    location: 'Yavatmal, Maharashtra',
    initials: 'B'
  },
  {
    text: 'As a volunteer, watching a barren hillside transform into a thriving forest in 3 years is indescribable. This is purpose‑driven work at its finest.',
    author: 'Priya M.',
    location: 'Coorg, Karnataka',
    initials: 'P'
  },
]

export default function Home() {
  const statsRef = useRef(null)
  const statsVisible = useInView(statsRef, { once: true, margin: '-80px' })
  const programsRef = useRef(null)
  const programsVisible = useInView(programsRef, { once: true, margin: '-80px' })
  const testimonialsRef = useRef(null)
  const testimonialsVisible = useInView(testimonialsRef, { once: true, margin: '-80px' })

  return (
    <motion.div className="page-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* ======== HERO ======== */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="container">
          <motion.div className="hero-content"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.div className="hero-badge" variants={fadeUp} custom={0}>
              <span className="dot" />
              Empowering India Since 2010
            </motion.div>

            <motion.h1 className="hero-title" variants={fadeUp} custom={0.1}>
              Changing Lives,<br />
              <em>One Hope</em><br />
              at a Time.
            </motion.h1>

            <motion.p className="hero-subtitle" variants={fadeUp} custom={0.2}>
              HopeRise Foundation is dedicated to uplifting underserved communities through
              education, healthcare, environmental sustainability, and women's empowerment
              across rural India.
            </motion.p>

            <motion.div className="hero-actions" variants={fadeUp} custom={0.3}>
              <NavLink to="/programs" className="btn btn-primary">
                Explore Programs <ArrowRight size={16} />
              </NavLink>
              <NavLink to="/contact" className="btn btn-ghost">
                <Heart size={16} /> Donate Today
              </NavLink>
            </motion.div>

            <motion.div className="hero-stats" variants={fadeUp} custom={0.4}>
              {stats.map(s => (
                <div key={s.label} className="hero-stat">
                  <span className="hero-stat-number">{s.number}</span>
                  <span className="hero-stat-label">{s.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <div className="hero-scroll-indicator">
          <div className="scroll-line" />
          <span>Scroll</span>
        </div>
      </section>

      {/* ======== STATS STRIP ======== */}
      <section className="stats-section" ref={statsRef}>
        <div className="divider" />
        <div className="container">
          <motion.div
            className="stats-grid"
            initial="hidden"
            animate={statsVisible ? 'visible' : 'hidden'}
            variants={stagger}
          >
            {stats.map(s => (
              <motion.div key={s.label} className="stat-item" variants={fadeUp}>
                <div className="stat-icon">{s.icon}</div>
                <div className="stat-number">{s.number}</div>
                <div className="stat-label">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className="divider" />
      </section>

      {/* ======== PROGRAMS PREVIEW ======== */}
      <section className="section" ref={programsRef}>
        <div className="container">
          <motion.div
            initial="hidden"
            animate={programsVisible ? 'visible' : 'hidden'}
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <span className="section-label">What We Do</span>
              <h2 className="section-title">
                Programs That<br /><span>Transform Lives</span>
              </h2>
              <p className="section-subtitle">
                From remote classrooms to forest restoration — our programs address root causes, not just symptoms.
              </p>
            </motion.div>

            <motion.div className="programs-grid" variants={stagger}>
              {programs.map(p => (
                <motion.div key={p.title} className="program-card" variants={fadeUp}>
                  <div className="program-card-img-wrap">
                    <img src={p.img} alt={p.title} className="program-card-img" />
                    <div className="program-card-badge">{p.badge}</div>
                  </div>
                  <div className="program-card-body">
                    <h3 className="program-card-title">{p.title}</h3>
                    <p className="program-card-desc">{p.desc}</p>
                    <div className="program-card-footer">
                      <span className="program-card-impact">{p.icon} {p.impact}</span>
                      <NavLink to="/programs" style={{ color: 'var(--clr-emerald-400)', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: 4 }}>
                        Learn more <ChevronRight size={14} />
                      </NavLink>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} style={{ textAlign: 'center', marginTop: 48 }}>
              <NavLink to="/programs" className="btn btn-outline">
                View All Programs <ArrowRight size={16} />
              </NavLink>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ======== TESTIMONIALS ======== */}
      <section className="testimonials-section" ref={testimonialsRef}>
        <div className="container">
          <motion.div
            initial="hidden"
            animate={testimonialsVisible ? 'visible' : 'hidden'}
            variants={stagger}
          >
            <motion.div variants={fadeUp} style={{ textAlign: 'center' }}>
              <span className="section-label">Stories of Change</span>
              <h2 className="section-title" style={{ textAlign: 'center' }}>
                Voices From the<br /><span>Field</span>
              </h2>
            </motion.div>
            <motion.div className="testimonials-grid" variants={stagger}>
              {testimonials.map(t => (
                <motion.div key={t.author} className="testimonial-card" variants={fadeUp}>
                  <div className="testimonial-quote">"</div>
                  <p className="testimonial-text">{t.text}</p>
                  <div className="testimonial-author">
                    <div className="author-avatar">{t.initials}</div>
                    <div>
                      <div className="author-name">{t.author}</div>
                      <div className="author-location">{t.location}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ======== CTA BANNER ======== */}
      <section className="cta-banner">
        <div className="cta-banner-bg" />
        <div className="container">
          <div className="cta-content">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="section-label" style={{ justifyContent: 'center' }}>Join the Movement</span>
              <h2 className="section-title" style={{ textAlign: 'center' }}>
                Your <span>Contribution</span><br />Creates Real Change
              </h2>
              <p className="section-subtitle" style={{ margin: '0 auto 40px', textAlign: 'center' }}>
                Every rupee donated goes directly to our programs. 80G tax exemption available for all donors.
              </p>
              <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
                <NavLink to="/contact" className="btn btn-gold">
                  <Heart size={16} /> Donate Now
                </NavLink>
                <NavLink to="/programs" className="btn btn-outline">
                  Explore Impact <ArrowRight size={16} />
                </NavLink>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
