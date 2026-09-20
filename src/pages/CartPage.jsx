import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import CartItem from '../components/CartItem'
import CartSummary from '../components/CartSummary'

function CartPage() {
  const { cartItems } = useCart()

  if (cartItems.length === 0) {
    return (
      <div className="cart-empty">
        <h1>Your Cart</h1>
        <p>Your cart is empty.</p>
        <Link to="/">Browse the catalog</Link>
      </div>
    )
  }

  return (
    <div>
      <h1>Your Cart</h1>
      <div className="cart-list">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <CartSummary />
    </div>
  )
}

export default CartPage