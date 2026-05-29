import React from 'react'
import { useState } from 'react'

const StepThree = ({userData, setUserData}) => {
    const {paymentDetails} = userData
    const {paymentMethod, paymentAmount, cardNumber, cardHolderName, upiId} = paymentDetails

    const [paymentMethods,setPaymentMethods] = useState(['card','upi'])

    return (
        <div class='form'>

            <select
                value={paymentMethod}
                onChange={(e)=>{
                    const selectedMethod = e.target.value

                    setUserData((prev)=>({
                        ...prev,
                        paymentDetails:{
                            ...prev.paymentDetails,
                            paymentMethod:selectedMethod
                        }
                    }))
                }}
            >
                <option>Payment Method</option>
                {
                    paymentMethods.map((item, index)=>{
                        return <option id={index}>{item}</option>
                    })
                }
            </select>

            <br/>

            {
                paymentMethod=='card'?
                (
                    <div>
                        <input
                            type='number'
                            value={cardNumber}
                            placeholder='card Number'
                            onChange={(e)=>{
                                let givenCardNumber = e.target.value

                                setUserData((prev)=>({
                                   ...prev,
                                   paymentDetails:{
                                    ...prev.paymentDetails,
                                    cardNumber:givenCardNumber
                                   } 
                                }))
                            }}
                        >
                        </input>

                        <input
                            type='text'
                            value={cardHolderName}
                            placeholder='cardhholder name'
                            onChange={(e)=>{
                                let givenCardHolderName = e.target.value

                                setUserData((prev)=>({
                                   ...prev,
                                   paymentDetails:{
                                    ...prev.paymentDetails,
                                    cardHolderName:givenCardHolderName
                                   } 
                                }))
                            }}
                        >
                        </input>
                    </div>
                )
                : paymentMethod === 'upi' ? (
                    <input
                        placeholder="upiId"
                        value={upiId}
                        type="text"
                        onChange={(e)=>{
                            let givenUpiId = e.target.value

                            setUserData((prev)=>({
                               ...prev,
                               paymentDetails:{
                                ...prev.paymentDetails,
                                upiId:givenUpiId
                               } 
                            }))
                        }}
                    />
                ) : null
            }


            <br/>

            <input
            placeholder='payment Amount'
            value={paymentAmount}
            type='number'
            onChange={(e)=>{
                let givenPaymentAmount = e.target.value

                setUserData((prev)=>({
                   ...prev,
                   paymentDetails:{
                    ...prev.paymentDetails,
                    paymentAmount:givenPaymentAmount
                   } 
                }))
            }}
            ></input>

            
        </div>
    )
}

export default StepThree