import Image from "next/image";
import iphone from "../app/public/iphone.png";
import Navbar from "../app/navbar";
import Capture from "../app/public/Capture.jpg";
import Capture1 from "../app/public/Capture1.jpg";
import Arrow from "../app/public/Arrow.png";
import Asset1 from "../app/public/Asset1.png";
import Phones from "../app/public/Phones.png";
import Watches from "../app/public/Watches.png";
import Cameras from "../app/public/Cameras.png";
import Headphones from "../app/public/Headphones.png";
import Computers from "../app/public/Computers.png";
import Gaming from "../app/public/Gaming.png";
import Iphone14pro from "../app/public/Iphone14pro.png";
import Like from "../app/public/Like.png";
import watchbuy from "../app/public/watchbuy.png";
import camerabuy from "../app/public/camerabuy.png";
import headphonebuy from "../app/public/headphonebuy.png";
import Samsungglaxywatch from "../app/public/Samsungglaxywatch.png";
import GalaxyZfold from "../app/public/GalaxyZfold.png";
import GalaxyPods from "../app/public/GalaxyPods.png";
import Appleipad9 from "../app/public/Appleipad9.png";
import imag3 from "../app/public/imag3.png";
import grooup from "../app/public/grooup.png";
import kkk from "../app/public/kkk.png";
import group4 from "../app/public/group4.png";
import iphone14pro2 from"../app/public/Iphone14pro2 .png";
import iphone14pro3 from "../app/public/Iphone14pro 3.png"
export default function header() {
  return (
    <>
      <div>
        <div>
          <Navbar />
        </div>
      </div>
      <div
        className="h-96 bg-black  flex "
        style={{ backgroundColor: "#201C22" }}
      >
        <div className="pt-24 mb-24 pl-40 ">
          <h1 className="text-gray-500 font-semibold text-xl">Pro.Beyond.</h1>
          <div className="flex mt-2 mb-2">
            <h1 className="text-white text-7xl font-thin mr-5">IPhone 14</h1>
            <h1 className="font-semibold text-7xl text-white"> Pro</h1>
          </div>

          <h1 className="text-gray-500 font-medium text-sm">
            Created to change everything for the better. For everyone
          </h1>
          <br />
          <button className="border-2 border-gray-400 text-gray-200 w-48 h-14 rounded-md text-sm">
            Shop Now
          </button>
        </div>
        <div>
          <Image src={iphone} alt="iphone" className=" ml-32 mr-40 h-96" />
        </div>
      </div>
      <div className="flex h-auto">
        <div>
          <Image src={Capture} alt="image1" className="" />
        </div>
        <div
          className="flex items-center "
          style={{ backgroundColor: "#EEEFEE" }}
        >
          <div className="ml-10 ">
            <div className="flex mb-3 ">
              <h1 className="text-black text-opacity-80 font-thin text-5xl mr-1">
                Mackbook{" "}
              </h1>

              <h1 className="text-black text-5xl font-semibold">Air</h1>
            </div>

            <h1 className="text-xs font-medium text-opacity-50 text-black w-80 mb-3">
              The new 15-inch MacBook Air makes room for more of what you love
              with a spacious Liquid Retina display.
            </h1>
            <button className="w-40 h-10 rounded-md border-2 border-black border-opacity-50">
              Shop Now
            </button>
          </div>
          <div>
            <Image src={Capture1} alt="image2" className="w-72 " />
          </div>
        </div>
      </div>
      <div className="conatiner  pb-20" style={{ backgroundColor: "#FAFAFA" }}>
        
        <div className="ml-32 mr-32  flex pt-20">
          <h1 className="font-medium text-2xl mr-96">Browse By Category</h1>
          <Image src={Arrow} alt="arrow" className="w-8 h-8 ml-80" />
          <Image src={Asset1} alt="arrow2" className="w-8 h-8 ml-3 " />
        </div>
        
        <div className="ml-32 flex mt-8 ">
          <div  className="w-36 h-32 rounded-2xl bg- " style={{backgroundColor: "#EDEDED"}}>
          <button className="text-base pb-6 ">
            <Image
            src={Phones}
            alt="phone img"
            className="mb-2 w-12 mt-7 ml-12 mr-12"
            />
            Phone
          </button>
          </div>
          <div  className="w-36 h-32 rounded-2xl ml-8" style={{backgroundColor: "#EDEDED"}}>
          <button className="text-base pb-6 ">
            <Image
            src={Watches}
            alt="phone img"
            className="mb-2 mt-7 ml-12 mr-12  w-12 "
            />
            Smart Watches
          </button>
          </div>
          <div  className="w-36 h-32 rounded-2xl ml-8" style={{backgroundColor: "#EDEDED"}}>
          <button className="text-base pb-6 ">
            <Image
            src={Cameras}
            alt="phone img"
            className="mb-2 mt-7 ml-12 mr-12 w-12"
            />
            Cameras
          </button>
          </div>
          <div  className="w-36 h-32 rounded-2xl ml-8" style={{backgroundColor: "#EDEDED"}}>
          <button className="text-base pb-6 ">
            <Image
            src={Headphones}
            alt="phone img"
            className="mb-2 mt-7 ml-12 mr-12 w-12"
            />
            Headphones
          </button>
          </div>
          <div  className="w-36 h-32 rounded-2xl ml-8" style={{backgroundColor: "#EDEDED"}}>
          <button className="text-base pb-6 ">
            <Image
            src={Computers}
            alt="phone img"
            className="mb-2 mt-7 ml-12 mr-12 w-12"
            />
            Computers
          </button>
          </div>
          <div  className="w-36 h-32 rounded-2xl ml-8" style={{backgroundColor: "#EDEDED"}}>
          <button className="text-base pb-6 ">
            <Image
            src={Gaming}
            alt="phone img"
            className="mb-2 mt-7 ml-12 mr-12 w-12"
            />
            Gaming
          </button>
          </div>
        </div>
      </div>
      <div className="" style={{backgroundColor: "#FFFFFF"}}>
        <div className="pt-14 pl-32 ">
          <h1 className="text-2xl pb-8">New Arrival</h1>
          <div className="flex mb-4">
          <div className="w-60 h-96 container rounded-lg mr-4" style={{backgroundColor: "#F6F6F6"}}>
            <Image
            src={Like}
            alt="like1"
            className="w-8 h-8 mt-4 ml-48"
            />
            <Image
            src={Iphone14pro}
            alt="iphone14buy"
            className="w-36 h-36 mt-4 ml-12"
            />
            <h1 className="mt-6 text-sm font-medium ml-9">Apple iphone 14 Pro Max</h1>
            <h1 className="mt-1 text-sm font-medium ml-14">128GB Deep Purple</h1>
            <h1 className="font-semibold text-lg mt-2 ml-24" >$900</h1>
            <button className="h-11 w-40 ml-9 mt-3 rounded-lg bg-black text-white">Buy Now </button>
          </div>
          <div className="w-60 h-96 container rounded-lg mr-4" style={{backgroundColor: "#F6F6F6"}}>
            <Image
            src={Like}
            alt="like1"
            className="w-8 h-8 mt-4 ml-48"
            />
            <Image
            src={camerabuy}
            alt="camerabuy"
            className="w-36 h-36 mt-4 ml-12"
            />
            <h1 className="mt-6 text-sm font-medium ml-9">Blackmagic Pocket cinema </h1>
            <h1 className="mt-1 text-sm font-medium ml-20">  Camera 6k</h1>
            <h1 className="font-semibold text-lg mt-2 ml-24" >$2535</h1>
            <button className="h-11 w-40 ml-9 mt-3 rounded-lg bg-black text-white">Buy Now </button>
          </div>
          <div className="w-60 h-96 container rounded-lg mr-4" style={{backgroundColor: "#F6F6F6"}}>
            <Image
            src={Like}
            alt="like1"
            className="w-8 h-8 mt-4 ml-48"
            />
            <Image
            src={watchbuy}
            alt="watch buy"
            className="w-36 h-36 mt-4 ml-14"
            />
            <h1 className="mt-6 text-sm font-medium ml-7">Apple Watch Series 9 GPS</h1>
            <h1 className="mt-1 text-sm font-medium ml-7">41mm Starlight Aluminium</h1>
            <h1 className="font-semibold text-lg mt-2 ml-24" >$399</h1>
            <button className="h-11 w-40 ml-9 mt-3 rounded-lg bg-black text-white">Buy Now </button>
          </div>
          <div className="w-60 h-96 container rounded-lg mr-4" style={{backgroundColor: "#F6F6F6"}}>
            <Image
            src={Like}
            alt="like1"
            className="w-8 h-8 mt-4 ml-48"
            />
            <Image
            src={headphonebuy}
            alt="headphonebuy"
            className="w-36 h-36 mt-4 ml-12"
            />
            <h1 className="mt-6 text-sm font-medium ml-14">AirPods Max Silver</h1>
            <h1 className="mt-1 text-sm font-medium ml-14">Starlight Aluminiun</h1>
            <h1 className="font-semibold text-lg mt-2 ml-24" >$900</h1>
            <button className="h-11 w-40 ml-9 mt-3 rounded-lg bg-black text-white">Buy Now </button>
          </div>
          </div>
          <div className="flex mb-4 mb-14">
          <div className="w-60 h-96 container rounded-lg mr-4" style={{backgroundColor: "#F6F6F6"}}>
            <Image
            src={Like}
            alt="like1"
            className="w-8 h-8 mt-4 ml-48"
            />
            <Image
            src={Samsungglaxywatch}
            alt="Galaxywatch"
            className="w-36 h-35 mt-4 ml-12"
            />
            <h1 className="mt-6 text-sm font-medium ml-9">Samsung Galaxy Watch6</h1>
            <h1 className="mt-1 text-sm font-medium ml-14">Classic 47mm Black</h1>
            <h1 className="font-semibold text-lg mt-2 ml-24" >$369</h1>
            <button className="h-11 w-40 ml-9 mt-3 rounded-lg bg-black text-white">Buy Now </button>
          </div>
          <div className="w-60 h-96 container rounded-lg mr-4" style={{backgroundColor: "#F6F6F6"}}>
            <Image
            src={Like}
            alt="like1"
            className="w-8 h-8 mt-4 ml-48"
            />
            <Image
            src={GalaxyZfold}
            alt="GalaxyZfold"
            className="w-36 h-36 mt-4 ml-12"
            />
            <h1 className="mt-6 text-sm font-medium ml-9">Galaxy Z Fold5 Unlocked|</h1>
            <h1 className="mt-1 text-sm font-medium ml-11">256GB | Phantom Black</h1>
            <h1 className="font-semibold text-lg mt-2 ml-24" >$1799</h1>
            <button className="h-11 w-40 ml-9 mt-3 rounded-lg bg-black text-white">Buy Now </button>
          </div>
          <div className="w-60 h-96 container rounded-lg mr-4" style={{backgroundColor: "#F6F6F6"}}>
            <Image
            src={Like}
            alt="like1"
            className="w-8 h-8 mt-4 ml-48"
            />
            <Image
            src={GalaxyPods}
            alt="Galaxy Pods"
            className="w-36 h-36 mt-4 ml-12"
            />
            <h1 className="mt-6 text-sm font-medium ml-20">Galaxy Buds FE</h1>
            <h1 className="mt-1 text-sm font-medium ml-24">  Graphite</h1>
            <h1 className="font-semibold text-lg mt-2 ml-24" >$99.99</h1>
            <button className="h-11 w-40 ml-10 mt-3 rounded-lg bg-black text-white">Buy Now </button>
          </div>
          <div className="w-60 h-96 container rounded-lg mr-4" style={{backgroundColor: "#F6F6F6"}}>
            <Image
            src={Like}
            alt="like1"
            className="w-8 h-8 mt-4 ml-48"
            />
            <Image
            src={Appleipad9}
            alt="Apple Ipad 9"
            className="w-36 h-36 mt-4 ml-12"
            />
            <h1 className="mt-6 text-sm font-medium ml-6">Apple Ipad 9 10.2" 64GB Wi-Fi</h1>
            <h1 className="mt-1 text-sm font-medium ml-14">Silver (MK2L3) 2021</h1>
            <h1 className="font-semibold text-lg mt-2 ml-24" >$398</h1>
            <button className="h-11 w-40 ml-9 mt-3 rounded-lg bg-black text-white">Buy Now </button>
          </div>
          </div>
        </div>
        </div>
        <div className="flex">
        <div className="w-80   " style={{backgroundColor: "#FEFEFE"}}>
          <Image
          src={imag3}
          alt="group1"
          className=" ml-8 mr-8 w-64 mt-3"
          />
          <h1 className="ml-8 mr-8 mt-5 text-3xl font-light">Popular Products</h1>
          <h1 className="ml-8 mr-8 text-sm mt-5 opacity-60">iPad combines a magnificent 10.2-inch</h1>
          <h1 className="ml-8 mr-8 text-sm mt-1 opacity-60">Retina Display, incredible performance</h1>
          <h1 className="ml-8 mr-8 text-sm mt-1 opacity-60">multitasking and easy of use.</h1>
          <button className="w-48 h-14 border-2 border-black rounded-md ml-8 mt-4 mb-14">Shop Now</button>
          
        </div>
        <div className="w-80   " style={{backgroundColor: "#F9F9F9"}}>
          <Image
          src={grooup}
          alt="group1"
          className=" ml-8 mr-8 w-64 mt-3"
          />
          <h1 className="ml-8 mr-8 mt-7 text-3xl font-light">Ipad Pro</h1>
          <h1 className="ml-8 mr-8 text-sm mt-5 opacity-60">iPad combines a magnificent 10.2-inch</h1>
          <h1 className="ml-8 mr-8 text-sm mt-1 opacity-60">Retina Display, incredible performance</h1>
          <h1 className="ml-8 mr-8 text-sm mt-1 opacity-60">multitasking and easy of use.</h1>
          <button className="w-48 h-14 border-2 border-black rounded-md ml-8 mt-4 mb-14">Shop Now</button>
          </div>
          <div className="w-80   " style={{backgroundColor: "#EAEAEA"}}>
          <Image
          src={kkk}
          alt="group3"
          className=" ml-20 mr-8  h-64 mt-3"
          />
          <h1 className="ml-8 mr-8 mt-9 text-3xl font-light">Ipad Pro</h1>
          <h1 className="ml-8 mr-8 text-sm mt-5 opacity-60">iPad combines a magnificent 10.2-inch</h1>
          <h1 className="ml-8 mr-8 text-sm mt-1 opacity-60">Retina Display, incredible performance</h1>
          <h1 className="ml-8 mr-8 text-sm mt-1 opacity-60">multitasking and easy of use.</h1>
          <button className="w-48 h-14 border-2 border-black rounded-md ml-8 mt-4 mb-14">Shop Now</button>
          </div>
          <div className="w-80   " style={{backgroundColor: "#2C2C2C"}}>
          <Image
          src={group4}
          alt="group4"
          className=" ml-8 mr-8   mt-14"
          />
          <h1 className="ml-8 mr-8 mt-9 text-3xl font-light text-white">Macbook Pro</h1>
          <h1 className="ml-8 mr-8 text-sm mt-5 opacity-60 text-white">iPad combines a magnificent 10.2-inch</h1>
          <h1 className="ml-8 mr-8 text-sm mt-1 opacity-60 text-white">Retina Display, incredible performance</h1>
          <h1 className="ml-8 mr-8 text-sm mt-1 opacity-60 text-white">multitasking and easy of use.</h1>
          <button className="w-48 h-14 border-2 border-white text-white rounded-md ml-8 mt-4 mb-14">Shop Now</button>
          </div>
          </div>
          <div className="">
            <h1 className="mt-20  ml-32 mr-32 mb-8 text-2xl">Discount up to -50%</h1>
            <div className="flex mb-20">
            <div className="w-60 h-96 container rounded-lg mr-4 ml-32  " style={{backgroundColor: "#F6F6F6"}}>
              <br />
            <Image
            src={Like}
            alt="like1"
            className="w-8 h-8  ml-48  "
            />
            <Image
            src={iphone14pro2}
            alt="iphone14buy"
            className="w-36 h-36 mt-3 ml-14"
            />
            <h1 className="mt-4 text-sm font-medium ml-11">Apple iphone 14 Pro Max</h1>
            <h1 className="mt-1 text-sm font-medium ml-16">128GB Deep Purple</h1>
            <h1 className="font-semibold text-lg mt-2 ml-24" >$900</h1>
            <button className="h-11 w-40 ml-11 mt-3 rounded-lg bg-black text-white">Buy Now </button>
          </div>
          <div className="w-64 h-96 container rounded-lg mr-4 ml-4  " style={{backgroundColor: "#F6F6F6"}}>
              <br />
            <Image
            src={Like}
            alt="like1"
            className="w-8 h-8  ml-52  "
            />
            <Image
            src={headphonebuy}
            alt="iphone14buy"
            className="w-36 h-36 mt-3 ml-14"
            />
            <h1 className="mt-6 text-sm font-medium ml-16"> AirPods Max Silver</h1>
            <h1 className="mt-1 text-sm font-medium ml-16"> Starlight Aluminiun</h1>
            <h1 className="font-semibold text-lg mt-2 ml-24" > $900</h1>
            <button className="h-11 w-40 ml-11 mt-3 rounded-lg bg-black text-white">Buy Now </button>
          </div>
          <div className="w-60 h-96 container rounded-lg mr-4" style={{backgroundColor: "#F6F6F6"}}>
            <Image
            src={Like}
            alt="like1"
            className="w-8 h-8 mt-4 ml-48"
            />
            <Image
            src={watchbuy}
            alt="watch buy"
            className="w-36 h-36 mt-4 ml-14"
            />
            <h1 className="mt-6 text-sm font-medium ml-7">Apple Watch Series 9 GPS</h1>
            <h1 className="mt-1 text-sm font-medium ml-7">41mm Starlight Aluminium</h1>
            <h1 className="font-semibold text-lg mt-2 ml-24" >$399</h1>
            <button className="h-11 w-40 ml-9 mt-3 rounded-lg bg-black text-white">Buy Now </button>
          </div>
          <div className="w-60 h-96 container rounded-lg mr-4" style={{backgroundColor: "#F6F6F6"}}>
            <Image
            src={Like}
            alt="like1"
            className="w-8 h-8 mt-4 ml-48"
            />
            <Image
            src={iphone14pro3}
            alt="iphone3"
            className="w-36 h-36 mt-4 ml-12"
            />
            <h1 className="mt-6 text-sm font-medium ml-7">Apple iPhone 14 Pro 1TB Gold</h1>
            <h1 className="mt-1 text-sm font-medium ml-24">(MQ2V3)</h1>
            <h1 className="font-semibold text-lg mt-2 ml-24" >$1499</h1>
            <button className="h-11 w-40 ml-9 mt-3 rounded-lg bg-black text-white">Buy Now </button>
          </div>
          </div>
            </div>
        
    </>
  );
}
