import Image from "next/image";
import { createClient } from '@/utils/supabase/server'
import GetCreds from "@/app/getcreds/getCreds"
import LeftSideBar from "@/app/components/LeftSideBar";

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
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut laudantium ullam eius, provident nostrum earum obcaecati minus saepe quis commodi ipsum eos eveniet odio, quisquam rerum sed aliquid ipsam dolorum non, voluptatem incidunt vel sint autem. Fugiat aperiam possimus sequi?
              </div>


              <div className="text-[1.25rem] pb-[.3rem] mt-10 font-semibold mb-5 border-b-[1px] border-[#eaecef]">
                Daily Life and Activities
              </div>
              <div className="text-[1.25rem] pb-[.3rem] mt-10 font-semibold mb-5 border-b-[1px] border-[#eaecef]">
                Travel and Tourism
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
