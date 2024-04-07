import Image from "next/image";
import { createClient } from '@/utils/supabase/server'
import GetCreds from "./getcreds/getCreds"

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
    <main className="h-full">
      <div className="flex justify-between h-screen w-full lg:w-[calc(100%-300px)]">
        <main className="h-full">
          <div className="fixed bg-white w-full text-[#428777] z-10 px-5 md:px-8 border-b-[1px] top-0 flex flex-row items-center justify-between h-[60px]">
            <div className="flex uppercase font-semibold items-center pt-1 text-md text-[14px]">
              <a href="/">
                <Image src="/logo_green.svg" width={24} height={100} alt="REAN KHMER" className="inline mr-3 pb-1" />
                niyeay khmer
              </a>
            </div>
            <div className="hidden md:flex text-[#428777] flex-row text-[14px] items-center gap-10">
              <div>
                {user ?
                  <div>
                    <GetCreds />
                    <form action="/auth/signout" className="inline" method="post">
                      <button className="text-white inline bg-[#428777] rounded-md ml-3 p-2 py-1">Log Out</button>
                    </form>
                  </div> :
                  <div>
                    <a href="/login">
                      <button className="border-[1px] border-[#bdcac7] rounded-md p-2 py-1 mx-3">Login</button>
                    </a>
                    <a href="/">
                      <button className="text-white bg-[#428777] rounded-md p-2 py-1">Sign Up</button>
                    </a>
                  </div>
                }
              </div>
            </div>
          </div>
        </main>
        <div className="top-[60px] fixed w-[300px] pl-9 pt-5 p-8 h-full text-[#2c3e50] text-[14px] bottom-0 border-r-[1px] ">
          <div className="relative">
            <div className="-left-3 font-semibold mb-1">
              Basics
            </div>
          </div>
          <div className="pl-4 flex flex-col gap-1">
            <div className="hover:text-[#428777] cursor-pointer">Vowels</div>
            <div className="hover:text-[#428777] cursor-pointer">Consonants</div>
            <div className="hover:text-[#428777] cursor-pointer">Special Characters</div>
            <div className="hover:text-[#428777] cursor-pointer">Numerals</div>
          </div>
          <div className="relative">
            <div className="-left-3 font-semibold mt-2 mb-1">
              Beginner
            </div>
          </div>
          <div className="pl-4 flex flex-col gap-1">
            <div className="hover:text-[#428777] cursor-pointer">Words and Vocabulary</div>
            <div className="hover:text-[#428777] cursor-pointer">Conversational Phrases</div>
          </div>
          <div className="relative">
            <div className="-left-3 font-semibold mt-2 mb-1">
              Intermediate
            </div>
          </div>
          <div className="pl-4 flex flex-col gap-1">
            <div className="hover:text-[#428777] cursor-pointer">Words and Vocabulary</div>
            <div className="hover:text-[#428777] cursor-pointer">Conversational Phrases</div>
          </div>
          <div className="relative">
            <div className="-left-3 font-semibold mt-2 mb-1">
              Advance
            </div>
          </div>
          <div className="pl-4 flex flex-col gap-1">
            <div className="hover:text-[#428777] cursor-pointer">Words and Vocabulary</div>
            <div className="hover:text-[#428777] cursor-pointer">Conversational Phrases</div>
          </div>
          <div className="font-semibold text-[14px] mt-4">
            Etc.
          </div>
          <div className="pl-4 flex flex-col gap-1">
            <div className="hover:text-[#428777] cursor-pointer">About</div>
            <div className="hover:text-[#428777] cursor-pointer">Membership</div>
            <div className="hover:text-[#428777] cursor-pointer">Resources</div>
            <div className="hover:text-[#428777] cursor-pointer">Contact</div>
          </div>
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


                <p>
                  <span data-text="ពេលសម្រាកអាហារថ្ងៃត្រង់" className="word">
                    ពេលសម្រាកអាហារថ្ងៃត្រង់
                  </span>
                </p>
              </div>



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

              <div className="text-sm text-right block pt-6 pb-3">
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
