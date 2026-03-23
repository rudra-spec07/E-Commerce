import { useState } from "react"

function ProductGallery({ images }){

const [mainImage,setMainImage] = useState(images[0])

return(

<div className="gallery">

<img className="main-image" src={mainImage} />

<div className="thumbnail-row">

{images.map((img,index)=>(
<img
key={index}
src={img}
className="thumb"
onMouseEnter={()=>setMainImage(img)}
/>
))}

</div>

</div>

)

}

export default ProductGallery
