import React from 'react'

const ProductCard = ({name, description, image}) => {

  return (
    <div class='productCard'>
       <div class='imageContainer'>
       <img
            class='productImage'
            src={image[0]}
        />
       </div>
        <div className='text-sm p-2 text-center'>
            {name}
        </div>
        <div className='text-xs p-2 text-center'>
            {description}
        </div>
    </div>
  )
}

export default ProductCard