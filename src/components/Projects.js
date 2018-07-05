import React from 'react'

function Projects(props){
    return(
        <article id="projects" className={`${props.article === 'work' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Projects</h2>
          <div className="project-head">
            <h3>Balanced LIFE</h3>
            <a href="http://www.github.com/bikerstevewebdev/BLIFE" rel="noopener noreferrer" id="blife-github" target="_blank" className="icon fa-github"><span className="label">Balanced Life GitHub</span></a>
            <a href="https://www.life-inbalance.com" rel="noopener noreferrer" id="blife-link" target="_blank" className="icon fa-link"><span className="label">Balanced Life Site</span></a>
          </div>
          <p>Personally Developed Health and Fitness app</p>
          <a href="http://life-inbalance.com" rel="noopener noreferrer" target="_blank"><div className="life-inbalanceimages" /></a>
          <p>My background as a health and fitness expert led me to the desire to create an app that would help someone organize their health and fitness side of life so that they could balance it with the rest of their daily lives.  In originally beginning the project, the expectations were not quite as far reaching as the project ended up.</p>
          <p>The goal of this project was to create an app for building workout plans for previous clients but quickly expanded to a well-rounded health app.  A user can not only plan their fitness activities, but they also have the ability to create meal plans from the ground up. Creating foods allows a user to add them to a meal which can then be added to a menu to break up meal plans as far as needed.</p>
          <p>With the use of Charts.js, a user is able to monitor their progress on multiple levels. Amazon Web Service's S3 provides the ability to upload progress photos directly from the user's phone to then compare side by side in a comparison modal.</p>
          <p>On top of basic user capabilities, there is a coaching feature built in to allow a user to request to become a coach. Upon a coach request being accepted by an admin, the coach can then create a nutrition and fitness plan for the client once a coach sends a user an invite to be there client. Finally, since communication is key in a client's success, Socket.io allows for direct communication between a coach and client with live updating.</p>
          <div className="project-head">
            <h3>Condo Rental Clone</h3>
            <a href="https://github.com/devmtn-pinetree-clone/pinetree-clone" rel="noopener noreferrer" id="condorental-github" target="_blank" className="icon fa-github"><span className="label">Condo Rental Clone GitHub</span></a>
            <a href="https://condorentalclone.stevecodes.com" rel="noopener noreferrer" id="condorental-link" target="_blank" className="icon fa-link"><span className="label">Condo Rental Site</span></a>
          </div>
          <p>Awwwards Site Winner Clone - Group Project</p>
          <a href="https://www.condorentalclone.stevecodes.com" rel="noopener noreferrer" target="_blank"><div className="condo-rental-clone-images" /></a>
          <p>As a group, myself, Donnell Harris and Ricardo Carosa set out to enhance our CSS skills and strengthen our abilities to work as a team towards one common goal of a finished project with a fairly aggressive deadline. This project taught us how to work together under high amounts of pressure.</p>
          <p>The majority of work was done with CSS, and more specifically SASS. With a long road of styling ahead of us, we decided to learn the advantages of SASS to help reduce repetetive CSS code as well as protect our code from being overwritten by group member's similarly named classes. On top of the heavy CSS work, we made it a goal to achieve responsiveness being that the demand for mobile capabilities is only increasing.</p>
          <p>To increase the level of difficulty of the project, we decided as a team to include the ability to edit the apartments available. In order to add an apartment, an admin would need an image for the avatar which is where AWS S3 provides the opportunity to upload an image directly from the admin's computer. The image link is then stored in a PostgreSQL database upon saving the apartment information.</p>
          <p>The somewhat complicated flow of data in React is only increased in a project with multiple members relying on similar data. For this reason, we used Redux to track booking information on state which made the group coordination seemless.</p>
          <div className="project-head">
            <h3>Trail Buddy - IN PROGRESS</h3>
            <a href="https://github.com/bikerstevewebdev/pugTrailWishlist" rel="noopener noreferrer" id="trailbuddy-github" target="_blank" className="icon fa-github"><span className="label">Trail Buddy GitHub</span></a>
            {/* <a href="https://trailbuddy.stevecodes.com" rel="noopener noreferrer" id="condorental-link" target="_blank" className="icon fa-link"><span className="label">Trail Buddy Site</span></a> */}
          </div>
          <p>Trail Buddy - Personally Developed</p>
          <a href="https://github.com/bikerstevewebdev/pugTrailWishlist" rel="noopener noreferrer" target="_blank"><div className="trail-buddy-images" /></a>
          <p>The purpose of creating Trail Buddy is two-fold; fresh out of bootcamp, I wanted to continue to push myself to learn new technologies, and secondly I really wanted an app to track all of the trails I have yet to hike out in Utah. In the Salt Lake/Utah Valley area the trails are endless, and with Trail Buddy I can add any trails that I desire to traverse to my wishlist and mark them off with any notes about the journey.</p>
          <p>From the technical side, the biggest challenge with creating Trail Buddy was taking on technologies that I had never heard of before. The main focus of my learning experience was to enhance my vanilla Javascript, HTML and CSS skills while also learning other popular tools in the industry. The main stack for this application consists of Pug.js, Node.js, Express.js, jQuery, LESS.js, Passport, and MySQL for the database.</p>
          <p>What excited me most about the project was seeing more and more connections between the general flow of data across multiple technologies as well as similar patterns. While LESS and SASS are very similar ways of streamlining styling with CSS, I personally found LESS to be much quicker to implement and even more powerful in some instances. I also had the pleasure of utilizing Gulp.js to help streamline the development process, because us developers would do anything for less key strokes.</p>
          <p>In order to expand to some of the sister SQL languages of PostgreSQL I utilized MariaDB to store my app's data and keep track of user's wishlist and completed trail information. Passport also allowed me to use local authentication with BCrypt. By far the most fun implementation of this project was using jQuery to directly manipulate the DOM for both functional and styling purposes, as well as AJAX requests to the server and external APIs, including Google Maps.</p>
          {props.close}
        </article>
    )
}

export default Projects