import { useState}from "react";
import {AiOutlineClose , AiOutlineMenu} from  'react-icons/ai'
import { NavLink } from "react-router-dom";
const Navbar = () => {
    const [nav,setNav] = useState(false)

    const navHendler = ()=>{
        setNav(nav => !nav)
    }
  return (
    <div className="flex items-center  justify-between  h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
      <ul className="hidden md:flex">
        <li className="p-4"><NavLink to='/'>Home</NavLink></li>
        <li className="p-4"><NavLink to='/company'>Company</NavLink></li>
        <li className="p-4"><NavLink to='/resources'>Resources</NavLink></li>
        <li className="p-4"><NavLink to='/about'>about</NavLink></li>
        <li className="p-4"><NavLink to='/contact'>Contact</NavLink></li>
      </ul>
      <div onClick={navHendler} className='block md:hidden' >
        {!nav ? <AiOutlineMenu size={20}/> : <AiOutlineClose size={20}/>  }
        
      </div>
      <div className={nav ? "fixed w-[60%] top-0 left-0 h-full border-r border-r-gray-900 bg-black ease-in-out duration-500 z-20 " : 'fixed left-[-100%] '}>
      <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>
      <ul className="uppercase p-4">
        <li className="p-4 border-b border-gray-600">Home</li>
        <li className="p-4 border-b border-gray-600">Company</li>
        <li className="p-4 border-b border-gray-600">Resources</li>
        <li className="p-4 border-b border-gray-600">About</li>
        <li className="p-4">Contact</li>
      </ul>
      </div>
    </div>
  );
};

export default Navbar;
