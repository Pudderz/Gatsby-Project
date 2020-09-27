import { Link } from 'gatsby'
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
                    <Link >About us</Link>
                    <Link>Jobs</Link>
                    <Link>View plans</Link>
                    <Link>Reviews</Link>  
                    </div>

                    <div className="grid">
                    <h5>Help me</h5>
                    <Link to="">FAQ</Link>
                    <Link to="">Terms of use</Link>
                    <Link to="">Privacy policy</Link>
                    <Link to="">Cookies</Link>  
                    </div>

                    <div className="grid">
                    <h5>Contact</h5>
                    <Link to="">Email</Link>
                    <Link to="">Support</Link>
                    <Link to="">Live chat</Link>
                    </div>

                    <div className="grid">
                    <h5>Others</h5>
                    <Link to="">Careers</Link>
                    <Link to="">Information</Link>
                    <Link to="">Licenses</Link>  
                    </div>
                    </div>


                </footer> 
            </div>
        )
    }
}

export default Footer
