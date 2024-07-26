import React, { useState } from "react"
import CustomSvg from "../components/CustomSvg"
import { Link, useNavigate } from "react-router-dom"

const Register = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    firstName: "",
    email: "",
    password: "",
    lastName: "",
  })

  const isSetNewUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    const { firstName, lastName, password, email } = user
    if (
      !firstName.length ||
      !email.length ||
      !password.length ||
      !lastName.length
    ) {
      alert("No Empty Fields is Allowed")
      return
    }
    try {
      const res = await fetch("http://localhost:3001/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
      const data = await res.json()
      console.log(data)

      localStorage.setItem("email", data.user.email)
      if (data.success) {
        alert("User Created Successfully")
        setUser({
          firstName: "",
          email: "",
          password: "",
          lastName: "",
        })
        navigate("/login")
      } else {
        alert("Error while sending request")
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="min-w-screen min-h-screen  flex items-center justify-center px-5 py-5">
      <div
        className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden"
        style={{ maxWidth: "1000px" }}
      >
        <div className="md:flex w-full">
          <CustomSvg />
          <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
            <div className="text-center mb-10">
              <h1 className="font-bold text-3xl text-gray-900">REGISTER</h1>
              <p>Enter your information to register</p>
            </div>
            <form>
              <div className="flex -mx-3">
                <div className="w-1/2 px-3 mb-5">
                  <label htmlFor="" className="text-xs font-semibold px-1">
                    First name
                  </label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                    </div>
                    <input
                      autoComplete="off"
                      required
                      value={user.firstName}
                      onChange={isSetNewUser}
                      name="firstName"
                      type="text"
                      className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="John"
                    />
                  </div>
                </div>
                <div className="w-1/2 px-3 mb-5">
                  <label htmlFor="" className="text-xs font-semibold px-1">
                    Last name
                  </label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                    </div>
                    <input
                      autoComplete="off"
                      required
                      value={user.lastName}
                      onChange={isSetNewUser}
                      name="lastName"
                      type="text"
                      className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="Smith"
                    />
                  </div>
                </div>
              </div>
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-5">
                  <label htmlFor="" className="text-xs font-semibold px-1">
                    Email
                  </label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                    </div>
                    <input
                      autoComplete="off"
                      required
                      value={user.email}
                      onChange={isSetNewUser}
                      name="email"
                      type="email"
                      className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="johnsmith@example.com"
                    />
                  </div>
                </div>
              </div>
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-12">
                  <label htmlFor="" className="text-xs font-semibold px-1">
                    Password
                  </label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                    </div>
                    <input
                      autoComplete="off"
                      required
                      value={user.password}
                      onChange={isSetNewUser}
                      name="password"
                      type="password"
                      className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="************"
                    />
                  </div>
                </div>
              </div>
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-5">
                  <button
                    className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
                    onClick={submitHandler}
                  >
                    REGISTER NOW
                  </button>
                </div>
              </div>
              <span>
                Already have an account?{" "}
                <Link className="text-blue-600" to="/login">
                  Login
                </Link>{" "}
                now!!
              </span>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
