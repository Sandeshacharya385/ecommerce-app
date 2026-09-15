import { useState, useEffect } from 'react'

function CatalogPage() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch products')
        }
        return response.json()
      })
      .then((data) => {
        setProducts(data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <p>Loading products...</p>
  }

  if (error) {
    return <p>Error: {error}</p>
  }


  return (
    <div>
      <h1>Catalog Page</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title} — ${product.price}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CatalogPage