import React from "react";
import ThemeToggle from "./themeToggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  EllipsisVertical,
  ShoppingCart,
  ShoppingCartIcon,
  UserIcon,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Menu = () => {
  return (
    <div className="flex justify-end gap-3">
      <nav className="hidden md:flex max-w-xs space-x-2">
        <ThemeToggle />
        <Button asChild variant="ghost">
          <Link href="/cart">
            <ShoppingCart /> Cart
          </Link>
        </Button>
        <Button asChild>
          <Link href="/sign-in">
            <UserIcon /> Sign In
          </Link>
        </Button>
      </nav>
      <nav className="md:hidden">
        <Sheet>
          <SheetTrigger className="align-middle">
            <EllipsisVertical />
          </SheetTrigger>
          <SheetContent className="flex flex-col items-start p-4">
            <SheetTitle>Menu</SheetTitle>
            <ThemeToggle />
            <Button asChild variant="ghost">
              <Link href="/cart">
                <ShoppingCartIcon /> Cart
              </Link>
            </Button>
            <Button asChild>
              <Link href="/sign-in">
                <UserIcon /> Sign In
              </Link>
            </Button>
            <SheetDescription></SheetDescription>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Menu;
