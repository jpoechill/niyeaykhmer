import Image from "next/image";
import { createClient } from '@/utils/supabase/server'
import GetCreds from "@/app/getcreds/getCreds"
import LeftSideBar from "@/app/components/LeftSideBar";

import categories from './data.json'

export default async function Account() {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  async function logout() {
    if (user) {
      await supabase.auth.signOut()
    }
  }

  return (
    <main className="h-full scroll-smooth">
      <div className="flex justify-between h-screen w-full lg:w-[calc(100%-300px)]">

        <GetCreds />

        <LeftSideBar></LeftSideBar>

        <div className="w-full pl-[300px] h-full top-[60px]">
          <div className="mt-[60px] h-full w-full p-8">
            <div className="text-[#2c3e50] px-10 pb-10 text-[14px]">
              <span className="text-xs italic">
                Beginner
              </span>
              <div className="text-[1.6rem] font-semibold mb-5">
                Words and Vocabulary
              </div>
              <div>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </div>

              {
                categories.map((category, index) => (
                  <div key="index" >
                    <div id="numerals" className="text-[1.25rem] pb-[.3rem] mt-10 font-semibold mb-5 border-b-[1px] border-[#eaecef]">
                      {category.name}
                    </div>
                    <div className="mt-5 grid grid-cols-5 text-[30px] text-center gap-y-5">
                      {category.words.map((word, wordIndex) => (
                        <div key="wordIndex" className="group relative mb-0">
                          <div className="h-full w-[20px] absolute -left-0 pt-[0px] cursor-pointer">
                            <Image src="/play_btn_cr.svg" width={20} height={20} alt="REAN KHMER" className="hidden group-hover:inline-block mr-3 pb-1" />
                          </div>
                          <span className="cursor-pointer">
                            {word.khmer}
                          </span>
                          <div className="font-light  mt-3 text-[14px] text-[#2c3e50]">
                            {word.english}
                          </div>
                        </div>

                      ))}
                    </div>
                  </div>
                ))
              }

              {/* <div id="consonants" className="text-[1.25rem] pb-[.3rem] pt-[70px] font-semibold border-b-[1px] border-[#eaecef]">
                Consonants
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
              </div> */}

              {/* Start Side Bar - RIGHT */}

              <div className="top-[60px] hidden lg:block w-[300px] text-[#2c3e50] text-[14px] right-0 fixed pt-5 p-8 z-1 left-flex h-full bottom-0 border-l-[1px] ">
                <div className="font-semibold mb-1">
                  On this page
                </div>
                <div className="pl-3 flex flex-col gap-1">
                  <div className="hover:text-[#428777] cursor-pointer">Greetings</div>
                  <div className="hover:text-[#428777] cursor-pointer">Polite Expressions</div>
                  <div className="hover:text-[#428777] cursor-pointer">Basic Requests and Commands</div>
                  <div className="hover:text-[#428777] cursor-pointer">Negation</div>
                  <div className="hover:text-[#428777] cursor-pointer">Affirmation</div>
                  <div className="hover:text-[#428777] cursor-pointer">Directions and Movement</div>
                  <div className="hover:text-[#428777] cursor-pointer">Apologies</div>
                  <div className="hover:text-[#428777] cursor-pointer">Countries and Nationalities</div>
                  <div className="hover:text-[#428777] cursor-pointer">Emergency</div>
                  <div className="hover:text-[#428777] cursor-pointer">Miscellaneous</div>
                </div>
              </div>


              <div className="text-xs font-extralight text-right block pt-12 pb-3">
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
              </div>
            </div>
          </div>
        </div>
      </div >


    </main >
  );
}
