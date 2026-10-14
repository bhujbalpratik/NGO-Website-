import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { Heart, ArrowRight, Shield, Eye, Users, Zap, Linkedin, Twitter } from 'lucide-react'

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

const values = [
  { icon: '🌱', title: 'Sustainability', desc: 'Every action we take considers its impact on future generations and the planet.' },
  { icon: '❤️', title: 'Compassion', desc: 'We lead with empathy, treating every individual with dignity and respect.' },
  { icon: '🤝', title: 'Community', desc: 'We build with communities, not for them — co-creating solutions that last.' },
  { icon: '🔍', title: 'Transparency', desc: 'Full financial accountability and open reporting to every stakeholder.' },
]

const timeline = [
  { year: '2010', title: 'Foundation Established', desc: 'HopeRise was founded in Mumbai with a mission to bridge opportunity gaps in rural India.' },
  { year: '2013', title: 'First Education Hub', desc: 'Launched 12 learning centers in Maharashtra, serving 4,000 children in the first year.' },
  { year: '2016', title: 'Healthcare Expansion', desc: 'Deployed 8 mobile medical units, reaching 50+ villages without hospital access.' },
  { year: '2019', title: 'Green Earth Initiative', desc: 'Began our flagship reforestation program, partnering with local farms and tribal communities.' },
  { year: '2022', title: 'National Recognition', desc: 'Awarded the National Excellence Award for Social Impact by the Ministry of Social Justice.' },
  { year: '2024', title: '150K Lives Impacted', desc: 'Reached our milestone of 150,000+ direct beneficiaries across 18 states.' },
]

const team = [
  { img: '/team1.png', name: 'Dr. Ananya Sharma', role: 'Founder & Executive Director', social: { linkedin: '#', twitter: '#' } },
  { img: '/team2.png', name: 'Arjun Mehta', role: 'Program Director', social: { linkedin: '#', twitter: '#' } },
  { img: '/team3.png', name: 'Priya Nair', role: 'Field Operations Lead', social: { linkedin: '#', twitter: '#' } },
]

export default function About() {
  const missionRef = useRef(null)
  const missionVisible = useInView(missionRef, { once: true, margin: '-80px' })
  const timelineRef = useRef(null)
  const timelineVisible = useInView(timelineRef, { once: true, margin: '-80px' })
  const teamRef = useRef(null)
  const teamVisible = useInView(teamRef, { once: true, margin: '-80px' })

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
              <span className="section-label" style={{ justifyContent: 'center' }}>Our Story</span>
            </motion.div>
            <motion.h1 className="page-hero-title" variants={fadeUp} custom={0.1}>
              Driven by <span className="text-gradient">Purpose,</span><br />
              Guided by Heart
            </motion.h1>
            <motion.p className="page-hero-subtitle" variants={fadeUp} custom={0.2}>
              For over a decade, we have stood beside communities that the world forgot — refusing to accept poverty,
              inequality, and environmental destruction as inevitable.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ======== MISSION & VALUES ======== */}
      <section className="mission-section" ref={missionRef}>
        <div className="container">
          <motion.div
            className="mission-grid"
            initial="hidden"
            animate={missionVisible ? 'visible' : 'hidden'}
            variants={stagger}
          >
            {/* Quote */}
            <motion.div variants={fadeUp}>
              <div className="mission-quote">
                <div className="mission-quote-mark">"</div>
                <p className="mission-quote-text">
                  We do not save people — we stand alongside them as they save themselves.
                  Our role is to create the conditions where human potential can flourish freely.
                </p>
                <p className="mission-quote-author">– Dr. Ananya Sharma, Founder</p>
              </div>
            </motion.div>

            {/* Values */}
            <motion.div variants={fadeUp} custom={0.15}>
              <span className="section-label">Our Values</span>
              <h2 className="section-title" style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)' }}>
                What We <span>Stand For</span>
              </h2>
              <p className="section-subtitle" style={{ marginBottom: 24 }}>
                These principles shape every decision, every program, and every relationship we build.
              </p>
              <div className="values-grid">
                {values.map(v => (
                  <div key={v.title} className="value-card">
                    <div className="value-icon">{v.icon}</div>
                    <div className="value-title">{v.title}</div>
                    <div className="value-desc">{v.desc}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="divider" />

      {/* ======== TIMELINE ======== */}
      <section className="section" ref={timelineRef}>
        <div className="container">
          <motion.div
            initial="hidden"
            animate={timelineVisible ? 'visible' : 'hidden'}
            variants={stagger}
          >
            <motion.div variants={fadeUp} style={{ textAlign: 'center' }}>
              <span className="section-label" style={{ justifyContent: 'center' }}>Our Journey</span>
              <h2 className="section-title" style={{ textAlign: 'center' }}>
                14 Years of <span>Impact</span>
              </h2>
            </motion.div>

            <div className="timeline">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  className="timeline-item"
                  variants={fadeUp}
                  custom={i * 0.08}
                >
                  {i % 2 === 0 ? (
                    <>
                      <div className="timeline-content">
                        <h3 className="timeline-title">{item.title}</h3>
                        <p className="timeline-desc">{item.desc}</p>
                      </div>
                      <div className="timeline-year">{item.year}</div>
                      <div className="timeline-empty" />
                    </>
                  ) : (
                    <>
                      <div className="timeline-empty" />
                      <div className="timeline-year">{item.year}</div>
                      <div className="timeline-content">
                        <h3 className="timeline-title">{item.title}</h3>
                        <p className="timeline-desc">{item.desc}</p>
                      </div>
                    </>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ======== TEAM ======== */}
      <section className="section" style={{ paddingTop: 0 }} ref={teamRef}>
        <div className="container">
          <motion.div
            initial="hidden"
            animate={teamVisible ? 'visible' : 'hidden'}
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <span className="section-label">The People</span>
              <h2 className="section-title">
                Meet Our <span>Team</span>
              </h2>
              <p className="section-subtitle">
                Passionate leaders with decades of combined experience in social development and community empowerment.
              </p>
            </motion.div>

            <motion.div className="team-grid" variants={stagger}>
              {team.map(member => (
                <motion.div key={member.name} className="team-card" variants={fadeUp}>
                  <div className="team-card-img-wrap">
                    <img src={member.img} alt={member.name} className="team-card-img" />
                  </div>
                  <div className="team-card-body">
                    <h3 className="team-name">{member.name}</h3>
                    <p className="team-role">{member.role}</p>
                    <div className="team-social">
                      <a href={member.social.linkedin} className="team-social-btn" aria-label="LinkedIn">
                        <Linkedin size={13} />
                      </a>
                      <a href={member.social.twitter} className="team-social-btn" aria-label="Twitter">
                        <Twitter size={13} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ======== CTA ======== */}
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
              <h2 className="section-title" style={{ textAlign: 'center' }}>
                Ready to <span>Join Us?</span>
              </h2>
              <p className="section-subtitle" style={{ margin: '0 auto 40px', textAlign: 'center' }}>
                Whether as a volunteer, donor, or partner — there's a place for you in this movement.
              </p>
              <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
                <NavLink to="/contact" className="btn btn-gold">
                  <Heart size={16} /> Get Involved
                </NavLink>
                <NavLink to="/programs" className="btn btn-outline">
                  Our Programs <ArrowRight size={16} />
                </NavLink>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
