import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <div className="colorPurple">
               <footer>
                    <h3>Blog</h3> 
                    <div className="flex">
                    <div className="grid">
                    <h5>Our company</h5>
                    <a href="">About us</a>
                    <a href="">Jobs</a>
                    <a href="">View plans</a>
                    <a href="">Reviews</a>  
                    </div>

                    <div className="grid">
                    <h5>Help me</h5>
                    <a href="">FAQ</a>
                    <a href="">Terms of use</a>
                    <a href="">Privacy policy</a>
                    <a href="">Cookies</a>  
                    </div>

                    <div className="grid">
                    <h5>Contact</h5>
                    <a href="">Email</a>
                    <a href="">Support</a>
                    <a href="">Live chat</a>
                    </div>

                    <div className="grid">
                    <h5>Others</h5>
                    <a href="">Careers</a>
                    <a href="">Information</a>
                    <a href="">Licenses</a>  
                    </div>
                    </div>


                </footer> 
            </div>
        )
    }
}

export default Footer
