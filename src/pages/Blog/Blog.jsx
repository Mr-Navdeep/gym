import React from 'react'
import { GetBlog } from '../../components'
import {Header} from '../../components'
import { blog } from '../../assets/images/images'

const Blog = () => {
  return (
   <div>
    <Header content="Blog"  textAlign="text-center" fontSize="text-5xl" background={blog} bgPos="bg-center"  bgSize="bg-cover" bgRepeat="bg-no-repeat" color="text-white"/> 
    <div className="container">    
      <GetBlog/>
    </div>
   </div>
  )
}

export default Blog