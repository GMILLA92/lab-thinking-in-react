import ProductRow from "./ProductRow";

function ProductTable (props){
    const products = props.products
    return (
        <div>
            <h1>List of products</h1>
                {products.map((product)=> {
                    return (
                        <div key={product.id}>
                            <ProductRow product = {product}/>
                        </div>
                    )
                })}
        </div>
    )
}

export default ProductTable;