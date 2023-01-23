import Head from 'next/head'
import Image from 'next/image'
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Job Finder App</title>
        <meta name="description" content="Job finder app mobile" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full min-h-screen bg-gray-300">
        <h1 className="text-2xl capitalize">Job finder app</h1>
      </main>
    </>
  );
}
