// "use client"
import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { useTypewriter } from "react-simple-typewriter"
import { buttonVariants } from "./ui/button"
import { ArrowRight } from "lucide-react"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"

const Navbar = async () => {
    const { getUser } = getKindeServerSession()
    const user = await getUser()
    const isAdmin = user?.email === process.env.NEXT_PUBLIC_ADMIN_EMAIL
    // const [text] = useTypewriter({
    //     words: [
    //         ` ( ͡° ل͜ ͡°)`
    //     ],
    //     loop: true,
    //     delaySpeed: 4000,
    // });
    

    return (
    <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
        <MaxWidthWrapper>
            <div className="flex h-14 items-center justify-between border-b border-zinc-200">
                <Link href='/' className='flex z-40 font-semibold'>
                QuickCases  <span className="text-green-600">RgdshuiaR</span> 
                </Link>
                <div className="h-full flex items-center space-x-4">
                {user ? (
                    <>
                        <Link 
                            href='/api/auth/logout' 
                            className={buttonVariants({
                                size: `sm`, 
                                variant: 'ghost',
                        })}>
                            Sign❌out
                        </Link>
                        {isAdmin ? <Link 
                            href='/api/auth/logout' 
                            className={buttonVariants({
                                size: `sm`, 
                                variant: 'ghost',
                        })}>
                            Dash🥱board
                        </Link> : null}
                        <Link 
                            href='/configure/upload' 
                            className={buttonVariants({
                                size: `sm`, 
                                className: 'hidden sm:flex items-center gap-1',
                        })}>
                            Create⛏️Case
                            <ArrowRight className="ml-1.5 h-5 w-5" />
                        </Link>
                    </>
                ) : (
                    <>
                        <Link 
                            href='/api/auth/login' 
                            className={buttonVariants({
                                size: `sm`, 
                                variant: 'ghost',
                                className: 'border-b-4 rounded-b-2xl'
                        })}>
                            Login
                            {/* <ArrowRight className="ml-1.5 h-5 w-5" /> */}
                        </Link>
                        <div className="h-8 w-px bg-zinc-200" />
                        <Link 
                            href='/api/auth/register' 
                            className={buttonVariants({
                                size: `sm`, 
                                variant: 'ghost',
                                className: 'border-b-4 rounded-b-2xl'
                        })}>
                            Sign Up☝️
                        </Link>
                        <div className="h-8 w-px bg-zinc-300 hidden sm:block" />
                        <Link 
                            href='/configure/upload' 
                            className={buttonVariants({
                                size: `sm`,
                                variant: 'ghost', 
                                className: 'hidden sm:flex items-center gap-1 text-white bg-[#1d6042] rounded-l-xl ',
                        })}>
                            Create⛏️Case
                        </Link>
                    </>
                    )}
                </div>
            </div>
        </MaxWidthWrapper>
    </nav>
    )
}
export default Navbar  