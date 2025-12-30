// import { useContext } from 'react'
// import { CartContext } from '../context/CartProvider'
// import { CartCard } from '../cards/CartCard'

// export const Cart = () => {
//   const { cart } = useContext(CartContext)

//   return (
//     <div className='cart'>
//       {cart.map((el)=>{
//             return <CartCard key={el.id} {...el}/>
//       })}
//     </div>
//   )
// }


import { useContext } from 'react'
import { CartContext } from '../context/CartProvider'
import { CartCard } from '../cards/CartCard'

export const Cart = () => {
  const { cart, clearCart } = useContext(CartContext)

  const total = cart.reduce(
    (sum, item) => sum + Number(item.coursePrice),
    0
  )

  if (cart.length === 0) {
    return <h2 className="empty-cart">Your cart is empty 🛒</h2>
  }

  return (
    <div className="cart">
      <div className="cart-header">
        <h2>Your Cart</h2>
        <button className="clear-btn" onClick={clearCart}>
          Clear Cart
        </button>
      </div>

      {cart.map(el => (
        <CartCard key={el.id} {...el} />
      ))}

      <div className="cart-total">
        <h3>Total Amount: ₹{total}</h3>
      </div>
    </div>
  )
}
