'use client'

import Image from "next/image";

export default function Home() {
  return (
    <main className="{$myFont} h-full font-['Open Sans']">
      <div className="fixed bg-white w-full uppercase text-[#428777] z-10 px-5 md:px-8 border-b-[1px] top-0 flex flex-row items-center justify-between h-[60px]">
        <div>
          <a href="/">
            {/* <Image src="/logo_white.svg" width={140} height={30} alt="REAN KHMER" /> */}

            <Image src="/left_title.svg" width={150} height={0} alt="REAN KHMER" />
          </a>
        </div>
        <div className="hidden md:flex text-[#428777] flex-row text-[1px] items-center gap-10">

          <Image src="/right_title.svg" width={315} height={0} alt="REAN KHMER" />
          {/* <Image src="/title_blurb.svg" width={300} height={500} alt="INTERACTIVE SHORT STORIES IN KHMER" /> */}
        </div>
      </div>

      <div className="flex justify-between h-screen w-full lg:w-[calc(100%-300px)]">

        <div className="top-[60px] fixed w-[300px] pl-11 p-8 h-full text-[#2c3e50] text-[14px] bottom-0 border-r-[1px] ">
          <div className="relative">
            <div className="-left-3 absolute">
              Intro
            </div>
          </div>
          <br />
          Consonants <br />
          Vowels <br />
          Special Characters <br /><br />

          <div className="relative">
            <div className="-left-3 absolute">
              Beginner
            </div>
          </div>
          <br />
          Words and Vocabulary <br />
          Conversational Phrases <br /><br />
          Intermediate
          <br />
          Words and Vocabulary <br />
          Conversational Phrases <br /><br />
          Advance
          <br />
          Words and Vocabulary <br />
          Conversational Phrases <br /><br />
        </div>
        <div className="w-full pl-[300px] h-full top-[60px]">
          <div className="mt-[60px] h-full w-full p-8">
            <div className="text-[#2c3e50] px-10 pb-10 text-[14px]">
              <span className="text-xs italic">
                Intermediate
              </span>
              <div className="text-[1.6rem] font-semibold mb-5">
                Conversational Phrases
              </div>
              <div>
                These phrases cover various aspects of daily life and activities, from studying to working, and leisure activities. Practice using them in context to improve your Khmer language skills!
              </div>

              <div className="text-[1.25rem] pb-[.3rem] mt-10 font-semibold mb-5 border-b-[1px] border-[#eaecef]">
                Daily Life and Activities
              </div>
              <div className="relative mb-7">
                <div onClick={() => new Audio('/audio/audio_01.mp3').play()} className="cursor-pointer absolute -left-6 pt-3">&gt;</div>
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

              <div className="relative mb-7">
                <div className="absolute -left-6 pt-3">&gt;</div>
                <div>
                  <span className="text-[26px] cursor-pointer">
                    ពេលសម្រាកអាហារថ្ងៃត្រង់ ខ្ញុំចូលចិត្តសម្រាក និងជជែកជាមួយមិត្តរួមការងារ។
                  </span><br />
                </div>
                <div className="font-light  mt-3 text-[14px] text-[#2c3e50]">
                  During my lunch break, I like to relax and chat with my colleagues.
                </div>
              </div>

              <div className="relative mb-7">
                <div className="absolute -left-6 pt-3">&gt;</div>
                <div>
                  <span className="text-[26px] cursor-pointer">
                    ពេលសម្រាកអាហារថ្ងៃត្រង់ ខ្ញុំចូលចិត្តសម្រាក និងជជែកជាមួយមិត្តរួមការងារ។
                  </span><br />
                </div>
                <div className="font-light  mt-3 text-[14px] text-[#2c3e50]">
                  In the evening, I enjoy cooking dinner and watching TV with my family.
                </div>
              </div>

              <div className="relative mb-7">
                <div className="absolute -left-6 pt-3">&gt;</div>
                <div>
                  <span className="text-[26px] cursor-pointer">
                    ពេលសម្រាកអាហារថ្ងៃត្រង់ ខ្ញុំចូលចិត្តសម្រាក និងជជែកជាមួយមិត្តរួមការងារ។
                  </span><br />
                </div>
                <div className="font-light  mt-3 text-[14px] text-[#2c3e50]">
                  Before bed, I like to read a book or listen to music to unwind.
                </div>
              </div>


              <div className="text-[1.25rem] pb-[.3rem] mt-10 font-semibold mb-5 border-b-[1px] border-[#eaecef]">
                Travel and Tourism
              </div>
              <div className="relative mb-7">
                <div className="absolute -left-6 pt-3">&gt;</div>
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

              <div className="relative mb-7">
                <div className="absolute -left-6 pt-3">&gt;</div>
                <div>
                  <span className="text-[26px] cursor-pointer">
                    ពេលសម្រាកអាហារថ្ងៃត្រង់ ខ្ញុំចូលចិត្តសម្រាក និងជជែកជាមួយមិត្តរួមការងារ។
                  </span><br />
                </div>
                <div className="font-light  mt-3 text-[14px] text-[#2c3e50]">
                  During my lunch break, I like to relax and chat with my colleagues.
                </div>
              </div>

              <div className="relative mb-7">
                <div className="absolute -left-6 pt-3">&gt;</div>
                <div>
                  <span className="text-[26px] cursor-pointer">
                    ពេលសម្រាកអាហារថ្ងៃត្រង់ ខ្ញុំចូលចិត្តសម្រាក និងជជែកជាមួយមិត្តរួមការងារ។
                  </span><br />
                </div>
                <div className="font-light  mt-3 text-[14px] text-[#2c3e50]">
                  In the evening, I enjoy cooking dinner and watching TV with my family.
                </div>
              </div>

              <div className="relative mb-7">
                <div className="absolute -left-6 pt-3">&gt;</div>
                <div>
                  <span className="text-[26px] cursor-pointer">
                    ពេលសម្រាកអាហារថ្ងៃត្រង់ ខ្ញុំចូលចិត្តសម្រាក និងជជែកជាមួយមិត្តរួមការងារ។
                  </span><br />
                </div>
                <div className="font-light  mt-3 text-[14px] text-[#2c3e50]">
                  Before bed, I like to read a book or listen to music to unwind.
                </div>
              </div>


              <div className="top-[60px] hidden lg:block w-[300px] text-[#2c3e50] text-[14px] right-0 fixed p-8 z-1 left-flex h-full bottom-0 border-l-[1px] ">
                On this page <br /><br />
                Daily Life and Activities <br />
                Travel and Tourism <br />
                Socializing and Relationships <br />
                Shopping and Dining Out <br />
                Education and Learning <br />
              </div>
            </div>
          </div>
        </div>
      </div>


    </main>
  );
}
