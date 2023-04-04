import React from "react"
import logo from "./../assets/icon.svg"
import { Link } from "react-router-dom"
const MyNavbar = () => {
  return (
    <div className=" bg-red-800">
      <div className="container mx-auto py-2 px-2 flex justify-between  items-center">
        <h1 className="text-2xl text-white inline-flex items-center">
          CAPENEWS{" "}
          <span>
            <img className="w-16  " src={logo} alt="" />
          </span>
        </h1>
        <div className="flex gap-9">
          <Link to="/details" className="text-white">
            Hot Topic
          </Link>
          <Link to="/about" className="text-white">
            About
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MyNavbar
