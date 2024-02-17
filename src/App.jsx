import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { products as initialProducts } from './mocks/products.json'
import Products from './components/Products'
import Header from './components/Header'
import Footer from './components/Footer'
import { IS_DEVELOPMENT } from './config'
import { FiltersContext } from './context/filters'

//Custom Hook
function useFilters(){
  const { filters, setFilters } = useContext(FiltersContext)

  // const [filters, setFilters] = useState({
  //   category: 'all',
  //   minPrice: 0
  // })

  //const filters = useContext(FiltersContext)

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
   return { filters, filterProducts, setFilters}
}

function App() {
 const [products] = useState(initialProducts)
 const { filters, filterProducts, setFilters } = useFilters()

  const filteredProducts = filterProducts(products)

  return (
    <>
    <Header changeFilters={setFilters}/>
    <Products products={filteredProducts}/>
    {IS_DEVELOPMENT && <Footer filters={filters}/>}
    
    </>
  )
}

export default App
