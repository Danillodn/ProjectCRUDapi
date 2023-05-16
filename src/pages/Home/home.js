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
                    <Link to="/edit"><button>Edit</button></Link>
                  </div>
                  <div className='btn-readmore'>
                    <Link to="/readmore"><button>Read More</button></Link>
                  </div>
                  <div className='btn-delete'>
                    <button>Delete</button>
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