import React, { useState } from "react"
import Notification from "../components/Notication"

const MailingPage = () => {
  const [show, setShow] = useState(false)
  const [email, setEmail] = useState("")
  return (
    <div
      className="bg-[#FFF1E1]"
      style={{
        fontFamily: "Alegreya",
        fontStyle: "italic",
        fontWeight: "700",
        textAlign: "center",
      }}
    >
      <div className="container mx-auto text-start sm:text-center px-9 py-12">
        <h1 className="text-4xl mb-7 font-bold">Join Our Mailing!</h1>
        <p className="font-semibold mb-3">
          Provide your email below to get notified whenever a new article drops!
        </p>
        <form>
          <div className="flex flex-col ">
            <label
              htmlFor="email"
              className="block text-sm font-normal leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-2 ">
              <input
                required
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full max-w-sm flex mx-auto justify-center items-center rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:px-3 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <button
            onClick={(e) => {
              e.preventDefault()
              !email.length
                ? alert("Please enter a valid email")
                : setShow(true)
              setEmail("")
            }}
            type="submit"
            className="rounded-sm my-4 text-xl bg-slate-600 bg px-6 py-2 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Join
          </button>
        </form>
      </div>
      <Notification setShow={setShow} show={show} />
    </div>
  )
}

export default MailingPage
