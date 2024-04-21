'use client'
import Image from "next/image";
// import { createClient } from '@/utils/supabase/server'
import GetCreds from "@/app/getcreds/getCreds"
import LeftSideBar from "@/app/components/LeftSideBar";
import RightSideBar from "@/app/components/RightSideBar";
import Link from 'next/link'
import allData from './data.json'
import { useCallback, useEffect, useState } from 'react'

import { usePathname } from 'next/navigation'

export default function App() {

  let [toggleEnglish, setToggleEnglish] = useState(false)
  let [currSection, setCurrentSection] = useState(0)
  let [currPhrase, setCurrPhrase] = useState(0)
  let [currLevel, setCurrLevels] = useState(1)
  let [currSections, setCurrentSections] = useState(0)

  let [mouseMoving, setMouseMoving] = useState(true)


  let sections = allData[currLevel]

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

  const toggleLevel = (index: number) => {
    setCurrLevels(index)
    setLevels([...levels].map((level, levelIndex) => {
      if (index === levelIndex) {
        return {
          ...level,
          isActive: true
        }
      }
      else {
        return {
          ...level,
          isActive: false
        }
      }
    }))
  }
  // Math.floor(Math.random() * 10);

  const goToNextPhrase = () => {
    let prevPhrase = currPhrase
    let newPhrase = Math.floor(Math.random() * sections[currSection].phrases.length)
    if (prevPhrase === newPhrase) {
      goToNextPhrase()
    } else {
      setCurrPhrase(newPhrase)
    }

  }

  let timer: ReturnType<typeof setTimeout>

  const trackMouseMove = () => {
    setMouseMoving(true)

    document.getElementById("main")!.classList.add("opacity-100")

    console.log('the mouse is moving')

    clearTimeout(timer)

    timer = setTimeout(
      () => {

        document.getElementById("main")!.classList.remove("opacity-100")
        console.log('The mouse has stopped')
        setMouseMoving(false)
      }, 2500)
  }

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        // setCurrentSection(currSection == sections.length - 1 ? 0 : currSection + 1)
        goToNextPhrase()
        // setCurrPhrase(currPhrase == sections[currSection].phrases.length - 1 ? 0 : currPhrase + 1)
      }
      if (event.key === "ArrowLeft") {
        // setCurrentSection(currSection == 0 ? sections.length - 1 : currSection - 1)
        setCurrPhrase(currPhrase == 0 ? sections[currSection].phrases.length - 1 : currPhrase - 1)
      }
      if (event.key === " ") {
        setToggleEnglish(!toggleEnglish)
      }
    }

    document.addEventListener('mousemove', trackMouseMove)
    document.addEventListener("keydown", handleKeyPress);

    // Clean up the event listener when the component unmounts.
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [currPhrase, toggleEnglish, trackMouseMove, currSection, sections]);


  const pathname = usePathname().split('/')

  return (
    <div className="text-[#2c3e50] dark:text-white text-center px-10 pb-0 text-[14px]">
      <div className={('mouseMoving' ? "group-hover/all:opacity-100" : "") + " opacity-100 transition-opacity ease-in-out"}>
        {/* <span className="text-xs italic">
          Khmer Trainer
        </span> */}

        <div className="flex flex-row justify-center text-[1.4rem] gap-3 font-semibold mb-3">
          <div>
            {/* Conversational Phrases */}
            {/* Beginner */}
          </div>
        </div>
        <div className="flex flex-row mb-1 items-center justify-center gap-2">

          {/* <div className="flex flex-row gap-2">
            {
              levels.map((level, currIndex) =>
                level.isActive ?
                  <div key={currIndex} className="cursor-pointer border-[#428777] border flex item-center px-2 py-1 text-white bg-[#428777] rounded text-xs italic">
                    {level.name}
                  </div> :
                  <div onClick={() => toggleLevel(currIndex)} key={currIndex} className="cursor-pointer border px-2 py-1 rounded text-xs italic">
                    {level.name}
                  </div>
              )
            }
          </div> */}
        </div>

      </div>


      <div className=" flex flex-row justify-between px-4 rounded-xl pb-0 mt-o ">
        <div className="w-min h-full">
          <div className="border text-md font-bold px-2 py-1 rounded inline cursor-pointer" onClick={() => setCurrPhrase(currPhrase == 0 ? sections[currSection].phrases.length - 1 : currPhrase - 1)}>←</div>
        </div>
        <div>
          <div className="mt-0 grid grid-cols-1 text-[54px] px-0">
            <div className="group w-full relative flex flex-col justify-center px-[10px] mb-0">
              <div className="cursor-pointer w-full flex flex-col px-8 rounded-xl min-h-[350px] ">
                {/* <div className="h-full min-w-[40px] absolute -left-6 pt-[0px] cursor-pointer">
                  <Image src="/play_btn_cr.svg" width={20} height={20} alt="REAN KHMER" className="hidden group-hover:inline-block mr-3 pb-0" />
                </div> */}

                <div className={(toggleEnglish === true ? 'opacity-100 ' : 'opacity-100 ') + " transition-all w-full text-[#555] dark:text-white flex justify-center text-sm gap-5"}>
                  {/* <div className="text-xs px-2 py-1 rounded inline cursor-pointer" onClick={() => setCurrPhrase(currPhrase == 0 ? sections[currSection].phrases.length - 1 : currPhrase - 1)}>←</div> */}
                  <span>
                    {sections[currSection].title}
                  </span>
                  {/* <div className="text-xs px-4 py-4 shadow-lg rounded inline cursor-pointer" onClick={() => setCurrPhrase(currPhrase == sections[currSection].phrases.length - 1 ? 0 : currPhrase + 1)}>→</div> */}
                </div>
                <div onClick={() => setToggleEnglish(!toggleEnglish)}>
                  {sections[currSection].phrases[currPhrase].khmer}
                </div>
                {/* <div> */}
                <audio controls className="w-full min-w-[500px] mt-4 mb-3">
                  <source src="/audio_01.mp3" type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
                {/* </div> */}
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

      {/* Start Side Bar - RIGHT */}
      {/* mouseMoving ? "group-hover/all:opacity-100 " : " " + " */}

      <div className={(mouseMoving ? "group-hover/all:opacity-100 " : '') + " opacity-100 bg-white dark:bg-[#222] dark:text-white transition-opacity ease-in-out text-left top-[60px] fixed w-[300px] lg:block right-0 z-1 pl-9 pt-5 p-8 h-full text-[#2c3e50] text-[14px] bottom-0"}>
        <RightSideBar />
        {/* <div className='mt-1'>
          {
            (pathname[1] === '' ? <Image src="/avatars/basics_avatar_02.jpg" width={400} height={300} alt="REAN KHMER" className="inline w-full mr-3 pb-1" /> : '')
          }
          {
            (pathname[1] === 'basics' ? <Image src="/avatars/basics_avatar_02.jpg" width={400} height={300} alt="REAN KHMER" className="inline w-full mr-3 pb-1" /> : '')
          }
          {
            (pathname[1] === 'beginner' ? <Image src="/mother.jpg" width={400} height={300} alt="REAN KHMER" className="inline w-full mr-3 pb-1" /> : '')
          }
          {
            (pathname[1] === 'intermediate' ? <Image src="/mother.jpg" width={400} height={300} alt="REAN KHMER" className="inline w-full mr-3 pb-1" /> : '')
          }
          {
            (pathname[1] === 'advance' ? <Image src="/mother.jpg" width={400} height={300} alt="REAN KHMER" className="inline w-full mr-3 pb-1" /> : '')
          }
        </div> */}
        {/* <div className="relative">
          <div className="-left-3 font-semibold mt-1 mb-1">
            Info
          </div>
        </div>
        <div className="border-l-2 ml-2 pl-3 flex flex-col gap-1">
          <div className="hover:text-[#428777] cursor-pointer"><Link href="/etc#special">About</Link> </div>
          <div className="hover:text-[#428777] cursor-pointer"><Link href="/etc#special">Support</Link> </div>
          <div className="hover:text-[#428777] cursor-pointer"><Link href="/etc#special">Resources</Link> </div>
          <div className="hover:text-[#428777] cursor-pointer"><Link href="/etc#special">Contact</Link> </div>

        </div> */}
        {/* <div className="relative">
          <div className="-left-3 font-semibold mt-3 mb-1">
            Categories and Topics
          </div>
        </div>
        <div className="border-l-2 ml-2 pl-3 flex flex-col gap-1">
          <div className="hover:text-[#428777] cursor-pointer">Daily Life and Activities</div>
          <div className="hover:text-[#428777] cursor-pointer">Travel and Tourism</div>
          <div className="hover:text-[#428777] cursor-pointer">Socializing and Relationships</div>
          <div className="hover:text-[#428777] cursor-pointer">Shopping and Dining Out</div>
          <div className="hover:text-[#428777] cursor-pointer">Education and Learning</div>
        </div> */}

      </div>

    </div >
  )
}
