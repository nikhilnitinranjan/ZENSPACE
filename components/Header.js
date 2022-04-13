import React from 'react'
import { useMoralis } from 'react-moralis'
import Avatar from './Avatar'
import ChangeUsername from './ChangeUsername'

function Header() {
  const { user } = useMoralis()
  return (
    <div className="sticky top-0 z-50 border-b-2 border-pink-700 bg-black p-2 text-pink-500 shadow-sm">
      <div className=" lg:items-center">
        <div className=" text-left lg:text-center ">
          <div className="relative h-32 w-32 rounded-full border-8 border-pink-500 lg:mx-auto ">
            <Avatar logoutOnPress />
          </div>
          <h1>WELCOME TO METAVERSE</h1>
          <h2 className="truncate text-5xl font-bold">{user.getUsername()}</h2>
          <ChangeUsername />
        </div>
      </div>
    </div>
  )
}

export default Header
