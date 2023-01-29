import React, { ReactNode, useState } from "react";
import { FaBookmark } from "react-icons/fa";
import Image from "next/image";
import { FiBookmark } from "react-icons/fi";
import { useRouter } from "next/router";

export interface JobPost {
  company: string;
  position: string;
  location: string;
  type: string;
  companyLogo: string;
  Icon?: ReactNode;
  excerpt?: string;
  tags?: string[];
}
const Card = ({
  company,
  position,
  location,
  type,
  tags,
  companyLogo,
  Icon,
  excerpt,
}: JobPost) => {
  const [bookmarked, bookmarkSet] = useState<boolean>(false);

  const router = useRouter();
  const handleNavigation = () => {
    router.push("job-details");
  };
  return (
    <div
      className="my-6 rounded-2xl bg-white py-4 px-4"
      onClick={!Icon ? handleNavigation : () => {}}
    >
      <div className=" flex items-center justify-between">
        <div className="flex">
          <div>
            <div className="mr-2  rounded-lg bg-gray-100 p-3">
              <Image
                src={companyLogo}
                alt="telegram"
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
          </div>
          <div>
            <h4 className=" font-medium capitalize">{company}</h4>
            <h2 className="mb-1 text-lg font-bold capitalize">{position}</h2>
            <p className="text-sm font-light capitalize text-zinc-400">
              {location} - {type}
            </p>
          </div>
        </div>
        <div className="rounded-md bg-gray-100 p-2 ">
          {!Icon ? (
            <>
              {!bookmarked ? (
                <button
                  className="text-2xl outline-none"
                  onClick={() => bookmarkSet(!bookmarked)}
                >
                  <FiBookmark />
                </button>
              ) : (
                <button
                  className="text-2xl outline-none"
                  onClick={() => bookmarkSet(!bookmarked)}
                >
                  <FaBookmark />
                </button>
              )}
            </>
          ) : (
            <button className="text-2xl outline-none">{Icon}</button>
          )}
        </div>
      </div>
      {tags ? (
        <div className="my-4 flex items-center">
          {tags?.map((tag, index) => (
            <button
              key={index + 1}
              className="my-2 mr-2 whitespace-nowrap rounded-md bg-gray-200 py-1 px-3 text-sm font-medium capitalize outline-none"
            >
              {tag}
            </button>
          ))}
        </div>
      ) : null}
      {excerpt ? (
        <div>
          <p className="text-justify text-sm text-zinc-400">{excerpt}...</p>
        </div>
      ) : null}
    </div>
  );
};

export default Card;
