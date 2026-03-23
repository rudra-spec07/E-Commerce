import { useSelector } from "react-redux"

function Wishlist(){

const items = useSelector(state=>state.wishlist.items)

return(
<div>
<h1>Wishlist</h1>

{items.map(item=>(
<div key={item.id}>
<h3>{item.name}</h3>
<p>${item.price}</p>
</div>
))}

</div>
)
}

export default Wishlist
