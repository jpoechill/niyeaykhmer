'use client'

import { useCallback, useEffect, useState } from 'react'
import RightSideBar from "@/app/components/RightSideBar";
import allData from './data.json'
import Image from 'next/image'
import Link from 'next/link'

export default function App() {
  let [toggleEnglish, setToggleEnglish] = useState(true)
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
      setCurrPhrase(newPhrase)
    }

  }


  return (

    <div className="w-full ml-[310px] mt-[60px]  relative flex dark:bg-[#222] px-0 h-[calc(100%-60px)] ">

      <div className={(toggleModal ? '' : 'hidden') + ' w-[calc(100%-620px)] h-[calc(100%-60px)] bg-white fixed flex-col justify-center z-[1]'}>
        <div className="w-full flex py-[50px] items-center justify-center h-full border-b-[1px]">
          <div className="h-full w-full p-[40px] bg-[#fdfdfd]">
            <div className="flex relative flex-col hover:text-[#428777] border font-light bg-white rounded-xl w-full h-full p-10 justify-center items-center text-[60px] text-center">
              <div className="hover:cursor-pointer select-none">
                {sections[currSection].phrases[currPhrase].khmer}
                {/* កម្ពុជា​នឹង​សហការ​ជាមួយ​ឥណ្ឌា​ក្នុង​ការ​អភិវឌ្ឍ​ធនធានមនុស្ស​ក្នុង​វិ​ស័​យ​មុខងារ​សាធារណៈ */}
              </div>
              <div className={(toggleEnglish ? "opacity-100" : 'opacity-0') + " font-light mt-3 text-[14px] text-[#2c3e50]"}>
                GA
              </div>
              <div onClick={() => setToggleModal(false)} className="absolute top-0 right-0 p-5">
                <Image src="/x.png" width={15} height={15} alt="REAN KHMER" className="cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className='w-[calc(100%-620px)] fixed flex flex-col pt-[60px] top-0 justify-end bg-[white] h-min z-[1]'>
        <div className="w-full py-4 flex items-center justify-between border-b-[1px] px-10">
          <div className="text-[1.25rem] font-semibold">
            Vowels
          </div>
        </div>
      </div>

      <div className=' w-[calc(100%-620px)]  fixed flex flex-col bottom-0 justify-end bg-[white] h-min z-[1]'>
        <div className="w-full mb-0 py-4 flex items-center justify-between border-t-[1px] px-10">
          <div className='text-sm flex flex-row gap-3'>
            <Image src="/play_btn_cr.svg" width={30} height={30} alt="REAN KHMER" className="cursor-pointer" />
            <div>
              <button onClick={() => { setToggleEnglish(!toggleEnglish) }} className={(toggleEnglish ? 'bg-[#64B5A2] text-white border-white ' : '') + " border px-2 py-1 rounded inline cursor-pointer"}>
                Show Hint
              </button>
            </div>
          </div>
          <div className='text-sm flex gap-3 items-center'>
            <div className="border px-2 py-1 rounded inline cursor-pointer ">Shuffle All</div>
            <div className="border px-2 py-1 rounded inline cursor-pointer" >Shuffle in Category</div>
            <div onClick={() => { goToNextPhrase() }} className="active:text-white active:border-white active:bg-[#64B5A2] border px-2 py-1 rounded inline cursor-pointer">→</div>
          </div>
        </div>
      </div>

      <div className={(toggleModal ? '' : '') + ' w-full pt-[16px]'}>
        <div className='p-0 mt-[10px] w-full pb-[20px] z-0'>
          {
            sections.map((section, sectionIndex) =>
              <div key={sectionIndex}>
                <div id="vowels" className={(sectionIndex !== 0 ? 'border-b-[1px]' : '') + " px-10 text-left text-[1.25rem] pb-[.3rem] pt-0 font-semibold border-[#eaecef]"}>
                  {sectionIndex !== 0 ? section.title : <div>&nbsp;</div>}
                </div>
                <div className="mt-5 px-10 grid grid-cols-1 w-full text-left mb-10">
                  {section.phrases.map((phrase, phraseIndex) => (
                    <div key={phraseIndex} className="text-[35px] w-full flex-col justify-center">
                      <div onClick={() => setToggleModal(true)} className="relative w-full hover:text-[#428777] text-left mb-5">
                        <span className="cursor-pointer">{phrase.khmer}</span>
                      </div>
                    </div>
                  ))}
                  {/* <div className="border px-2 py-1 w-min text-sm text-nowrap rounded inline cursor-pointer">More...</div> */}
                </div>
              </div>
            )
          }
        </div>
      </div>
    </div>

  );
}