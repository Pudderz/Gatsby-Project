import React, { Component } from 'react'

 class JoinNewsLetter extends Component {
    render() {
        return (
            <div>
                <button>Close</button>
                <form>
                    <p>Enjoying this article, Subscribe to our newsletter for more content</p>
                    <label>
                        Email: 
                        <input type="email" placeholder="Email"/>
                    </label>
                    <button type="submit">Subscribe</button>
                </form>
            </div>
        )
    }
}

export default JoinNewsLetter
