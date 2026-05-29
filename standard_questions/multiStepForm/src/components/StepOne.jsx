import React from 'react'

const StepOne = ({userData,setUserData}) => {
    const {userDetails} = userData
    const {name,email,phone} = userDetails
    return (
        <div class='form'>
            <input
            placeholder='name'
            value={name}
            ></input>

            <br/>

            <input
            placeholder='email'
            value={email}
            ></input>

            <br/>

            <input
            placeholder='phone'
            value={phone}
            ></input>
        </div>
    )
}

export default StepOne

