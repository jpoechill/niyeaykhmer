import Image from "next/image";
import { createClient } from '@/utils/supabase/server'
import GetCreds from "../getcreds/getCreds"
import LeftSideBar from "../components/LeftSideBar";

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
                Khmer
              </span>
              <div className="text-[1.6rem] font-semibold mb-5">
                Basics
              </div>
              <div>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut laudantium ullam eius, provident nostrum earum obcaecati minus saepe quis commodi ipsum eos eveniet odio, quisquam rerum sed aliquid ipsam dolorum non, voluptatem incidunt vel sint autem. Fugiat aperiam possimus sequi?
              </div>

              <div id="vowels" className="text-[1.25rem] pb-[.3rem] mt-10 font-semibold mb-5 border-b-[1px] border-[#eaecef]">
                Vowels
              </div>
              <div>
                In Khmer, the official language of Cambodia, vowels play a significant role in the structure of words. Khmer vowels can be categorized into short vowels, long vowels, and diphthongs.
              </div>
              <div className="mt-5 grid grid-cols-5 text-[30px] text-center gap-y-5">
                <div><span className="cursor-pointer">ក្ក</span></div>
                <div><span className="cursor-pointer">ខ្ខ</span></div>
                <div><span className="cursor-pointer">គ្គ</span></div>
                <div><span className="cursor-pointer">ឃ្ឃ</span></div>
                <div><span className="cursor-pointer">ង្ង</span></div>
                <div><span className="cursor-pointer">ច្ច</span></div>
                <div><span className="cursor-pointer">ឆ្ឆ</span></div>
                <div><span className="cursor-pointer">ជ្ជ</span></div>
                <div><span className="cursor-pointer">ឈ្ឈ</span></div>
                <div><span className="cursor-pointer">ញ្ញ</span></div>
                <div><span className="cursor-pointer">ដ្ដ</span></div>
                <div><span className="cursor-pointer">ឋ្ឋ</span></div>
                <div><span className="cursor-pointer">ឌ្ឌ</span></div>
                <div><span className="cursor-pointer">ឍ្ឍ</span></div>
                <div><span className="cursor-pointer">ណ្ណ</span></div>
                <div><span className="cursor-pointer">ត្ត</span></div>
                <div><span className="cursor-pointer">ថ្ថ</span></div>
                <div><span className="cursor-pointer">ទ្ទ</span></div>
                <div><span className="cursor-pointer">ធ្ធ</span></div>
                <div><span className="cursor-pointer">ន្ន</span></div>
                <div><span className="cursor-pointer">ប្ប</span></div>
                <div><span className="cursor-pointer">ផ្ផ</span></div>
                <div><span className="cursor-pointer">ព្ព</span></div>
                <div><span className="cursor-pointer">ភ្ភ</span></div>
                <div><span className="cursor-pointer">ម្ម</span></div>
                <div><span className="cursor-pointer">យ្យ</span></div>
                <div><span className="cursor-pointer">រ្រ</span></div>
                <div><span className="cursor-pointer">ល្ល</span></div>
                <div><span className="cursor-pointer">វ្វ</span></div>
                <div><span className="cursor-pointer">ស្ស</span></div>
                <div><span className="cursor-pointer">ហ្ហ</span></div>
                <div><span className="cursor-pointer">ឡ</span></div>
                <div><span className="cursor-pointer">អ្អ</span></div>
              </div>
              {/* ក (ka)
ខ (kha)
គ (ko)
ឃ (kho)
ង (ngo */}
              <div id="consonants" className="text-[1.25rem] pb-[.3rem] mt-10 font-semibold mb-5 border-b-[1px] border-[#eaecef]">
                Consonants
              </div>
              <div>
                In Khmer, the official language of Cambodia, vowels play a significant role in the structure of words. Khmer vowels can be categorized into short vowels, long vowels, and diphthongs.
              </div>
              <div className="mt-5 grid grid-cols-5 text-[30px] text-center gap-y-5">
                <div><span className="cursor-pointer">កា</span></div>
                <div><span className="cursor-pointer">កិ</span></div>
                <div><span className="cursor-pointer">កី</span></div>
                <div><span className="cursor-pointer">កឹ</span></div>
                <div><span className="cursor-pointer">កឺ</span></div>
                <div><span className="cursor-pointer">កុ</span></div>
                <div><span className="cursor-pointer">កូ</span></div>
                <div><span className="cursor-pointer">កួ</span></div>
                <div><span className="cursor-pointer">កើ</span></div>
                <div><span className="cursor-pointer">កឿ</span></div>
                <div><span className="cursor-pointer">កៀ</span></div>
                <div><span className="cursor-pointer">កេ</span></div>
                <div><span className="cursor-pointer">កែ</span></div>
                <div><span className="cursor-pointer">កៃ</span></div>
                <div><span className="cursor-pointer">កោ</span></div>
                <div><span className="cursor-pointer">កៅ</span></div>
                <div><span className="cursor-pointer">កុំ</span></div>
                <div><span className="cursor-pointer">កំ</span></div>
                <div><span className="cursor-pointer">កាំ</span></div>
                <div><span className="cursor-pointer">កះ</span></div>
                <div><span className="cursor-pointer">កុះ</span></div>
                <div><span className="cursor-pointer">កេះ</span></div>
                <div><span className="cursor-pointer">កោះ</span></div>
              </div>

              <div id="special" className="text-[1.25rem] pb-[.3rem] mt-10 font-semibold mb-5 border-b-[1px] border-[#eaecef]">
                Special Characters
              </div>
              <div>
                In Khmer, the official language of Cambodia, vowels play a significant role in the structure of words. Khmer vowels can be categorized into short vowels, long vowels, and diphthongs.
              </div>

              <div className="mt-5 grid grid-cols-5 text-[30px] text-center gap-y-5">
                <div><span className="cursor-pointer">ឥ</span></div>
                <div><span className="cursor-pointer">ឧ</span></div>
                <div><span className="cursor-pointer">ឯ</span></div>
                <div><span className="cursor-pointer">ឰ</span></div>
                <div><span className="cursor-pointer">ឱ</span></div>
                <div><span className="cursor-pointer">ឲ</span></div>
                <div><span className="cursor-pointer">ឳ</span></div>
                <div><span className="cursor-pointer">ឫ</span></div>
                <div><span className="cursor-pointer">ឩ</span></div>
              </div>

              <div id="numerals" className="text-[1.25rem] pb-[.3rem] mt-10 font-semibold mb-5 border-b-[1px] border-[#eaecef]">
                Numerals
              </div>
              <div>
                In Khmer, the official language of Cambodia, vowels play a significant role in the structure of words. Khmer vowels can be categorized into short vowels, long vowels, and diphthongs.
              </div>
              <div className="mt-5 grid grid-cols-5 text-[30px] text-center gap-y-5">
                <div><span className="cursor-pointer">០</span></div>
                <div><span className="cursor-pointer">១</span></div>
                <div><span className="cursor-pointer">២</span></div>
                <div><span className="cursor-pointer">៣</span></div>
                <div><span className="cursor-pointer">៤</span></div>
                <div><span className="cursor-pointer">៥</span></div>
                <div><span className="cursor-pointer">៦</span></div>
                <div><span className="cursor-pointer">៧</span></div>
                <div><span className="cursor-pointer">៨</span></div>
                <div><span className="cursor-pointer">៩</span></div>
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
