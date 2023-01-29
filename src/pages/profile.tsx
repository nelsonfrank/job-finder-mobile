import { useState } from "react";
import Head from "next/head";
import Image from "next/image";

// components
import { HeaderWithNavigation } from "@/components/header/Header";
import Navigator from "@/components/navigator";

// utils
import { getUserAvatar } from "@/utils";

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
      <main className="min-h-screen w-full bg-gray-100 px-6 pt-10 pb-32">
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
            <div className="absolute left-5 -bottom-16 my-4 inline-flex rounded-full bg-white p-3">
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
      </main>
      <div>
        <Navigator />
      </div>
    </>
  );
};

export default Profile;
