import { Outlet } from "react-router-dom"
import Navbar from "./NavBar/Navbar"
import { useNavigate ,useLocation} from "react-router-dom"
import { useState, useEffect} from "react"
import Footer from './Footer/Footer'

function RootLayout(){
    let path=useLocation().pathname.split('/')
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return(
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default RootLayout