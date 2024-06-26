'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import path from 'path'

export default function LeftSideBar() {

    let [mouseMoving, setMouseMoving] = useState(true)

    let timer: ReturnType<typeof setTimeout>

    const trackMouseMove = () => {
        setMouseMoving(true)

        clearTimeout(timer)

        timer = setTimeout(
            () => {
                console.log('The mouse has stopped')
                setMouseMoving(false)
            }, 2500)
    }


    useEffect(() => {

        // window.addEventListener('mousemove', trackMouseMove)

        // Clean up the event listener when the component unmounts.
        return () => {
            window.removeEventListener('mousemove', trackMouseMove)
        };
    }, []);

    const pathname = usePathname().split('/')

    return (
        <div className={(mouseMoving ? "group-hover/all:opacity-100" : "") + " dark:bg-[#222] border-r-[1px] dark:text-white opacity-100 transition-opacity ease-in-out top-[60px] fixed w-[310px] pl-9 pt-3 p-8 h-full text-[#2c3e50] text-[14px] bottom-0"}>

            {/* <div className='mt-3'>

                {
                    (pathname[1] === '' ? <Image src="/mother.jpg" width={400} height={300} alt="REAN KHMER" className="inline w-full mr-3 pb-1" /> : '')
                }
                {
                    (pathname[1] === 'basics' ? <Image src="/avatars/basics_avatar.jpg" width={400} height={300} alt="REAN KHMER" className="inline w-full mr-3 pb-1" /> : '')
                }
                {
                    (pathname[1] === 'beginner' ? <Image src="/mother.jpg" width={400} height={300} alt="REAN KHMER" className="inline w-full mr-3 pb-1" /> : '')
                }
                {
                    (pathname[1] === 'intermediate' ? <Image src="/mother.jpg" width={400} height={300} alt="REAN KHMER" className="inline w-full mr-3 pb-1" /> : '')
                }
                {
                    (pathname[1] === 'advance' ? <Image src="/mother.jpg" width={400} height={300} alt="REAN KHMER" className="inline w-full mr-3 pb-1" /> : '')
                }
            </div> */}

            <div className="font-semibold text-[14px] mt-3 mb-1">
                Trainer
            </div>
            <div className="border-l-2 ml-2 pl-3 flex flex-col gap-1">
                <Link href="/basics">
                    <div className="hover:text-[#428777] cursor-pointer">
                        Basics
                    </div>
                </Link>
                <Link href="/beginner">
                    <div className="hover:text-[#428777] cursor-pointer">
                        Beginner
                    </div>
                </Link>
                <Link href="/intermediate">
                    <div className="hover:text-[#428777] cursor-pointer">
                        Intermediate
                    </div>
                </Link>
                <Link href="/advance">
                    <div className="hover:text-[#428777] cursor-pointer">
                        Advance
                    </div>
                </Link>
            </div>
            <div>
                <div className="relative">
                    <div className="-left-3 font-semibold mt-1 mb-1">
                        Info
                    </div>
                </div>
                <div className="border-l-2 ml-2 pl-3 flex flex-col gap-1">
                    <Link href="/etc#special">
                        <div className="hover:text-[#428777] cursor-pointer">
                            About
                        </div>
                    </Link>
                    <Link href="/etc#special">
                        <div className="hover:text-[#428777] cursor-pointer">
                            Support
                        </div>
                    </Link>
                    <Link href="/etc#special">
                        <div className="hover:text-[#428777] cursor-pointer">
                            Resources
                        </div>
                    </Link>
                    <Link href="/etc#special">
                        <div className="hover:text-[#428777] cursor-pointer">
                            Contact
                        </div>
                    </Link>
                </div>
            </div>

            {/* <div>
                <Image src="/avatars/bear.png" width={400} height={300} alt="REAN KHMER" className="inline w-full mr-3 pb-1" />
            </div> */}

            {/* <div className="relative">
                <div className="-left-3 mt-3 font-semibold mb-1">
                    <Link href="/basics">Basics</Link>
                </div>
            </div>
            <div>
                <div className="border-l-2 ml-2 pl-3 flex flex-col gap-1">

                    <div className="hover:text-[#428777] cursor-pointer"><Link href="/basics">Vowels</Link> </div>
                    <div className="hover:text-[#428777] cursor-pointer"><Link href="/basics#consonants">Consonants</Link> </div>
                    <div className="hover:text-[#428777] cursor-pointer"><Link href="/basics#special">Special Characters</Link> </div>
                    <div className="hover:text-[#428777] cursor-pointer"><Link href="/basics#numerals">Numerals</Link> </div>
                </div>
            </div> */}

        </div>
    );
}
