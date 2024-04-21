import Image from "next/image";
import { createClient } from '@/utils/supabase/server'
import GetCreds from "@/app/getcreds/getCreds"
import LeftSideBar from "@/app/components/LeftSideBar";

import sections from './data.json'

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
                Conversation and Phrases
              </div>
              <div>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </div>


              {/* {
                sections.map((item, index) => (
                  <div key="index">
                    <div className="flex text-[1.25rem] flex-row justify-between border-b-[1px] pb-3 border-[#eaecef] mt-10 w-full mb-0">
                      <div id="numerals" className=" w-full font-semibold ">
                        {item.title}
                      </div>
                      <div className="text-[12px] border px-3 cursor-pointer py-0 flex items-center rounded">Regenerate</div>
                    </div>
                    <div className="mt-5 grid grid-cols-1 text-[28px] text-left gap-y-5">
                      {item.phrases.map((phrase, phraseIndex) => (
                        phraseIndex < 2 &&
                        <div key="phraseIndex" className="group relative mb-0">
                          <div className="h-full min-w-[20px] absolute -left-8 pt-[0px] w-full cursor-pointer">
                            <Image src="/play_btn_cr.svg" width={20} height={20} alt="REAN KHMER" className="hidden group-hover:inline-block mr-3 pb-1" />
                          </div>
                          <span className="cursor-pointer">
                            {phrase.khmer}
                          </span>
                          <div className="font-light  mt-3 text-[14px] text-[#2c3e50]">
                            {phrase.english}
                          </div>
                        </div>

                      ))}
                    </div>
                  </div>
                ))
              } */}

              {/* Start Side Bar - RIGHT */}

              <div className="top-[60px] hidden lg:block w-[300px] text-[#2c3e50] text-[14px] right-0 fixed pt-5 p-8 z-1 left-flex h-full bottom-0 border-l-[1px] ">
                <div className="font-semibold mb-1">
                  On this page
                </div>
                <div className="pl-3 flex flex-col gap-1">
                  <div className="hover:text-[#428777] cursor-pointer">Greetings and Introductions</div>
                  <div className="hover:text-[#428777] cursor-pointer">Everyday Conversations</div>
                  <div className="hover:text-[#428777] cursor-pointer">At the Restaurant</div>
                  <div className="hover:text-[#428777] cursor-pointer">Shopping</div>
                  <div className="hover:text-[#428777] cursor-pointer">Directions and Transportation</div>
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
