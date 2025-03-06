import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import TransitionEffect from '@/components/TransitionEffect';

const Contact = () => {
  const [state, handleSubmit] = useForm("meojklda"); // Replace with your Formspree project ID

  if (state.succeeded) {
    return (
      <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
          <AnimatedText classname='mb-16' text="Let's Contact Me!" />
          <p className='text-lg'>Thank you for your message!</p>
        </Layout>
      </main>
    );
  }

  return (
    <>
      <Head>
        <title>Muhammad Ameen Nazir | Contact </title>
        <meta name='description' content='Contact page' />
      </Head>
      <TransitionEffect/>
      <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
          <AnimatedText classname='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' text="Let's Contact Me!" />

          <div className='w-full max-w-3xl px-4 mx-auto'>
            <form onSubmit={handleSubmit}>
              <div className='flex flex-col gap-6'>
                <div className='flex  md:flex-row gap-6'>
                <input
                  type="text"
                  name='name'
                  placeholder='Name'
                  required
                  autoComplete='off'
                  className='sm:w-full w-1/2  bg-gray-50 border-2 border-dark/25 dark:bg-gray-800 dark:border-primaryDark p-2 md:p-4 rounded-lg dark:text-light focus:outline-none focus:ring-2 focus:ring-dark dark:focus:ring-primaryDark focus:transition-shadow duration-300'
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
                <input
                  type="email"
                  name='email'
                  required
                  placeholder='Email'
                  className='sm:w-full w-1/2 bg-gray-50 border-2 border-dark/25 dark:bg-gray-800 dark:border-primaryDark p-2 md:p-4 rounded-lg dark:text-light focus:outline-none focus:ring-2 focus:ring-dark dark:focus:ring-primaryDark transition-shadow duration-300'
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
                <input
                  type="text"
                  name='subject'
                  required
                  placeholder='Subject'
                  autoComplete='off'
                  className='w-full  bg-gray-50 border-2 border-dark/25 dark:bg-gray-800 dark:border-primaryDark p-2 md:p-4 rounded-lg dark:text-light focus:outline-none focus:ring-2 focus:ring-dark dark:focus:ring-primaryDark transition-shadow duration-300'
                />
                <textarea
                  rows="10"
                  name='message'
                  required
                  placeholder='Message'
                  autoComplete='off'
                  minLength={5}
                  className='w-full bg-gray-50 border-2 border-dark/25 dark:bg-gray-800 dark:border-primaryDark p-4 rounded-lg dark:text-light focus:outline-none focus:ring-2 focus:ring-dark dark:focus:ring-primaryDark transition-shadow duration-300'
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>
              <button
                type='submit'
                className='border border-dark bg-dark dark:bg-primaryDark dark:border-primaryDark shadow-lg shadow-dark/50 dark:hover:shadow-primaryDark rounded-lg mt-6 w-full p-2 text-light text-2xl font-bold flex items-center justify-center transform transition-transform duration-300 ease-in-out active:scale-95'
                disabled={state.submitting}
              >
                {state.submitting ? (
                  <svg className="w-6 h-6 animate-spin text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle className="opacity-10" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path d="M4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0" stroke="currentColor" strokeWidth="4"></path>
                  </svg>
                ) : (
                  'Submit'
                )}
              </button>
            </form>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Contact;
