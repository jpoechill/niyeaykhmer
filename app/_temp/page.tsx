import Image from "next/image";
import { createClient } from '@/utils/supabase/server'
import Header from "./Header/Header"
import LeftSideBar from "./components/LeftSideBar";

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
    <main className="h-full ">
      <div className="flex justify-between h-screen w-full lg:w-[calc(100%-300px)]">

        <Header />
        <LeftSideBar></LeftSideBar>

        <div className="w-full pl-[300px] h-full top-[60px]">
          <div className="mt-[60px] w-full p-8">
            <div className="text-[#2c3e50] px-10 pb-10 text-[14px]">

              Main Page
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

              <div className="group relative mb-7">
                <div className="z-0 h-full min-w-[20px] absolute -left-8 pt-[10px]">
                  <Image src="/play_btn_cr.svg" width={20} height={20} alt="REAN KHMER" className="hidden cursor-pointer group-hover:inline-block mr-3 pb-1" />
                </div>
                <div>
                  <span className="text-[26px] cursor-pointer">
                    ជាធម្មតាខ្ញុំក្រោកពីព្រលឹម ដើម្បីចាប់ផ្តើមថ្ងៃរបស់ខ្ញុំ។
                  </span><br />
                </div>
                <div className="font-light  mt-3 text-[14px] text-[#2c3e50]">
                  I usually wake up early in the morning to start my day.
                </div>
              </div>

              <div className="group relative mb-7">
                <div className="z-0 h-full min-w-[20px] absolute -left-8 pt-[10px]">
                  <Image src="/play_btn_cr.svg" width={20} height={20} alt="REAN KHMER" className="hidden cursor-pointer group-hover:inline-block mr-3 pb-1" />
                </div>
                <div>
                  <span className="z-1 text-[26px] cursor-pointer">
                    បន្ទាប់ពីអាហារពេលព្រឹក ខ្ញុំធ្វើដំណើរទៅធ្វើការដោយប្រើប្រាស់មធ្យោបាយធ្វើដំណើរសាធារណៈ។
                  </span><br />
                </div>
                <div className="font-light mt-3 text-[14px] text-[#2c3e50]">
                  After breakfast, I commute to work using public transportation.
                </div>
              </div>


              <div className="group relative mb-7">
                <div className="z-0 h-full min-w-[20px] absolute -left-8 pt-[10px]">
                  <Image src="/play_btn_cr.svg" width={20} height={20} alt="REAN KHMER" className="hidden cursor-pointer group-hover:inline-block mr-3 pb-1" />
                </div>
                <div>
                  <span className="text-[26px] cursor-pointer">
                    ពេលសម្រាកអាហារថ្ងៃត្រង់ ខ្ញុំចូលចិត្តសម្រាក និងជជែកជាមួយមិត្តរួមការងារ។
                  </span><br />
                </div>
                <div className="font-light  mt-3 text-[14px] text-[#2c3e50]">
                  During my lunch break, I like to relax and chat with my colleagues.
                </div>
              </div>

              <div className="group relative mb-7">
                <div className="z-0 h-full min-w-[20px] absolute -left-8 pt-[10px]">
                  <Image src="/play_btn_cr.svg" width={20} height={20} alt="REAN KHMER" className="hidden cursor-pointer group-hover:inline-block mr-3 pb-1" />
                </div>
                <div>
                  <span className="text-[26px] cursor-pointer">
                    ពេលសម្រាកអាហារថ្ងៃត្រង់ ខ្ញុំចូលចិត្តសម្រាក និងជជែកជាមួយមិត្តរួមការងារ។
                  </span><br />
                </div>
                <div className="font-light  mt-3 text-[14px] text-[#2c3e50]">
                  In the evening, I enjoy cooking dinner and watching TV with my family.
                </div>
              </div>

              <div className="group relative mb-7">
                <div className="z-0 h-full min-w-[20px] absolute -left-8 pt-[10px]">
                  <Image src="/play_btn_cr.svg" width={20} height={20} alt="REAN KHMER" className="hidden cursor-pointer group-hover:inline-block mr-3 pb-1" />
                </div>
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
              <div className="group relative mb-7">
                <div className="z-0 h-full min-w-[20px] absolute -left-8 pt-[10px]">
                  <Image src="/play_btn_cr.svg" width={20} height={20} alt="REAN KHMER" className="hidden cursor-pointer group-hover:inline-block mr-3 pb-1" />
                </div>
                <div>
                  <span className="text-[26px] cursor-pointer">
                    ជាធម្មតាខ្ញុំក្រោកពីព្រលឹម ដើម្បីចាប់ផ្តើមថ្ងៃរបស់ខ្ញុំ។
                  </span><br />
                </div>
                <div className="font-light  mt-3 text-[14px] text-[#2c3e50]">
                  I usually wake up early in the morning to start my day.
                </div>
              </div>

              <div className="group relative mb-7">
                <div className="z-0 h-full min-w-[20px] absolute -left-8 pt-[10px]">
                  <Image src="/play_btn_cr.svg" width={20} height={20} alt="REAN KHMER" className="hidden cursor-pointer group-hover:inline-block mr-3 pb-1" />
                </div>
                <div>
                  <span className="text-[26px] cursor-pointer">
                    បន្ទាប់ពីអាហារពេលព្រឹក ខ្ញុំធ្វើដំណើរទៅធ្វើការដោយប្រើប្រាស់មធ្យោបាយធ្វើដំណើរសាធារណៈ។
                  </span><br />
                </div>
                <div className="font-light mt-3 text-[14px] text-[#2c3e50]">
                  After breakfast, I commute to work using public transportation.
                </div>
              </div>

              <div className="group relative mb-7">
                <div className="z-0 h-full min-w-[20px] absolute -left-8 pt-[10px]">
                  <Image src="/play_btn_cr.svg" width={20} height={20} alt="REAN KHMER" className="hidden cursor-pointer group-hover:inline-block mr-3 pb-1" />
                </div>
                <div>
                  <span className="text-[26px] cursor-pointer">
                    ពេលសម្រាកអាហារថ្ងៃត្រង់ ខ្ញុំចូលចិត្តសម្រាក និងជជែកជាមួយមិត្តរួមការងារ។
                  </span><br />
                </div>
                <div className="font-light  mt-3 text-[14px] text-[#2c3e50]">
                  During my lunch break, I like to relax and chat with my colleagues.
                </div>
              </div>

              <div className="group relative mb-7">
                <div className="z-0 h-full min-w-[20px] absolute -left-8 pt-[10px]">
                  <Image src="/play_btn_cr.svg" width={20} height={20} alt="REAN KHMER" className="hidden cursor-pointer group-hover:inline-block mr-3 pb-1" />
                </div>
                <div>
                  <span className="text-[26px] cursor-pointer">
                    ពេលសម្រាកអាហារថ្ងៃត្រង់ ខ្ញុំចូលចិត្តសម្រាក និងជជែកជាមួយមិត្តរួមការងារ។
                  </span><br />
                </div>
                <div className="font-light  mt-3 text-[14px] text-[#2c3e50]">
                  In the evening, I enjoy cooking dinner and watching TV with my family.
                </div>
              </div>

              <div className="group relative mb-7">
                <div className="z-0 h-full min-w-[20px] absolute -left-8 pt-[10px]">
                  <Image src="/play_btn_cr.svg" width={20} height={20} alt="REAN KHMER" className="hidden cursor-pointer group-hover:inline-block mr-3 pb-1" />
                </div>
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
                Socializing and Relationships
              </div>
              <div className="text-[1.25rem] pb-[.3rem] mt-10 font-semibold mb-5 border-b-[1px] border-[#eaecef]">
                Shopping and Dining Out
              </div>
              <div className="text-[1.25rem] pb-[.3rem] mt-10 font-semibold mb-5 border-b-[1px] border-[#eaecef]">
                Education and Learning
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


            </div>
          </div>
        </div>
      </div >


    </main >
  );
}
