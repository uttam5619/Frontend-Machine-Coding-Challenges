import React from 'react'

const Interest = ({userState,setUserState}) => {
  return (
    <div>
        <div class='fieldContainer'>
            <label class='label' htmlFor='hobby'>Hobby</label>
            {
              userState.hobby.map((hob, index) => (
                <input
                  type='text'
                  key={index}
                  value={hob}
                  onChange={(e) => {
                    const updatedHobbies = [...userState.hobby];
                    updatedHobbies[index] = e.target.value;

                    setUserState({
                      ...userState,
                      hobby: updatedHobbies
                    });
                  }}
                />
              ))
            }

        </div>

        <div class='fieldContainer'>
            <label class='label' htmlFor='interest'>What interests you most</label>
            {
              userState.interest.map((hob, index) => (
                <input
                  key={index}
                  value={hob}
                  onChange={(e) => {
                    const updatedHobbies = [...userState.hobby];
                    updatedHobbies[index] = e.target.value;

                    setUserState({
                      ...userState,
                      hobby: updatedHobbies
                    });
                  }}
                />
              ))
            }
        </div>

    </div>
  )
}

export default Interest