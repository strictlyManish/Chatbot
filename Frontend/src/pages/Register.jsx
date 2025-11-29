import RippleGrid from '../components/RippleGrid'

function Register() {
  return (
    <div className="flex justify-center items-center mt-4">
      <div className="flex flex-col gap-5 bg-gray-800 p-25 shadow-2xl">
        <div>
          <div><h1 className="text-2xl">Create Your Account</h1></div>
          <p className="text-gray-400 text-[14px] font-thin font-serif">Join GPT and start exploring powerful tools instantly.</p>
        </div>
        <form className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Email"
            className="outline-none border border-transparent bg-gray-700 px-3 p-2 rounded focus:border-purple-600"
          />
          <input
            type="text"
            placeholder="Username"
            className="outline-none border border-transparent bg-gray-700 px-3 p-2 rounded focus:border-purple-600"
          />

          <input
            type="password"
            placeholder="Password"
            className="outline-none border border-transparent bg-gray-700 px-3 p-2 rounded focus:border-purple-600"
          />
          <button className="bg-purple-600 p-2 rounded-md cursor-pointer hover:bg-gray-900 mt-3">Register</button>
          <p className='font-cursive'>Allready have an account <a href="/login" className="text-purple-600">login</a></p>
        </form>
      </div>
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
    </div>
  )
}

export default Register