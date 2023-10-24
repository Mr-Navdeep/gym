import React,{useState} from 'react'
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [form,setForm] = useState();
  const [cookies, setCookie] = useCookies(['access_Token']);
  const navigate = useNavigate();

  const handleSubmit = async(e) =>{
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/login',form)
      console.log(response);
      setCookie('access_Token', response.data.token);
      window.localStorage.setItem("userID",response.data.userId);
      navigate("/")
    } catch (error) {
      console.log(error)
    }

  }
 
  const handleInput = (e) =>{
    setForm({
      ...form,[e.target.name]:e.target.value
    })
    console.log(e.target.value)
  } 

  return (
    <div className='mt-24'>
    <div className='max-w-lg mx-auto p-4 bg-slate-100'>
    <form onSubmit={handleSubmit} >
      <h4 className='text-3xl mb-3 font-medium'>Login</h4>
        <div className="form-group">
           <label className='block mb-2'>User Name</label>
           <input type="text" name="user" className='border-2 mr-2 py-2 pl-2 w-full max-w-lg'  onChange={handleInput}/>
        </div>
        <div className='form-group'>
            <label htmlFor="password" className='block mb-2'>Password</label>
            <input type="password" name="password" className='border-2 mr-2 py-2 pl-2 w-full max-w-lg' onChange={handleInput}/>
        </div>
        <input type="submit"  value="Submit" className='bg-red-100  text-sm py-2 px-4 mt-4' />
        
        <p>

        </p>
    </form>
    </div>
    </div>
  )
}

export default Login