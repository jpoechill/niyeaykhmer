'use client'

import { useCallback, useEffect, useState } from 'react'
import RightSideBar from "@/app/components/RightSideBar";
import allData from './data.json'
import Image from 'next/image'

export default function App() {
  let [toggleEnglish, setToggleEnglish] = useState(false)
  let [currSection, setCurrentSection] = useState(0)
  let [currPhrase, setCurrPhrase] = useState(0)
  let sections = allData

  const goToNextPhrase = () => {
    let prevPhrase = currPhrase
    let newSection = Math.floor(Math.random() * sections.length)
    let newPhrase = Math.floor(Math.random() * sections[newSection].phrases.length)

    console.log(newSection, newPhrase)
    if (prevPhrase === newPhrase) {
      goToNextPhrase()
    } else {
      setCurrentSection(newSection)
      setCurrPhrase(newPhrase)
    }

  }


  return (
    <div className="w-full pl-[300px] flex dark:bg-[#222]  h-full">
      <div className="mt-[60px] w-full p-4">
        <div className="text-[#2c3e50] dark:text-white text-center px-10 pb-0 text-[14px]">
          <div className=" flex flex-row justify-between px-4 rounded-xl pb-0 mt-o ">
            <div className="w-min h-full">
              <div className="border text-md font-bold px-2 py-1 rounded inline cursor-pointer" onClick={() => setCurrPhrase(currPhrase == 0 ? sections[currSection].phrases.length - 1 : currPhrase - 1)}>←</div>
            </div>
            <div>
              <div className="mt-0 grid grid-cols-1 text-[54px] px-0">
                <div className="group w-full relative flex flex-col justify-center px-[10px] mb-0">
                  <div className="cursor-pointer w-full flex flex-col px-8 rounded-xl mb-5">
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


              {/* <div>
                <div className="text-[1.6rem] font-semibold">
                  Basics
                </div>
              </div> */}

            </div>



            <div className="w-min h-full">
              <div className="border text-xs px-2 py-1 rounded inline cursor-pointer" onClick={() => goToNextPhrase()}>→</div>
            </div>
          </div>


          <div className='pb-[40px]'>
            {
              sections.map((section, sectionIndex) =>
                <div key={sectionIndex}>
                  <div id="vowels" className="text-[1.25rem] pb-[.3rem] pt-0 font-semibold border-b-[1px] border-[#eaecef]">
                    {section.title}
                  </div>
                  <div className="mt-5 grid grid-cols-5 text-[30px] text-center gap-y-5 mb-10">
                    {section.phrases.map((phrase, phraseIndex) => (
                      <div key={phraseIndex} className="w-full flex justify-center">
                        <div className="relative w-min">
                          <div className="h-full min-w-[20px] absolute -left-8 pt-[14px]">
                            <Image src="/play_btn_cr.svg" width={20} height={20} alt="REAN KHMER" className="cursor-pointer group-hover:inline-block mr-3 pb-1" />
                          </div>
                          <span className="cursor-pointer">{phrase.khmer}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            }
          </div>
          {/* 
          <div className="mb-[-0px] ">
                <div className="text-[1.6rem] font-semibold -mb-10">
                  Basics
                </div>
              </div>

              <div id="vowels" className="text-[1.25rem] pb-[.3rem] pt-[70px] font-semibold border-b-[1px] border-[#eaecef]">
                Vowels
              </div>
              <div className="mt-5 grid grid-cols-5 text-[30px] text-center gap-y-5">
                {characters.vowels.chars.map((item, index) => (
                  <div key="index" className="w-full flex justify-center">
                    <div className="relative w-min">
                      <div className="h-full min-w-[20px] absolute -left-8 pt-[14px]">
                        <Image src="/play_btn_cr.svg" width={20} height={20} alt="REAN KHMER" className="cursor-pointer group-hover:inline-block mr-3 pb-1" />
                      </div>
                      <span className="cursor-pointer">{item.khmer}</span>
                    </div>
                  </div>
                ))}

              </div>
              <div id="consonants" className="text-[1.25rem] pb-[.3rem] pt-[70px] font-semibold border-b-[1px] border-[#eaecef]">
                Consonants
              </div>
              <div className="mt-5 grid grid-cols-5 text-[30px] text-center gap-y-5">
                {characters.consonants.chars.map((item, index) => (
                  <div key="index" className="w-full flex justify-center">
                    <div className="relative w-min">
                      <div className="h-full min-w-[20px] absolute -left-8 pt-[14px]">
                        <Image src="/play_btn_cr.svg" width={20} height={20} alt="REAN KHMER" className="cursor-pointer group-hover:inline-block mr-3 pb-1" />
                      </div>
                      <span className="cursor-pointer">{item.khmer}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div id="special" className="text-[1.25rem] pb-[.3rem] pt-[70px] font-semibold mb-5 border-b-[1px] border-[#eaecef]">
                Special Characters
              </div>

              <div className="mt-5 grid grid-cols-5 text-[30px] text-center gap-y-5">
                {
                  characters.special.chars.map((item, index) => (
                    <div key="index" className="w-full flex justify-center">
                      <div className="relative w-min">
                        <div className="h-full min-w-[20px] absolute -left-8 pt-[14px]">
                          <Image src="/play_btn_cr.svg" width={20} height={20} alt="REAN KHMER" className="cursor-pointer group-hover:inline-block mr-3 pb-1" />
                        </div>
                        <span className="cursor-pointer">{item.khmer}</span>
                      </div>
                    </div>
                  ))
                }
              </div>

              <div id="numerals" className="text-[1.25rem] pb-[.3rem] mt-10 font-semibold mb-5 border-b-[1px] border-[#eaecef]">
                Numerals
              </div>
              <div className="mt-5 grid grid-cols-5 text-[30px] text-center gap-y-5">
                {
                  characters.numbers.chars.map((item, index) => (
                    <div key="index" className="w-full flex justify-center">
                      <div className="relative w-min">
                        <div className="h-full min-w-[20px] absolute -left-8 pt-[14px]">
                          <Image src="/play_btn_cr.svg" width={20} height={20} alt="REAN KHMER" className="cursor-pointer group-hover:inline-block mr-3 pb-1" />
                        </div>
                        <span className="cursor-pointer">{item.khmer}</span>
                      </div>
                    </div>
                  ))
                }
              </div>
              <div className="top-[60px] hidden lg:block w-[300px] text-[#2c3e50] text-[14px] right-0 fixed pt-5 p-8 z-1 left-flex h-full bottom-0 border-l-[1px] ">
                <RightSideBar />
              </div>

              <div className="text-sm text-right block pt-20 pb-3">
                Last updated: 01/01/24
              </div>
              <div >
                <hr />
              </div>
              <div className="flex justify-between my-3 pt-3">
                <div>
                  ← Previous
                </div>
                <div>
                  Next →
                </div>
              </div> */}

          <div className={"opacity-100 bg-white dark:bg-[#222] dark:text-white transition-opacity ease-in-out text-left top-[60px] fixed w-[300px] lg:block right-0 z-1 pl-9 pt-5 p-8 h-full text-[#2c3e50] text-[14px] bottom-0"}>
            <RightSideBar />
          </div>
        </div >
      </div>
    </div>
  );
}
