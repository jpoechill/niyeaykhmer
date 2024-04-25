'use client'

import { useCallback, useEffect, useState } from 'react'
import RightSideBar from "@/app/components/RightSideBar";
import allData from './data.json'
import Image from 'next/image'
import Link from 'next/link'

export default function App() {
  let [toggleEnglish, setToggleEnglish] = useState(false)
  let [currSection, setCurrentSection] = useState(0)
  let [currPhrase, setCurrPhrase] = useState(0)
  let sections = allData
  let [toggleModal, setToggleModal] = useState(false)


  const goToNextPhrase = () => {
    let prevPhrase = currPhrase
    let newSection = Math.floor(Math.random() * sections.length)
    let newPhrase = Math.floor(Math.random() * sections[0].phrases.length)

    console.log(newSection, newPhrase)
    if (prevPhrase === newPhrase) {
      goToNextPhrase()
    } else {
      // setCurrentSection(newSection)
      setCurrPhrase(newPhrase)
    }

  }


  return (

    <div className="w-full ml-[310px] mt-[60px]  relative flex dark:bg-[#222] px-0 h-[calc(100%-60px)] ">

      <div className={(toggleModal ? '' : 'hidden') + ' w-[calc(100%-620px)] h-[calc(100%-60px)] bg-white fixed flex-col justify-center z-[1]'}>
        <div className="w-full flex py-[50px] items-center justify-center h-full border-b-[1px]">
          <div className="h-full w-full p-[40px] bg-[#fdfdfd]">
            {/* bg-[#fdfdfd] */}
            <div className="flex relative flex-col border font-light bg-white rounded-xl w-full h-full p-10 justify-center items-center text-[60px] text-center">
              <div>
                {sections[currSection].phrases[currPhrase].khmer}
                {/* កម្ពុជា​នឹង​សហការ​ជាមួយ​ឥណ្ឌា​ក្នុង​ការ​អភិវឌ្ឍ​ធនធានមនុស្ស​ក្នុង​វិ​ស័​យ​មុខងារ​សាធារណៈ */}
              </div>
              <div className="font-light mt-3 text-[14px] text-[#2c3e50]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, quae!
              </div>
              <div onClick={() => setToggleModal(false)} className="absolute top-0 right-0 p-5">
                {/* <Link href="/advance"> */}
                <Image src="/x.png" width={15} height={15} alt="REAN KHMER" className="cursor-pointer" />
                {/* </Link> */}
              </div>
              {/* <div className="absolute bottom-0 left-0 p-5">
        <Image src="/play_btn_cr.svg" width={30} height={30} alt="REAN KHMER" className="cursor-pointer" />
      </div> */}
            </div>

            {/* <div className="w-full mb-0 pt-6 flex items-center justify-between border-t-[0px] px-0">
              <div>
                <Image src="/play_btn_cr.svg" width={30} height={30} alt="REAN KHMER" className="cursor-pointer" />
              </div>
              <div className='text-sm flex gap-3 items-center'>
                <div className="border px-2 py-1 rounded inline cursor-pointer">Shuffle in Level</div>
                <div className="border px-2 py-1 rounded inline cursor-pointer" >Shuffle in Category</div>
                <div className="border px-2 py-1 rounded inline cursor-pointer">→</div>
              </div>
            </div> */}

          </div>
        </div>
      </div>


      <div className='w-[calc(100%-620px)] fixed flex flex-col pt-[60px] top-0 justify-end bg-[white] h-min z-[1]'>
        <div className="w-full py-4 flex items-center justify-between border-b-[1px] px-10">
          <div className="text-[1.25rem] font-semibold">
            Literary Analysis and Critique

          </div>
        </div>
      </div>

      <div className=' w-[calc(100%-620px)]  fixed flex flex-col bottom-0 justify-end bg-[white] h-min z-[1]'>
        <div className="w-full mb-0 py-4 flex items-center justify-between border-t-[1px] px-10">
          <div>
            <Image src="/play_btn_cr.svg" width={30} height={30} alt="REAN KHMER" className="cursor-pointer" />
          </div>
          <div className='text-sm flex gap-3 items-center'>
            <div className="border px-2 py-1 rounded inline cursor-pointer">Shuffle All</div>
            <div className="border px-2 py-1 rounded inline cursor-pointer" >Shuffle in Category</div>
            <div onClick={() => { goToNextPhrase() }} className="border px-2 py-1 rounded inline cursor-pointer">→</div>
          </div>
        </div>
      </div>

      <div className={(toggleModal ? 'hidden' : '') + ' w-full pt-[16px]'}>
        <div className='p-0 mt-[10px] w-full pb-[20px] z-0'>
          {
            sections.map((section, sectionIndex) =>
              <div key={sectionIndex}>
                <div id="vowels" className={(sectionIndex !== 0 ? 'border-b-[1px]' : '') + " px-10 text-left text-[1.25rem] pb-[.3rem] pt-0 font-semibold border-[#eaecef]"}>
                  {sectionIndex !== 0 ? section.title : <div>&nbsp;</div>}
                </div>
                <div className="mt-5 px-10 grid grid-cols-1 w-full text-center mb-10">
                  {section.phrases.map((phrase, phraseIndex) => (
                    <div key={phraseIndex} className="text-[30px] w-full flex-col justify-center">
                      <div onClick={() => setToggleModal(true)} className="relative w-full hover:text-[#428777] text-left mb-5">
                        <span className="cursor-pointer">{phrase.khmer}</span>
                      </div>
                    </div>
                  ))}
                  <div className="border px-2 py-1 w-min text-sm text-nowrap rounded inline cursor-pointer">More...</div>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </div>

  );
}






{/* <div className="w-min h-full">
              <div className="border text-xs px-2 py-1 rounded inline cursor-pointer" onClick={() => goToNextPhrase()}>→</div>
            </div> */}
{/* </div> */ }


{/* <div className='mt-[300px] pt-8 pb-[40px]'>
            {
              sections.map((section, sectionIndex) =>
                <div key={sectionIndex}>
                  <div id="vowels" className="text-left text-[1.25rem] pb-[.3rem] pt-0 font-semibold border-b-[1px] border-[#eaecef]">
                    {section.title}
                  </div>
                  <div className="mt-5 grid grid-cols-5 text-[30px] text-center gap-y-5 mb-10">
                    {section.phrases.map((phrase, phraseIndex) => (
                      <div key={phraseIndex} className="w-full flex justify-center">
                        <div className="relative w-min">
                          <div className="h-full min-w-[20px] absolute -left-8 pt-[14px]">

                          </div>
                          <span className="cursor-pointer">{phrase.khmer}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            }
          </div> */}
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

{/* <div className={"opacity-100 bg-white border-l-[1px] dark:bg-[#222] dark:text-white transition-opacity ease-in-out text-left top-[60px] fixed w-[310px] lg:block right-0 z-1 pl-9 pt-5 p-8 h-full text-[#2c3e50] text-[14px] bottom-0"}> */ }
{/* <RightSideBar /> */ }


{/* <div>
              <div className="relative">
                <div className="-left-3 font-semibold mt-1 mb-1">
                  Basics
                </div>
              </div>
              <div className="border-l-2 ml-2 pl-3 flex flex-col gap-1">
                {sections.map((section, index) => {
                  return <div key={index} className="hover:text-[#428777] cursor-pointer">
                    <Link href="/etc#special">
                      {section.title}
                    </Link>
                  </div>
                })}
              </div>
            </div>
          </div> */}
{/* </div >
      </div>
    </div> */}

// <div className="w-full pl-[300px] flex dark:bg-[#222] px-0 h-full">
//   <div className="mt-[44px] w-full mx-0 px-0">
//     <div className="text-[#2c3e50] dark:text-white border text-center w-full border-[] p-0 text-[14px]">
{/* <div className=" flex flex-row justify-between px-0 w-full border-[blue] border rounded-xl pb-0 mt-0"> */ }
{/* <div className="w-min h-full">
              <div className="border text-md font-bold px-2 py-1 rounded inline cursor-pointer" onClick={() => setCurrPhrase(currPhrase == 0 ? sections[currSection].phrases.length - 1 : currPhrase - 1)}>←</div>
            </div> */}

