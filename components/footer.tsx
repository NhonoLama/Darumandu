import { APP_NAME } from "@/lib/constants";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t">
      <div className="p-5 flex-center">
        {currentYear} {APP_NAME}. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
};

export default Footer;
