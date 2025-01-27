import React from "react"
import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <div>
      Page not found. <Link to={"/"}>Return</Link>
    </div>
  )
}
