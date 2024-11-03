import Image from "next/image";
import logo from "../app/public/logo.jpg";
import search_icon from "../app/public/search_icon.png";
import icons from "../app/public/Icons.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="h-20  bg-white  flex items-center">
        <div className="ml-32 ">
          <Image src={logo} alt="Cyber logo" className="h-8 w-24 " />
        </div>
        <div>
          <div className=" h-12 w-96 ml-8 bg-gray-100  flex mt-4 mb-4 rounded-lg  ">
            <Image
              typeof="icon"
              src={search_icon}
              alt="search icon"
              className="w-6 h-6 mt-3 ml-4 mr-1"
            />

            <input
              type="text"
              placeholder=" Search"
              className=" bg-gray-100  w-96  "
            />
          </div>
        </div>
        <div className=" conatiner ml-8  ">
          <Link
            href="http://localhost:3000/"
            className="mr-7 opacity-30 hover:opacity-100"
          >
            Home
          </Link>
          <Link
            href="http://localhost:3000/aboutus"
            className="mr-7 opacity-30 hover:opacity-100"
          >
            About
          </Link>
          <Link
            href="http://localhost:3000/contactus"
            className="mr-7 opacity-30 hover:opacity-100"
          >
            Contact Us
          </Link>
          <Link
            href="http://localhost:3000/blog"
            className="opacity-30 hover:opacity-100"
          >
            Blog
          </Link>
        </div>
        <div className="ml-8">
          <Image
            typeof="icons"
            src={icons}
            alt="icons"
            className="w-36 h-8 mr-32"
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
