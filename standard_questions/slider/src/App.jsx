
import './App.css'

import Slider from './components/Slider.jsx'

import one from './assets/one.png'
import two from './assets/two.jpg'
import three from './assets/three.jpg'
import five from './assets/five.jpg'
import six from './assets/six.jpg'
import seven from './assets/seven.jpg'
import eight from './assets/eight.jpg'
import nine from './assets/nine.webp'
import ten from './assets/ten.jpg'

const images = [one, two, three, five, six, seven, eight, nine, ten]

function App() {
  
  return (
    <>
      <Slider images={images} />
    </>
  )
}

export default App
