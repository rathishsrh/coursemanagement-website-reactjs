import React, { useContext } from 'react'
import { CartContext } from '../context/CartProvider'

export const CartCard = ({
  id,
  courseImage,
  courseName,
  courseDuration,
  courseAuthor,
  coursePrice
}) => {
  const { removeFromCart } = useContext(CartContext)

  return (
    <div className="cartcard">
      <img src={courseImage} alt={courseName} />

      <div className="cart-details">
        <h3>{courseName}</h3>
        <p><strong>Duration:</strong> {courseDuration}</p>
        <p><strong>Author:</strong> {courseAuthor}</p>
        <p><strong>Price:</strong> ₹{coursePrice}</p>

        <button onClick={() => removeFromCart(id)}>
          Remove
        </button>
      </div>
    </div>
  )
}
