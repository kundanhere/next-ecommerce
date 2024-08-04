"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import CartModal from "./CartModal";

const NavIcons = () => {
  const [isProfileOopen, setIsProfileOopen] = useState(false);
  const [isCartOopen, setIsCartOopen] = useState(false);

  const router = useRouter();

  // TEMPORARY
  const isLoggedIn = false;
  const handleProfileClick = () => {
    if (!isLoggedIn) {
      router.push("/login");
    }
    setIsProfileOopen(!isProfileOopen);
  };

  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
      <Image
        src="/profile.png"
        alt="user icon"
        width={22}
        height={22}
        className="cursor-pointer"
        onClick={handleProfileClick}
      />
      {isProfileOopen && (
        <div className="absolute top-12 left-0 p-4 text-sm rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20">
          <Link href="/">Profile</Link>
          <div className="mt-2 cursor-pointer">Logout</div>
        </div>
      )}
      <Image
        src="/notification.png"
        alt="bell icon"
        width={22}
        height={22}
        className="cursor-pointer"
      />
      <div className="relative cursor-pointer">
        <Image
          src="/cart.png"
          alt="cart icon"
          width={22}
          height={22}
          className="cursor-pointer"
          onClick={() => setIsCartOopen((prev) => !prev)}
        />
        <div className="absolute -top-4 -right-4 w-6 h-6 bg-brinkpink text-white text-sm rounded-full flex items-center justify-center">
          2
        </div>
      </div>
      {isCartOopen && <CartModal />}
    </div>
  );
};

export default NavIcons;
