import React, { useState } from 'react'
import { steps } from '../utils/config'
import { userObject } from '../utils/config'


const Form = () => {


    const [userData, setUserData] = useState(userObject)
    const [formCollection, setFormCollection] = useState(steps)
    const [currentStepIndex, setCurrentStepIndex] = useState(0)

    const Component= formCollection[currentStepIndex].formStep

    console.log(formCollection[currentStepIndex].formStep)


    const submitHandler =(e)=>{
        e.preventDefault()
        console.log(userData)
    }

  return (
    <form class='formContainer'>
        <div>
            {
                <Component
                    userData={userData}
                    setUserData={setUserData}
                />
            }
        </div>

        <div>
            <button
            type='button'
                onClick={()=>{
                    setCurrentStepIndex((prev)=>{
                        if(prev==0)return prev
                        return prev= prev-1
                    })
                }}
            >prev</button>

            <button
                type='button'
                onClick={()=>{
                    setCurrentStepIndex((prev)=>{
                        if(prev==2) return prev
                        return prev=prev+1
                    })
                }}
            >next</button>

            <button onClick={submitHandler}>Submit</button>
        </div>
    </form>
  )
}

export default Form