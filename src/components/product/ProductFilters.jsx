import { useState } from "react"
import { useDispatch } from "react-redux"
import { searchProducts } from "../../features/products/productsSlice"


function ProductFilters(){

const dispatch = useDispatch()

const [search,setSearch] = useState("")

const handleSearch = (e)=>{

const value = e.target.value

setSearch(value)

dispatch(searchProducts(value))

}

return(

<div className="filters">

<input
type="text"
placeholder="Search products..."
className="search-bar"
value={search}
onChange={handleSearch}
/>

</div>

)

}

export default ProductFilters
