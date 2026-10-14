import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import {
  BookOpen, Stethoscope, Leaf, Users, Droplets,
  Zap, Heart, ArrowRight
} from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }
  })
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
}

const programs = [
  {
    img: '/prog1.png',
    cat: 'Education',
    catColor: '#10b981',
    title: 'Child Education Initiative',
    desc: 'We operate 120+ learning centers providing free quality education, digital literacy training, mid-day meals, and scholarships. Our curriculum is tailored to local languages and cultural contexts.',
    tags: ['Scholarships', 'Digital Literacy', 'Teacher Training', 'After-school Tutoring'],
    stats: [{ n: '47K+', l: 'Children' }, { n: '120+', l: 'Centers' }, { n: '96%', l: 'Retention' }]
  },
  {
    img: '/prog2.png',
    cat: 'Healthcare',
    catColor: '#f59e0b',
    title: 'Rural Health Access',
    desc: 'Mobile medical units traverse remote villages offering free OPD, diagnostic tests, medicines, maternal healthcare, and awareness campaigns for preventable diseases.',
    tags: ['Mobile Clinics', 'Maternal Care', 'Diagnostics', 'Mental Health'],
    stats: [{ n: '82K+', l: 'Patients' }, { n: '8', l: 'Mobile Units' }, { n: '200+', l: 'Villages' }]
  },
  {
    img: '/prog3.png',
    cat: 'Environment',
    catColor: '#34d399',
    title: 'Green Earth Initiative',
    desc: 'Our flagship reforestation program works with tribal farmers, schools, and local bodies to plant indigenous trees, restore water bodies, and build sustainable green corridors.',
    tags: ['Tree Planting', 'Water Bodies', 'Biodiversity', 'Climate Action'],
    stats: [{ n: '2.4M', l: 'Trees' }, { n: '18K', l: 'Hectares' }, { n: '40+', l: 'Districts' }]
  },
  {
    img: '/prog4.png',
    cat: 'Women Empowerment',
    catColor: '#a78bfa',
    title: "Women's Empowerment Hub",
    desc: 'Skill development, micro-finance access, self-help groups, and legal literacy programs that help women achieve economic independence and social equity.',
    tags: ['Skill Training', 'Micro-finance', 'Legal Aid', 'Leadership'],
    stats: [{ n: '28K+', l: 'Women' }, { n: '850+', l: 'SHGs' }, { n: '₹4.2Cr', l: 'Loans' }]
  },
  {
    img: '/prog1.png',
    cat: 'Clean Water',
    catColor: '#38bdf8',
    title: 'Clean Water & Sanitation',
    desc: 'Installing borewells, rainwater harvesting units, and community toilets in areas suffering acute water shortage and open defecation challenges.',
    tags: ['Borewells', 'SHGs', 'Sanitation', 'Hygiene Education'],
    stats: [{ n: '320+', l: 'Villages' }, { n: '1.2M', l: 'Beneficiaries' }, { n: '500+', l: 'Toilets' }]
  },
  {
    img: '/prog2.png',
    cat: 'Emergency Relief',
    catColor: '#fb923c',
    title: 'Disaster Relief & Resilience',
    desc: 'Rapid response teams mobilize within 48 hours of natural disasters — delivering food kits, shelter materials, medical aid, and psychological first aid.',
    tags: ['Rapid Response', 'Food Kits', 'Shelter', 'Trauma Support'],
    stats: [{ n: '22', l: 'Disasters' }, { n: '85K+', l: 'Assisted' }, { n: '48h', l: 'Response' }]
  },
]

export default function Programs() {
  const gridRef = useRef(null)
  const gridVisible = useInView(gridRef, { once: true, margin: '-80px' })

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
              <span className="section-label" style={{ justifyContent: 'center' }}>What We Do</span>
            </motion.div>
            <motion.h1 className="page-hero-title" variants={fadeUp} custom={0.1}>
              Programs Built for<br />
              <span className="text-gradient">Lasting Impact</span>
            </motion.h1>
            <motion.p className="page-hero-subtitle" variants={fadeUp} custom={0.2}>
              Six interconnected programs addressing the most urgent needs of underserved communities —
              each designed to create systemic, long-term change.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ======== PROGRAMS GRID ======== */}
      <section className="section" ref={gridRef}>
        <div className="container">
          <motion.div
            className="programs-full-grid"
            initial="hidden"
            animate={gridVisible ? 'visible' : 'hidden'}
            variants={stagger}
          >
            {programs.map(p => (
              <motion.div key={p.title} className="program-full-card" variants={fadeUp}>
                <div className="program-full-img-wrap" style={{ position: 'relative' }}>
                  <img src={p.img} alt={p.title} className="program-full-img" />
                  <span
                    className="program-cat-badge"
                    style={{ background: `${p.catColor}22`, color: p.catColor, border: `1px solid ${p.catColor}55` }}
                  >
                    {p.cat}
                  </span>
                </div>
                <div className="program-full-body">
                  <h3 className="program-full-title">{p.title}</h3>
                  <p className="program-full-desc">{p.desc}</p>
                  <div className="program-tags">
                    {p.tags.map(t => <span key={t} className="program-tag">{t}</span>)}
                  </div>
                  <div className="program-stats-row">
                    {p.stats.map(s => (
                      <div key={s.l} className="prog-stat">
                        <div className="prog-stat-number">{s.n}</div>
                        <div className="prog-stat-label">{s.l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
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
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="section-title" style={{ textAlign: 'center' }}>
                Support a <span>Program</span> Today
              </h2>
              <p className="section-subtitle" style={{ margin: '0 auto 40px', textAlign: 'center' }}>
                100% of your donation is directed to field programs. Zero overhead for donors.
              </p>
              <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
                <NavLink to="/contact" className="btn btn-gold">
                  <Heart size={16} /> Donate Now
                </NavLink>
                <NavLink to="/about" className="btn btn-outline">
                  Learn About Us <ArrowRight size={16} />
                </NavLink>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
