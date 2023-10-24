import React,{useState} from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const Register = () => {

    const [form,setForm] = useState({});

    const handleSubmit = (e) =>{
        e.preventDefault();
        
        axios.post('http://localhost:8080/register', form)
          .then(function (response) {
            // console.log(response);
          })
          .catch(function (error) {
            // console.log(error);
          })
    }

    const handleInput = (e) =>{
        setForm({...form,
            [e.target.name]:e.target.value
        })
        console.log(e.target.value)
    }
    const notify = () => toast("Wow so easy !");

  return  (
    <div className='mt-24'>
    <div className='max-w-lg mx-auto p-4 bg-slate-100'>
        
    <form onSubmit={handleSubmit} >
      <h4 className='text-3xl mb-3 font-medium'>Register</h4>
        <div className="form-group">
           <label className='block mb-2'>User Name</label>
           <input type="text" name="user" className='border-2 mr-2 py-2 pl-2 w-full max-w-lg'  onChange={handleInput}/>
        </div>
        <div className='form-group'>
            <label htmlFor="password" className='block mb-2'>Password</label>
            <input type="password" name="password" className='border-2 mr-2 py-2 pl-2 w-full max-w-lg' onChange={handleInput}/>
        </div>
        <input type="submit"  value="Submit" className='bg-red-100  text-sm py-2 px-4 mt-4'   onClick={notify}/>
        <div className='mt-3'>
            Already have an account <Link className='text-sky-600' to="/login" relative="route">Login</Link>
        </div>                
        <p>

        </p>
    </form>
    </div>
    </div>
  )
}

export default Register