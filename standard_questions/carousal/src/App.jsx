
import './App.css'
import Carousal from './components/Carousal'

import pxOne from './assets/pxOne.png'
import pxTwo from './assets/pxTwo.jpg'
import pxThree from './assets/pxThree.webp'
import pxFour from './assets/pxFour.jpg'

function App() {
  

  return (
    <div className='app'>
      <Carousal>
        <img src={pxOne}/>
        <img src={pxTwo}/>
        <img src={pxThree}/>
        <img src={pxFour}/>

      </Carousal>
    </div>
  )
}

export default App
