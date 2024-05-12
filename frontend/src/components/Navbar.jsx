import Link from "next/link";
import { getCookie, setCookie } from 'cookies-next';


const Navbar = () => {
  console.log(getCookie('token'));


  return (
    <nav className="absolute w-full flex items-center justify-between my-4 px-8">
      <Link href={"/"} className="font-bold text-2xl">
        Sustain<span className="text-green-800">X</span>
      </Link>
      <div className="flex gap-8">
        <Link href={"/"}>Explore</Link>
        <Link href={"/"}>Features</Link>
        <Link href={"/"}>Profile</Link>
      </div>
      {/* <div>
        <Link href={"/"}>Login</Link>
        <Button variant={"secondary"} text="Sign Up"/>
      </div> */}
    </nav>
  );
};

export default Navbar;
