import React, {useEffect, useState, useRef} from 'react'

const Carousal = ({children}) => {

    const [currentIndex,setCurrentIndex] = useState(-1)
    const carousalBoxRef = useRef()

    useEffect(() => {
     
        const intervalId = setInterval(()=>{
            setCurrentIndex((prev)=>{
                const carousalBox = carousalBoxRef.current 
                const slides = carousalBox.children
                const count= slides.length
                const newIndex = (prev+1) % count
                
                Array.from(slides).forEach((slide,index)=>{
                    slide.setAttribute('data-active', index==newIndex)
                })

                return newIndex
                
            })
        },6000)

        return ()=>{setInterval(intervalId)}
      
    }, [])
    



  return (
    <div class='carousal'>
        <div>{currentIndex}</div>
        <div ref={carousalBoxRef} class='box'>{children}</div>
    </div>
  )
}

export default Carousal
