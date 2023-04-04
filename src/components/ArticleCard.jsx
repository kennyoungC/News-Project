import React from "react"
import carImg from "./../assets/car.png"
import { Link } from "react-router-dom"

const ArticleCard = () => {
  return (
    <Link to={"/details"}>
      <div>
        <img src={carImg} alt="" />
        <p
          className="text-2xl max-w-sm my-3 px-3"
          style={{
            fontFamily: "Alegreya Sans",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "20px",
            lineHeight: "24px",
          }}
        >
          Technology: Here’s what you need to know about EVs. Jonathan Broth,
          AU.
        </p>
      </div>
    </Link>
  )
}

export default ArticleCard
