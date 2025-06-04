import React, { useEffect, useState } from 'react';
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import { MdHomeRepairService } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { MdConnectWithoutContact } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import { MdInsertPhoto } from "react-icons/md";
import logo from '../../assets/logo-without-text.png'
import logotext from '../../assets/logo-text2.png'
import './Navbar.css'

function Navbar() {
    let [openMenu, setOpenMenu] = useState(false);
    let navigate = useNavigate();
    let menuOptions = [
        {
            text: "Home",
            to: "",
            icon: <HomeIcon style={{ fontSize: '30px' }} />,
        },
        {
            text: "Services",
            to: "services",
            icon: <MdHomeRepairService style={{ fontSize: '30px' }} />,
        },
        {
            text: "Gallery",
            to: "gallery",
            icon: <MdInsertPhoto style={{ fontSize: '30px' }} />
        },
        {
            text: "About Us",
            to: "aboutus",
            icon: <IoIosPeople style={{ fontSize: '30px' }} />,
        },
        {
            text: "Contact Us",
            to: "contact",
            icon: <MdConnectWithoutContact style={{ fontSize: '30px' }} />
        }
    ];
    const [dropDownFlag, setDropDownFlag] = useState(true);
    function handleResize() {
        if (window.innerWidth < 700) {
            setDropDownFlag(false)
        }
        else {
            setDropDownFlag(true)
        }
    }
    window.addEventListener("resize", () => handleResize);
    useEffect(() => {
        handleResize()
    })
    return <nav>
        {dropDownFlag && <div className='row'>
            <div className='col'>
                <div className='d-flex justify-items-center' style={{alignItems:'center'}}>
                    <img className='p-1' src={logo} height={'100px'} style={{ left: '0! important', marginRight: 'auto !important' ,borderRadius:'10px'}} />
                    <img src={logotext} style={{ width: 'calc(100% - 100px)',top:'10px' }} />
                </div>
            </div>
            <ul className="col-7 nav d-flex text-center justify-content-end" style={{ fontSize: '1.3rem', padding: '10px' }}>
                <li className='nav-item pt-4'>
                    <Link className='text-black p-2' to="">
                        Home
                    </Link></li>
                <li className='nav-item pt-4'>
                    <Link className='text-black p-2' to="services">
                        Services
                    </Link>
                </li>
                <li className='nav-item pt-4'>
                    <Link className='text-black p-2' to="gallery">
                        Gallery
                    </Link>
                </li>
                <li className='nav-item pt-4'>
                    <Link className='text-black p-2' to="aboutus">
                        About us
                    </Link>
                </li>
                <li className='nav-item pt-4'>
                    <Link className='text-black p-2' to="contact">
                        Contact Us
                    </Link>
                </li>
                <li className='nav-item pt-4 p-2'>
                    <Link className='requestacall rounded rounded-5 p-2' to="contact">
                        Request a call
                    </Link>
                </li>
            </ul>
        </div>}
        {!dropDownFlag && <div>
            <div className='row navbar-menu-container'>
                <div className='col-4'>
                    <img className='p-1 rounded-3' src={logo} height={'70px'} style={{ right: 0 }} />
                </div>
                <div className='col-8 d-flex justify-content-end'>
                    <div className='nav-item pt-4 p-3'>
                        <Link className='requestacall rounded rounded-5 p-2' to="contact">
                            Request a call
                        </Link>
                    </div>
                    <HiOutlineBars3 style={{ color: 'black', fontSize: '30px', marginTop: '20px' }} onClick={() => setOpenMenu(true)} />
                </div>
            </div>
            <div className='m-2'>
                <img src={logotext} style={{ width:'100%',top:'10px' }} />
            </div>
            <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor='top' >
                <Box sx={{ width: 250 }} role="presentation" onClick={() => setOpenMenu(false)} onKeyDown={() => setOpenMenu(false)}>
                    <List>
                        {menuOptions.map((item) => (
                            <ListItem key={item.text} disablePadding>
                                <ListItemButton onClick={() => navigate(item.to)}>
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText>{item.text}</ListItemText>
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </div>}
    </nav>
}

export default Navbar