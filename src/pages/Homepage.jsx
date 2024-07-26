import React, { useEffect } from "react"
import Article from "../components/Article"
import HotTopics from "../components/HotTopics"
import Mailing from "../components/Mailing"

const Homepage = () => {
  return (
    <>
      <Article />
      <HotTopics />
      <Mailing />
    </>
  )
}

export default Homepage
