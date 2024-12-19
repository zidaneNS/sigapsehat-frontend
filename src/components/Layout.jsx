import { Outlet } from "react-router-dom"
import Navbar from "./LandingPageComp/Navbar"

const Layout = () => {
  return (
    <main className="App h-screen flex justify-center items-center">
      {/* <Navbar /> */}
      <Outlet />
    </main>
  )
}

export default Layout