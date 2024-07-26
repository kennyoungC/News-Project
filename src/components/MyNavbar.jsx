import React, { useContext } from "react"
import logo from "./../assets/icon.svg"
import { Link } from "react-router-dom"
import { multiStateContext } from "../contextApi"
const MyNavbar = () => {
  const { isAdmin, user, setUser, setIsAdmin } = useContext(multiStateContext)

  return (
    <div className=" bg-red-800">
      <div className="container mx-auto py-2 px-2 flex flex-wrap justify-between items-center">
        <Link to={"/"}>
          <h1 className="text-2xl text-white inline-flex items-center">
            CAPENEWS{" "}
            <span>
              <img className="w-16  " src={logo} alt="" />
            </span>
          </h1>
        </Link>
        <div>
          {user ? (
            <span className="text-white">
              hello {user[0].firstname} {user[0].lastname}!
            </span>
          ) : (
            <span className="text-white">login or signup below</span>
          )}
        </div>
        <div className="flex gap-9">
          <Link to="/details" className="text-white">
            Hot Topic
          </Link>
          <Link to="/about" className="text-white">
            About
          </Link>
          <Link to="/weather" className="text-white">
            Weather
          </Link>
          {isAdmin && (
            <Link to="/news-page" className="text-white">
              News(Admin)
            </Link>
          )}
          <Link
            to="/login"
            className="text-white"
            onClick={() => {
              localStorage.removeItem("token")
              setUser(null)
              setIsAdmin(false)
            }}
          >
            Logout
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MyNavbar
