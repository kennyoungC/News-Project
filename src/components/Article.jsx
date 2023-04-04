import React from "react"
import ArticleCard from "./ArticleCard"

const Article = () => {
  return (
    <div className="bg-[#FFF1E1]">
      <div className="container mx-auto py-2 px-2 ">
        <h3
          className="text-[#527975]
  "
        >
          TODAY’S ARTICLE
        </h3>
        <div className="my-3 grid grid-cols-2 sm:grid-cols-3 gap-3">
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </div>
      </div>
    </div>
  )
}

export default Article
