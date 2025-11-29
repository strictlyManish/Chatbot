import { NavLink } from "react-router-dom"

function Navigationbar() {
  return (
    <div className="flex justify-between items-center py-5">
      <div><h1 className="text-4xl font-extralight">GPT</h1></div>
      <div className="flex items-center justify-center gap-5">
        <NavLink to="/" >Home</NavLink>
        <NavLink to="/login" >Login</NavLink>
        <NavLink to="/register" >Register</NavLink>
      </div>
    </div>
  )
}

export default Navigationbar