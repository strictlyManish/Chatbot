import RippleGrid from './../components/RippleGrid';

function Login() {
  return (
    <div className="flex justify-center items-center mt-4">
      <div className='p-25'>
        <RippleGrid
          enableRainbow={false}
          gridColor="#ffffff"
          rippleIntensity={0.05}
          gridSize={15}
          gridThickness={15}
          mouseInteraction={true}
          mouseInteractionRadius={1.2}
          opacity={0.8}
        />
      </div>
      <div className="flex flex-col gap-5 bg-gray-800  p-25 shadow-2xl">
        <div>
          <div><h1 className="text-2xl">Welcome Back</h1></div>
          <p className="text-gray-400 text-[14px] font-thin font-serif">Welcome back ! Please enter your details</p>
        </div>
        <form className="flex flex-col gap-5">
          <input type="text" placeholder="Email" className="outline-0 border-0 bg-gray-700 px-3 p-2 rounded" />
          <input type="password" placeholder="Password" className="outline-0 border-0 bg-gray-700 px-3 p-2 rounded" />
          <button className="bg-purple-600 p-2 rounded-full cursor-pointer hover:bg-gray-900 mt-3">Loign</button>
          <p>Don't have an account <a href="/register" className="text-purple-600">register</a></p>
        </form>
      </div>
    </div>
  )
}

export default Login