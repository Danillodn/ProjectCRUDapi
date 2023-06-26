import React, { useEffect } from 'react'
import axios from 'axios'
import Header from '../../components/Header/Header'
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"
import { useNavigate, useParams } from 'react-router-dom'


const validationPost = yup.object().shape({
  title: yup.string().required("Title is required").max(40, "The title must have a maximum of 40 characters."),
  description: yup.string().required("Description is required").max(150, "The description must have a maximum of 150 characters."),
  content: yup.string().required("Content is required").max(500, "The content must have a maximum of 500 characters.")
})

const Edit = () => {

  const { id } = useParams()

  let navigate = useNavigate()

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(validationPost)
  })

  const editPost = data => axios.put(`https://dark-sunbonnet-mite.cyclic.app/update_post/${id}`, data)
    .then(() => {
      console.log("Added with sucess")
      navigate('/')
    })
    .catch(() => {
      console.log("ERROR!!!")
    })

  useEffect(() => {
    axios.get(`https://dark-sunbonnet-mite.cyclic.app/show_post/${id}`)
      .then((response) => {
        reset(response.data.post)
      })
  }, [id, reset])

  return (
    <div>
      <Header />
      <main>
        <div className='card-post'>
          <h1>Criar postagem</h1>
          <div className='line-post'></div>
          <div className='card-body-post'></div>
          <form onSubmit={handleSubmit(editPost)}>
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

export default Edit