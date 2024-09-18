import React from 'react'
import { LogoutSvg, UserImage } from '../../../assets'

const Profile = () => {
  return (
    <div className='flex items-center gap-1 p-4 pl-0 m-2 ml-0 w-full'>
        <div className="flex justify-center items-center w-full">
       <img
         className="w-8 h-8 rounded-full"
         src={UserImage}
         alt="User profile"
       />  
     </div>
        <div className='flex-grow p-2 leading-4 w-full'>
          <p className='text-bold '>Mark Benson</p>
          <small className='text-xs text-gray-500'>markbenson@core...</small>
        </div>
        <div className="text-xl">
        <LogoutSvg />
      </div>
      </div>

  )
}

export default Profile