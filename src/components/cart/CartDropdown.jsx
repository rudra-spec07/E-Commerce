import { useSelector } from "react-redux"
import { formatPrice } from "../../utils/currencyFormatter"

function CartDropdown(){

const cartItems = useSelector(state=>state.cart.items)

return(

<div className="cart-dropdown">

{cartItems.length === 0 && (
<p>Cart is empty</p>
)}

{cartItems.map(item=>(
<div key={item.id} className="cart-preview">

<img src={item.image} alt={item.name}/>

<div>

<p>{item.name}</p>

<span>{formatPrice(item.price)}</span>

</div>

</div>
))}

</div>

)

}

export default CartDropdown
