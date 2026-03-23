import { useState } from "react"
import { useDispatch } from "react-redux"
import { addToCart } from "../../features/cart/cartSlice"
import { addToWishlist } from "../../features/wishlist/wishlistSlice"
import { formatPrice } from "../../utils/currencyFormatter"
import { animateToCart } from "../../utils/Animation"
import RatingStars from "./RatingStars"
import ProductModal from "./ProductModal"

function ProductCard({product}){

const dispatch = useDispatch()

const [showModal,setShowModal] = useState(false)
const [liked,setLiked] = useState(false)

return(

<>

<div className="card">

<div
className="wishlist-heart"
onClick={()=>{
setLiked(!liked)
dispatch(addToWishlist(product))
}}
>
{liked ? "❤️" : "🤍"}
</div>

<div className="image-wrapper">

<img src={product.image} alt={product.name}/>

</div>

<div className="card-body">

<h3>{product.name}</h3>

<RatingStars rating={product.rating}/>

<p className="price">{formatPrice(product.price)}</p>

<button
className="btn-cart"
onClick={(e)=>{
dispatch(addToCart(product))
animateToCart(e)
}}
>
Add To Cart
</button>

<button
className="btn-view"
onClick={()=>setShowModal(true)}
>
Quick View
</button>

</div>

</div>

<ProductModal
product={showModal ? product : null}
onClose={()=>setShowModal(false)}
/>

</>

)

}

export default ProductCard
