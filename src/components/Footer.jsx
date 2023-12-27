const Footer = ({filters}) => {
    return(
        <>
        { JSON.stringify(filters, null, 2)}
            <h2>Shopping cart con useContext & useReducer</h2>
        </>
    )
}

export default Footer;