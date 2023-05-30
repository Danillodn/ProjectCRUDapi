import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import HeaderMain from '../../components/HeaderMain/HeaderMain';
import More from '../../images/more.svg';
import '../Home/home.css';
import { getPosts, deletePosts } from '../../redux/HomePosts/homeActions';

const HomePosts = () => {

  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const deletePost = (id) => {
    dispatch(deletePosts(id));
  };

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
                      <button>Edit</button>
                    </Link>
                  </div>
                  <div className='btn-readmore'>
                    <Link to={{ pathname: `/readmore/${post._id}` }}>
                      <button>Read More</button>
                    </Link>
                  </div>
                  <div className='btn-delete'>
                    <button onClick={() => deletePost(post._id)}>Delete</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

 export default HomePosts; 

