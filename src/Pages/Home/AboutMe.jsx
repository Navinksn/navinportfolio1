import React from 'react'

const AboutMe = () => {
  return (
    <section id="Aboutme" className='about--section'>
        <div className='about--section--img'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9eu_c990rgRHvdOcpclryicqkzC6aYGE0hQ&usqp=CAU"
             alt="AboutMe" />
        </div>
        <div className='hero--section--content--box 
        about--section--box'>
            <div className='hero--section--content'>
                <p className='section--title'>About</p>
                <h1 className='skills--section--heading'>About Me</h1>
                <p className='hero--section--description'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Blanditiis maxime, cumque totam debitis earum aliquid 
                    facere eveniet soluta voluptatem veritatis distinctio 
                    voluptatibus placeat commodi dicta fugiat adipisci 
                    numquam! Aliquid, doloribus.
                </p>
                <p className='hero--section--description'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Blanditiis maxime, cumque totam debitis earum aliquid 
                    facere eveniet soluta voluptatem veritatis distinctio 
                    voluptatibus.
                </p>
            </div>
        </div>
    </section>
  )
}

export default AboutMe