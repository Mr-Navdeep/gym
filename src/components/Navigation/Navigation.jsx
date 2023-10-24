import React,{useState} from 'react'
import {NavLink,Link,Navigate, useNavigate } from "react-router-dom";
import { Logo } from '../../assets/images/images.js'
import { links } from '../../assets/data.js'
import { GiHamburgerMenu } from "react-icons/gi";
import { useCookies } from 'react-cookie';


const Navigation = () => {

    const [togglemenu, setToggleMenu] = useState(true)
    const [cookie,setCookie]= useCookies(['access_Token']);
    const navigate = useNavigate();

    const logOut = () =>{
        setCookie('access_Token','');
        window.localStorage.removeItem('userID')
        navigate("/login")
    }

  return (
    <header >
        <div className='container mx-auto flex content-center justify-between px-12'>
            <div className="logo w-20 flex content-center gap-3">
                <img src={Logo} alt="Site Logo" />
                <button onClick={()=>{setToggleMenu(!togglemenu)}}>
                     <GiHamburgerMenu/>
                </button>
                
            </div>
            {
                togglemenu && (
                    <nav className='flex content-center flex-nowrap'>
                    <ul className='flex gap-4 content-center flex-wrap'>
                        {links.map((link)=>{
                            return <li className='flex content-center' >
                                 <NavLink to={link.path} style={({ isActive }) => ({ 
                            color: isActive ? '#ff0000' : '#000' })}>
                            {link.name}
                        </NavLink>
                                
                            </li>
                        })}
                        {
                            !cookie.access_Token ? (
                                <li>
                                    <Link to="/register">Register</Link>
                                </li>):(<button onClick={logOut}>Logout</button>)
                        }
                        
                    </ul>
                </nav>
                )
            }
           
        </div>
    </header>
  )
}

export default Navigation