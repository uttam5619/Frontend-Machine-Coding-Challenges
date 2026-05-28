import React from 'react'

const Content = ({heading,component}) => {


  return (
    <div>
      <h2>{heading}</h2>
      <div class='contentContainer'>
      {
        component
      }
      </div>
    </div>

  )
}

export default Content