import { IoIosArrowBack, IoIosArrowDown } from 'react-icons/io';
import { Dropdown, DropdownDivider } from 'flowbite-react';
import { UserImage } from '../../assets';
import NotificationDropDown from './comonents/NotificationDropDown';
import MessageDropDown from './comonents/MessageDropDown';

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-950 shadow-sm dark:shadow-white w-full grid grid-cols-12 gap-0 p-4 mr-10  justify-items-stretch items-center relative">
      <div className='justify-self-start col-span-5 flex items-center gap-1 cursor-pointer relative'>
          <IoIosArrowBack /><span>Back</span>
      </div>
      {/* Search Input */}
      <div className='col-span-6 flex justify-between gap-2 relative'>
      <div className="flex items-center flex-grow  space-x-4 w-full">
       
        <form className='w-full mr-5'>   
            <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search here...</label>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input type="search" id="search" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
                </div>
        </form>

      </div>

      {/* Icons and Profile Section */}
      <div>
      <div className="flex items-center space-x-4">
        {/* Notification Bell Icon */}
        <NotificationDropDown/>

        {/* Chat Icon */}
        <MessageDropDown/>
        {/* User Profile */}
        <div className="cursor-pointer select-none">
      
          <Dropdown label="" dismissOnClick={false} size='lg' renderTrigger={() =>  <div className="flex items-center space-x-4 w-full">
          <img
            className="w-8 h-8 rounded-full"
            src={UserImage}
            alt="User profile"
          />   <span className="text-gray-900 dark:text-gray-400"><IoIosArrowDown size={'1rem'}/></span>
          </div>}>
            <Dropdown.Item as='a' href="#">Dashboard</Dropdown.Item>
            <Dropdown.Item as='a' href="#">Settings</Dropdown.Item>
            <Dropdown.Item as='a' href="#">Others</Dropdown.Item>
            <DropdownDivider/>
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        </div>
        </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
