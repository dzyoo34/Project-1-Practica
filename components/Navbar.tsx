import Link from "next/link";
import Image from "next/image";

import CustomButton from "./CustomButton";

const Navbar = () => (
  <header className='w-full absolute z-10'>
    <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent'>
      <Link href='/' className='flex justify-center items-center'>
        <Image
          src="/logo.svg"
          alt="BaltiCar logo"
          width={118}
          height={18}
          className="object-contain"
        />
      </Link>

      <CustomButton
        title="Sign in"
        btnType="button"
        containerStyles='text-blue-600 rounded-full bg-white min-w-[130px] shadow-sm border border-gray-200 hover:shadow-md'
      />
    </nav>
  </header>
);

export default Navbar;