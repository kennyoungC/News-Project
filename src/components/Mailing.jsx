import React from "react"
import { Link } from "react-router-dom"

const Mailing = () => {
  return (
    <div
      className="  bg-[#FFF1E1]"
      style={{
        fontFamily: "Alegreya",
        fontStyle: "italic",
        fontWeight: "700",
        textAlign: "center",
      }}
    >
      <div className="container mx-auto text-center py-9">
        <h1 className="text-4xl mb-10 ">Never miss a drop</h1>
        <p className="font-semibold mb-3">
          Receive updates about
          <br /> new articles
        </p>
        <Link to={"/mail"}>
          <button className="border-2 px-16 py-5 font-bold">
            JOIN MAILING LIST
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Mailing
