import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const SingleBlog = () => {
  const [post, setPost] = useState([]);
  const params = useParams();

  useEffect(() => {
    axios.get("http://localhost:8080/blogs")
      .then((response) => {
        console.log(response);
        setPost(response?.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const filterPost = post.find((posts) =>
    posts.title.toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '-') === params.id
  );

  console.log("filterPost", filterPost);
  console.log("post", post);

  return (
    <div className='mt-5'>
      {filterPost ? (
        <div className='container '>
          <div className='h-96 overflow-hidden'>
              <img src={filterPost.image} alt=""  className='w-full object-cover'/>
          </div>
          
          <h2 className='font-bold my-2 text-2xl'>{filterPost.title}</h2>
          <p>{filterPost.body}</p>
          
        </div>
      ) : (
        <p className='container'>No matching post found.</p>
      )}
    </div>
  );
};

export default SingleBlog;
