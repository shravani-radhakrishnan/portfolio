import Image from "next/image";
import Head from 'next/head';
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';
import profilePic from "../../public/images/p.png";

export default function Home() {
  return (
   <>
    <Head>
      <title>Home</title>
      <meta name="description" content="Generated by create next app" />
    </Head>
    <main className="flex items-center w-full min-h-screen">
      <Layout>
        <div className="flex items-center jusify-between w-full">
            <div className="w-1/4 flex flex-col item-center self-center">
              <AnimatedText text="Hello" className="text-6xl text-left"/>
              <p>- It's is MSravani design world</p>
            </div>
            <div className="w-3/4">
              <Image src={profilePic} alt="sravani" className="w-full h-auto"/>
            </div>
        </div>
      
      </Layout>
    </main>
   </>
  );
}
