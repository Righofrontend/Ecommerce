import Filters from "./Filters";

const Header = ({ changeFilters }) => {
    return(
        <>
            <h1>React Shop</h1>
            <Filters onChange={changeFilters} />
        </>
    )
}

export default Header;