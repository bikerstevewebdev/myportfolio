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

function Skills(props){
    return(
        <article id="skills" className={`${props.article === 'about' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Skills</h2>
          <section className="icons">
            <div className="icon-container">
                <span className="image main icon"><img src={CSS3} alt="CSS3 Icon" /></span>
                <br />
                <p>CSS3</p>
            </div>
            <div className="icon-container">
                <span className="image main icon"><img src={Javascript} alt="Javascript Icon" /></span>
                <br />
                <p>Javascript</p>
            </div>
            <div className="icon-container">
                <span className="image main icon"><img src={HTML} alt="HTML Icon" /></span>
                <br />
                <p>HTML</p>
            </div>
            <div className="icon-container">
                <span className="image main icon"><img src={Express} alt="Express Icon" /></span>
                <br />
                <p>Express</p>
            </div>
            <div className="icon-container">
                <span className="image main icon"><img src={Git} alt="Git Icon" /></span>
                <br />
                <p>Git</p>
            </div>
            <div className="icon-container">
                <span className="image main icon"><img src={NodeIcon} alt="Node Icon" /></span>
                <br />
                <p>Node</p>
            </div>
            <div className="icon-container">
                <span className="image main icon"><img src={Postgres} alt="Postgres Icon" /></span>
                <br />
                <p>PostgreSQL</p>
            </div>
            <div className="icon-container">
                <span className="image main icon"><img src={ReactIcon} alt="React Icon" /></span>
                <br />
                <p>React</p>
            </div>
            <div className="icon-container">
                <span className="image main icon"><img src={Redux} alt="Redux Icon" /></span>
                <br />
                <p>Redux</p>
            </div>
          </section>
          {props.close}
        </article>
    )
}

export default Skills