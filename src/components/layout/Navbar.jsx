import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { useState } from "react"
import CartDropdown from "../cart/CartDropdown"

function Navbar(){

const cartItems = useSelector(state=>state.cart.items)
const products = useSelector(state=>state.products.all)

const [search,setSearch] = useState("")
const [results,setResults] = useState([])
const [showCart,setShowCart] = useState(false)

function handleSearch(e){

const value = e.target.value

setSearch(value)

if(value===""){
setResults([])
return
}

const filtered = products.filter(p =>
p.name.toLowerCase().includes(value.toLowerCase())
)

setResults(filtered)

}

return(

<nav className="navbar">

<div className="logo">ShopX</div>

{/* SEARCH BAR */}

<div className="search-container">

<input
type="text"
placeholder="Search products..."
value={search}
onChange={handleSearch}
/>

{results.length > 0 && (

<div className="search-dropdown">

{results.map(p=>(
<div key={p.id} className="search-item">
{p.name}
</div>
))}

</div>

)}

</div>

{/* NAV LINKS */}

<div className="nav-links">

<Link to="/">Home</Link>

<Link to="/wishlist">Wishlist</Link>

<div
className="cart-icon"
onMouseEnter={()=>setShowCart(true)}
onMouseLeave={()=>setShowCart(false)}
>

<Link to="/cart">
Cart
<span className="badge">{cartItems.length}</span>
</Link>

{showCart && <CartDropdown/>}

</div>

</div>

</nav>

)

}

export default Navbar
