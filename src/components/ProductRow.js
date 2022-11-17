function ProductRow (props){
    
    const product = props.product

    
    return (
        <div>
            <h1 className={!product.inStock && 'redColor'}>    {product.name}   </h1> 
            <h1> {product.category}</h1> 
        </div>
       
    )
}

export default ProductRow;