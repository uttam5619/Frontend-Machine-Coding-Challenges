import { useState } from 'react'

import './App.css'
import { tabs } from './config/utils'
import { components } from './config/utils'

function App() {

  const [activeTab, setActiveTab] = useState(0)
  const ActiveComponent = components[activeTab].component

  const [userState, setUserState] = useState({
    name:'',
    email:'',
    password:'',
    hobby:[],
    interest:[],
    passion:[],
  })

  console.log(userState)

  return (
    <>
      <div class='tabs'>
      {
        tabs.map((tab, index)=>{
          return <div
                  class='tab'
                  onClick={() => setActiveTab(index)}
                  >
                    {tab.tabName}
                  </div>
        })
      }
      </div>

      <div>
        <ActiveComponent userState={userState} setUserState={setUserState} />
      </div>
    </>
  )
}

export default App
