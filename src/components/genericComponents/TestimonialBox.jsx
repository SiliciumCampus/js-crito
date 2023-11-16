import React from 'react'
import Boxes from './Boxes'
import Img1 from '@images/testimonial-img-1.png'
import Img2 from '@images/testimonial-img-2.png'
import Img3 from '@images/testimonial-img-3.png'
import Rating from './Rating'

const TestimonialBox = ({input}) => {

    const testimonials = [
        {id:"1",
        name:"Cassandra Warren",
        title:"Business Manager, Dorfus",
        img: Img1,
        rating: 5,
        text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"
        },
        {id:"2",
        name:"Amanda Tulling",
        title:"Senior Developer, Square",
        img: Img2,
        rating: 5,
        text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"
        },
        {id:"3",
        name:"Jack McDogglas",
        title:"Key Account Manager, Gobona",
        img: Img3,
        rating: 5,
        text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"
        }
    ]

  return (
    <>
    
        <div className="testimonial-div">
            {
                testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="testimonial-box">
                        <Rating rating={testimonial.rating} />
                        <p className="testimonial-text">"{testimonial.text}"</p>
                        <Boxes styling="testimonial-id" img={true} src={testimonial.img} text1={testimonial.name} text2={testimonial.title} />
                    </div>
                ))
            }
        </div>
    
    </>
   
  )
}

export default TestimonialBox