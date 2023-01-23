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
      <main className="min-h-screen w-full bg-gray-100">
        <div className="py-10">
          <h1 className="mx-4 inline-flex items-center rounded-md bg-white py-4 px-4 text-2xl capitalize">
            Job finder app
          </h1>
        </div>
      </main>
    </>
  );
}
