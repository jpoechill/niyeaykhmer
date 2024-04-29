import Image from "next/image";
import { createClient } from '@/utils/supabase/server'
import GetCreds from "@/app/getcreds/getCreds"
import LeftSideBar from "@/app/components/LeftSideBar";
import RightSideBar from "@/app/components/RightSideBar"
import Link from "next/link";

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


        <div className="w-full ml-[310px] mt-[60px]  relative flex-col dark:bg-[#222] px-0 h-[calc(100%-60px)] ">

          <div className='w-[calc(100%-620px)] fixed flex flex-col pt-[60px] top-0 justify-end bg-[white] h-min z-[1]'>
            <div className="w-full py-4 flex items-center justify-between border-b-[1px] px-10">
              <div className="text-[1.25rem] font-semibold">
                About
              </div>
            </div>
          </div>

          <div className={'w-full pt-[16px]'}>
            <div className='p-0 mt-[10px] w-full z-0'>
              <div>
                <div id="vowels" className="px-10 text-left text-[1.25rem] pb-[.3rem] pt-0 font-semibold border-[#eaecef]">
                  &nbsp;
                </div>
                <div className="mt-5 px-10 grid grid-cols-1 w-full text-left mb-10">
                  A Khmer language trainer and quick reference site. 👋👋 <br /><br />
                  Designed and built by @jpoechill.
                </div>
              </div>
            </div>
          </div>


          <div className={'w-full'}>
            <div className='p-0 w-full z-0'>
              <div>
                <div id="vowels" className="border-b-[1px] px-10 text-left text-[1.25rem] pb-[.3rem] pt-0 font-semibold border-[#eaecef]">
                  Support
                </div>
                <div className="mt-5 px-10 grid grid-cols-1 w-full text-left mb-10">
                  Let us know that we should keep working on this!
                </div>
              </div>
            </div>
          </div>


          <div className={'w-full'}>
            <div className='p-0 w-full z-0'>
              <div>
                <div id="vowels" className="border-b-[1px] px-10 text-left text-[1.25rem] pb-[.3rem] pt-0 font-semibold border-[#eaecef]">
                  Resources
                </div>
                <div className="mt-5 px-10 grid grid-cols-1 w-full text-left mb-10">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto beatae labore pariatur sint.
                </div>
              </div>
            </div>
          </div>


          <div className={'w-full'}>
            <div className='p-0 w-full z-0'>
              <div>
                <div id="vowels" className="border-b-[1px] px-10 text-left text-[1.25rem] pb-[.3rem] pt-0 font-semibold border-[#eaecef]">
                  Contact
                </div>
                <div className="mt-5 px-10 grid grid-cols-1 w-full text-left mb-10">
                  Have questions, suggestions, or feedback? We&apos;d love to hear from you!
                </div>
              </div>
            </div>
          </div>




        </div>

        <div className={"opacity-100 bg-white border-l-[1px] dark:bg-[#222] dark:text-white transition-opacity ease-in-out text-left top-[60px] fixed w-[310px] lg:block right-0 z-1 pl-9 pt-5 p-8 h-full text-[#2c3e50] text-[14px] bottom-0"}>
          <div>
            <div className="relative">
              <div className="-left-3 font-semibold mt-1 mb-1">
                Info
              </div>
            </div>
            <div className="border-l-2 ml-2 pl-3 flex flex-col gap-1">
              <div className="hover:text-[#428777] cursor-pointer">
                <Link href="/etc#special">
                  About
                </Link>
              </div>
              <div className="hover:text-[#428777] cursor-pointer">
                <Link href="/etc#special">
                  Support
                </Link>
              </div>
              <div className="hover:text-[#428777] cursor-pointer">
                <Link href="/etc#special">
                  Resources
                </Link>
              </div>
              <div className="hover:text-[#428777] cursor-pointer">
                <Link href="/etc#special">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div >
    </main >
  );
}


