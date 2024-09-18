import { NavLink } from "react-router-dom";
import Menu from "./components/Menu";
import Profile from "./components/Profile";
import {Logo}  from "../../assets"
import { HiQuestionMarkCircle } from "react-icons/hi";
import { IoIosSettings } from "react-icons/io";

const Sidebar = () => {
  
    return (
      <div className={`bg-gray-100  dark:bg-gray-900 w-56 p-4 block h-screen fixed left-0 top-0`}>
        <div>
        <h2 className="text-xl font-semibold text-blue-600 mb-6"><img src={Logo} alt="logo"/></h2>
        </div>
        <nav className="flex flex-col items-stretch h-full">
          <ul className="space-y-2 self-start w-full overflow-y-auto">
            <Menu />
          </ul>
          <div className="absolute self-end flex flex-col w-full bottom-0 left-0 right-0 m-auto">
            <div className="relative">
           <ul className="space-y-2 self-start w-full">
            <li className="py-2 px-4 text-gray-600 dark:text-gray-300 hover:bg-blue-100 hover:text-blue-600 rounded"><NavLink to="" className='flex items-center text-xs gap-1'><HiQuestionMarkCircle size={'1.4rem'}/> Support</NavLink></li>
            <li className="py-2 px-4 text-gray-600 dark:text-gray-300 hover:bg-blue-100 hover:text-blue-600 rounded"><NavLink to="" className='flex items-center text-xs gap-1'><IoIosSettings size={'1.4rem'}/> Settings</NavLink></li>
           </ul> 
           <Profile/>
           </div>
           </div>
        </nav>
      </div>
    );
  };
  
  export default Sidebar;
  