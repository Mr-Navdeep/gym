import React from 'react'

const ImageContent = (props) => {
  return (
    <div className={`grid sm:grid-cols-2 ${props.padding}`}>

        <div>
            <img src={props.image} alt={props.alt} />
        </div>

        <div className='px-12'>
           <h3 className='font-bold text-3xl mb-2'>
            {props.heading}
           </h3>
            <p>
            {props.content}
            </p>
        </div>

    </div>
  )
}

export default ImageContent