import React from 'react'

const Heading = (props) => {
  return (
    <h2 className={`leading-tight ${props.fontSize} ${props.marginBottom} ${props.fontWeight} ${props.margins} ${props.textAlign}`}>{props.children}</h2>
  )
}

export default Heading