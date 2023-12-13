import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { products } from './mocks/products.json'
import Products from './components/Products'
import Header from './components/Header'

function App() {
 
    const [filters, setFilters] = useState({
      category: 'all',
      minPrice: 0
    })
  
  
  const filterProducts = (products) => {
    return products.filter(product => {
      return(
        product.price >= filters.minPrice && (
        filters.category === 'all' ||
      product.category === filters.category
        )
      )
    })
   }

  const filteredProducts = filterProducts(products)

  return (
    <>
    <Header changeFilters={setFilters}/>
    <Products products={filteredProducts}/>
    
    </>
  )
}

export default App
