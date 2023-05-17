import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import HeaderMain from '../../components/HeaderMain/HeaderMain'
import More from '../../images/more.svg'
import '../Home/home.css'

const Home = () => {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get("https://dull-dog-gloves.cyclic.app/list_posts")
      .then((response) => {
        setPosts(response.data.posts)
      })
      .catch(() => {
        console.log("ERROR!!!")
      })
  }, [])

  const deletePost = (id) => {
    axios.delete(`https://dull-dog-gloves.cyclic.app/delete_post/${id}`)
    setPosts(posts.filter(post => post._id !== id))
  }

  return (
    <div>
      <HeaderMain />
      <main>
        <div className='cards'>
          {posts.map((post, key) => {
            return (
              <div className='card' key={key}>
                <header>
                  <h2>{post.title}</h2>
                  <img src={More} alt='' />
                </header>
                <div className='line'></div>
                <p>{post.description}</p>
                <div className='btns'>
                  <div className='btn-edit'>
                    <Link to={{ pathname: `/edit/${post._id}` }}>
                      <button>Edit</button></Link>
                  </div>
                  <div className='btn-readmore'>
                    <Link to={{ pathname: `/readmore/${post._id}` }}>
                      <button>Read More</button></Link>
                  </div>
                  <div className='btn-delete'>
                    <button onClick={() => deletePost(post._id)}>Delete</button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </main>
    </div>
  )
}

export default Home