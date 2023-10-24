import React from 'react'
import { Header } from '../../components'
import { GalleryContainer } from '../../containers'
import {gymBanner} from '../../assets/images/images'


const Gallery = () => {
  return (
    <section>
      <Header content="Gallery"  textAlign="text-center" fontSize="text-5xl" background={gymBanner} bgPos="bg-center"  bgSize="bg-cover" bgRepeat="bg-no-repeat" color="text-white"/> 
      
      <div className="container">
         <GalleryContainer/>
      </div>      
    </section>
  )
}

export default Gallery