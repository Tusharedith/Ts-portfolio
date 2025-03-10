import React from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";
const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4 text-white">
      <SingleInfo text="TusharSwarnkar2525@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+916306010045" Image={FiPhone} />
      <SingleInfo text="Greater Noida" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;