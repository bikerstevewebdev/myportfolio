import React, { Component } from 'react'
import axios from 'axios'

class Contact extends Component{
  constructor(){
    super()
    this.state = {
      nameIn: '',
      emailIn: '',
      messageIn: ''
    }
    this.sendEmail = this.sendEmail.bind(this)
    this.updateName = this.updateName.bind(this)
    this.updateEmail = this.updateEmail.bind(this)
    this.updateMessage = this.updateMessage.bind(this)
  }

  updateName(val){
    this.setState({ nameIn: val })
  }
  updateEmail(val){
    this.setState({ emailIn: val })
  }
  updateMessage(val){
    this.setState({ messageIn: val })
  }

  sendEmail(e){
    e.preventDefault()
    const { nameIn, emailIn, messageIn } = this.state
    axios.post('/contact', { name: nameIn, email: emailIn, message: messageIn }).then(res => {
      console.log(res)
      this.setState({
        nameIn: '',
        emailIn: '',
        messageIn: ''
      })
      alert('Thank you, your message has been sent! Please allow up to 24 hours for a response:) Have a great rest of your day!')
    })
  }
  
  render(){
    return(
      <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form onSubmit={this.sendEmail} >
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input onChange={(e) => this.updateName(e.target.value)} value={this.state.nameIn} type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input onChange={(e) => this.updateEmail(e.target.value)} value={this.state.emailIn} type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea onChange={(e) => this.updateMessage(e.target.value)} value={this.state.messageIn} name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input onClick={this.sendEmail} type="submit" value="Send Message" className="special" /></li>
              <li><input onClick={() => this.setState({nameIn: '', emailIn: '', messageIn: ''})} type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            {/* <li><a href="#" className="icon fa-mail"><span className="label">Twitter</span></a></li> */}
            <li><a href="http://www.linkedin.com/in/stevedevedwards" rel="noopener noreferrer" target="_blank" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
            {/* <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li> */}
            <li><a href="http://www.github.com/bikerstevewebdev" rel="noopener noreferrer" target="_blank" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
          {this.props.close}
        </article>
    )
  }
}

export default Contact




// <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
//           <h2 className="major">Contact</h2>
//           <form method="post" action="#">
//             <div className="field half first">
//               <label htmlFor="name">Name</label>
//               <input type="text" name="name" id="name" />
//             </div>
//             <div className="field half">
//               <label htmlFor="email">Email</label>
//               <input type="text" name="email" id="email" />
//             </div>
//             <div className="field">
//               <label htmlFor="message">Message</label>
//               <textarea name="message" id="message" rows="4"></textarea>
//             </div>
//             <ul className="actions">
//               <li><input type="submit" value="Send Message" className="special" /></li>
//               <li><input type="reset" value="Reset" /></li>
//             </ul>
//           </form>
//           <ul className="icons">
//             {/* <li><a href="#" className="icon fa-mail"><span className="label">Twitter</span></a></li> */}
//             <li><a href="#" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
//             {/* <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li> */}
//             <li><a href="#" className="icon fa-github"><span className="label">GitHub</span></a></li>
//           </ul>
//           {close}
//         </article>