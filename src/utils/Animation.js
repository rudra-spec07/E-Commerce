export function animateToCart(event){

const button = event.currentTarget

const circle = document.createElement("div")

circle.className = "cart-fly"

document.body.appendChild(circle)

const rect = button.getBoundingClientRect()

circle.style.left = rect.left + "px"
circle.style.top = rect.top + "px"

setTimeout(()=>{
circle.remove()
},800)

}
