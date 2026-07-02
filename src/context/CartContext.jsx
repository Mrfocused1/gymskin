import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { getProduct } from '../data/products'

const CartContext = createContext(null)

const STORAGE_KEY = 'gymskin-cart'

function loadCart() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed.filter((i) => getProduct(i.id)) : []
  } catch {
    return []
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(loadCart)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items])

  const addItem = (id, size) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === id && i.size === size)
      if (existing) {
        return prev.map((i) =>
          i.id === id && i.size === size ? { ...i, qty: i.qty + 1 } : i
        )
      }
      return [...prev, { id, size, qty: 1 }]
    })
    setIsOpen(true)
  }

  const updateQty = (id, size, qty) => {
    setItems((prev) =>
      qty <= 0
        ? prev.filter((i) => !(i.id === id && i.size === size))
        : prev.map((i) => (i.id === id && i.size === size ? { ...i, qty } : i))
    )
  }

  const removeItem = (id, size) =>
    setItems((prev) => prev.filter((i) => !(i.id === id && i.size === size)))

  const { count, subtotal } = useMemo(() => {
    let count = 0
    let subtotal = 0
    for (const item of items) {
      const product = getProduct(item.id)
      if (!product) continue
      count += item.qty
      subtotal += product.price * item.qty
    }
    return { count, subtotal }
  }, [items])

  const value = {
    items,
    count,
    subtotal,
    addItem,
    updateQty,
    removeItem,
    isOpen,
    openCart: () => setIsOpen(true),
    closeCart: () => setIsOpen(false),
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
