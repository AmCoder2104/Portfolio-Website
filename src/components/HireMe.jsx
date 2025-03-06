import React from 'react';
// import CircularText from "../../public/images/svgs/CircularText.svg"
import { CircularText } from './icon';
import Link from 'next/link';


const HireMe = () => {
  return (
    <div className={'fixed left-4 bottom-4 flex items-center justify-center overflow-hidden md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute sm:right-0'}>
      <div className={'w-48 h-auto  flex items-center justify-center relative md:w-24'}>
        <CircularText className={"fill-dark animate-spin-slow  dark:fill-light"} />
        <Link href={"/contact"} className=' flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light dark:bg-light dark:text-dark shadow-md border border-solid border-dark dark:border-light dark: w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark dark:hover:bg-dark dark:hover:text-light md:w-10 md:h-10 md:text-[8px] '>
        Hire Me</Link>
      </div>
    </div>
  );
};

export default HireMe;
