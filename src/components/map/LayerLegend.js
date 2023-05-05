import React from 'react'

export default function (props) {
  return (
    <>
      <div className='' style={{ position: 'absolute', top: '150px', left: '260px', width: '200px', zIndex: 1000, }} >
        <img src={props.url} className='rounded mx-auto d-block shadow-lg'></img>
      </div>
    </>
  )
}
