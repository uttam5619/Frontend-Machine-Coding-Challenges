import React from 'react'

const Card = (props) => {
    const { title, description, images} = props
  return (
    <div className='card'>

        <div className='imageContainer'>
            <img
                className='cardImage'
                src={images[0]}
                alt={title}
            />
        </div>

        <div className='cardTitle'>
            {title}
        </div>

        <div className='cardDescription'>
            {description}
        </div>

    </div>
  )
}

export default Card