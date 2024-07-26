import { createContext, useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

const initialState = {
  isAdmin: false,
  loginHandler: (email, password) => {},
  user: null,
  setUser: () => {},
}
export const multiStateContext = createContext(initialState)

export const StateContext = ({ children }) => {
  const navigate = useNavigate()
  const params = useLocation()

  const [isAdmin, setIsAdmin] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem("token")
    const fetchUser = async () => {
      const res = await fetch(
        `http://localhost:3001/user/${params.search.slice(1)}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      const data = await res.json()
      setUser(data)
    }
    fetchUser()
  })

  const loginHandler = async (email, password) => {
    try {
      const res = await fetch("http://localhost:3001/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })
      const data = await res.json()
      if (data.success) {
        setIsAdmin(data.isAdmin)
        localStorage.setItem("token", data.accessToken)
        navigate(`/?${data.user.id}`)
      } else {
        alert(data.message)
      }
    } catch (error) {
      console.log(error)
      alert(error.message)
    }
  }

  return (
    <multiStateContext.Provider
      value={{
        isAdmin,
        loginHandler,
        user,
        setUser,
        setIsAdmin,
      }}
    >
      {children}
    </multiStateContext.Provider>
  )
}
