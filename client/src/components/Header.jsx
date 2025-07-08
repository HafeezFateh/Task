import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
function Header() {
  
 const [open, setOpen] = useState(false);

 const toggleMenu = () =>  (setOpen(prev => !prev));

 const location = useLocation();

  return (
    <div>
        <div className='bg-blue-900 text-white p-4 m-5 flex rounded-lg shadow shadow-blue-950/50 items-center justify-between '>
            <Link to='/'>            
                <h1 className='text-2xl font-semibold '>ProTech</h1>
            </Link>

            <span onClick={toggleMenu} className="material-symbols-outlined">menu</span>
            
        </div>
        {open &&         
        <div id="mobile-menu" className="bg-slate-900 gap-4 text-center mx-5 flex flex-col p-5 mb-5 text-white my-1  rounded-lg shadow shadow-slate-400/50">
           <Link to="/profile" className={`${
                location.pathname === "/profile" ? 'bg-slate-300 text-black'  : 'text-white'
            } text-xl rounded-lg px-4 py-2  hover:bg-slate-300 transition-colors duration-300`}>Profile</Link>
           <Link to="/blog" className={`${
                location.pathname === "/blog" ? 'bg-slate-300 text-black'  : 'text-white'
            } text-xl rounded-lg px-4 py-2  hover:bg-slate-300 transition-colors duration-300`}>Blog</Link>
        </div> 
        }
       
    </div>
  )
}

export default Header;
