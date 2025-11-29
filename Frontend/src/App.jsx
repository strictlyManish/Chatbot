import Navigationbar from "./components/Navigationbar"
import Mainroutes from "./routes/Mainroutes"

function App() {
  return (
    <div className='bg-gray-900 h-screen text-white px-8 py-2 overflow-hidden transition-all'>
      <Navigationbar/>
      <Mainroutes/>
    </div>
  )
}

export default App