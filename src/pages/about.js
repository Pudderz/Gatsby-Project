import React, { Component } from 'react'
import Navigation from '../Components/navigation'
import Footer from '../Components/footer'
import Metadata from '../Components/metadata'


class about extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <Metadata/>
                <div id="aboutSite">
                    <h2>About Site</h2>     
                    <p>This is a Gatsby Blog Template site that takes data from a json file using graphql and displays the content in a blog format</p>
                    <p>The plugins I used in this project are:</p>
                    <ol>
                        <li>
                            <p>gatsby-source-filesystem</p>
                        </li>
                        <li>
                            gatsby-transformer-json
                        </li>
                        <li>
                            <p>gatsby-transformer-sharp</p>
                        </li>
                        <li>
                            <p>gatsby-plugin-sharp</p>
                        </li>
                        <li>
                           <p>gatsby-awesome-pagination</p> 
                        </li>

                    </ol>
                </div>
                

                <div id="formDiv">
                    <form className="contactForm">
                         <h3>Contact Form</h3>
                        <label htmlFor="name">
                            Name:<input id="name"type="text" placeholder="name"/>
                        </label>
                        <label htmlFor="email">
                            Email:<input id="email"type="email" placeholder="email"/>
                        </label>
                        <label htmlFor="message">
                            Message:<textarea id="message" type="text" placeholder="message"/>
                        </label>
                        
                        <button className="purple" type="submit">Send</button>
                    
                    </form>
                </div>
                <Footer/>       
            </div>
        )
    }
}

export default about
