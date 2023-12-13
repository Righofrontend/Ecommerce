import AddToCartIcon from "./Icons";
import './Products.css';

const Products = ({products}) => {
    return(
        <main className="products">
            <ul>
                {products.slice(0, 100).map(product => {
                    return(
                        <li key={product.id}>
                            <img src={product.thumbnail} alt={product.title} />
                            <div>
                                <strong>{product.title}</strong> - ${product.price}
                            </div>
                            <div>
                                <button style={{backgroundColor:'red'}}>
                                <AddToCartIcon/>

                                </button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </main>
    )
}

export default Products;