import React from 'react'
import { Link } from "react-router-dom";

const Button = (props) => {
  return (
    <Link to={props.path} className='bg-black text-white text-center py-2 rounded-3xl w-44 flex content-center justify-center gap-5'>Contact Us {props.icon}</Link>
  )
}

export default Button