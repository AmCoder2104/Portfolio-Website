import React, { useEffect, useRef } from 'react'
import Head from 'next/head'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Image from 'next/image'
import Skills from '@/components/Skill'
import profilePic from "../../public/Ameen.jpg"
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'

 const AnimatedNumbers = ({value}) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue , {duration: 3000});
    const isInView = useInView(ref , {once: true});

    useEffect(()=> {
      if(isInView) {
    motionValue.set(value);
}
    }, [isInView, value, motionValue])



    useEffect(()=> {
     springValue.on("change", (latest) =>{
        if (ref.current && latest.toFixed(0) <= value) {
            ref.current.textContent = latest.toFixed(0);
        }
     } )
    }, [springValue , value])


    return <span ref={ref}></span>
 }
const about = () => {
  return (
    <>
    <Head>
        <title>Muhammad Ameen Nazir | About </title>
        <meta name='description' content='About page' />
    </Head>
    <TransitionEffect/>
    <main className='flex w-full flex-col items-center justify-center dark:text-light'>
        <Layout>
        <AnimatedText text="Passion Fuels Purpose!" classname='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' />
        <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
            <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
            <h2 className=' mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75 '>Biography</h2>
            <p className='font-medium'>
  Hi, I&apos;m Muhammad Ameen Nazir, a web developer with a passion for creating beautiful, functional, and user-centered digital experiences. With 1 years of experience in the field. I am always looking for new and innovative ways to bring my clients&apos; visions to life.
</p>
<p className='font-medium my-4'>
  With one year of experience as a full stack web developer, Muhammad Ameen has tackled and solved many challenging targets. His proficiency in both front-end and back-end technologies has enabled him to overcome complex problems and deliver high-quality solutions.
</p>
<p className='font-medium'>
  Full stack web developer skilled in both front-end and back-end technologies. He excels in creating responsive interfaces using React and Next.js, integrating APIs, and ensuring optimal performance. On the back end, he is proficient in Node.js, Express.js, and database management, designing robust server architectures and secure data transactions.
</p>

            </div>
            <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light dark:border-light dark:bg-dark  p-8 xl:col-span-4 md:order-1 md:col-span-8 '>
                <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'/>
                <Image src={profilePic} alt='Mudassar' className='w-full h-auto rounded-2xl'
                priority
               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
            <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
                <div className='flex flex-col items-end justify-center xl:items-center'>
                    <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                       <AnimatedNumbers value={15}/>+
                    </span>
                    <h2 className='text-dark/75 dark:text-light/75 text-xl font-medium capitalize xl:text-center md:text-lg sm:text-base xs:text-sm'>
                        satisfied clients
                    </h2>
                    </div>
                <div className='flex flex-col items-end justify-center xl:items-center'>
                    <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                    <AnimatedNumbers value={20}/>+</span>
                    <h2 className='text-dark/75 dark:text-light/75 text-xl font-medium capitalize xl:text-center md:text-lg sm:text-base xs:text-sm'>projects complete</h2></div>
                <div className='flex flex-col items-end justify-center xl:items-center'>
                    <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                    <AnimatedNumbers value={1}/>+</span>
                    <h2 className='text-dark/75 dark:text-light/75 text-xl font-medium capitalize xl:text-center md:text-lg sm:text-base xs:text-sm'>years of exeperience</h2>
                    </div>
            </div>

        </div>
        <Skills/>
        </Layout>
    </main>
      
    </>
  )
}

export default about
