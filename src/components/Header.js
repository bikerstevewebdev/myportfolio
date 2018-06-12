import React from 'react'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fas fa-laptop"></span>
            {/* <span className="icon fas fa-dumbbell"></span> */}
            
        </div>
        <div className="content">
            <div className="inner">
                <h1>Stephen Edwards</h1>
                <p>US Army National Guard Military Police Soldier, fitness and nutrition expert <br />
                dedicated to helping improve the world one web application at a time</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a onClick={() => {props.onOpenArticle('intro')}}>About</a></li>
                <li><a onClick={() => {props.onOpenArticle('work')}}>Projects</a></li>
                <li><a onClick={() => {props.onOpenArticle('about')}}>Skills</a></li>
                <li><a onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

export default Header
