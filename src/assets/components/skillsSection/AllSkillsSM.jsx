import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiTensorflow } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBlender } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import {motion} from "framer-motion";
import {fadeIn} from "../../../framerMotion/variants";

const skills =[
    {
        skill:"HTML",
        icon: FaHtml5,
    },
    {
        skill: "CSS",
        icon: FaCss3Alt,
    },
    {
        skill: "Tensorflow",
        icon: SiTensorflow,
    },
    {
        skill: "ReactJS",
        icon: FaReact,
    },
    {
        skill: "FaFlutter",
        icon: FaFlutter,
    },
    {
        skill: "TailwindCSS",
        icon: RiTailwindCssFill,
    },
    {
        skill: "Blender",
        icon: FaBlender,
    },
    {
        skill: "Figma",
        icon: IoLogoFigma,
    },
    {
        skill: "MongoDB",
        icon: SiMongodb,
    },
];

const AllSkillsSM = () => {
  return( 
  <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
    {skills.map((item, index) => {
        return( 
        <motion.div
              variants={fadeIn("up",0.2)}
              initial='hidden'
              whileInView='show'
              viewport={{ once: false,amount: 0.7 }}
        key={index} className="flex flex-col items-center">
            <item.icon className="text-7xl text-orange"/>
            <p className="text-center mt-4 text-white">{item.skill}</p>
        </motion.div>
        );
    })}
    </div>
  );
}

export default AllSkillsSM