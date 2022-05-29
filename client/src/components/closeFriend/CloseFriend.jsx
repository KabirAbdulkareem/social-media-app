import React from 'react'
import './closeFriend.css'

const PF = process.env.REACT_APP_PUBLIC_FOLDER

function CloseFriend({user}) {
  return (
    <li className="sidebarFriend">
        <img className="sidebarFriendImg" src={PF+user.profilePicture} alt="" />
        <span className="sidebarFriendName">{user.username}</span>
    </li>
  )
}

export default CloseFriend