import React from 'react'
import data from "../../data/index.json"

const Testimonial = () => {
  return (
    <section className='testimonial--section' id='testimonial'>
        <div className='portfolio--container--box'>
            <div className='portfolio--container'>
                <p className='sub--title'>Clients Feedback</p>
                <h2 className='section--heading'>
                    Customer Feedback
                </h2>
            </div>
        </div>
        <div className='portfolio--section--container'>
        {data?.testimonial?.map((item, index)=>(
            <div key={index} className='testimonial--section--card'>
                <div className='testimonial--section--card--review'>
                   {Array.from({length: 5},(reviews, index)=>
                   (<svg
                        xmlns='http://www.w3.org/2000/svg'
                        width="27"
                        height="26"
                        viewBox='0 0 27 26'
                        fill='none'
                        >
                            <path 
                            d="M12.0945 0.953177C12.5528 -0.125435
                            14.1138 -0.135434 14.5722 0.95318L17.2772 
                            7.37836C17.4705"
                            fill="#006B6A"
                            />
                        </svg>
                   )
                   )}                    
                </div>
                <p className='text-md'>{item.description}</p>
                <div className='testimonial--section--card--author--detail'>
                    <img src="{item.src}" alt="Avatar" />
                    <div>
                        <p className='text-md testimonial--author--name'>
                            {item.author_name}
                        </p>
                        <p className='text-md testimonial--author--designation'>
                            {item.author_designation}
                        </p>
                    </div>
                </div>
            </div>
        ))}
        </div>
    </section>
  )
}

export default Testimonial