import { useCart } from '../context/CartContext'

function CartItem({ item }) {
  const { removeFromCart, updateQuantity } = useCart()

  function handleDecrease() {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1)
    } else {
      removeFromCart(item.id)
    }
  }

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} />
      <div className="cart-item-info">
        <h3>{item.title}</h3>
        <p>${item.price.toFixed(2)}</p>
      </div>
      <div className="cart-item-controls">
        <button onClick={handleDecrease}>−</button>
        <span>{item.quantity}</span>
        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
      </div>
      <p className="cart-item-subtotal">
        ${(item.price * item.quantity).toFixed(2)}
      </p>
      <button onClick={() => removeFromCart(item.id)}>Remove</button>
    </div>
  )
}


export default CartItem