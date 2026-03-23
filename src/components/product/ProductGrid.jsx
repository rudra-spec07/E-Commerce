import { useSelector } from "react-redux"
import ProductCard from "./ProductCard"
import ProductSkeleton from "./ProductSkeleton"

function ProductGrid(){

const products = useSelector(state=>state.products.filtered)

if(!products.length){

return(

<div className="grid">
{Array(6).fill().map((_,i)=>(
<ProductSkeleton key={i}/>
))}
</div>

)

}

return(

<div className="grid">

{products.map(product=>(
<ProductCard key={product.id} product={product}/>
))}

</div>

)

}

export default ProductGrid
