import { useState } from "react";
import ProductTable from "./ProductTable";

function SearchBar(props){
    const [name, setName] = useState ('')
    const ChangeHandler = (event) => {
        setName(event.target.value)
        props.onSearchData(event.target.value)
    }

    return (
        <div>
            <label>Search Product</label>
            <input type="text" onChange={ChangeHandler}/>
        </div>
    )
}

export default SearchBar;