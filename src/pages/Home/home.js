import React from 'react'
import { Link } from 'react-router-dom'

import HeaderMain from '../../components/HeaderMain/HeaderMain'

import More from '../../images/more.svg'

import '../Home/home.css'

const Home = () => {
  return (
    <div>
      <HeaderMain />

      <main>
        <div className='cards'>
          <div className='card'>
            <header>
              <h2>Consumindo API</h2>
              <img src={More} />
            </header>
            <div className='line'></div>
            <p>Aqui eu vou falar sobre o conteudo</p>
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
        </div>
      </main>
    </div>
  )
}

export default Home