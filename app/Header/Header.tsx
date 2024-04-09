import AccountForm from './account-form'
import { createClient } from '@/utils/supabase/server'
import Image from "next/image";

export default async function getCred() {
    const supabase = createClient()

    const {
        data: { user },
    } = await supabase.auth.getUser()

    return (
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
                                <AccountForm user={user} />
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
        </main >
    )
}

