import React from 'react'
import pic01 from '../assets/images/BackgroundImg.jpg'


function About(props){
    return(
        <article id="intro" className={`${props.article === 'intro' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image main"><img src={pic01} alt="" /></span>
          <p>As a child, I was always interested in adventure. My biggest accomplishments in life revolve around my adaptability to new situations and environments. For this reason, I have seen the beginning of a career in the software development industry as an exciting journey, yet unlike the others, one that will produce new adventures with each new technology and project to conquer.</p>
          <p>One of the challenges as a new developer is entering such a large community with dynamic guidelines and concepts that require the utmost resilience. This is where my time in the Army National Guard will prove its value given that the greatest weapon a soldier posesses is their ability to accept and adapt to the any circumstance, even when completely unexpected chages take place.</p>
          <p>The world is a landscape full of opportunities and paths that may never be traversed in whole, and the inability to explore and learn all is both frightening and fascinating at the same time. I know I have a lot to learn as a new developer, but my enthusiasm to learn the depths of technology at our fingertips is the driving force that will empower me to prove myself as an invaluable member of any team.</p>
          {props.close}
        </article>
    )
}

export default About