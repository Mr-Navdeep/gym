import React from 'react'

const Para = (props) => {
  return (
    <p className={`leading-6 ${props.fontSize} ${props.textAlign}`}>{props.children}</p>
  )
}

export default Para