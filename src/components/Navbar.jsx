import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { BrandLockup, IconBag, IconClose, MonogramS } from './Icons'

const links = [
  { to: '/', label: 'Home' },
  { to: '/collection', label: 'The Collection' },
  { to: '/product/the-sovereign', label: 'The Sovereign' },
]

export default function Navbar() {
  const { count, openCart } = useCart()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header className={`navbar${scrolled ? ' navbar--solid' : ''}`}>
      <div className="navbar-inner container">
        <Link to="/" className="navbar-logo" aria-label="SUITD × GYM SKIN home">
          <MonogramS size={30} />
          <BrandLockup compact />
        </Link>

        <nav className="navbar-links" aria-label="Primary">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className="navbar-link" end={l.to === '/'}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="navbar-actions">
          <button className="navbar-cart" onClick={openCart} aria-label={`Open cart, ${count} items`}>
            <IconBag />
            {count > 0 && <span className="navbar-cart-count">{count}</span>}
          </button>
          <button
            className="navbar-burger"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`mobile-menu${menuOpen ? ' mobile-menu--open' : ''}`}>
        <button className="mobile-menu-close" onClick={() => setMenuOpen(false)} aria-label="Close menu">
          <IconClose />
        </button>
        <MonogramS size={44} />
        {links.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            className="mobile-menu-link"
            end={l.to === '/'}
            onClick={() => setMenuOpen(false)}
          >
            {l.label}
          </NavLink>
        ))}
        <div className="gold-rule" />
        <p className="mobile-menu-tag">Power. Precision. Presence.</p>
      </div>
    </header>
  )
}
