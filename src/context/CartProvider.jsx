import { createContext, useState } from "react"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  function addToCart(course) {
    setCart(prev => {
      if (prev.some(item => item.id === course.id)) return prev
      return [...prev, course]
    })
  }

  function removeFromCart(id) {
    setCart(prev => prev.filter(item => item.id !== id))
  }

  function clearCart() {
    setCart([])
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  )
}
