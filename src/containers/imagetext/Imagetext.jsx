import React from 'react'
import { Texts,Heading,Para, Button } from '../../components'
import { header1 } from '../../assets/images/images'

const Imagetext = () => {
  return (
    
    <section>

      <div className='flex gap-8'>
        <div className='basis-2/5 flex content-center flex-col justify-center gap-5'>
           <Heading fontSize="text-4xl" fontWeight="font-bold">
               <Texts text="This is cool" color="text-black"/> <Texts text="Workout." color="text-sky-500"/><br/> <Texts text="For Every One" color="text-black"/>
          </Heading>
          <Para>
              <Texts text="Whether you're a seasoned athlete or just starting your fitness journey, we welcome individuals of all fitness levels. Our diverse range of classes, top-notch equipment, and personalized training options ensure there's something for everyone. Join us today and take the first step towards a healthier, happier you." color="text-black"/>
          </Para>

          <Button path="/contact"/>
    
        </div>
        <div className='basis-2/3'>
          <img className="max-w-full" src={header1} alt="" />
        </div>




      </div>        

    </section>
  )
}

export default Imagetext