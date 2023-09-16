import React from 'react'

const Prop = ({people}) => {
    let {name, age} = people
  return (
    <div>
        <h1>hello soy {name}</h1>
        <p>tengon {age}</p>
    </div>
  )
}

export default Prop