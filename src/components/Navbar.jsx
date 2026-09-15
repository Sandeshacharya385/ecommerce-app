import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function Navbar() {
  const { cartCount } = useCart()

  return (
    <nav>
      <Link to="/">Catalog</Link>
      <Link to="/cart">Cart ({cartCount})</Link>
    </nav>
  )
}

export default Navbar