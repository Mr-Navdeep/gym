import React,{useState} from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import {Heading,Texts} from '../../components'
import 'react-toastify/dist/ReactToastify.css';

const Newsletter = () => {

  const [form, setForm] = useState();

  const handeInputChange = (e) =>{
    setForm({...form,
        [e.target.name]:e.target.value
    })

    console.log(form)
  }

  const handleSubmit = (e) =>{
    e.preventDefault();

    axios.post('http://localhost:8080/newsletter',form )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      toast("Form is Submitted");
  }

  return (
    <div className='form py-12'>
        <div className='max-w-4xl mx-auto'>
            <form onSubmit={handleSubmit} className=''>

            <Heading fontSize="text-4xl" fontWeight="font-bold" textAlign="text-center" marginBottom="mb-4">
               <Texts text="Sign up for Our" color="text-black"/> <Texts text="Newsletter" color="text-sky-500"/>
          </Heading>                
                                     
                <div className='flex md:flex-row content-center justify-center'>
                    <input type='mail' className='border-2 mr-2 py-2 pl-2 w-full max-w-lg' name="user"  onChange={handeInputChange}/>
                    <input type="submit" className='bg-red-100  text-sm py-2 px-4' />
                </div>
                <ToastContainer />
            </form>            
    </div>
    </div>
    
  )
}

export default Newsletter