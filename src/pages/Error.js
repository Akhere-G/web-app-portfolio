import React from 'react'
import { Link } from "react-router-dom"
const Error = () => {
  return (
    <section className="section">
      <h2>Oops! Page not found</h2>
      <div className="btn-container">
        <Link to="/">
          <button>go home</button>
        </Link>
      </div>
    </section>
  )
}

export default Error
