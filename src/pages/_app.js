import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import '@/styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import { Montserrat } from 'next/font/google';
import Head from 'next/head';
// import Script from 'next/script';
import { useRouter } from 'next/router';
import WhatsAppButton from '@/components/Whatsapp';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont',
});

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon1.png" />
      </Head>

      {/* Load Botpress Webchat script asynchronously
      <Script
        src="https://cdn.botpress.cloud/webchat/v2.2/inject.js"
        strategy="lazyOnload" // Load this script lazily
      />
      <Script
        src="https://files.bpcontent.cloud/2024/10/11/13/20241011130705-ZSWSDT0A.js"
        strategy="lazyOnload" // Load this script lazily as well
      /> */}

      <main className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}>
      <div  className="fixed z-10 right-4  md:right-5 bottom-12">
        <WhatsAppButton className=" "/>
        </div>
        <Navbar />
        <AnimatePresence mode="wait">
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
        <Footer />
      </main>
    </>
  );
}
