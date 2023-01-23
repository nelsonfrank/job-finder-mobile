import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import { getUserAvatar } from "@/utils";

export default function Home() {
  const [avatar, avatarSet] = useState<string>("");

  getUserAvatar("Andri Doe").then((avatar) => avatarSet(avatar));

  return (
    <>
      <Head>
        <title>Job Finder App</title>
        <meta name="description" content="Job finder app mobile" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen w-full bg-gray-100">
        <div className="mx-4">
          <div className="flex items-center justify-between py-10">
            <div className="flex items-center">
              <div className="mr-3 rounded-full bg-avatar p-2">
                {avatar ? (
                  <Image src={avatar} alt="Avatar" width={50} height={50} />
                ) : null}
              </div>
              <div>
                <h1 className="text-lg font-medium">Andri</h1>
                <p className="text-sm text-gray-400">The Best Activity ToDo</p>
              </div>
            </div>
            <div className="rounded-full bg-white p-3">
              <FiSearch className="text-xl" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
