import React from "react"
import { Navigate } from "react-router-dom"

export const AuthRoute = ({ children }) => {
  const token = localStorage.getItem("token")
  if (!token) {
    console.log("No user detected, redirecting")
    return <Navigate to="/login" />
  }

  return <div>{children}</div>
}
