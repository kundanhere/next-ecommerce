import Link from 'next/link';
import { Menu } from './Menu';
import Image from 'next/image';
import SearchBar from './SearchBar';
import NavIcons from './NavIcons';

const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* MOBILE MENU */}
      <div className="h-full flex items-center justify-between md:hidden">
        {/* Site Logo */}
        <Link href="/">
          <div className="text-2xl tracking-wide">SHOPEE</div>
        </Link>
        {/* End Site Logo */}
        <Menu />
      </div>

      {/* DESKTOP NAV */}
      <div className="hidden md:flex items-center justify-between gap-8 h-full">
        {/* LEFT */}
        <div className="w-1/3">
          {/* Site Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="site logo" width={24} height={24} />
            <div className="text-2xl tracking-wide">SHOPEE</div>
          </Link>
          {/* End Site Logo */}
        </div>
        {/* RIGHT */}
        <div className="w-2/3 flex items-center justify-between gap-8">
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
