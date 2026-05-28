import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'

function App() {
  const [count, setCount] = useState(0)
  //Our job is to fetch the data from the API and display it in the UI
  return (
    <>
      <SearchBar />
    </>
  )
}

export default App
