import SearchBar from "./SearchBar";
import { useState } from 'react';
import jsonData from './../data.json';
import ProductTable from "./ProductTable";


function ProductsPage(props) {
    
    const [products, setProducts] = useState(jsonData);
    const [productFiltered, setProductFilter] = useState([])

    const searchHandler = (searchingString) => {
       
        const searchedString = products.filter((product) => {
            return product.name.toLowerCase().includes(searchingString.toLowerCase())
        })

        setProductFilter(searchedString)
    }


return (
    <div>
        <h1>IronStore</h1>
        <SearchBar onSearchData={searchHandler} />
        <ProductTable products={productFiltered} />
    </div>
    )
}

export default ProductsPage;