import React from "react"
import {Link} from 'gatsby'
import Navigation from "../Components/navigation"
import Featured from "../Components/featured"
import JoinNewsLetter from '../Components/JoinNewsLetter'
import Blog from '../Components/blog.js'
export default function Home() {
  return (
    <div>
      <main>
        <Navigation/>
        <div>
          <Featured></Featured>
        </div>
        <hr/>
        <ul>
          <Blog></Blog>
          <Blog></Blog>
          <Blog></Blog>
          <Blog></Blog>
          <Blog></Blog>
          <Blog></Blog>
          <Blog></Blog>
          <Blog></Blog>
        </ul>
        <button>Load More</button>
      </main>
      <JoinNewsLetter></JoinNewsLetter>
    <footer>
      <h3>Title</h3>
      <Link>To Top</Link>
      <Link to="/about/">About</Link>
      <Link to="">GitHub</Link>
    </footer>
    </div>
  )
}
