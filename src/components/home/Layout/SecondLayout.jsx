import React from 'react'

function SecondLayout(props) {
  return (
    <div>
        <div className="">
            <img src={props.img} alt="" />
        </div>
        <div className="">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    </div>
  )
}

export default SecondLayout