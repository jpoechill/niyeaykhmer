import { login, signup } from './actions'
import Image from 'next/image'

export default function LoginPage() {
    return (
        <main className="{$myFont} h-full font-['Open Sans'] bg-[#fafafa]">
            {/* <div className="fixed bg-white w-full uppercase text-[#428777] z-10 px-5 md:px-8 border-b-[1px] top-0 flex flex-row items-center justify-between h-[60px]">
                <div>
                </div>
                <div className="hidden md:flex text-[#428777] flex-row text-[16px] items-center gap-10">
                    <div>
                    </div>
                </div>
            </div> */}
            <div className='w-full h-full flex justify-center items-center'>
                {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quas voluptatibus. Repudiandae minus autem facere, reiciendis dicta quo odio expedita provident quas quis sunt ab incidunt quaerat iste nisi molestias voluptatem atque! Reiciendis, dolorum. Itaque deleniti blanditiis commodi, tempore obcaecati suscipit libero assumenda sapiente eaque voluptates aut corrupti aliquid laborum! Nemo adipisci vero doloremque repudiandae sed tempore dolorum asperiores. Nostrum eos rerum debitis delectus labore eligendi omnis accusantium quos expedita voluptatum, maiores, libero praesentium voluptatem, laborum pariatur. Tempora delectus, ut quam quae incidunt maxime molestiae nisi suscipit ullam praesentium nulla, dolorem reiciendis rerum reprehenderit harum temporibus. Placeat perferendis dolores ullam? */}
                <form>
                    <div className='border bg-white w-[400px] shadow-md p-5 rounded-xl'>
                        <div className='w-full flex justify-center p-5 mb-5'>
                            <a href="/">
                                <Image src="/left_title.svg" width={150} height={0} alt="REAN KHMER" />
                            </a>
                        </div>
                        <div className='mb-5'>
                            <label htmlFor="email" className='text-sm'>Email</label><br />
                            <input id="email" name="email" type="email" className='border mt-2 rounded-xl p-3 w-full' required />
                        </div>
                        <div>
                            <label htmlFor="password" className='text-sm'>Password</label> <br />
                            <input id="password" name="password" type="password" className='border mt-2 rounded-xl p-3 w-full' required />
                        </div>
                        <div className='mt-5'>
                            <button className="w-full rounded-2xl bg-[#438777] text-white p-3" formAction={login}>Log in</button>
                        </div>
                        <div className='mt-5 text-center'>
                            Don&apos;t have an account? <button formAction={signup}>Sign up</button>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    )
}