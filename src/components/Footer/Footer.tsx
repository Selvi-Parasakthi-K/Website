import FB from "../../assets/landing/fb.svg";
import Linkedin from "../../assets/landing/linkedin.svg";
import "./Footer.scss";
const Footer = () => {
  return (
    <div className="Footer">
      <footer className="text-gray-800 py-10 px-6 lg:px-20">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 md:gap-8 gap-6 text-sm">
          <div>
            <h3 className="font-bold md:text-lg text-base mb-3">
              Legal & Admin Policies
            </h3>
            <ul className="mt-2 md:space-y-3 space-y-2 text-[#616888] md:font-bold font-semibold text-sm md:text-base">
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
          <div className="md:font-bold font-semibold">
            <h3 className="font-bold md:text-lg text-base mb-3">Contact</h3>
            <div className="md:space-y-3 space-y-2 md:font-bold font-semibold ">
              <p className="mt-2 text-[#616888] mb-0 text-sm md:text-base">
                Burjuman Business Tower, L19-02, Al Mankhool,
              </p>
              <p className="text-[#616888] text-sm md:text-base">Dubai, UAE.</p>
              <p className="mt-1 text-[#616888] text-sm md:text-base">
                Call Us: <span className="">+971 4 201 5444</span>
              </p>
              <p className="text-[#616888] text-sm md:text-base">
                Email:{" "}
                <a href="mailto:sales@coverb.ae" className=" hover:underline">
                  sales@coverb.ae
                </a>
              </p>
            </div>
          </div>
          <div className="flex flex-col text-center md:text-right">
            <h3 className="font-bold text-base md:hidden flex justify-start">
              Get in touch
            </h3>
            <div className="flex flex-row md:justify-end gap-3 ">
              <p className="text-base font-bold text-black mb-2">
                sales@coverb.ae
              </p>
              <p className="text-base font-bold text-black mb-2">
                971 4 201 5444
              </p>
            </div>
            <div className="flex flex-col md:justify-end">
              <h3 className="font-bold text-base md:block hidden">
                Get in touch
              </h3>
              <div className="flex md:justify-end mt-2 space-x-3">
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
        </div>
        <div className="md:text-center md:mt-10 mt-7 w-full">
          <p className="md:w-[60%] mx-auto text-[#616888] md:font-semibold font-semibold md:text-base text-xs leading-5">
            CoverB.ae is the digital wing of VIVA Insurance Brokers LLC, an
            insurance broker regulated by the UAE Insurance Authority, License
            No: 259 I Holder of HIIP from DHA Intermediary ID No. BRK-00154 I
            Registered Member of Emirates Insurance Association with Serial No.
            B165
          </p>
        </div>
      </footer>{" "}
      <div className="copy-right text-center text-base font-bold text-white border-t p-4">
        &copy; All Copyright 2024 by CoverB.ae
      </div>
    </div>
  );
};

export default Footer;
