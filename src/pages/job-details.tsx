import { FiArrowLeft, FiBell } from "react-icons/fi";

// components
import Button from "@/components/button";
import Head from "next/head";

const JobDetails = () => {
  return (
    <>
      <Head>
        <title>Details</title>
        <meta name="description" content="Job finder app mobile" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen w-full bg-gray-100 px-4 pt-10 pb-16">
        <div className="flex items-center justify-between">
          <div>
            <Button Icon={<FiArrowLeft className="text-xl" />} />
          </div>
          <div>
            <h2 className="text-xl font-medium">Details</h2>
          </div>
          <div>
            <Button Icon={<FiBell className="text-xl" />} />
          </div>
        </div>
      </main>
    </>
  );
};

export default JobDetails;
