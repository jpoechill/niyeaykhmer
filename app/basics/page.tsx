import Image from "next/image";
import { createClient } from '@/utils/supabase/server'
import GetCreds from "../getcreds/getCreds"
import LeftSideBar from "../components/LeftSideBar";

import characters from './data.json'

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

          {/* <div className="h-[200px] overflow-hidden block">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus sequi veniam delectus eius sunt eum quod corrupti libero ad odit accusamus nam consectetur rem consequatur reprehenderit molestiae dolorem, ducimus non adipisci necessitatibus perspiciatis minus quasi. Adipisci perferendis repellendus itaque atque officia error quas, quam expedita laboriosam officiis, consectetur soluta inventore nam obcaecati explicabo dolore vitae doloribus cum, facere aliquam delectus? Quis repudiandae odio provident adipisci pariatur dolorum, vitae ab animi voluptatem repellendus quia rem id voluptatum ut perferendis maiores, aliquam perspiciatis quos voluptatibus, inventore tempora! Ut a quia praesentium in, veniam voluptates officia quae vel ex pariatur explicabo accusamus ipsam!</div> */}

          <div className="mt-[60px] h-full w-full p-8">
            <div className="text-[#2c3e50] h-full px-10 pb-10 text-[14px]">
              <div className="mb-[-30px] ">

                {/* <span className="text-xs italic">
                  Basics
                </span> */}
                {/* <div className="text-[1.6rem] font-semibold mb-5">
                  Intro
                </div> */}

                <div className="text-[1.6rem] font-semibold mb-5">
                  Basics
                </div>
                <div id="vowels" className="text-[1.25rem] pb-[.3rem] font-semibold border-b-[1px] border-[#eaecef]">
                  Intro
                </div>
                <div>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut laudantium ullam eius, provident nostrum earum obcaecati minus saepe quis commodi ipsum eos eveniet odio, quisquam rerum sed aliquid ipsam dolorum non, voluptatem incidunt vel sint autem. Fugiat aperiam possimus sequi?
                </div>
              </div>

              <div id="vowels" className="text-[1.25rem] pb-[.3rem] pt-[70px] font-semibold border-b-[1px] border-[#eaecef]">
                Vowels
              </div>
              {/* <div>
                In Khmer, the official language of Cambodia, vowels play a significant role in the structure of words. Khmer vowels can be categorized into short vowels, long vowels, and diphthongs.
              </div> */}
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
              {/* <div>
                In Khmer, the official language of Cambodia, vowels play a significant role in the structure of words. Khmer vowels can be categorized into short vowels, long vowels, and diphthongs.
              </div> */}
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
              {/* <div>
                In Khmer, the official language of Cambodia, vowels play a significant role in the structure of words. Khmer vowels can be categorized into short vowels, long vowels, and diphthongs.
              </div> */}

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
              {/* <div>
                In Khmer, the official language of Cambodia, vowels play a significant role in the structure of words. Khmer vowels can be categorized into short vowels, long vowels, and diphthongs.
              </div> */}
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
              {/* Start Side Bar - RIGHT */}

              <div className="top-[60px] hidden lg:block w-[300px] text-[#2c3e50] text-[14px] right-0 fixed pt-5 p-8 z-1 left-flex h-full bottom-0 border-l-[1px] ">
                <div className="font-semibold mb-1">
                  On this page
                </div>
                <div className="pl-3 flex flex-col gap-1">
                  <div className="hover:text-[#428777] cursor-pointer">Intro</div>
                  <div className="hover:text-[#428777] cursor-pointer">Vowels</div>
                  <div className="hover:text-[#428777] cursor-pointer">Consonants</div>
                  <div className="hover:text-[#428777] cursor-pointer">Special Characters</div>
                  <div className="hover:text-[#428777] cursor-pointer">Numerals</div>
                </div>
              </div>


              {/* Main Body Section Footer */}

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
              </div>

              {/* Start Right SideBar */}
            </div>
          </div>
        </div>
      </div >


    </main >
  );
}
