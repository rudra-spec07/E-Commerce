import { formatPrice } from "../../utils/currencyFormatter.js";

import { useSelector,useDispatch } from "react-redux"
import { removeFromCart } from "../../features/cart/cartSlice.js"

function Cart(){

const items = useSelector(state=>state.cart.items)
const dispatch = useDispatch()

return(
<div>

<h1>Shopping Cart</h1>

{items.map(item=>(
<div key={item.id} className="cart-item">
<div>
<h3>{item.name}</h3>
<p>{item.quantity} x {formatPrice(item.price)}</p>

</div>

<button onClick={()=>dispatch(removeFromCart(item.id))}>
Remove
</button>

</div>
))}

</div>
)
}

export default Cart
