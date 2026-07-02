import { Link } from 'react-router-dom'
import { formatPrice } from '../data/products'
import { MonogramS } from './Icons'

export default function ProductCard({ product }) {
  const hoverImage =
    product.images.find((src) => src.includes('side')) || product.images[1]

  const card = (
    <article className={`product-card${product.comingSoon ? ' product-card--soon' : ''}`}>
      <div className="product-card-media">
        {product.images[0] ? (
          <>
            <img src={product.images[0]} alt={`${product.name} — ${product.subtitle}`} loading="lazy" />
            {hoverImage && (
              <img
                src={hoverImage}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="product-card-img--hover"
              />
            )}
          </>
        ) : (
          <div className="product-card-placeholder">
            <MonogramS size={56} />
            <span>Awaiting the reveal</span>
          </div>
        )}
        <span className="product-card-tag">{product.tag}</span>
      </div>
      <div className="product-card-body">
        <h3 className="product-card-name">{product.name}</h3>
        <p className="product-card-subtitle">{product.subtitle}</p>
        <p className="product-card-price">
          {product.comingSoon ? 'Notify me' : formatPrice(product.price)}
        </p>
      </div>
    </article>
  )

  if (product.comingSoon) return card

  return (
    <Link to={`/product/${product.id}`} className="product-card-link">
      {card}
    </Link>
  )
}
