'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import path from 'path'

export default function LeftSideBar() {
    const pathname = usePathname().split('/')

    return (
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
    );
}
