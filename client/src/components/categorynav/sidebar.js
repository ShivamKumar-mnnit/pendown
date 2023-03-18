import React from 'react'

const sidebar = () => {
  return (
    <ul className="list-group-item highzindex">
    <li className="list-group-item"><i className="fa-solid fa-user"></i> Guest</li>
    <li className="list-group-item"> <i className="fa-solid fa-bag-shopping"></i> Product Categories</li>
    <li className="list-group-item"><i className="fa-solid fa-square"></i> Orders</li>
    <li className="list-group-item"><i className="fa-solid fa-location-dot"></i> Location</li>
    <li className="list-group-item"><i className="fa-solid fa-gear"></i> Settings</li>
    <li className="list-group-item"><i className="fa-solid fa-address-book"></i> Contact us</li>
    <li className="list-group-item"><i className="fa-sharp fa-solid fa-right-from-bracket"></i> Logout</li>
  </ul>
  )
}

export default sidebar
