import React from "react"
import carImg from "./../assets/car.png"
import sophia from "./../assets/Sophia.png"

const DetailsPage = () => {
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
        <span className="font-italic text-xs py-4 block">
          Home{">"}Technology
        </span>
        <div className="px-1">
          <h1 className="text-3xl">Here's what you need to know about EVs</h1>
          <p className="text-md mt-5 font-italic">Jonathan Broth, AU</p>
          <span className="font-normal ">March 14, 2023</span>
          <img src={carImg} alt="" className="w-full my-4" />
          <p className="text-md font-semibold mb-7">
            Enthusiasm for electric cars has never been higher. There are more
            models to choose from than ever before, and an increasing portion of
            Americans are eager to shun fossil fuels and buy something like a
            Tesla instead. After driving well over a dozen electric vehicles on
            the market today — from mainstream SUVs to burly pickup trucks and
            six-figure luxury cars — I'm sold on EVs too. But I wouldn't buy
            one. Not yet, at least. At this point, they're just too expensive
            and hard to find. And besides, charging stations aren't widespread
            or convenient enough yet.
          </p>
          <div className="flex gap-4">
            <img src={sophia} alt="" className="max-w-[13rem]" />
            <p className="text-md font-semibold">
              I'm pretty certain that I'll own an electric car someday — and
              happily, not just because the government mandates it. EVs simply
              have too many advantages over regular cars to ignore.
            </p>
          </div>
          <p className="text-md font-semibold mt-7">
            They're quiet and smooth. And in practically any electric car — from
            pedestrian Chevys to high-performance Porsches — smashing the
            throttle results in an instantaneous jolt of acceleration. It means
            EVs bring a bit of spice to a boring drive and are great at handling
            quick highway merges and passes. Since they lack all the bulky parts
            of a traditional drivetrain, manufacturers can add in extra interior
            space and storage options that weren't possible before. Think things
            like totally flat floors, front trunks, and Rivian's Gear Tunnel.
          </p>
        </div>
      </div>
    </div>
  )
}

export default DetailsPage
