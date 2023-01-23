import Head from "next/head";

// components
import Header from "@/components/header";
import Banner from "@/components/banner";


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
        <div className="mx-6">
          <Header />
          <Banner />
          <div className="my-8">
            <div className="flex items-center justify-between">
              <h3 className="font-medium ">Added Categories</h3>
              <button className="cursor-pointer border-none text-xs text-zinc-500">
                View all
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
