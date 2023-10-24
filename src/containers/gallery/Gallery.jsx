import React from 'react'
import { gallery } from '../../assets/data'

const Gallery = () => {
  return (
    <div className='py-20 gallery'>
        <div className='grid grid-cols-4 gap-4 grid-flow-dense'>
        {
            gallery.map((galleres,index)=>{
                return(
                    <div className={`grid${index + 1}`} key={index}>
                        <img src={galleres.path} alt="" />
                        
                    </div>
                    
                )
            })
        }
        </div>
    </div>
  )
}

export default Gallery