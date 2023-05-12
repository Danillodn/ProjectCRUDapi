import React from 'react'
import { Link } from 'react-router-dom'

const Post = () => {
  return (
    <div>
      <h1>Page Post</h1>
      <Link to="/">
        <button>Back to page Feed</button> 
      </Link>
    </div>
  )
}

export default Post