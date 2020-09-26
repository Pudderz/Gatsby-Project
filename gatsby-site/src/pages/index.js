import React from "react"
import {Link} from 'gatsby'
import Navigation from "../Components/navigation"
import Featured from "../Components/featured"
import Blog from '../Components/blog.js'
import '../Components/blogBox.css'
import Footer from "../Components/footer"
import PopularPosts from "../Components/popularPosts"


export default function Home() {
  return (
    <div>
      <main>
        <Navigation/>
        <div className="featured">
          <Featured></Featured>
        </div>
        <PopularPosts/>

      </main>
    </div>
  )
}
