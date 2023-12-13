import { useState, useId } from 'react';
import './Filters.css'
const Filters = ({ onChange }) => {
    const [minPrice, setMinPrice] = useState(0)
    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    const handleChangeMinPrice = (event) => {
        setMinPrice(event.target.value)
        onChange(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event) => {
        onChange(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }

    return(
        <>
            <section className="filters">
              <div>
                <label htmlFor={minPriceFilterId}>Price</label>
                <input type="range" id={minPriceFilterId} min='0' max='1000' onChange={handleChangeMinPrice}/>
                <span>${minPrice}</span>
              </div>

              <div>
                <labe htmlFor={categoryFilterId}>Categoría</labe>
                <select id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value='all'>Todas</option>
                    <option value='laptops'>Laptops</option>
                    <option value='smartphones'>Móviles</option>
                    <option value='home-decoration'>Decoración de casas</option>
                    <option value='fragrances'>Fragancias</option>
                    <option value='skincare'>Cuidado de la piel</option>
                </select>
              </div>

            </section>
        </>
    )
}

export default Filters;