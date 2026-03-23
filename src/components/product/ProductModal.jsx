import { formatPrice } from "../../utils/currencyFormatter"
import ProductGallery from "./ProductGallery"

function ProductModal({ product, onClose }) {

if (!product) return null

return (

<div className="modal-overlay" onClick={onClose}>

<div className="modal" onClick={(e)=>e.stopPropagation()}>

<button className="close-btn" onClick={onClose}>
✖
</button>

{/* Product Image Gallery */}

<ProductGallery
images={[
product.image,
product.image,
product.image
]}
/>

<div className="modal-info">

<h2>{product.name}</h2>

<p>{product.description}</p>

<h3>{formatPrice(product.price)}</h3>

<button className="btn-cart">
Add To Cart
</button>

</div>

</div>

</div>

)

}

export default ProductModal
