import React from "react"
import sophiaImg from "./../assets/Sophia.png"
import { Link } from "react-router-dom"
const HotTopics = () => {
  return (
    <div
      className="bg-red-800 text-white text-center p-5 "
      style={{
        fontFamily: "Alegreya",
        fontStyle: "italic",
        fontWeight: "700",
        textAlign: "center",
      }}
    >
      <h1
        className="mb-8 text-center text-3xl"
        style={{
          lineHeight: "56px",
        }}
      >
        HOT TOPIC!
      </h1>
      <div className="mb-3 flex gap-7 justify-center items-center px-8">
        <img
          src={sophiaImg}
          alt="sophia's"
          className="max-w-[16rem] sm:max-w-[22rem] h-full"
        />
        <div className="flex flex-col justify-start text-left ">
          <Link to={"/details"}>
            <p
              className=" max-w-sm  my-8 text-sm sm:text-3xl"
              style={{
                lineHeight: "45px",
              }}
            >
              SAUDI ARABIA HAS GRATED SOPHIA THE AI CITIZENSHIP?.
            </p>
          </Link>
          <p className="text-sm ">AND WHY THIS MATTERS FOR HUMANS</p>
          <span className="mt-9 ">Angie Adelaide</span>
        </div>
      </div>
    </div>
  )
}

export default HotTopics
