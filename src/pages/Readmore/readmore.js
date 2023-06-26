import React, { useEffect } from 'react';
import Header from '../../components/Header/Header';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { showPosts } from '../../redux/ReadPosts/readSlice';


const Readmore = () => {

  const { id } = useParams();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);

  useEffect(() => {
    dispatch(showPosts(id));
  }, [id, dispatch]);

  return (
    <div>
      <Header />
      <main>
        <div className='cards'>
          {posts.map((posts, key) => {
            return (
              <div className='card' key={key}>
                <header>
                  <h2>{posts.title}</h2>
                </header>
                <div className='line'></div>
                <p>{posts.content}</p>
              </div>
            );
          })};
        </div>
      </main>
    </div>
  );
};

export default Readmore;