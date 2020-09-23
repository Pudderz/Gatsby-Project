import React from "react"
import {Link} from 'gatsby'
export default function Home() {
  return (
    <main>
      <div>Hello world!</div>
      <Link to="./about.js">About</Link>
    </main>
  )
}
