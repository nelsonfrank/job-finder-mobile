import { ReactNode, useState } from "react";
import Image from "next/image";
import Router from "next/router";
import { FiArrowLeft, FiBell, FiSearch } from "react-icons/fi";

// Utils
import { getUserAvatar } from "@/utils";

// components
import Button from "../button";

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

export interface HeaderWithNavigationProps {
  leftIcon?: {
    component: ReactNode;
    callback: () => void;
  };
  title: string;
  rightIcon?: {
    component: ReactNode;
    callback: () => void;
  };
}

const defaultValue = {
  leftIcon: {
    component: <FiArrowLeft className="text-xl" />,
    callback: () => Router.back(),
  },
  title: "Details",
  rightIcon: {
    component: <FiBell className="text-xl" />,
    callback: () => {},
  },
};
export const HeaderWithNavigation = ({
  leftIcon = defaultValue.leftIcon,
  title,
  rightIcon = defaultValue.rightIcon,
}: HeaderWithNavigationProps) => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <Button Icon={leftIcon.component} onClick={leftIcon.callback} />
      </div>
      <div>
        <h2 className="text-xl font-medium">{title}</h2>
      </div>
      <div>
        <Button Icon={rightIcon?.component} onClick={rightIcon?.callback} />
      </div>
    </div>
  );
};
export default Header;
