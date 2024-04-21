import Image from "next/image";
import { createClient } from '@/utils/supabase/server'
import GetCreds from "../getcreds/getCreds"
import LeftSideBar from "../components/LeftSideBar";

import Body from "./Body"
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
        <Body />
      </div >
    </main >
  );
}
