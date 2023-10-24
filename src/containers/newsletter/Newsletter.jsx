import React from 'react'
import { Newsletter } from '../../components'

const Subscription = (props) => {
  return (
    <section className={`newsletter ${props.background} `}>
        <Newsletter/>
    </section>
  )
}

export default Subscription