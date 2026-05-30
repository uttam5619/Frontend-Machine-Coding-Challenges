import React, { useState } from 'react'

const Form = () => {

    const [userName, setUserName]= useState('')
    const [email, setEmail]= useState('')
    
    const [files, setFiles] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const multipartData = new FormData();
    
        multipartData.append('name', userName);
        multipartData.append('email', email);
    
        files.forEach((file) => {
            multipartData.append('files', file);
        });
    
        console.log([...multipartData.entries()]);
    }


  return (
    <div>
        <form>

            <input
                placeholder='userName'
                name='userName'
                value={userName}
                type='text'
                onChange={(e)=>{setUserName(e.target.value)}}
            ></input>

            <input
                placeholder='email'
                name='email'
                value={email}
                type='email'
                onChange={(e)=>{setEmail(e.target.value)}}
            ></input>

            <input
                name='files'
                multiple
                type='file'
                onChange={(e)=>{setFiles([...e.target.files])}}
            ></input>

            <button
                onClick={(e)=>{
                    handleSubmit(e)
                }}
            >
                Submit
            </button>

        </form>
    </div>
  )
}

export default Form