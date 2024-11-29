import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="fixed left-0 w-1/4 bg-slate-800 flex flex-col justify-center items-center h-screen text-slate-100 ">
      <Link to="/home">Home</Link>
      <Link to="/home">Sign In</Link>
      <Link to="/home">Diagnose</Link>
      <Link to="/home">Home</Link>
    </div>
  )
}

export default Navbar