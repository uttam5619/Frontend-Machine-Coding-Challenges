import './App.css'
import Navbar from './components/Navbar'
import Container from './components/Container'
import SideBar from './components/SideBar'

function App() {
  return (
    <div className="h-screen flex flex-col">

      {/* Navbar */}
      <Navbar />

      {/* Remaining Area */}
      <div className="flex flex-1 min-h-0 overflow-hidden">

        {/* Sidebar */}
        <SideBar />

        {/* Main Content */}
        <Container />

      </div>

    </div>
  )
}

export default App
