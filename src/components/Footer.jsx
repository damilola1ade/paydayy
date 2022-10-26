import React from "react";
import logo from "../assets/logo.webp";
import flutterwave from "../assets/flutterwave.svg";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import ca from "../assets/ca.png";
import us from "../assets/us.png";
import rw from "../assets/rw.png";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer data-aos='fade-down' id="footer-section">
      <div className="flex flex-col font-dmsans space-x-7 md:space-x-24 md:flex-row md:p-24">
        <div className="flex flex-col mx-7 py-16 md:pb-16 md:pt-0 md:mx-auto">
          <div className="flex flex-row divide-x divide-gray-500 place-items-center pb-5 space-x-3 md:pb-10">
            <a href="">
              <img className="w-24" src={logo} alt="" />
            </a>
            <a href="">
              <img className="w-24 ml-3" src={flutterwave} alt="" />
            </a>
          </div>
          <p className="text-white text-sm">NotPayDay &copy; {year}</p>
        </div>
        <div className="space-y-4 text-sm">
          <div className="flex flex-col text-white space-y-4 pb-5 md:pb-16">
            <h1 className="text-gray-300 font-bold">OUR PRODUCTS</h1>
            <a href="">Payday</a>
            <a href="">TalentPay</a>
          </div>
          <div className="flex flex-col text-white space-y-4 pb-16">
            <h1 className="text-gray-300 font-bold">CONTACT US</h1>
            <a href="mailto:support@usepayday.com">support@usepayday.com</a>
            <div className="flex space-x-5">
              <a href="" className="hover:text-gray-300">
                <BsTwitter />
              </a>
              <a href="" className="hover:text-gray-300">
                <BsInstagram />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-4 text-sm text-white pb-16">
          <h1 className="text-gray-300 font-bold">COMPANY</h1>
          <a href="">About Us</a>
          <a href="">Ambassadors</a>
          <a href="">Privacy Policy</a>
          <a href="">Terms of Use</a>
          <a href="">Careers</a>
          <a href="">Blog</a>
          <a href="">FAQ</a>
        </div>
        <div className="text-white space-y-4 text-sm pb-24">
          <h1 className="text-gray-300 font-bold">LOCATIONS</h1>
          <p className="flex place-items-center">
            <img className="w-5 h-5 rounded-full mr-1" src={ca} alt="" />: 2800
            Park Place 666 Burrard St Vancouver
          </p>
          <p className="flex place-items-center">
            <img className="w-5 h-5 rounded-full mr-1" src={us} alt="" />: 256
            Chapman Road STE 105-4, New Castle, DE
          </p>
          <p className="flex place-items-center">
            <img className="w-5 h-5 rounded-full mr-1" src={rw} alt="" />:
            M.Peace Plaza, 5th Floor, Block B
          </p>
        </div>
      </div>
      <div className="divide-y divide-gray-500 text-gray-500 pb-10 mx-7 font-dmsans md:mx-32 md:py-12">
        <div></div>
        <div className="pt-10 text-sm leading-6 md:px-5">
          Payday is a product of TalentPay. Payday offers its products and
          services in partnership with licensed transmitters in their respective
          jurisdictions. Payday was built in partnership with Flutterwave
        </div>
      </div>
      <div className="text-gray-500 font-dmsans pb-10 text-center text-sm">
        <small>
          Developed with ❤️ by{" "}
          <a
            className="text-white hover:text-gray-300"
            href="https://www.twitter.com/7amilola/"
            target="_blank"
          >
           Damilola Adegbemile
          </a>
        </small>
      </div>
    </footer>
  );
}

export default Footer;
