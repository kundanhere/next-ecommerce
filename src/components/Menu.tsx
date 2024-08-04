"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const Menu = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);

  return (
    <div>
      <Image
        src="/menu.png"
        alt="menu-logo"
        width={28}
        height={28}
        className="cursor-pointer"
        onClick={toggleMenu}
      />
      {open && (
        <div className="absolute left-0 top-20 w-full h-[calc(100vh-5rem)] bg-black text-white flex flex-col items-center justify-center gap-8 text-xl z-10">
          <Link href="/">Home</Link>
          <Link href="/">Shop</Link>
          <Link href="/">Deals</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          <Link href="/">Logout</Link>
          <Link href="/">Cart(1)</Link>
        </div>
      )}
    </div>
  );
};
