import React from "react"
import { Link } from "react-router-dom"

const MyFooter = () => {
  return (
    <div
      className="bg-black text-white py-16"
      style={{
        fontFamily: "Alegreya",
        fontStyle: "italic",
        fontWeight: "700",
        textAlign: "center",
      }}
    >
      <div className="container mx-auto py-2 px-2 flex justify-between items-center">
        <div className="flex justify-between w-full flex-wrap px-7 gap-5">
          <div className="text-left">
            <Link to={"/about"} className="text-blue-600 underline">
              {" "}
              <h1 className="mb-8 text-xl">ABOUT</h1>{" "}
            </Link>
            <p className="text-lg">Our Story</p>
            <p className="text-lg">Authors</p>
          </div>
          <div className="text-left">
            <Link to={"/legal"} className="text-blue-600 underline">
              <h1 className="mb-8 text-xl">LEGAL AND PRIVACY</h1>
            </Link>
            <p className="text-lg">Copyright</p>
            <p className="text-lg">Terms and Conditions</p>
          </div>
          <div className="text-left">
            <h1 className="mb-8 text-xl"> CONTACT US</h1>
            <p className="text-lg">
              <a href="tel:+37069271153" className="text-blue-600 underline">
                Phone
              </a>
            </p>
            <p className="text-lg">
              <a
                className="text-blue-600 underline"
                href="mailto:silas.demilade.taiwo-adeyemo@stud.vdu.lt"
              >
                Email Address
              </a>
            </p>
          </div>
        </div>
      </div>
      <p className="text-center mt-9">2023 CAPENEWS INC. ALL RIGHTS RESERVED</p>
    </div>
  )
}

export default MyFooter
