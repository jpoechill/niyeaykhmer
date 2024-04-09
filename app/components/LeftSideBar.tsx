export default function LeftSideBar() {

    return (
        <div className="top-[60px] fixed w-[300px] pl-9 pt-5 p-8 h-full text-[#2c3e50] text-[14px] bottom-0 border-r-[1px] ">
            <div className="relative">
                <div className="-left-3 font-semibold mb-1">
                    Basics
                </div>
            </div>
            <div className="pl-4 flex flex-col gap-1">
                <div className="hover:text-[#428777] cursor-pointer"><a href="/basics#vowels">Vowels</a></div>
                <div className="hover:text-[#428777] cursor-pointer"><a href="/basics#consonants">Consonants</a></div>
                <div className="hover:text-[#428777] cursor-pointer"><a href="/basics#special">Special Characters</a></div>
                <div className="hover:text-[#428777] cursor-pointer"><a href="/basics#numerals">Numerals</a></div>
            </div>
            <div className="relative">
                <div className="-left-3 font-semibold mt-2 mb-1">
                    Beginner
                </div>
            </div>
            <div className="pl-4 flex flex-col gap-1">
                <div className="hover:text-[#428777] cursor-pointer"><a href="/beginner/wordsandvocab">Words and Vocabulary</a></div>
                <div className="hover:text-[#428777] cursor-pointer"><a href="/beginner/conversation">Conversational Phrases</a></div>
            </div>
            <div className="relative">
                <div className="-left-3 font-semibold mt-2 mb-1">
                    Intermediate
                </div>
            </div>
            <div className="pl-4 flex flex-col gap-1">
                <div className="hover:text-[#428777] cursor-pointer"><a href="/intermediate/wordsandvocab">Words and Vocabulary</a></div>
                <div className="hover:text-[#428777] cursor-pointer"><a href="/intermediate/conversation">Conversational Phrases</a></div>
            </div>
            <div className="relative">
                <div className="-left-3 font-semibold mt-2 mb-1">
                    Advance
                </div>
            </div>
            <div className="pl-4 flex flex-col gap-1">
                <div className="hover:text-[#428777] cursor-pointer"><a href="/advance/wordsandvocab">Words and Vocabulary</a></div>
                <div className="hover:text-[#428777] cursor-pointer"><a href="/advance/conversation">Conversational Phrases</a></div>
            </div>
            <div className="font-semibold text-[14px] mt-4">
                Etc.
            </div>
            <div className="pl-4 flex flex-col gap-1">
                <div className="hover:text-[#428777] cursor-pointer"><a href="/beginner#special">About</a></div>
                <div className="hover:text-[#428777] cursor-pointer"><a href="/beginner#special">Membership</a></div>
                <div className="hover:text-[#428777] cursor-pointer"><a href="/beginner#special">Resources</a></div>
                <div className="hover:text-[#428777] cursor-pointer"><a href="/beginner#special">Contact</a></div>
            </div>
        </div>
    );
}
