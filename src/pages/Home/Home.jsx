import React from 'react'
import { Imagetext, Subscription,HighFitnessGoals } from '../../containers'
import { GetBlog } from '../../components'

const Home = () => {
  return (
    <>
     <section>
       <div className="container px-12">
          <Imagetext/>
          <GetBlog number="4"/>                  
       </div>
       <HighFitnessGoals/> 
       <Subscription background="bg-slate-100"/> 
       
     </section>
       
    </>
  )
}

export default Home