import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import axios from "axios";
import {Heading,Texts} from '../index'

const GetBlog = (props) => {

  const [post, setPost] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/blogs").then((data) => {
      console.log(data);
      setPost(data?.data);
    });
  }, []);


  return (
    <section className='py-24'>
     
      <div className="container">
        
      <Heading fontSize="text-4xl" fontWeight="font-bold" textAlign="text-center" margins="mb-8">
               <Texts text="Our" color="text-black"/> <Texts text="Blogs" color="text-sky-500"/>
      </Heading>

        <div className='grid grid-cols-4 gap-4'>
          {
          post.slice(0,props.number).map((posts,index)=>{ 
            return(
              <Link  key={index} to={"/blogs/"+posts.title.toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '-')} className='bg-slate-100 p-4 '>
              <div  >
                <div className="img h-40 overflow-hidden">
                  <img src={posts.image} alt="" className="mb-1 object-cover h-full" />                  
                </div>
                <h3 className="mb-2 font-bold">{posts.title}</h3>
                <p  className="mb-2"> {posts.body.length > 100 ?
    `${posts.body.substring(0, 100)}...` : posts.body
  }    </p>
                <div>
                  <div><p className='font-bold'>{posts.author}</p></div>
                  <div><p>{posts.date.substring(0, 10)}</p></div>
                </div>
                
              </div>
              </Link>
            )
          })
        }
        </div>
      </div>
    </section>
  )
}

export default GetBlog