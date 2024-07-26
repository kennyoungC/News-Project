import React, { useEffect, useState } from "react"
import deleteIcon from "../assets/delete.svg"
import editIcon from "../assets/edit.svg"

const NewsPage = () => {
  const [allNews, setAllNews] = useState([])
  const [isUpdate, setIsUpdate] = useState(false)
  const [id, setId] = useState("")
  const [details, setDetails] = useState({
    title: "",
    description: "",
    image: "",
    author: "",
  })

  const setDetailsHandler = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value })
  }

  const postNews = async (e) => {
    if (
      !details.title.length ||
      !details.description.length ||
      !details.image.length ||
      !details.author.length
    ) {
      alert("No Empty Fields is Allowed")
      return
    }
    e.preventDefault()

    console.log({ details })

    try {
      const res = await fetch("http://localhost:3001/news", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          Authorization: "isAdmin",
        },
        body: JSON.stringify(details),
      })
      const data = await res.json()
      console.log(data.data, "hh")
      // setAllNews([...data.data, ...allNews])
      setAllNews(
        allNews.concat({
          title: data.data.title,
          description: data.data.description,
          image: data.data.image,
          author: data.data.author,
        })
      )
      if (data.success) {
        alert("News Created Successfully")
        setDetails({
          title: "",
          description: "",
          image: "",
          author: "",
        })
      }
    } catch (error) {
      console.log(error)
    }
  }

  const getAllNews = async () => {
    try {
      const res = await fetch("http://localhost:3001/news", {
        headers: {
          Authorization: "isAdmin",
        },
      })
      const data = await res.json()
      setAllNews(data)
    } catch (error) {
      console.log(error)
    }
  }

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:3001/news/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: "isAdmin",
        },
      })

      setAllNews(
        allNews.filter((news) => {
          return news.id !== id
        })
      )
      if (res.status === 204) {
        alert("News Deleted Successfully")
        getAllNews()
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAllNews()
  }, [])

  const updateNews = async (id) => {
    try {
      const res = await fetch(`http://localhost:3001/news/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "isAdmin",
        },
        body: JSON.stringify(details),
      })
      const data = await res.json()
      console.log(data.data, "hh")
      if (data.success) {
        alert("News Updated Successfully")
        setDetails({
          title: "",
          description: "",
          image: "",
          author: "",
        })
        getAllNews()
      } else {
        alert("News Updated Successfully")
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
      <div className="flex"></div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
        <input
          className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          type="email"
          placeholder="Email*"
          defaultValue={"ADMIN"}
          disabled
        />
        <input
          value={details.title}
          onChange={setDetailsHandler}
          name="title"
          className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Title*"
        />
        <input
          value={details.author}
          name="author"
          onChange={setDetailsHandler}
          className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Author*"
        />
        <input
          value={details.image}
          name="image"
          onChange={setDetailsHandler}
          className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Image-URL*"
        />
      </div>
      <div className="my-4">
        <textarea
          value={details.description}
          name="description"
          onChange={setDetailsHandler}
          placeholder="Description*"
          className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
        ></textarea>
      </div>
      <div className="my-2 w-1/2 lg:w-1/4">
        {!isUpdate ? (
          <button
            className="uppercase text-sm font-bold tracking-wide bg-red-900 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
            onClick={postNews}
          >
            Post News
          </button>
        ) : (
          <button
            className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
            onClick={() => updateNews(id)}
          >
            Update News
          </button>
        )}
      </div>
      <div className="my-12">
        <h1 className="font-bold uppercase text-2xl">All News</h1>
        <div className="flex flex-col gap-5">
          {allNews.map((news) => (
            <div className="rounded overflow-hidden shadow-lg" key={news.id}>
              <img className="w-[220px]" src={news.image} alt="Forest" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{news?.title}</div>
                <p className="text-gray-700 text-base">{news?.description}</p>
                <p className="text-gray-700 text-base">{news?.author}</p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #photography
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #travel
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #fall
                </span>
                <div className="flex gap-6 my-6">
                  <span className="" onClick={() => handleDelete(news.id)}>
                    <img
                      className="h-10 w-10"
                      src={deleteIcon}
                      alt="delete icon"
                    />
                  </span>
                  <span
                    className=""
                    onClick={() => {
                      setIsUpdate(true)
                      setId(news.id)
                      setDetails({
                        title: news.title,
                        description: news.description,
                        image: news.image,
                        author: news.author,
                      })
                    }}
                  >
                    <img className="h-10 w-10" src={editIcon} alt="" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default NewsPage
