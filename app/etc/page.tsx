import Image from "next/image";
import { createClient } from '@/utils/supabase/server'
import GetCreds from "@/app/getcreds/getCreds"
import LeftSideBar from "@/app/components/LeftSideBar";
import RightSideBar from "@/app/components/RightSideBar"

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
      <div className="group/all flex justify-between h-screen w-full lg:w-[calc(100%-300px)]">

        <GetCreds />

        <LeftSideBar></LeftSideBar>

        <div className="group-hover/all:opacity-100 w-full pl-[300px] h-full top-[60px]">
          <div className="mt-[60px] h-full w-full p-8">
            <div className="text-[#2c3e50] px-10 pb-10 text-[14px]">
              {/* <span className="text-xs italic">
                Intermediate
              </span> */}

              {/* <div className="text-[1.6rem] font-semibold mb-5">
                Info
              </div> */}
              <Image src="/avatars/group_02.png" width={600} height={300} alt="REAN KHMER" className="inline w-full mr-3 pb-1" />

              <div id="vowels" className="text-[1.25rem] pb-[.3rem] mt-4 font-semibold border-b-[1px] mb-3 border-[#eaecef]">
                About
              </div>
              <div>
                Welcome to our Khmer Language Trainer powered by Next.js! Our platform boasts a strong, minimal design ethos, ensuring a seamless learning experience. Dive into our extensive library of words and phrases curated for various contexts, from everyday conversations to specialized topics. With intuitive navigation, you can practice at your own pace, honing your Khmer skills effortlessly.
                {/* <br /><br /> */}
                {/* Whether you're a beginner or aiming for fluency, our Khmer Language Trainer is your gateway to mastering the language efficiently and effectively. Start your journey today and unlock a world of opportunities with Khmer proficiency at your fingertips! */}
              </div>


              <div id="vowels" className="mt-5 text-[1.25rem] pb-[.3rem] font-semibold border-b-[1px] mb-3 border-[#eaecef]">
                Support
              </div>
              <div>
                Every donation, no matter how small, helps us continue our mission of promoting language diversity and cultural understanding. Together, we can empower individuals to connect with the Khmer language and culture on a deeper level.
                <br /><br />
                Thank you for considering supporting us in our journey to make language learning accessible to all.
                {/* Donate now and make a difference in the lives of language learners everywhere! */}

              </div>

              <div id="vowels" className="mt-5 text-[1.25rem] pb-[.3rem] font-semibold border-b-[1px] mb-3 border-[#eaecef]">
                Resources
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi eveniet, aliquid esse provident maiores quasi, harum consequatur laborum similique distinctio saepe itaque voluptatibus qui commodi beatae voluptate suscipit. Adipisci omnis, ipsum, culpa aliquid, et minus beatae deleniti voluptate quo corrupti nostrum. Quo cupiditate consequuntur eos odit accusamus tenetur! Asperiores illo molestias vero maiores adipisci ullam ipsum veniam similique nihil laborum!
              </div>


              {/* <div id="vowels" className="mt-5 text-[1.25rem] pb-[.3rem] font-semibold border-b-[1px] mb-3 border-[#eaecef]">
                Resources
              </div>
              <div>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut laudantium ullam eius, provident nostrum earum obcaecati minus saepe quis commodi ipsum eos eveniet odio, quisquam rerum sed aliquid ipsam dolorum non, voluptatem incidunt vel sint autem. Fugiat aperiam possimus sequi?
              </div> */}

              <div id="vowels" className="mt-5 text-[1.25rem] pb-[.3rem] font-semibold border-b-[1px] mb-3 border-[#eaecef]">
                Contact
              </div>
              <div>
                Have questions, suggestions, or feedback? We&apos;d love to hear from you!
                <br /><br />
                {/* Reach out to us via email or social media. */}
                {/* <br /><br /> */}
                {/* Email: YourEmail@example.com <br />
                Social Media: Follow us on Facebook and Twitter for updates and language learning tips. <br />
                We're here to assist you on your language learning journey. Don't hesitate to get in touch! */}
              </div>

              {/* Start Side Bar - RIGHT */}

              <div className="top-[60px] hidden lg:block w-[300px] text-[#2c3e50] text-[14px] right-0 fixed pt-5 p-8 z-1 left-flex h-full bottom-0 border-l-[1px] ">
                <RightSideBar />
                {/* <div className="font-semibold mb-1">
                  On this page
                </div>
                <div className="pl-3 flex flex-col gap-1">
                  <div className="hover:text-[#428777] cursor-pointer">About</div>
                  <div className="hover:text-[#428777] cursor-pointer">Donate</div>
                  <div className="hover:text-[#428777] cursor-pointer">Resources</div>
                  <div className="hover:text-[#428777] cursor-pointer">Contact</div>
                </div> */}
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
