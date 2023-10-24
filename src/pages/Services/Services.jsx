import React from 'react'
import { services } from '../../assets/data'
import { gymServices } from '../../assets/images/images'
import { Header } from '../../components'

const Services = () => {
  return (
  <section>
    <Header content="Gym Services" textAlign="text-center" fontSize="text-5xl" background={gymServices} bgPos="bg-center"  bgSize="bg-cover" bgRepeat="bg-no-repeat" color="text-white"/>
    <div className='container'>
      <ul className='grid grid-cols-4 gap-4 my-16'>
    {
      services.map(({id,icon,heading,content})=>{
        return(
          <li key={id} className='p-4 bg-slate-100'>
            {
              icon
            }
            <h3 className='font-bold my-2 text-xl'>{heading}</h3>
            <p className='text-base'>{content}</p>
          </li>
        )
      })
    }
    </ul>
    </div>
    </section>
  )
  
}

export default Services