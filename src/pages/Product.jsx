import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { IconClose, IconZoom } from '../components/Icons'
import { useCart } from '../context/CartContext'
import { formatPrice, getProduct, products, SIZES } from '../data/products'

export default function Product() {
  const { id } = useParams()
  const product = getProduct(id)
  const { addItem } = useCart()

  const [activeImage, setActiveImage] = useState(0)
  const [size, setSize] = useState(null)
  const [sizeError, setSizeError] = useState(false)
  const [openPanel, setOpenPanel] = useState('Fabric & Construction')
  const [zoomOpen, setZoomOpen] = useState(false)

  useEffect(() => {
    if (!zoomOpen) return
    const onKey = (e) => e.key === 'Escape' && setZoomOpen(false)
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [zoomOpen])

  if (!product || product.comingSoon) {
    return (
      <main className="page">
        <div className="container page-head">
          <h1 className="page-title">Coming Soon</h1>
          <div className="gold-rule gold-rule--center" />
          <p className="page-intro">This piece has not been revealed yet.</p>
          <Link to="/collection" className="btn-outline">
            Back to the Collection <span className="btn-arrow">→</span>
          </Link>
        </div>
      </main>
    )
  }

  const onAdd = () => {
    if (!size) {
      setSizeError(true)
      return
    }
    setSizeError(false)
    addItem(product.id, size)
  }

  const others = products.filter((p) => p.id !== product.id).slice(0, 3)

  return (
    <main className="page">
      <div className="container">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/collection">The Collection</Link>
          <span>/</span>
          <span aria-current="page">{product.name}</span>
        </nav>

        <div className="pdp-grid">
          {/* Gallery */}
          <div className="pdp-gallery">
            <div className="pdp-main-image">
              <img
                src={product.images[activeImage]}
                alt={`${product.name} — view ${activeImage + 1}`}
              />
              <button
                className="pdp-zoom-btn"
                onClick={() => setZoomOpen(true)}
                aria-label="Zoom image"
              >
                <IconZoom />
              </button>
            </div>
            <div className="pdp-thumbs">
              {product.images.map((src, i) => (
                <button
                  key={src}
                  className={`pdp-thumb${i === activeImage ? ' pdp-thumb--active' : ''}`}
                  onClick={() => setActiveImage(i)}
                  aria-label={`View image ${i + 1}`}
                >
                  <img src={src} alt="" />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="pdp-info">
            <p className="eyebrow">{product.tag}</p>
            <h1 className="pdp-name">{product.name}</h1>
            <p className="pdp-subtitle">{product.subtitle}</p>
            <p className="pdp-price">{formatPrice(product.price)}</p>
            <div className="gold-rule" />
            <p className="pdp-description">{product.description}</p>

            <div className="pdp-sizes">
              <div className="pdp-sizes-head">
                <span className="label">Select Size</span>
                <button className="pdp-size-guide" onClick={() => alert('Size guide coming soon.')}>
                  Size Guide
                </button>
              </div>
              <div className="size-row" role="radiogroup" aria-label="Size">
                {SIZES.map((s) => (
                  <button
                    key={s}
                    role="radio"
                    aria-checked={size === s}
                    className={`size-btn${size === s ? ' size-btn--active' : ''}`}
                    onClick={() => {
                      setSize(s)
                      setSizeError(false)
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>
              {sizeError && <p className="size-error">Please select a size.</p>}
            </div>

            <button className="btn-solid pdp-add" onClick={onAdd}>
              Add to Cart <span className="btn-arrow">→</span>
            </button>
            <p className="pdp-shipping-note">
              Complimentary express delivery &amp; first alteration.
            </p>

            <div className="accordion">
              {Object.entries(product.details).map(([title, body]) => (
                <div key={title} className="accordion-item">
                  <button
                    className="accordion-head"
                    aria-expanded={openPanel === title}
                    onClick={() => setOpenPanel(openPanel === title ? null : title)}
                  >
                    <span>{title}</span>
                    <span className="accordion-mark">{openPanel === title ? '−' : '+'}</span>
                  </button>
                  {openPanel === title && <p className="accordion-body">{body}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>

        {zoomOpen && (
          <div
            className="lightbox"
            role="dialog"
            aria-label={`${product.name} zoomed image`}
            onClick={() => setZoomOpen(false)}
          >
            <button className="lightbox-close" aria-label="Close zoom">
              <IconClose size={26} />
            </button>
            <img
              src={product.images[activeImage]}
              alt={`${product.name} — zoomed view`}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}

        {/* More from the collection */}
        <section className="section">
          <div className="section-head">
            <div>
              <p className="eyebrow">Continue</p>
              <h2 className="section-title">More From the Collection</h2>
            </div>
            <Link to="/collection" className="link-arrow">
              View All <span className="btn-arrow">→</span>
            </Link>
          </div>
          <div className="product-grid">
            {others.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
