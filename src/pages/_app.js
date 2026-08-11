import "@/styles/globals.css";
import Head from "next/head";
import { Montserrat } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/context/ThemeContext";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Head>
        <title>Sravani Radhakrishnan | Senior UI/UX Developer & Designer</title>
        <meta name="description" content="Portfolio of Sravani - UI Developer & Designer crafting exceptional web apps with Next.js, React, Tailwind, & Framer Motion." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${montserrat.variable} font-mont min-h-screen flex flex-col justify-between bg-grid-pattern relative overflow-x-hidden`}>
        {/* Ambient background glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-purple/15 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-accent-cyan/15 rounded-full blur-3xl pointer-events-none -z-10" />
        
        <div>
          <NavBar />
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

