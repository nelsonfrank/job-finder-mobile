import { getUserAvatar } from "@/utils";
import Image from "next/image";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";


// components
import Button from '../button'

const Header = () => {
  const [avatar, avatarSet] = useState<string>("");

  getUserAvatar("Andri Doe").then((avatar) => avatarSet(avatar));
  return (
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
      <Button Icon={<FiSearch className="text-xl" />} />
    </div>
  );
};

export default Header;
