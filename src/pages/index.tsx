import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { FiBookmark, FiFigma } from "react-icons/fi";
import { TbBrandJavascript } from "react-icons/tb";
import { FaBookmark } from "react-icons/fa";

// components
import Header from "@/components/header";
import Banner from "@/components/banner";

export default function Home() {
  const [bookmarked, bookmarkSet] = useState<boolean>(false);

  console.log(bookmarked);
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
              <button className="cursor-pointer border-none text-sm text-zinc-500">
                View all
              </button>
            </div>
            <div className=" my-4 flex">
              <button className="mr-4 flex items-center rounded-xl border-2 border-zinc-400 bg-button-default py-1.5 px-3 outline-none focus:border-none focus:bg-black focus:text-white">
                <FiFigma className="mr-2" />
                UI/UX Design
              </button>
              <button className="mr-4 flex items-center  rounded-xl border-2 border-zinc-400 bg-button-default py-1.5 px-3 outline-none focus:border-none focus:bg-black focus:text-white">
                <TbBrandJavascript className="mr-2" />
                Developer
              </button>
            </div>

            <div className="my-8">
              <div className="rounded-2xl bg-white py-4 px-4 ">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="mr-2 rounded-lg bg-gray-200 p-3">
                      <Image
                        src="/img/telegram.png"
                        alt="telegram"
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <h4 className="mb-1 font-medium capitalize">Telegram</h4>
                      <h2 className="mb-1 text-lg font-bold capitalize">
                        Junior UI Designer
                      </h2>
                      <p className="text-sm font-light text-zinc-400">
                        Jakarta, Indonesia - Onsite
                      </p>
                    </div>
                  </div>
                  <div className="rounded-md bg-gray-200 p-2 text-2xl">
                    {bookmarked ? (
                      <button
                        className="outline-none"
                        onClick={() => bookmarkSet(!bookmarked)}
                      >
                        <FiBookmark />
                      </button>
                    ) : (
                      <button
                        className="outline-none"
                        onClick={() => bookmarkSet(!bookmarked)}
                      >
                        <FaBookmark />
                      </button>
                    )}
                  </div>
                </div>
                <div className="mb-4 flex items-center">
                  <button className="mr-3 rounded-md bg-gray-200 py-1 px-3 text-sm font-medium capitalize outline-none">
                    Fulltime
                  </button>
                  <button className="mr-3 rounded-md bg-gray-200 py-1 px-3 text-sm font-medium capitalize outline-none">
                    Internship
                  </button>
                  <button className="mr-3 rounded-md bg-gray-200 py-1 px-3 text-sm font-medium capitalize outline-none">
                    Entry Level
                  </button>
                </div>
                <div>
                  <p className="text-justify text-sm text-zinc-400">
                    Lorem, ipsum dolor sit amet consectetur pisicing el elit.
                    tatis tatis maiores voluptates id...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
