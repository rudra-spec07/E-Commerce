import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { formatPrice } from "../utils/currencyFormatter";

function ProductDetail(){

const {id} = useParams()

const product = useSelector(state=>
state.products.all.find(p=>p.id===parseInt(id))
)

if(!product) return <p>Product not found</p>

return(
<div>

<h1>{product.name}</h1>

<img src={product.image} width="250"/>

<p>{product.description}</p>

<p>{formatPrice(product.price)}</p>


</div>
)
}

export default ProductDetail
