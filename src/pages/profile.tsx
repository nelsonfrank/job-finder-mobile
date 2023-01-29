import { useState } from "react";
import Head from "next/head";
import Image from "next/image";

// components
import { HeaderWithNavigation } from "@/components/header/Header";
import Navigator from "@/components/navigator";
import Card from "@/components/card";

// utils
import { getUserAvatar } from "@/utils";

//type
import { JobPost } from "@/components/card/Card";
import { FiChevronRight } from "react-icons/fi";
const experience: JobPost[] = [
  {
    company: "Behance",
    companyLogo: "/img/behance.png",
    location: "Surabaya Indonesia",
    position: "Senior UI Designer",
    type: "onsite",
    excerpt: "",
    Icon: <FiChevronRight />,
  },
  {
    company: "Telegram",
    companyLogo: "/img/telegram.png",
    location: "Jakarta Indonesia",
    position: "Junior UI Designer",
    type: "onsite",
    excerpt: "",
    Icon: <FiChevronRight />,
  },
];
const Profile = () => {
  const [avatar, avatarSet] = useState<string>("");

  getUserAvatar("Andri Doe").then((avatar) => avatarSet(avatar));
  return (
    <>
      <Head>
        <title>Profile</title>
        <meta name="description" content="Job finder app mobile" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen w-full bg-gray-100 px-6 pt-10 pb-16">
        <HeaderWithNavigation title="Profile" />

        <div className="relative my-6">
          <div>
            <img
              src="/img/plain-background.webp"
              alt="default cover background"
              className="max-h-40 w-full rounded-lg md:max-h-64 lg:max-h-96"
            />
          </div>
          <div className="my-1">
            <div className="absolute left-5 -bottom-11 inline-flex rounded-full bg-white p-3">
              <div className=" h-16 w-16 rounded-full bg-avatar p-2">
                {avatar ? (
                  <Image src={avatar} alt="Avatar" width={60} height={60} />
                ) : null}
              </div>
            </div>
            <div className="absolute left-28">
              <h1 className="text-lg font-medium">Andri</h1>
              <p className="text-xs capitalize text-gray-400">Fresh Graduate</p>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <div>
            <h3 className="font-medium text-zinc-500">Biography</h3>
          </div>
          <div className="my-4">
            <p className="text-sm text-zinc-400">
              Hello, my name is Andri and I am a digital artist based in Mumbai.
              After graduating with a bachelors degree in graphic design. I
              began my freelancing career by creating pop culture digital art. I
              have been creating commissions for two years and have designed art
              for popular businesses such as Spiced and The Paper Pepper Club.
            </p>
          </div>
          <div className="my-6 flex items-center justify-between">
            <div className="rounded-lg bg-white py-4 px-6 text-center">
              <p className="my-2 text-xs capitalize text-zinc-500 ">
                Post View
              </p>
              <h2 className="mb-1 text-sm font-semibold">254</h2>
            </div>
            <div className="rounded-lg bg-white py-4 px-6 text-center">
              <p className="my-2 text-xs capitalize text-zinc-500 ">
                Applied Job
              </p>
              <h2 className="mb-1 text-sm font-semibold">35</h2>
            </div>
            <div className="rounded-lg bg-white py-4 px-6 text-center">
              <p className="my-2 text-xs capitalize text-zinc-500 ">
                Search Result
              </p>
              <h2 className="mb-1 text-sm font-semibold">15</h2>
            </div>
          </div>
          <div className="my-4">
            <h3 className="font-medium text-zinc-500">Experience</h3>
          </div>

          <div className="my-4">
            {experience.map((experience, index) => (
              <Card {...experience} key={index + 1} />
            ))}
          </div>
        </div>
      </main>
      <div>
        <Navigator />
      </div>
    </>
  );
};

export default Profile;
