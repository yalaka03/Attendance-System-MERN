import { Outlet } from "react-router-dom"
import PersistentDrawerLeft from "./Navbar"
const Layout = () => {
    return (
        <div>
        <PersistentDrawerLeft/>
        <main className="App">
            <Outlet />
        </main>
        </div>
    )
}

export default Layout
