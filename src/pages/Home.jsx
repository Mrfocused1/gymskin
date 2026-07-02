import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { IconDumbbell, IconShield, IconTailoring } from '../components/Icons'
import { products } from '../data/products'

const features = [
  { icon: <IconTailoring />, title: 'Precision Tailoring', copy: 'Cut for the athletic build — broad shoulders, suppressed waist, zero compromise.' },
  { icon: <IconDumbbell />, title: 'Performance Focused', copy: 'High-twist wools with natural stretch and recovery. Built to move, made to hold.' },
  { icon: <IconShield />, title: 'Built for Confidence', copy: 'Structure where it counts. Walk in like you own the room — because you do.' },
]

export default function Home() {
  // 3 shown on desktop (3-up row); the 4th appears on mobile's 2×2 grid
  const featured = products.slice(0, 4)

  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <div className="hero-watermark" aria-hidden="true">X</div>
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">A Collaboration Of</p>
            <div className="gold-rule" />
            <h1 className="hero-title">
              Power.<br />Precision.<br />Presence.
            </h1>
            <p className="hero-sub">
              Tailored performance. Engineered confidence. Designed to elevate
              every aspect of your life.
            </p>
            <Link to="/collection" className="btn-outline">
              Discover the Collection <span className="btn-arrow">→</span>
            </Link>
          </div>
          <div className="hero-media">
            <img
              src="/images/hero.jpg"
              alt="The Sovereign — navy double-breasted suit from the SUITD × GYM SKIN collaboration"
            />
          </div>
        </div>
      </section>

      {/* Feature strip */}
      <section className="features">
        <div className="container features-grid">
          {features.map((f) => (
            <div key={f.title} className="feature">
              <div className="feature-icon">{f.icon}</div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-copy">{f.copy}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured collection */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">The Collection</p>
              <h2 className="section-title">First Release</h2>
            </div>
            <Link to="/collection" className="link-arrow">
              View All <span className="btn-arrow">→</span>
            </Link>
          </div>
          <div className="product-grid product-grid--featured">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Editorial split */}
      <section className="editorial">
        <div className="container editorial-grid">
          <div className="editorial-media">
            <img
              src="/images/editorial-wide.jpg"
              alt="The Sovereign suit, studio portrait"
            />
          </div>
          <div className="editorial-copy">
            <p className="eyebrow">The Philosophy</p>
            <div className="gold-rule" />
            <h2 className="section-title">
              Engineered for the<br />
              <em>modern silhouette.</em>
            </h2>
            <p>
              Traditional tailoring was never cut for a trained physique. SUITD ×
              GYM SKIN rebuilds the pattern from the shoulder down — room where
              you've earned it, structure where it matters.
            </p>
            <Link to="/product/the-sovereign" className="btn-outline">
              Meet The Sovereign <span className="btn-arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Dark quote band */}
      <section
        className="quote-band"
        style={{ backgroundImage: "url('/images/editorial-dark.jpg')" }}
      >
        <div className="quote-band-scrim" />
        <div className="container quote-band-inner">
          <p className="eyebrow">The Standard</p>
          <blockquote>
            “A suit should not soften your presence.<br />It should sharpen it.”
          </blockquote>
          <Link to="/collection" className="btn-outline btn-outline--light">
            Enter the Collection <span className="btn-arrow">→</span>
          </Link>
        </div>
      </section>
    </main>
  )
}
