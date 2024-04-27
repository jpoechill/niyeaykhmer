'use client'
import Image from "next/image";
import GetCreds from "@/app/getcreds/getCreds"
import LeftSideBar from "@/app/components/LeftSideBar";
import RightSideBar from "@/app/components/RightSideBar";
import { useCallback, useEffect, useState } from 'react'

import { usePathname } from 'next/navigation'

export default function App() {

  let [toggleEnglish, setToggleEnglish] = useState(false)
  let [currSection, setCurrentSection] = useState(0)
  let [currPhrase, setCurrPhrase] = useState(0)
  let [currLevel, setCurrLevels] = useState(1)
  let [currSections, setCurrentSections] = useState(0)

  // let sections = allData[currLevel]

  const [levels, setLevels] = useState([
    {
      name: "Beginner",
      isActive: true,
    },
    {
      name: "Intermediate",
      isActive: false,
    },
    {
      name: "Advance",
      isActive: false,
    }
  ])

  const goToNextPhrase = () => {
    let prevPhrase = currPhrase
    let newPhrase = Math.floor(Math.random() * sections[currSection].phrases.length)
    if (prevPhrase === newPhrase) {
      goToNextPhrase()
    } else {
      setCurrPhrase(newPhrase)
    }

  }

  return (
    <div className="text-[#2c3e50] dark:text-white text-center px-10 pb-0 text-[14px]">
      <div className=" flex flex-row justify-between px-4 rounded-xl pb-0 mt-o ">
        <div className="w-min h-full">
          <div className="border text-md font-bold px-2 py-1 rounded inline cursor-pointer" onClick={() => setCurrPhrase(currPhrase == 0 ? sections[currSection].phrases.length - 1 : currPhrase - 1)}>←</div>
        </div>
        <div>
          <div className="mt-0 grid grid-cols-1 text-[54px] px-0">
            <div className="group w-full relative flex flex-col justify-center px-[10px] mb-0">
              <div className="cursor-pointer w-full flex flex-col px-8 rounded-xl min-h-[350px] ">
                <div className={(toggleEnglish === true ? 'opacity-100 ' : 'opacity-100 ') + " transition-all w-full text-[#555] dark:text-white flex justify-center text-sm gap-5"}>
                  <span>
                    {sections[currSection].title}
                  </span>
                </div>
                <div onClick={() => setToggleEnglish(!toggleEnglish)}>
                  {sections[currSection].phrases[currPhrase].khmer}
                </div>
                <audio controls className="w-full min-w-[500px] mt-4 mb-3">
                  <source src="/audio_01.mp3" type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
                <div className="font-light text-center w-full mt-0 text-[14px] text-[#2c3e50] dark:text-white">
                  <div className="justify-center w-full">
                    <div className="flex justify-center flex-1">
                      <div className={(toggleEnglish === true ? 'opacity-100 translate-y-0 ' : 'opacity-100 translate-y-3') + " transition-all ease-in-out duration-800 pl-2"}>
                        {sections[currSection].phrases[currPhrase].english}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-min h-full">
          <div className="border text-xs px-2 py-1 rounded inline cursor-pointer" onClick={() => goToNextPhrase()}>→</div>
        </div>
      </div>

      <div className={"opacity-100 bg-white dark:bg-[#222] dark:text-white transition-opacity ease-in-out text-left top-[60px] fixed w-[300px] lg:block right-0 z-1 pl-9 pt-5 p-8 h-full text-[#2c3e50] text-[14px] bottom-0"}>
        <RightSideBar />
      </div>
    </div >
  )
}
