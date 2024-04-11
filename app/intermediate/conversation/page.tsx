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
                Intermediate
              </span>
              <div className="text-[1.6rem] font-semibold mb-5">
                Conversation and Phrases
              </div>
              <div>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </div>



              {
                sections.map((item, index) => (
                  <div key="index" >
                    <div id="numerals" className="text-[1.25rem] pb-[.3rem] mt-10 font-semibold mb-5 border-b-[1px] border-[#eaecef]">
                      {item.title}
                    </div>


                    {
                      // item.title
                      item.phrases.map((phrase, phraseIndex) => (
                        <div key="phraseIndex" className="w-full flex justify-center">
                          <div className="relative w-min">
                            <div className="h-full min-w-[20px] absolute -left-8 pt-[14px]">
                              <Image src="/play_btn_cr.svg" width={20} height={20} alt="REAN KHMER" className="cursor-pointer group-hover:inline-block mr-3 pb-1" />
                            </div>
                            {/* <span className="cursor-pointer">{item.khmer}</span> */}
                          </div>
                        </div>
                      ))
                    }


                  </div>

                ))
              }

              <div className="text-[1.25rem] pb-[.3rem] mt-10 font-semibold mb-5 border-b-[1px] border-[#eaecef]">
                Daily Life and Activities
              </div>
              <div className="relative mb-7">
                {/* <div onClick={() => new Audio('/audio/audio_01.mp3').play()} className="cursor-pointer absolute -left-6 pt-3">&gt;</div> */}
                <div>
                  <span className="text-[26px] cursor-pointer">
                    ជាធម្មតាខ្ញុំក្រោកពីព្រលឹម ដើម្បីចាប់ផ្តើមថ្ងៃរបស់ខ្ញុំ។
                  </span><br />
                </div>
                <div className="font-light  mt-3 text-[14px] text-[#2c3e50]">
                  I usually wake up early in the morning to start my day.
                </div>
              </div>

              <div className="relative mb-7">
                <div className="absolute -left-6 pt-3">&gt;</div>
                <div>
                  <span className="text-[26px] cursor-pointer">
                    បន្ទាប់ពីអាហារពេលព្រឹក ខ្ញុំធ្វើដំណើរទៅធ្វើការដោយប្រើប្រាស់មធ្យោបាយធ្វើដំណើរសាធារណៈ។
                  </span><br />
                </div>
                <div className="font-light mt-3 text-[14px] text-[#2c3e50]">
                  After breakfast, I commute to work using public transportation.
                </div>
              </div>
              <div className="text-[1.25rem] pb-[.3rem] mt-10 font-semibold mb-5 border-b-[1px] border-[#eaecef]">
                Travel and Tourism
              </div>
              <div className="relative mb-7">
                {/* <div onClick={() => new Audio('/audio/audio_01.mp3').play()} className="cursor-pointer absolute -left-6 pt-3">&gt;</div> */}
                <div>
                  <span className="text-[26px] cursor-pointer">
                    ជាធម្មតាខ្ញុំក្រោកពីព្រលឹម ដើម្បីចាប់ផ្តើមថ្ងៃរបស់ខ្ញុំ។
                  </span><br />
                </div>
                <div className="font-light  mt-3 text-[14px] text-[#2c3e50]">
                  I usually wake up early in the morning to start my day.
                </div>
              </div>

              <div className="relative mb-7">
                <div className="absolute -left-6 pt-3">&gt;</div>
                <div>
                  <span className="text-[26px] cursor-pointer">
                    បន្ទាប់ពីអាហារពេលព្រឹក ខ្ញុំធ្វើដំណើរទៅធ្វើការដោយប្រើប្រាស់មធ្យោបាយធ្វើដំណើរសាធារណៈ។
                  </span><br />
                </div>
                <div className="font-light mt-3 text-[14px] text-[#2c3e50]">
                  After breakfast, I commute to work using public transportation.
                </div>
              </div>
              <div className="text-[1.25rem] pb-[.3rem] mt-10 font-semibold mb-5 border-b-[1px] border-[#eaecef]">
                Socializing and Relationships
              </div>
              <div className="relative mb-7">
                {/* <div onClick={() => new Audio('/audio/audio_01.mp3').play()} className="cursor-pointer absolute -left-6 pt-3">&gt;</div> */}
                <div>
                  <span className="text-[26px] cursor-pointer">
                    ជាធម្មតាខ្ញុំក្រោកពីព្រលឹម ដើម្បីចាប់ផ្តើមថ្ងៃរបស់ខ្ញុំ។
                  </span><br />
                </div>
                <div className="font-light  mt-3 text-[14px] text-[#2c3e50]">
                  I usually wake up early in the morning to start my day.
                </div>
              </div>

              <div className="relative mb-7">
                <div className="absolute -left-6 pt-3">&gt;</div>
                <div>
                  <span className="text-[26px] cursor-pointer">
                    បន្ទាប់ពីអាហារពេលព្រឹក ខ្ញុំធ្វើដំណើរទៅធ្វើការដោយប្រើប្រាស់មធ្យោបាយធ្វើដំណើរសាធារណៈ។
                  </span><br />
                </div>
                <div className="font-light mt-3 text-[14px] text-[#2c3e50]">
                  After breakfast, I commute to work using public transportation.
                </div>
              </div>
              <div className="text-[1.25rem] pb-[.3rem] mt-10 font-semibold mb-5 border-b-[1px] border-[#eaecef]">
                Shopping and Dining Out
              </div>
              <div className="relative mb-7">
                {/* <div onClick={() => new Audio('/audio/audio_01.mp3').play()} className="cursor-pointer absolute -left-6 pt-3">&gt;</div> */}
                <div>
                  <span className="text-[26px] cursor-pointer">
                    ជាធម្មតាខ្ញុំក្រោកពីព្រលឹម ដើម្បីចាប់ផ្តើមថ្ងៃរបស់ខ្ញុំ។
                  </span><br />
                </div>
                <div className="font-light  mt-3 text-[14px] text-[#2c3e50]">
                  I usually wake up early in the morning to start my day.
                </div>
              </div>

              <div className="relative mb-7">
                <div className="absolute -left-6 pt-3">&gt;</div>
                <div>
                  <span className="text-[26px] cursor-pointer">
                    បន្ទាប់ពីអាហារពេលព្រឹក ខ្ញុំធ្វើដំណើរទៅធ្វើការដោយប្រើប្រាស់មធ្យោបាយធ្វើដំណើរសាធារណៈ។
                  </span><br />
                </div>
                <div className="font-light mt-3 text-[14px] text-[#2c3e50]">
                  After breakfast, I commute to work using public transportation.
                </div>
              </div>
              <div className="text-[1.25rem] pb-[.3rem] mt-10 font-semibold mb-5 border-b-[1px] border-[#eaecef]">
                Education and Learning
              </div>
              <div className="relative mb-7">
                {/* <div onClick={() => new Audio('/audio/audio_01.mp3').play()} className="cursor-pointer absolute -left-6 pt-3">&gt;</div> */}
                <div>
                  <span className="text-[26px] cursor-pointer">
                    ជាធម្មតាខ្ញុំក្រោកពីព្រលឹម ដើម្បីចាប់ផ្តើមថ្ងៃរបស់ខ្ញុំ។
                  </span><br />
                </div>
                <div className="font-light  mt-3 text-[14px] text-[#2c3e50]">
                  I usually wake up early in the morning to start my day.
                </div>
              </div>

              <div className="relative mb-7">
                <div className="absolute -left-6 pt-3">&gt;</div>
                <div>
                  <span className="text-[26px] cursor-pointer">
                    បន្ទាប់ពីអាហារពេលព្រឹក ខ្ញុំធ្វើដំណើរទៅធ្វើការដោយប្រើប្រាស់មធ្យោបាយធ្វើដំណើរសាធារណៈ។
                  </span><br />
                </div>
                <div className="font-light mt-3 text-[14px] text-[#2c3e50]">
                  After breakfast, I commute to work using public transportation.
                </div>
              </div>


              {/* Start Side Bar - RIGHT */}

              <div className="top-[60px] hidden lg:block w-[300px] text-[#2c3e50] text-[14px] right-0 fixed pt-5 p-8 z-1 left-flex h-full bottom-0 border-l-[1px] ">
                <div className="font-semibold mb-1">
                  On this page
                </div>
                <div className="pl-3 flex flex-col gap-1">
                  <div className="hover:text-[#428777] cursor-pointer">Daily Life and Activities</div>
                  <div className="hover:text-[#428777] cursor-pointer">Travel and Tourism</div>
                  <div className="hover:text-[#428777] cursor-pointer">Socializing and Relationships</div>
                  <div className="hover:text-[#428777] cursor-pointer">Shopping and Dining Out</div>
                  <div className="hover:text-[#428777] cursor-pointer">Education and Learning</div>
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
