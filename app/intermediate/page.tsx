import Image from "next/image";
import { createClient } from '@/utils/supabase/server'
import GetCreds from "../getcreds/getCreds"
import LeftSideBar from "../components/LeftSideBar";
import allData from './data.json'
import Body from "./Body"
import Link from "next/link"

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

  let sections = allData

  return (
    <main className="h-full scroll-smooth">
      <div className="flex justify-between h-screen w-full lg:w-[calc(100%-300px)]">
        <GetCreds />
        <LeftSideBar></LeftSideBar>
        <Body />

        <div className={"resize opacity-100 bg-white border-l-[1px] dark:bg-[#222] dark:text-white transition-opacity ease-in-out text-left top-[60px] fixed w-[310px] lg:block right-0 z-1 pl-9 pt-5 p-8 h-full text-[#2c3e50] text-[14px] bottom-0"}>
          <div>
            <div className="relative">
              <div className="-left-3 font-semibold mt-1 mb-1">
                Basics
              </div>
            </div>
            <div className="border-l-2 ml-2 pl-3 flex flex-col gap-1">
              {sections.map((section, index) => {
                return <div key={index} className="hover:text-[#428777] cursor-pointer">
                  <Link href="/etc#special">
                    {section.title}
                  </Link>
                </div>
              })}
            </div>
          </div>
        </div>
      </div >
    </main >
  );
}
