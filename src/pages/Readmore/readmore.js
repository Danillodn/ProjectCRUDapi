import React, { useEffect } from 'react';
import Header from '../../components/Header/Header';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { showPosts } from '../../redux/ReadPosts/readActions';


const Readmore = () => {

  const { id } = useParams();
  const dispatch = useDispatch();
  const post = useSelector((state) => state?.read?.post);

  console.log(post)

  useEffect(() => {
    dispatch(showPosts(id));
  }, [id, dispatch]);


  return (
    <div>
      <Header />
      <main>
        <div className='cards'>
          <div className='card' >
            <header>
              <h2>{post?.title}</h2>
            </header>
            <div className='line'></div>
            <p>{post?.content}</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Readmore;  