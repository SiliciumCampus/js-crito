import React from 'react'
import Stars from './Stars'

const Rating = ({rating}) => {

    const myStars = [
        { id:"1", starClass: "fa-light fa-star"},
        { id:"2", starClass: "fa-light fa-star"},
        { id:"3", starClass: "fa-light fa-star"},
        { id:"4", starClass: "fa-light fa-star"},
        { id:"5", starClass: "fa-light fa-star"}
    ]



    const updateMyStars = (rating) => {
        
        for(let i = 0; i < rating; i++){
            myStars[i].starClass = "fa-solid fa-star"
            
        }
        return myStars.starClass
    }

    updateMyStars(rating)

  return (
    <div className="rating-div">
        {
            
            myStars.map((myStar) => (
                <Stars key={myStar.id} type={myStar.starClass} />
            ))
        }
    </div>
  )
}

export default Rating