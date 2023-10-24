import React,{useState} from 'react';
import axios from 'axios';


const Blog = () => {

    const [form,setForm] = useState();

    const handleSubmit = (e) =>{ 
        e.preventDefault();

        axios.post("http://localhost:8080/blogs", form)
          .then((response) => {
            console.log(response);
          });
    }

    const handleChange = (e) =>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
        console.log(e.target.value);
    }

  return (
    <div>
         <form className='flex flex-col gap-3 max-w-2xl mx-auto' onSubmit={handleSubmit}>
            <h3 className='text-center text-3xl'>Create Blogs</h3>
       
        <input type="text" name="title" id="" className='border-2 pl-2 py-2' placeholder='Title' onChange={handleChange}/>
        <input type="text" name="author" className='border-2 pl-2 py-2' placeholder='Author' onChange={handleChange}/>
        <input type="text" name="image"  className='border-2 pl-2 py-2' placeholder='ImageUrl' onChange={handleChange}/>
        <textarea name="body" id="" cols="30" rows="10" className='border-2 pl-2 py-2' onChange={handleChange}></textarea>
        <input type="Submit" value="Submit" className='bg-black text-white py-2' />
    </form>
    </div>
  )
}

export default Blog