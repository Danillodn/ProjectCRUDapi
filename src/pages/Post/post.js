import React from 'react'
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom'
import * as yup from "yup"
import axios from 'axios'

import Header from '../../components/Header/Header'
import '../Post/post.css'

const validationPost = yup.object().shape({
  title: yup.string().required("Title is required").max(40, "The title must have a maximum of 40 characters."),
  description: yup.string().required("Description is required").max(150, "The description must have a maximum of 150 characters."),
  content: yup.string().required("Content is required").max(500, "The content must have a maximum of 500 characters.")
})

const Post = () => {

  let navigate = useNavigate()
  

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationPost)
  })
  
  const addPost = data => axios.post("https://dull-dog-gloves.cyclic.app/create_post", data)
    .then(() => {
      console.log("Added with sucess")
      navigate('/')
    })
    .catch(() => {
      console.log("ERROR!!!")
    })

  return (
    <div>
      <Header />
      <main>
        <div className='card-post'>
          <h1>Criar postagem</h1>
          <div className='line-post'></div>
          <div className='card-body-post'></div>
          <form onSubmit={handleSubmit(addPost)}>
            <div className='fields'>
              <label>Title</label>
              <input type='text' name="title" {...register("title")} />
              <p className='error-message'>{errors.title?.message}</p>
            </div>
            <div className='fields'>
              <label>Description</label>
              <input type='text' name="description" {...register("description")} />
              <p className='error-message'>{errors.description?.message}</p>
            </div>
            <div className='fields'>
              <label>Content</label>
              <textarea type='text' name="content" {...register("content")}></textarea>
              <p className='error-message'>{errors.content?.message}</p>
            </div>
            <div className='btn-post'>
              <button type='submit'>Enviar</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}

export default Post