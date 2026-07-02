import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BrandLockup } from './Icons'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const onSubscribe = (e) => {
    e.preventDefault()
    if (email.trim()) setSubscribed(true)
  }

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <BrandLockup />
          <p className="footer-tagline">
            Tailored performance. Engineered confidence. Designed to elevate every
            aspect of your life.
          </p>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Explore</h4>
          <Link to="/">Home</Link>
          <Link to="/collection">The Collection</Link>
          <Link to="/product/the-sovereign">The Sovereign</Link>
        </div>

        <div className="footer-col footer-newsletter">
          <h4 className="footer-heading">Join the List</h4>
          <p>First access to new releases and private fittings.</p>
          {subscribed ? (
            <p className="footer-subscribed">Welcome to the inner circle.</p>
          ) : (
            <form onSubmit={onSubscribe} className="footer-form">
              <input
                type="email"
                required
                placeholder="EMAIL ADDRESS"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Email address"
              />
              <button type="submit">Subscribe</button>
            </form>
          )}
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} SUITD × GYM SKIN. All rights reserved.</span>
        <span className="footer-motto">Power. Precision. Presence.</span>
      </div>
    </footer>
  )
}
