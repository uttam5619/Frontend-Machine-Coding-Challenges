import React from 'react'
import { useState, useEffect } from 'react'

const Slider = ({images}) => {

    const [imageCollection, setImageCollection] = useState(images)
    const [currentIndex, setCurrentIndex] = useState(0)

    const length=imageCollection.length

    useEffect(()=>{
        
        const interval = setInterval(()=>{
            setCurrentIndex((prev)=>{
                prev=(prev+1)%length
                return prev
            })
        },4000)

        return ()=>{clearInterval(interval)}

    },[])

    const prevHandler =()=>{
        setCurrentIndex((prev)=>{
            if(prev==0){
                prev=length-1
            }else{
                prev=prev-1
            }
            return prev
        })
    }

    const nextHandler =()=>{
        setCurrentIndex((prev)=>{
            if(prev==length-1){
                prev=0
            }else{
                prev=prev+1
            }
            return prev
        })
    }


    return (
        <div class='container'>
            <button id='prev' onClick={prevHandler}>{"<"}</button>
            <div class='carousal'>
                <img class='carousal_img' src={imageCollection[currentIndex]}></img>
            </div>
            <button id='next' onClick={nextHandler}>{">"}</button>
        </div>
    )
}

export default Slider