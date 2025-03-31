import React from "react";
import FB from "../../assets/landing/fb.svg";
import Linkedin from "../../assets/landing/linkedin.svg";
import "./Footer.scss";
const Footer = () => {
  return (
    <div className="Footer">
      <footer className=" text-gray-800 py-10 px-6 lg:px-20">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          {/* Left Section */}
          <div>
            <h3 className="font-bold text-lg">Legal & Admin Policies</h3>
            <ul className="mt-2 space-y-4 text-[#616888] font-bold text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Disclaimer
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
          {/* Center Section */}
          <div className="font-bold">
            <h3 className="font-bold text-lg">Contact</h3>
            <p className="mt-2 text-[#616888] text-sm space-y-4">
              Burjuman Business Tower, L19-02, Al Mankhool, Dubai, UAE.
            </p>
            <p className="mt-1 text-[#616888]">
              Call Us: <span className="">+971 4 201 5444</span>
            </p>
            <p className="text-[#616888]">
              Email:{" "}
              <a href="mailto:sales@coverb.ae" className=" hover:underline">
                sales@coverb.ae
              </a>
            </p>
          </div>
          {/* Right Section */}
          <div className="text-center md:text-right">
            <h3 className="font-bold text-lg">Get in touch</h3>
            <div className="flex justify-center md:justify-end mt-2 space-x-3">
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center bg-orange-400 text-white rounded-full"
              >
                <img src={FB} alt="FB" />
              </a>
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center bg-orange-400 text-white rounded-full"
              >
                <img src={Linkedin} alt="Linkedin" />
              </a>
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center bg-orange-400 text-white rounded-full"
              >
                <img src={FB} alt="FB" />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center text-sm text-[#616888] font-bold mt-5 mx-20">
          CoverB.ae is the digital wing of VIVA Insurance Brokers LLC, an
          insurance broker regulated by the UAE Insurance Authority, License No:
          259 I Holder of HIIP from DHA Intermediary ID No. BRK-00154 I
          Registered Member of Emirates Insurance Association with Serial No.
          B165
        </div>
      </footer>{" "}
      <div className="copy-right text-center text-base font-bold text-white mt-6 border-t p-4">
        &copy; All Copyright 2024 by CoverB.ae
      </div>
    </div>
  );
};

export default Footer;
