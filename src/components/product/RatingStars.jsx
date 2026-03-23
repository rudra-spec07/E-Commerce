function RatingStars({rating}){

const stars = []

for(let i=1;i<=5;i++){

if(i <= Math.floor(rating)){
stars.push("⭐")
}else{
stars.push("☆")
}

}

return(

<div className="rating">

{stars.map((star,index)=>(
<span key={index}>{star}</span>
))}

<span className="rating-number">
{rating}
</span>

</div>

)

}

export default RatingStars
