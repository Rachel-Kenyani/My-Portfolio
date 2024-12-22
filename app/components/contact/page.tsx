"use client";

import {
  LocalPhoneOutlined,
  EmailOutlined,
  LocationOnOutlined,
} from "@mui/icons-material";
import Link from "next/link";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Button } from "@mui/base";

export const Contact = () => {
  return (
    <div className="mt-12 mb-4">
      <p className="flex text-base text-themeSecondary justify-center poppins-semibold">
        CONTACT ME
      </p>
      <h2 className="flex text-3xl text-themePrimary justify-center my-3">
        Get In Touch
      </h2>
      <p className="flex text-themeAccent justify-center px-44 my-3">
        Any questions or remarks? Send a message
      </p>
      <div className="flex justify-between px-20 py-4">
        <div className="w-2/5 bg-themePrimary p-11 rounded-tl-2xl rounded-bl-2xl relative overflow-hidden">
          <div className="grid grid-rows-3">
            <div>
              <h3 className="poppins-medium text-white text-2xl">
                Contact Information
              </h3>
              <p className="poppins-light text-sm text-white">
                Say something to start the chat
              </p>
            </div>

            <div className="mb-10">
              <div className="flex gap-3">
                <LocalPhoneOutlined className="text-white" />
                <small className="text-white">+254710515773</small>
              </div>

              <div className="flex gap-3 mt-4">
                <EmailOutlined className="text-white" />
                <small className="text-white">rachelkenyani@gmail.com</small>
              </div>

              <div className="flex gap-3 mt-4">
                <LocationOnOutlined className="text-white" />
                <small className="text-white">Nairobi, Kenya</small>
              </div>
            </div>

            <div className="grid grid-cols-5 gap-1 content-center">
              <div className="rounded-full bg-gradient-to-r from-[#7d1942] to-[#590629] w-10 h-10 flex justify-center items-center">
                <Link href="#https://www.linkedin.com/in/rachel-kenyani/">
                  <i className="fab fa-linkedin-in fa-lg text-white"></i>
                </Link>
              </div>

              <div className="rounded-full bg-gradient-to-r from-[#7d1942] to-[#590629] w-10 h-10 flex justify-center items-center">
                <Link href="#https://github.com/Rachel-Kenyani">
                  <i className="fab fa-github-alt fa-lg text-white"></i>
                </Link>
              </div>

              <div className="rounded-full bg-gradient-to-r from-[#7d1942] to-[#590629] w-10 h-10 flex justify-center items-center">
                <Link href="#https://www.behance.net/rachelkenyani">
                  <i className="fab fa-behance fa-lg text-white"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-52 h-52 rounded-tl-full rounded-br-md absolute bottom-0 right-0 bg-gradient-to-r from-themePrimary to-[#102936] shadow-inner-custom-6">
            <div className="w-36 h-36 rounded-tl-full rounded-br-md absolute bottom-0 right-0 bg-gradient-to-r from-themePrimary to-[#102936] shadow-outer-custom-2"></div>
          </div>
        </div>

        <div className="w-3/5 ps-20 pe-12 border-[0.5px] border-themeAssent rounded-tr-2xl rounded-br-2xl overflow-hidden">
          <label className="block py-3">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm poppins-regular">
              First Name
            </span>
            <input
              type="text"
              name="name"
              className="mt-1 px-3 py-2 bg-[#F7F9FC] border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            />
          </label>

          <label className="block py-3">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm poppins-regular">
              Last Name
            </span>
            <input
              type="text"
              name="name"
              className="mt-1 px-3 py-2 bg-[#F7F9FC] border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            />
          </label>

          <label className="block py-3">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm poppins-regular">
              Preferred method of communication
            </span>
            <input
              type="email"
              name="email"
              className="mt-1 px-3 py-2 bg-[#F7F9FC] border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            />
          </label>

          {/* <label className="block py-3">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm poppins-regular">
              Email
            </span>
            <input
              type="email"
              name="email"
              className="mt-1 px-3 py-2 bg-[#F7F9FC] border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            />
          </label> */}

          <label className="py-3 block">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm poppins-regular">
              Message
            </span>
            <textarea
              name="message"
              id="message"
              className="mt-1 block w-full h-28 rounded-md px-3 py-2 bg-[#F7F9FC] border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 sm:text-sm sm:leading-6 focus:ring-1"
            ></textarea>
          </label>
          <div className="flex justify-center my-2">
            <Button className="bg-gradient-to-r from-[#AD3869] via-themeSecondary to-[#590629] rounded-full shadow-lg shadow-[#AD3869] text-white w-48 py-3">
              Send Message
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
