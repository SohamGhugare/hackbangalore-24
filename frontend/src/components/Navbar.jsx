import Link from "next/link";
import Button from "./ui/Button";

const Navbar = () => {
  return (
    <nav className="flex justify-between my-4 px-8">
      <div>SustainX</div>
      <div className="flex gap-8">
        <Link href={"/"}>Explore</Link>
        <Link href={"/"}>Features</Link>
        <Link href={"/"}>Profile</Link>
      </div>
      <div>
        <Link href={"/"}>Login</Link>
        <Button variant={"secondary"} text="Sign Up"/>
      </div>
    </nav>
  );
};

export default Navbar;
