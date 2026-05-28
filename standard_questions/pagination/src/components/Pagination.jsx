import React, { useEffect, useState } from 'react'

const Pagination = () => {

    const [products,setProducts] = useState([])
    const [totalItems,setTotalItems] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    const [productsInAPage, setproductsInAPage] = useState([])

    const limit=parseInt(10);
    let offset= parseInt((currentPage-1)*limit) 
    const totalPages = Math.ceil(totalItems/limit)
    

    useEffect(()=>{
        fetch(`https://dummyjson.com/products?limit=${limit}&skip=${offset}`)
        .then(res => res.json())
        .then((data)=>{
            setProducts(data.products)
            setTotalItems(data.total)
            console.log(data)
        })
    },[currentPage])


    const renderPagesBlock =()=>{

        let pages = []

        for(let i=1; i<=Math.min(6,totalPages); i++){
            pages.push(
                <button key={i} class='pageNumBlock'
                    onClick={()=>{setCurrentPage(i)}}
                >
                    {i}
                </button>
            )
        }

        if (totalPages > 6) {

            pages.push(
                <span key="dots">
                    ...
                </span>
            )

            // Last 1 page
            pages.push(
                <button key={totalPages} onClick={()=>{setCurrentPage(totalPages)}}>
                    {totalPages}
                </button>
            )
        }

        return pages
    }
    

    return (
        <div>
            <div>
                Products
            </div>

            {
                renderPagesBlock()
            }
        </div>
    )
}

export default Pagination