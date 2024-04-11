import Link from 'next/link'

export default function LeftSideBar() {

    return (
        <div className="top-[60px] fixed w-[300px] pl-9 pt-5 p-8 h-full text-[#2c3e50] text-[14px] bottom-0 border-r-[1px] ">
            <div>
                <input type="text" className="border w-full rounded p-2 mt-0 mb-4" placeholder="Search" />
            </div>
            <div className="relative">
                <div className="-left-3 font-semibold mb-1">
                    <Link href="/basics">Basics</Link>
                </div>
            </div>
            <div>
                <div className="border-l-2 ml-2 pl-3 flex flex-col gap-1">
                    <div className="hover:text-[#428777] cursor-pointer"><Link href="/basics">Intro</Link> </div>
                    <div className="hover:text-[#428777] cursor-pointer"><Link href="/basics#vowels">Vowels</Link> </div>
                    <div className="hover:text-[#428777] cursor-pointer"><Link href="/basics#consonants">Consonants</Link> </div>
                    <div className="hover:text-[#428777] cursor-pointer"><Link href="/basics#special">Special Characters</Link> </div>
                    <div className="hover:text-[#428777] cursor-pointer"><Link href="/basics#numerals">Numerals</Link> </div>
                </div>
            </div>
            <div className="relative">
                <div className="-left-3 font-semibold mt-3 mb-1">
                    Beginner
                </div>
            </div>
            <div className="border-l-2 ml-2 pl-3 flex flex-col gap-1">
                <div className="hover:text-[#428777] cursor-pointer"><Link href="/beginner/wordsandvocab">Words and Vocabulary</Link> </div>
                <div className="hover:text-[#428777] cursor-pointer"><Link href="/beginner/conversation">Conversational Phrases</Link> </div>
            </div>
            <div className="relative">
                <div className="-left-3 font-semibold mt-3 mb-1">
                    Intermediate
                </div>
            </div>
            <div className="border-l-2 ml-2 pl-3 flex flex-col gap-1">
                <div className="hover:text-[#428777] cursor-pointer"><Link href="/intermediate/wordsandvocab">Words and Vocabulary</Link> </div>
                <div className="hover:text-[#428777] cursor-pointer"><Link href="/intermediate/conversation">Conversational Phrases</Link> </div>
            </div>
            <div className="relative">
                <div className="-left-3 font-semibold mt-3 mb-1">
                    Advance
                </div>
            </div>
            <div className="border-l-2 ml-2 pl-3 flex flex-col gap-1">
                <div className="hover:text-[#428777] cursor-pointer"><Link href="/advance/wordsandvocab">Words and Vocabulary</Link> </div>
                <div className="hover:text-[#428777] cursor-pointer"><Link href="/advance/conversation">Conversational Phrases</Link> </div>
            </div>
            <div className="font-semibold text-[14px] mt-3 mb-1">
                Etc.
            </div>
            <div className="border-l-2 ml-2 pl-3 flex flex-col gap-1">
                <div className="hover:text-[#428777] cursor-pointer"><Link href="/etc#special">About</Link> </div>
                <div className="hover:text-[#428777] cursor-pointer"><Link href="/etc#special">Donate</Link> </div>
                <div className="hover:text-[#428777] cursor-pointer"><Link href="/etc#special">Resources</Link> </div>
                <div className="hover:text-[#428777] cursor-pointer"><Link href="/etc#special">Contact</Link> </div>
            </div>
        </div>
    );
}
