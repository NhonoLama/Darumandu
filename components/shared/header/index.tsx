import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Menu from "./menu";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="flex-between wrapper">
        <div className="flex-start">
          <Link href="/" className="flex-start">
            <Image
              src="/images/logo.svg"
              alt="A logo"
              width={48}
              height={48}
              priority={true}
            />
            <span className="hidden lg:flex text-2xl font-bold ml-3">
              {APP_NAME}
            </span>
          </Link>
        </div>
        <Menu />
      </div>
    </header>
  );
};

export default Header;
