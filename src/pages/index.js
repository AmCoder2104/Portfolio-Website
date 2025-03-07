import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Layout from '@/components/Layout'
import DeveloperPic from '../../public/mi.png';
import AnimatedText from '@/components/AnimatedText'
import { LinkArrow } from '@/components/icon'
import HireMe from '@/components/HireMe'
import Lightbulb from "../../public/images/svgs/miscellaneous_icons_1.svg"
import TransitionEffect from '@/components/TransitionEffect'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Muhammad Ameen Nazir | Home</title>
        <meta name="description" content="Generated by  Mudassar Ali" />
      </Head>
      <TransitionEffect/>
      <main className='flex items-center text-dark dark:text-light w-full min-h-screen' >
        
        <Layout className='pt-0 md:pt-16 sm:pt-8'>
          <div className='flex items-center justify-between w-full lg:flex-col'>
            <div className='w-1/2 md:w-full'>
              <Image src={DeveloperPic} alt="MudassarAli" className=' w-hull h-auto lg:hidden md:inline-block drop-shadow-lg md:w-full' 
              priority
               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
              {/*  <h1>Turning Vision Into Reality With Code </h1> */}
              <AnimatedText text="Turning Vision Into Reality With Code" classname='!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl'/>
                <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>As a Full Stack Web Developer, I excel in both front-end and back-end development, creating seamless, user-friendly web applications. I’m skilled in modern frameworks like React and Next.js, as well as server-side technologies such as Node.js .</p>
            <div className=' flex items-center self-start mt- lg:self-center'>
              <Link className='flex items-center bg-dark text-light dark:bg-light dark:text-dark p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark dark:hover:bg-dark dark:hover:text-light border-2 border-solid border-transparent hover:border-dark dark:hover:border-light md:p-2 md:px-2 md:text-base  ' href="/Ameen_Resume.pdf" target={"_blank"} download={true} >CV <LinkArrow className="w-4 sm:w-5 md:w-6 lg:w-7 xl:w-8 ml-0.5 sm:ml-1 md:ml-1.5 lg:ml-2 xl:ml-2.5" />
              </Link>
              <Link href="/contact"  className='ml-4 text-lg font-medium text-dark dark:text-light underline  md:text-base' >Contact</Link>
            </div>
            </div>
          </div>
        </Layout>
        
        <HireMe/>
        <div className='absolute right-8 bottom-0 inline-block w-24 md:hidden'>
          <Lightbulb   className=' w-full h-auto'/>
        </div>
      </main>
    </>
  )
}
