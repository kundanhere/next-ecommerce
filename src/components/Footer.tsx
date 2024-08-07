import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="mt-24 py-12 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-gray-100 text-sm">
      {/* TOP */}
      <div className="flex flex-col md:flex-row justify-between gap-24">
        {/* Left */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          {/* Site Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="site logo" width={24} height={24} />
            <div className="text-2xl tracking-wide">SHOPEE</div>
          </Link>
          <p>Science Park Drive, Shopee Building, Singapore 118265</p>
          <span className="font-semibold">hello@kundanhere.dev</span>
          <span className="font-semibold">+1 (234) 5671-890</span>
          {/* Social media Links */}
          <div className="flex gap-6">
            <Image src="/facebook.png" alt="facebook" width={16} height={16} />
            <Image
              src="/instagram.png"
              alt="instagram"
              width={16}
              height={16}
            />
            <Image src="/youtube.png" alt="youtube" width={16} height={16} />
            <Image
              src="/pinterest.png"
              alt="pinterest"
              width={16}
              height={16}
            />
            <Image src="/x.png" alt="twitter" width={16} height={16} />
          </div>
        </div>
        {/* Center */}
        <div className="w-1/2 hidden lg:flex justify-between">
          <div className="flex flex-col gap-8">
            <h1 className="font-medium text-lg">COMPANY</h1>
            <div className="flex flex-col gap-6">
              <Link href="/">About Us</Link>
              <Link href="/">Affiliates</Link>
              <Link href="/">Blog</Link>
              <Link href="/">Careers</Link>
              <Link href="/">Contact Us</Link>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <h1 className="font-medium text-lg">SHOP</h1>
            <div className="flex flex-col gap-6">
              <Link href="/">New Arrivals</Link>
              <Link href="/">Accessories</Link>
              <Link href="/">Men</Link>
              <Link href="/">Women</Link>
              <Link href="/">All Products</Link>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <h1 className="font-medium text-lg">HELP</h1>
            <div className="flex flex-col gap-6">
              <Link href="/">Customer Service</Link>
              <Link href="/">Account</Link>
              <Link href="/">Find a Store</Link>
              <Link href="/">Legal & Privacy</Link>
              <Link href="/">Gift Card</Link>
            </div>
          </div>
        </div>
        {/* Right */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <h1 className="font-medium text-lg">SUBSCRIBE</h1>
          <p>
            Be the first to get the latest news about trends, promotions and
            much more!
          </p>
          <div className="flex">
            <input
              name="email_subscribe"
              type="text"
              placeholder="Email address"
              className="p-4 w-3/4 rounded-s-md outline-none"
            />
            <button className="w-1/4 rounded-e-md bg-brinkpink text-white hover:bg-zinc-950 transition-all ease-in-out duration-300">
              JOIN
            </button>
          </div>
          {/* payment options */}
          <span className="font-semibold">Secure Payments</span>
          <div className="flex justify-between">
            <Image src="/discover.png" alt="discover" width={40} height={20} />
            <Image src="/skrill.png" alt="skrill" width={40} height={20} />
            <Image src="/paypal.png" alt="paypal" width={40} height={20} />
            <Image
              src="/mastercard.png"
              alt="mastercard"
              width={40}
              height={20}
            />
            <Image src="/visa.png" alt="visa" width={40} height={20} />
          </div>
        </div>
      </div>
      {/* BOTTOM */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
        <div>&copy;2024 Kundanhere</div>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex gap-2 items-center justify-center">
            <Image src="/globe.png" alt="globe icon" width={18} height={18} />
            <span className="font-medium">United States | EN</span>
            <span className="font-medium">USD</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
