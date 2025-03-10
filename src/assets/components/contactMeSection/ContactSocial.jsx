import React from 'react'
import SingleContactSocial from './SingleContactSocial'
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
// import { FaXTwitter } from "react-icons/fa6";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/tushar-swarnkar-590815251/" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/Tusharedith" Icon={FiGithub} />
      {/* <SingleContactSocial link="#" Icon={FaXTwitter} /> */}
    </div>
  );
};

export default ContactSocial;