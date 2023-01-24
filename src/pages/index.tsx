import Head from "next/head";
import { FiFigma } from "react-icons/fi";
import { TbBrandJavascript } from "react-icons/tb";

// components
import Header from "@/components/header";
import Banner from "@/components/banner";
import Card from "@/components/card";
import Navigator from "@/components/navigator";

// types
import { JobPost } from "@/components/card/Card";

const jobPosts: JobPost[] = [
  {
    company: "Telegram",
    companyLogo: "/img/telegram.png",
    location: "Jakarta Indonesia",
    position: "Junior UI Designer",
    type: "onsite",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus atque quo, at deserunt, labore recusandae sint quod modi reiciendis ad mollitia quia delectus ab amet.",
    tags: ["FullTime", "Internship", "Entry Level"],
  },
  {
    company: "Behance",
    companyLogo: "/img/behance.png",
    location: "Surabaya Indonesia",
    position: "Senior UI Designer",
    type: "onsite",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus atque quo, at deserunt, labore recusandae sint quod modi reiciendis ad mollitia quia delectus ab amet.",
    tags: ["Contract", "Internship", "Senior Level"],
  },
];
export default function Home() {
  return (
    <>
      <Head>
        <title>Job Finder App</title>
        <meta name="description" content="Job finder app mobile" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen w-full bg-gray-100 pb-16">
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
              {jobPosts.map((job, index) => (
                <Card {...job} key={index + 1} />
              ))}
            </div>
          </div>
        </div>
        <div className="relative">
          <Navigator />
        </div>
      </main>
    </>
  );
}
