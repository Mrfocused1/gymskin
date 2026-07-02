import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

export default function Collection() {
  return (
    <main className="page">
      <section className="page-head">
        <div className="container">
          <p className="eyebrow">SUITD × GYM SKIN</p>
          <h1 className="page-title">The Collection</h1>
          <div className="gold-rule gold-rule--center" />
          <p className="page-intro">
            The first release. One flagship, five silhouettes to follow —
            each engineered around the athletic frame.
          </p>
        </div>
      </section>

      <section className="section section--flush">
        <div className="container">
          <div className="product-grid">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
