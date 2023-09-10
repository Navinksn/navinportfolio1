import React from 'react'

const HeroSection = () => {
  return (
      <section id='herosection' className='hero--section'>
        <div className='hero--section--content--box'>
            <div className='hero--section--content'>
                <p className='section--title'>Hey, I'm Navin</p>
                <h1 className='hero--section--title'>
                    <span className='hero--section-title--color'>Full Stack
                    </span>{" "}
                    <br />
                    Developer
                </h1>
                <p className='hero--section-description'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    <br />
                    Modi impedit excepturi, rerum culpa corporis quisquam.
                </p>
            </div>
            <button className='btn btn-primary'>Get In Touch</button>
        </div>
        <div className='hero--section--img'>
             <img src='https://t4.ftcdn.net/jpg/01/26/61/13/240_F_126611337_m8kcRtS5G7AhrFpOQ0Wufx4PgL6J4yxg.jpg'
             alt='Hero Section'/>
        </div>
      </section>
  )
}

export default HeroSection