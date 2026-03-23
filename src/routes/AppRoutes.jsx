import { Routes,Route } from "react-router-dom"
import Catalog from "../pages/Catalog/Catalog.jsx"
import Cart from "../pages/Cart/Cart.jsx"
import Wishlist from "../pages/Wishlist/Wishlist.jsx"
import ProductDetail from "../pages/ProductDetail.jsx"

function AppRoutes(){

return(

<Routes>

<Route path="/" element={<Catalog/>}/>
<Route path="/cart" element={<Cart/>}/>
<Route path="/wishlist" element={<Wishlist/>}/>
<Route path="/product/:id" element={<ProductDetail/>}/>

</Routes>

)

}

export default AppRoutes
