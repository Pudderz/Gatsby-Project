import React, { Component } from 'react'
import Tag from './tag'

class Featured extends Component {
    render() {
        return (
            <div className="container">
                
                <div className="featuredImage">
                    <img src='/images/codeDisplay.jpg'  alt="" />
                </div>
                <div className="featuredText">
                {/* <hr className="dividerShow"/> */}
                <h2>Featured Blog Title</h2>

                <time>Posted 2 days ago</time>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed convallis faucibus mauris, vel pharetra velit. Vestibulum
                at urna non quam luctus facilisis. Pellentesque imperdiet Pellentesque
                justo nec feugiat. Donec est nunc, posuere eget mi vel, tincidunt faucibus
                 odio. Integer aliquet auctor quam, a blandit nisi maximus quis.</p>  
                <button className="purple">Read More</button>    
                <Tag/>
                </div>
            </div>
        )
    }
}

export default Featured
