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
                Conversation and Phrases
              </div>
              <div>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut laudantium ullam eius, provident nostrum earum obcaecati minus saepe quis commodi ipsum eos eveniet odio, quisquam rerum sed aliquid ipsam dolorum non, voluptatem incidunt vel sint autem. Fugiat aperiam possimus sequi?
              </div>


              <div className="text-[1.25rem] pb-[.3rem] mt-10 font-semibold mb-5 border-b-[1px] border-[#eaecef]">
                Greetings and Introductions
              </div>
              <div className="relative mb-7">
                <div>
                  <span className="text-[26px] cursor-pointer">
                    សួរស្តាប់, អ្នកបានប្រចាំទេ?
                  </span><br />
                </div>
                <div className="font-light  mt-3 text-[14px] text-[#2c3e50]">
                  Hello, how are you?
                </div>
              </div>
              <div className="relative mb-7">
                <div className="absolute -left-6 pt-3">&gt;</div>
                <div>
                  <span className="text-[26px] cursor-pointer">
                    ឈ្មោះខ្ញុំគឺ ::
                  </span><br />
                </div>
                <div className="font-light mt-3 text-[14px] text-[#2c3e50]">
                  My name is :: .
                </div>
              </div>
              <div className="relative mb-7">
                <div className="absolute -left-6 pt-3">&gt;</div>
                <div>
                  <span className="text-[26px] cursor-pointer">
                    ស្ដាប់ដំណើរមួយទៀត!
                  </span><br />
                </div>
                <div className="font-light mt-3 text-[14px] text-[#2c3e50]">
                  Nice to meet you!
                </div>
              </div>
              <div className="relative mb-7">
                <div className="absolute -left-6 pt-3">&gt;</div>
                <div>
                  <span className="text-[26px] cursor-pointer">
                    អារម្មណ៍​បន្ទាប់​មក​ / ល្ងាច / អរិយុរ។
                  </span><br />
                </div>
                <div className="font-light mt-3 text-[14px] text-[#2c3e50]">
                  Good morning/afternoon/evening.
                </div>
              </div>
              <div className="relative mb-7">
                <div className="absolute -left-6 pt-3">&gt;</div>
                <div>
                  <span className="text-[26px] cursor-pointer">
                    លាហើយ, នឹងបង្ហាញថ្ងៃក្រោយមក!
                  </span><br />
                </div>
                <div className="font-light mt-3 text-[14px] text-[#2c3e50]">
                  Goodbye, see you later!
                </div>
              </div>


              <div className="text-[1.25rem] pb-[.3rem] mt-10 font-semibold mb-5 border-b-[1px] border-[#eaecef]">
                Everyday Conversations
              </div>
              <div className="relative mb-7">
                <div className="absolute -left-6 pt-3">&gt;</div>
                <div>
                  <span className="text-[26px] cursor-pointer">
                    ទទួលមកពីយប់មួយរបស់អ្នកមានដូចម្តេច?
                  </span><br />
                </div>
                <div className="font-light mt-3 text-[14px] text-[#2c3e50]">
                  How is your day going?
                </div>
              </div>
              <div className="relative mb-7">
                <div className="absolute -left-6 pt-3">&gt;</div>
                <div>
                  <span className="text-[26px] cursor-pointer">
                    អ្នកធ្វើការនៅដំណើរឬក៏កិច្ចការយ៉ាងណា?
                  </span><br />
                </div>
                <div className="font-light mt-3 text-[14px] text-[#2c3e50]">
                  What do you do for work/study?
                </div>
              </div>
              <div className="relative mb-7">
                <div className="absolute -left-6 pt-3">&gt;</div>
                <div>
                  <span className="text-[26px] cursor-pointer">
                    ខ្ញុំនិយមនៅពីប្រទេស ::
                  </span><br />
                </div>
                <div className="font-light mt-3 text-[14px] text-[#2c3e50]">
                  I am from :: .
                </div>
              </div>
              <div className="relative mb-7">
                <div className="absolute -left-6 pt-3">&gt;</div>
                <div>
                  <span className="text-[26px] cursor-pointer">
                    សូមអញ្ជើញ, តើអ្នកអាចជួយខ្ញុំបានឬ?
                  </span><br />
                </div>
                <div className="font-light mt-3 text-[14px] text-[#2c3e50]">
                  Excuse me, can you help me?
                </div>
              </div>
              <div className="relative mb-7">
                <div className="absolute -left-6 pt-3">&gt;</div>
                <div>
                  <span className="text-[26px] cursor-pointer">
                    អរគុណច្រើនមែន!
                  </span><br />
                </div>
                <div className="font-light mt-3 text-[14px] text-[#2c3e50]">
                  Thank you very much!
                </div>
              </div>

              <div className="text-[1.25rem] pb-[.3rem] mt-10 font-semibold mb-5 border-b-[1px] border-[#eaecef]">
                At the Restaurant
              </div>
              <div className="relative mb-7">
                <div>
                  <span className="text-[26px] cursor-pointer">
                    ខ្ញុំចង់បាន :: ទេ។
                  </span><br />
                </div>
                <div className="font-light  mt-3 text-[14px] text-[#2c3e50]">
                  I would like to order :: .
                </div>
              </div>
              <div className="relative mb-7">
                <div className="absolute -left-6 pt-3">&gt;</div>
                <div>
                  <span className="text-[26px] cursor-pointer">
                    តើអ្នកណាក៏ណាជាការណែនាំរបស់អ្នកទេ?
                  </span><br />
                </div>
                <div className="font-light mt-3 text-[14px] text-[#2c3e50]">
                  What do you recommend?
                </div>
              </div>
              <div className="relative mb-7">
                <div>
                  <span className="text-[26px] cursor-pointer">
                    ខ្ញុំអាចទទួលបានវិក័យប័ត្រទេចេញបានទេ?
                  </span><br />
                </div>
                <div className="font-light  mt-3 text-[14px] text-[#2c3e50]">
                  Can I have the bill, please?
                </div>
              </div>
              <div className="relative mb-7">
                <div className="absolute -left-6 pt-3">&gt;</div>
                <div>
                  <span className="text-[26px] cursor-pointer">
                    ម្ហូបមួយនេះមានរស់រវត្សិរចិត្ត!
                  </span><br />
                </div>
                <div className="font-light mt-3 text-[14px] text-[#2c3e50]">
                  The food is delicious!
                </div>
              </div>

              <div className="text-[1.25rem] pb-[.3rem] mt-10 font-semibold mb-5 border-b-[1px] border-[#eaecef]">
                Shopping
              </div>
              <div className="relative mb-7">
                <div>
                  <span className="text-[26px] cursor-pointer">
                    តើនេះត្រូវកំណត់ចំណាយប៉ុន្មានទេ?
                  </span><br />
                </div>
                <div className="font-light  mt-3 text-[14px] text-[#2c3e50]">
                  How much does this cost?
                </div>
              </div>
              <div className="relative mb-7">
                <div className="absolute -left-6 pt-3">&gt;</div>
                <div>
                  <span className="text-[26px] cursor-pointer">
                    តើអ្នកមានមាត្រដាក់/ពណ៌ផ្សេងទៀតឬទេ?
                  </span><br />
                </div>
                <div className="font-light mt-3 text-[14px] text-[#2c3e50]">
                  Do you have this in a different size/color?
                </div>
              </div>
              <div className="relative mb-7">
                <div>
                  <span className="text-[26px] cursor-pointer">
                    តើនេះត្រូវកំណត់ចំណាយប៉ុន្មានទេ?
                  </span><br />
                </div>
                <div className="font-light  mt-3 text-[14px] text-[#2c3e50]">
                  How much does this cost?
                </div>
              </div>
              <div className="relative mb-7">
                <div className="absolute -left-6 pt-3">&gt;</div>
                <div>
                  <span className="text-[26px] cursor-pointer">
                    តើអ្នកមានមាត្រដាក់/ពណ៌ផ្សេងទៀតឬទេ?
                  </span><br />
                </div>
                <div className="font-light mt-3 text-[14px] text-[#2c3e50]">
                  Do you have this in a different size/color?
                </div>
              </div>
              <div className="relative mb-7">
                {/* <div onClick={() => new Audio('/audio/audio_01.mp3').play()} className="cursor-pointer absolute -left-6 pt-3">&gt;</div> */}
                <div>
                  <span className="text-[26px] cursor-pointer">
                    ខ្ញុំចង់ទិញ :: ទេ។
                  </span><br />
                </div>
                <div className="font-light  mt-3 text-[14px] text-[#2c3e50]">
                  I would like to buy :: .
                </div>
              </div>
              <div className="relative mb-7">
                <div className="absolute -left-6 pt-3">&gt;</div>
                <div>
                  <span className="text-[26px] cursor-pointer">
                    តើអ្នកអាចបញ្ចុះតម្លៃខ្ពស់មកខ្ញុំបានទេ?
                  </span><br />
                </div>
                <div className="font-light mt-3 text-[14px] text-[#2c3e50]">
                  Could you give me a discount?
                </div>
              </div>


              <div className="text-[1.25rem] pb-[.3rem] mt-10 font-semibold mb-5 border-b-[1px] border-[#eaecef]">
                Directions and Transportation
              </div>
              <div className="relative mb-7">
                {/* <div onClick={() => new Audio('/audio/audio_01.mp3').play()} className="cursor-pointer absolute -left-6 pt-3">&gt;</div> */}
                <div>
                  <span className="text-[26px] cursor-pointer">
                    សូមអញ្ជើញ, កន្លែងស្ដាប់ប្រទេស/ស្ថានីយ៍រងចាំប៊ិចទេមួយត្រឹមប៉ុន្មានឬ?
                  </span><br />
                </div>
                <div className="font-light  mt-3 text-[14px] text-[#2c3e50]">
                  Excuse me, where is the nearest bus stop/train station?
                </div>
              </div>

              <div className="relative mb-7">
                <div className="absolute -left-6 pt-3">&gt;</div>
                <div>
                  <span className="text-[26px] cursor-pointer">
                    តើតម្លៃប្រាក់ទៅ :: ប៉ុន្មានទេ?
                  </span><br />
                </div>
                <div className="font-light mt-3 text-[14px] text-[#2c3e50]">
                  How much is the fare to :: ?
                </div>
              </div>

              <div className="relative mb-7">
                <div className="absolute -left-6 pt-3">&gt;</div>
                <div>
                  <span className="text-[26px] cursor-pointer">
                    តើនេះជាទ្វីងទៅ :: ឬទេ?
                  </span><br />
                </div>
                <div className="font-light mt-3 text-[14px] text-[#2c3e50]">
                  Is this the right way to :: ?
                </div>
              </div>


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
