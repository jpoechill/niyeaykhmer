// import { login, signup } from './actions'
// import Image from 'next/image'

// export default function LoginPage() {
//     return (
//         <main className="{$myFont} h-full font-['Open Sans'] bg-[#fafafa]">
//             <div className='w-full h-full flex justify-center items-center'>
//                 <form>
//                     <div className='border bg-white w-[400px] shadow-md p-5 rounded-xl'>
//                         <div className='w-full flex justify-center p-5 mb-5'>
//                             <a href="/">
//                                 <Image src="/left_title.svg" width={150} height={0} alt="REAN KHMER" />
//                             </a>
//                         </div>
//                         <div className='mb-5'>
//                             <label htmlFor="email" className='text-sm'>Email</label><br />
//                             <input id="email" name="email" type="email" className='border mt-2 rounded-xl p-3 w-full' required />
//                         </div>
//                         <div>
//                             <label htmlFor="password" className='text-sm'>Password</label> <br />
//                             <input id="password" name="password" type="password" className='border mt-2 rounded-xl p-3 w-full' required />
//                         </div>
//                         <div className='mt-5'>
//                             <button className="w-full rounded-2xl bg-[#438777] text-white p-3" formAction={login}>Log in</button>
//                         </div>
//                         <div className='mt-5 text-center'>
//                             Don&apos;t have an account? <button formAction={signup}>Sign up</button>
//                         </div>
//                     </div>
//                 </form>
//             </div>
//         </main>
//     )
// }