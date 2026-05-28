import React from 'react'

const Profile = ({ userState, setUserState }) => {
  return (
    <div>

        <div class='fieldContainer'>
            <label class='label' htmlFor='name'>Name</label>
            <input 
              class='inputField'
              id="name" type='text'
              placeholder='Enter your name'
              value={userState.name}
              onChange={(e) => setUserState({ ...userState, name: e.target.value })}
            />
        </div>

        <div class='fieldContainer'>
            <label class='label' htmlFor='email'>Email</label>
            <input
              class='inputField'
              id="email"
              type='email'
              placeholder='abc@gmail.com'
              value={userState.email}
              onChange={(e) => setUserState({ ...userState, email: e.target.value })}
            />
        </div>

        <div class='fieldContainer'>
            <label class='label' htmlFor='password'>Password</label>
            <input
              class='inputField'
              id="password"
              type='password'
              placeholder='Enter your password'
              value={userState.password}
              onChange={(e) => setUserState({ ...userState, password: e.target.value })}
            />
        </div>

        
    </div>
  )
}

export default Profile