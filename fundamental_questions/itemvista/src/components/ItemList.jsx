import React from 'react'
import { Link } from 'react-router-dom'

const ItemList = () => {
  return (
    <div>
        <div>
            <Link to='/12345'>Item One</Link>
        </div>
        
        <div>
            <Link to='/12346'>Item Two</Link>
        </div>
        
        <div>
            <Link to='/12347'>Item Three</Link>
        </div>
        
    </div>
  )
}

export default ItemList