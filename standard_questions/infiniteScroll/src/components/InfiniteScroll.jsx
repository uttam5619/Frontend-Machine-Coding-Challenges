import React, { useEffect, useState } from 'react'
import Card from './Card'

const THRESHOLD =20

const InfiniteScroll = () => {

    const [productsData,setProductsData] = useState([])
    const [page, setPage] = useState(1)
    const limit= 15
    


    useEffect(()=>{
        fetch(`https://dummyjson.com/products?limit=${limit}&skip=0`)
        .then(res => res.json())
        .then((data)=>{
            setProductsData(data.products)
            console.log(data)
        })
    },[])

    function loadMore(){
        let offset = (page-1)*limit
        fetch(`https://dummyjson.com/products?limit=${limit}&skip=${offset}`)
        .then(res => res.json())
        .then((data)=>{
            setProductsData((prev)=>{
                console.log(data)
                return [...prev,...data.products]
            })
        })
        
    }

    function handleScroll(e){
        //const scrollableHeight = e.target.sc
        /*
        console.log('scrolling')
        console.log('client height',e.target.clientHeight)
        console.log('scrolltop',e.target.scrollTop)
        console.log('scrollheight',e.target.scrollHeight)
        console.log('scroll bottom', e.target.scrollHeight - (e.target.clientHeight + e.target.scrollTop))
        */
       const remainingHeight = e.target.scrollHeight - (e.target.clientHeight + e.target.scrollTop) 
       if(remainingHeight <= THRESHOLD){
        setPage(prev=>prev+1)
        loadMore()
       }
    }

    return productsData.length!=0? (
        <div class='scrollContainer' onScroll={handleScroll}>
            {
                productsData.map((item, index)=>{
                    return <Card {...item} key={index} />
                })
            }
        </div>
    ):''
}

export default InfiniteScroll