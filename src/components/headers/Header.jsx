import React from 'react'

const Header = (props) => {
  return (
    <section className='relative'>
    <div  className={`py-40 ${props.textAlign} ${props.bgPos} ${props.bgSize} ${props.bgRepeat} ${props.bgRepeat}` } style={{backgroundImage:`url(${props.background})`}} >        
        <h2 className={`${props.fontSize} ${props.color} `}>{props.content} </h2>
    </div>
    </section>
  )
}

export default Header