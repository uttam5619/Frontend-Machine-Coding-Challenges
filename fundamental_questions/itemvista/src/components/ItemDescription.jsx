import React from 'react'
import { useParams } from 'react-router-dom'

const ItemDescription = () => {
    const {itemId} = useParams()
  return (
    <div>
        ItemDescription
        <div>{itemId}</div>
    </div>
  )
}

export default ItemDescription