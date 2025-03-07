import React from 'react'
import { motion } from 'framer-motion'

const Skill = ({ name, x, y }) => {
    return (
        <motion.div 
            whileHover={{ scale: 1.05 }} 
            initial={{ x: 0, y: 0 }}
            whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
            // transition={ duration: 1.5 }
            viewport={{once: true}}
            className='flex items-center justify-center rounded-full font-semibold bg-dark text-light dark:bg-light dark:text-dark px-6 py-3 shadow-dark dark:shadow-light cursor-pointer absolute lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold'
        >
            {name}
        </motion.div>
    );
};

const Skills = () => {
  return (
    <>
      <h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32'>Skills</h2>
      <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
      lg:h-[80vh] sm:lg-[60vh] xs:h-[50vh]
      lg:bg-circularLightLg lg:dark:bg-circularDarkLg
      md:bg-circularLightMd md:dark:bg-circularDarkMd
      sm:bg-circularLightSm sm:dark:bg-circularDarkSm
      '>
        <motion.div whileHover={{scale:1.05}} className='flex items-center justify-center rounded-full font-semibold bg-dark text-light dark:bg-light dark:text-dark p-8 shadow-dark dark:shadow-light cursor-pointer lg:p-6 md:p-6 xs:text-xs xs:p-2'>
            Web
        </motion.div>

        <Skill name="HTML" x="-25vw" y="2vw"  />
        <Skill name="CSS" x="-5vw" y="-10vw"  />
        <Skill name="Javascript" x="20vw" y="6vw"  />
        <Skill name="REACTJS" x="0vw" y="12vw"  />
        <Skill name="NEXTJS" x="-20vw" y="-15vw"  />
        <Skill name="NodeJS" x="15vw" y="-12vw"  />
        <Skill name="ExpressJS" x="15vw" y="-12vw"  />
        <Skill name="Web Design" x="32vw" y="-5vw"  />
        <Skill name="MySQL" x="0vw" y="-20vw"  />
        <Skill name="PostgresSQL" x="0vw" y="-20vw"  />
        <Skill name="MONGODB" x="-25vw" y="18vw"  />
        <Skill name="Tailwind CSS" x="18vw" y="18vw"  />
      </div>
    </>
  )
}

export default Skills

