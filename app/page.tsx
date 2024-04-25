

import { createClient } from '@/utils/supabase/server'
import GetCreds from "@/app/getcreds/getCreds"
import LeftSideBar from "@/app/components/LeftSideBar";
import { redirect } from 'next/navigation'

export default async function App() {
  // const supabase = createClient()

  // const {
  //   data: { user },
  // } = await supabase.auth.getUser()

  // async function logout() {
  //   if (user) {
  //     await supabase.auth.signOut()
  //   }
  // }

  redirect(`/basics`)

  return (
    <div></div>
    // <main className="h-full scroll-smooth">
    //   <div className="group/all flex bg-white h-full justify-between w-full lg:w-[calc(100%-300px)]">
    //     <GetCreds />
    //     <LeftSideBar></LeftSideBar>
    //     <div className="w-full pl-[300px] flex dark:bg-[#222]  h-full">
    //       <div className="mt-[60px] w-full p-4">
    //       </div>
    //     </div>
    //   </div >
    // </main >
  );
}
