import React from 'react'
import './SmallCard.css'

function SmallCard({btn,name,value,style, flex}) {
  return (
    <div style={flex} className='small-card'>
      <button style={style}>{btn}</button>
      <div className="right-small-card">
        <p>{name}</p>
        <h3>{value}</h3>
      </div>
    </div>
  )
}

export default SmallCard
