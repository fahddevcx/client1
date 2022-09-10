import "./sidebar.css"
import React, { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [cats,setCats] = useState([])
  useEffect(()=>{
    const getCat = async ()=>{
      const res = await axios.get("/Categories")
      setCats(res.data)
    }
    getCat()
  },[])
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img
          src="https://i.pinimg.com/564x/ae/3e/d2/ae3ed21f4037f6af0817c4b14b31bfde.jpg"
          alt=""
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>          
          </div>
          <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))} 
                </ul>
          </div>
          <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
        </div>
    </div>
  )
}
