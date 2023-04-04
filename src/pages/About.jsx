import React from "react"
import sophia from "./../assets/Sophia.png"
import david from "./../assets/david.png"
import sarah from "./../assets/sarah.png"
import micheal from "./../assets/michaeal.png"

const About = () => {
  return (
    <div
      className="bg-[#FFF1E1]"
      style={{
        fontFamily: "Alegreya Sans",
        fontStyle: "normal",
        fontWeight: "700",
        textAlign: "center",
      }}
    >
      <div className="container mx-auto p-6 text-left">
        <h1 className="text-3xl mt-3">About</h1>
        <p className="text-md font-semibold mb-7">
          Welcome to our newsletter! We are thrilled to have you as a subscriber
          and look forward to sharing the latest news, updates, and insights
          with you. Our newsletter is dedicated to providing you with valuable
          information on a variety of topics. From business and finance to
          health and wellness, we strive to cover the most relevant and
          interesting news in each field. <br />
          <br /> We also feature interviews with industry experts and thought
          leaders, offering exclusive insights and perspectives on current
          events and trends. Our goal is to keep you informed and engaged with
          the world around you, helping you make informed decisions and stay
          ahead of the curve.
          <br />
          <br /> Whether you're looking to improve your productivity, boost your
          creativity, or simply stay healthy and happy, we've got you covered.
          <br />
          <br /> Above all, our newsletter is designed to be a valuable resource
          for our readers.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div className="flex gap-2">
            <div>
              {" "}
              <img src={micheal} alt="" className="max-w-[13rem]" />
              <p>Micheal Thompson</p>
            </div>
            <p className="text-sm sm:text-md font-light">
              Michael Thompson is a highly regarded author and journalist whose
              work focuses on issues of race, identity, and social justice. Born
              and raised in a predominantly African American community in the
              Midwest, Michael developed an early interest in writing as a means
              of exploring the complexities of his own identity and the
              experiences of those around him.
            </p>
          </div>
          <div className=" gap-2 sm:hidden flex">
            <p className="text-sm sm:text-md font-light">
              Sarah Davis is a prolific author with a talent for crafting
              engaging and emotionally resonant stories. Her writing style is
              characterized by its lyrical prose, vivid imagery, and nuanced
              characters that explore the complexities of the human experience.
            </p>
            <div>
              {" "}
              <img src={sarah} alt="" className="max-w-[13rem]" />
              <p>Sarah Davis</p>
            </div>
          </div>
          <div className="hidden gap-2 sm:flex">
            <div>
              {" "}
              <img src={sarah} alt="" className="max-w-[13rem]" />
              <p>Sarah Davis</p>
            </div>
            <p className="text-sm sm:text-md font-light">
              Sarah Davis is a prolific author with a talent for crafting
              engaging and emotionally resonant stories. Her writing style is
              characterized by its lyrical prose, vivid imagery, and nuanced
              characters that explore the complexities of the human experience.
            </p>
          </div>
          <div className="flex gap-2">
            <div>
              {" "}
              <img src={david} alt="" className="max-w-[13rem]" />
              <p>David Richards</p>
            </div>
            <p className="text-sm sm:text-md font-light">
              David Richards is a middle-aged author with a passion for writing
              thought-provoking and deeply emotional stories. His writing is
              characterized by its richly drawn characters, complex plots, and
              insightful exploration of the human condition.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
