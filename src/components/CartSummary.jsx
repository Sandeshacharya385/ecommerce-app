import { useCart } from '../context/CartContext'

function CartSummary() {
  const { cartCount, cartTotal } = useCart()

  return (
    <div className="cart-summary">
      <p>Items: {cartCount}</p>
      <h2>Total: ${cartTotal.toFixed(2)}</h2>
    </div>
  )
}

export default CartSummary