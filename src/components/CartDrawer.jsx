import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { formatPrice, getProduct } from '../data/products'
import { IconClose } from './Icons'

export default function CartDrawer() {
  const { items, subtotal, isOpen, closeCart, updateQty, removeItem } = useCart()

  return (
    <>
      <div
        className={`cart-overlay${isOpen ? ' cart-overlay--open' : ''}`}
        onClick={closeCart}
        aria-hidden="true"
      />
      <aside
        className={`cart-drawer${isOpen ? ' cart-drawer--open' : ''}`}
        aria-label="Shopping cart"
        aria-hidden={!isOpen}
      >
        <div className="cart-head">
          <h3>Your Selection</h3>
          <button onClick={closeCart} aria-label="Close cart" className="cart-close">
            <IconClose />
          </button>
        </div>
        <div className="gold-rule" />

        {items.length === 0 ? (
          <div className="cart-empty">
            <p>Your cart is empty.</p>
            <Link to="/collection" className="btn-outline" onClick={closeCart}>
              Discover the Collection <span className="btn-arrow">→</span>
            </Link>
          </div>
        ) : (
          <>
            <ul className="cart-items">
              {items.map((item) => {
                const product = getProduct(item.id)
                if (!product) return null
                return (
                  <li key={`${item.id}-${item.size}`} className="cart-item">
                    <Link to={`/product/${product.id}`} onClick={closeCart} className="cart-item-media">
                      {product.images[0] ? (
                        <img src={product.images[0]} alt={product.name} />
                      ) : (
                        <span className="cart-item-placeholder">S</span>
                      )}
                    </Link>
                    <div className="cart-item-info">
                      <p className="cart-item-name">{product.name}</p>
                      <p className="cart-item-meta">
                        {product.subtitle} — Size {item.size}
                      </p>
                      <div className="cart-item-controls">
                        <div className="qty-stepper">
                          <button
                            onClick={() => updateQty(item.id, item.size, item.qty - 1)}
                            aria-label="Decrease quantity"
                          >
                            −
                          </button>
                          <span>{item.qty}</span>
                          <button
                            onClick={() => updateQty(item.id, item.size, item.qty + 1)}
                            aria-label="Increase quantity"
                          >
                            +
                          </button>
                        </div>
                        <button
                          className="cart-item-remove"
                          onClick={() => removeItem(item.id, item.size)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                    <span className="cart-item-price">
                      {formatPrice(product.price * item.qty)}
                    </span>
                  </li>
                )
              })}
            </ul>

            <div className="cart-foot">
              <div className="gold-rule" />
              <div className="cart-subtotal">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <p className="cart-note">Complimentary express delivery &amp; first alteration.</p>
              <button
                className="btn-solid"
                onClick={() => alert('Checkout is coming soon — this is a front-end preview.')}
              >
                Proceed to Checkout <span className="btn-arrow">→</span>
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  )
}
