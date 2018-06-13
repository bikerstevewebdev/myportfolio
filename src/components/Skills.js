import React from 'react'
import CSS3 from '../assets/images/icons/css3.svg'
import Javascript from '../assets/images/icons/javascript.svg'
import HTML from '../assets/images/icons/html.svg'
import Express from '../assets/images/icons/express.svg'
import Git from '../assets/images/icons/git.svg'
import NodeIcon from '../assets/images/icons/node.svg'
import Postgres from '../assets/images/icons/postgres.svg'
import ReactIcon from '../assets/images/icons/react.svg'
import Redux from '../assets/images/icons/redux.png'
import SASS from '../assets/images/icons/sass.png'
import AWSS3 from '../assets/images/icons/awss3.png'
import Sockets from '../assets/images/icons/sockets.svg'
import Cypress from '../assets/images/icons/cypress.png'
import Jest from '../assets/images/icons/jest.png'

function Skills(props){
    return(
        <article id="skills" className={`${props.article === 'about' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Skills</h2>
          <section className="icons">
            <div className="icon-container">
                <span className="image main css3 icon"><img src={CSS3} alt="CSS3 Icon" /></span>
                <br />
                <p>CSS3</p>
            </div>
            <div className="icon-container">
                <span className="image main javascript icon"><img src={Javascript} alt="Javascript Icon" /></span>
                <br />
                <p>JAVASCRIPT</p>
            </div>
            <div className="icon-container">
                <span className="image main html icon"><img src={HTML} alt="HTML Icon" /></span>
                <br />
                <p>HTML</p>
            </div>
            <div className="icon-container">
                <span className="image main express icon"><img src={Express} alt="Express Icon" /></span>
                <br />
                <p>EXPRESS</p>
            </div>
            <div className="icon-container">
                <span className="image main git icon"><img src={Git} alt="Git Icon" /></span>
                <br />
                <p>GIT</p>
            </div>
            <div className="icon-container">
                <span className="image main node icon"><img src={NodeIcon} alt="Node Icon" /></span>
                <br />
                <p>NODE.JS</p>
            </div>
            <div className="icon-container">
                <span className="image main postgresql icon"><img src={Postgres} alt="Postgres Icon" /></span>
                <br />
                <p>POSTGRESQL</p>
            </div>
            <div className="icon-container">
                <span className="image main react icon"><img src={ReactIcon} alt="React Icon" /></span>
                <br />
                <p>REACT</p>
            </div>
            <div className="icon-container">
                <span className="image main redux icon"><img src={Redux} alt="Redux Icon" /></span>
                <br />
                <p>REDUX</p>
            </div>
            <div className="icon-container">
                <span className="image main icon sass"><img src={SASS} alt="SASS Icon" /></span>
                <br />
                <p>SASS</p>
            </div>
            <div className="icon-container">
                <span className="image main awss3 icon"><img src={AWSS3} alt="AWS S3 Icon" /></span>
                <br />
                <p>AWS S3</p>
            </div>
            <div className="icon-container">
                <span className="image main sockets icon"><img src={Sockets} alt="Sockets.io Icon" /></span>
                <br />
                <p>SOCKETS.IO</p>
            </div>
            <div className="icon-container cypress">
                <span className="image main  icon"><img src={Cypress} alt="Cypress.io Icon" /></span>
                <br />
                <p>CYPRESS.IO</p>
            </div>
            <div className="icon-container jest">
                <span className="image main icon"><img src={Jest} alt="Jest Icon" /></span>
                <br />
                <p>JEST</p>
            </div>
          </section>
          {props.close}
        </article>
    )
}

export default Skills