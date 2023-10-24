import React from 'react'
import { Heading,Texts,Para } from '../../components'
import { fitness } from '../../assets/data'

const HighFitnessGoals = () => {
  return (
    <section className='pb-20'>
    <div className='py-12 container'>
           <Heading fontSize="text-4xl" fontWeight="font-bold" textAlign="text-center" margins="mb-8">
               <Texts text="High" color="text-black"/> <Texts text="Fitness" color="text-sky-500"/> <Texts text="Goals" color="text-black"/> 
      </Heading>

      <Para textAlign="text-center" fontSize="text-lg">
      After you decide to start training we will make sure you get the best fitness program. Our sport experts and latest sports equipment are the winning combination. 
      </Para>

    </div>
    <div className='container'>
        <div className="grid grid-cols-4 gap-4 mt-12">
        {
            fitness.map(({id,name,body,icon})=>{
                return <div className='flex flex-col p-4 gap-y-2' key={id}>                    
                   <div className='w-12'>
                    {icon}
                   </div>
                   <h3 className='font-bold'>
                    {name}
                   </h3>
                   <p>
                    {body}
                   </p>
                </div>
            })
        }
        </div>
    </div>
    </section>
  )
}

export default HighFitnessGoals