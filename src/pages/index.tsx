import Head from "next/head";
import Header from "@/components/header";

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
        <Header />
      </main>
    </>
  );
}
