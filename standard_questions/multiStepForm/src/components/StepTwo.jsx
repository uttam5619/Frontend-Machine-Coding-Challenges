import React from 'react'
import { useState } from 'react'
import { locationData } from '../utils/config'

const StepTwo = ({userData,setUserData}) => {
    let {shippingDetails} = userData
    let {lane,city,state,country,pin} = shippingDetails

    const [cityStateMap,setCityStateMap]=useState(locationData)
    const [stateList,setStateList] = useState([])
    const [cityList,setCityList] = useState([])

    console.log('stateList',stateList)
    console.log('cityList',cityList)

    return (
        <div class='form'>
            <input
            type='text'
            placeholder='lane'
            value={lane}
            ></input>

            <br/>

            <select
                value={country}
                onChange={(e) => {
                    const selectedCountry = e.target.value

                    setUserData((prev)=>(
                        {
                            ...prev,
                            shippingDetails:{
                                ...prev.shippingDetails,
                                country: selectedCountry,
                                state:'',
                                city:''
                            }
                        }
                    ))

                    const filteredState = cityStateMap.find((item)=>{
                        return item.country == selectedCountry
                    })
                    setStateList(filteredState?.states || [])
                    setCityList([]);
                }}
            >
                <option key='selectCountry'>Select Country</option>
                {
                    cityStateMap.map((item,index)=>{
                        return <option key={item.id} value={item.country}>{item.country}</option>
                    })
                }
            </select>

            <br/>

            <select
                value={state}
                onChange={(e) => {
                    const selectedState = e.target.value

                    setUserData((prev)=>(
                        {
                            ...prev,
                            shippingDetails:{
                                ...prev.shippingDetails,
                                state: selectedState,
                                city:''
                            }
                        }
                    ))

                    const filteredCities = stateList.find((item)=>{
                        return item.state==selectedState
                    })
                    setCityList(filteredCities?.cities || [])
                }}
            >
                <option key='selectState'>Select State</option>
                {
                    stateList?.map((list)=>{
                        return <option key={list.id} value={list.state}>{list.state}</option>
                    })
                }
            </select>


            <br/>


            <select
                value={city}
                onChange={(e) => {
                    const selectedCity = e.target.value

                    setUserData((prev)=>(
                        {
                            ...prev,
                            shippingDetails:{
                                ...prev.shippingDetails,
                                city: selectedCity,
                            }
                        }
                    ))
                }}
            >
                <option key='selectState'>Select State</option>
                {
                    cityList?.map((list, index)=>{
                        return <option key={index} value={list}>{list}</option>
                    })
                }
            </select>

        </div>
    )
}

export default StepTwo