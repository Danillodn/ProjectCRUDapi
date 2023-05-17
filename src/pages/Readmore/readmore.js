import React, { useState, useEffect } from 'react'
import Header from '../../components/Header/Header'
import { useParams } from 'react-router-dom'
import axios from 'axios'



const Readmore = () => {


  const [readmore, setReadmore] = useState({})

  const { id } = useParams()

  useEffect(() => {
    axios.get(`https://dull-dog-gloves.cyclic.app/show_post/${id}`)
      .then((response) => {
        setReadmore(response.data.post)
      })
      .catch(() => {
        console.log("ERROR")
      })
  },)


  return (
    <div>
      <Header />
      <main>
        <div className='cards'>
          <div className='card'>
            <header>
              <h2>{readmore.title}</h2>
            </header>
            <div className='line'></div>
            <p>{readmore.content}</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Readmore