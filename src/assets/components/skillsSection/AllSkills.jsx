import React from 'react';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiTensorflow } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBlender } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import SingleSkill from './SingleSkill';
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
        skill: "JavaScript",
        icon: IoLogoJavascript,
    },
    {
        skill: "ReactJS",
        icon: FaReact,
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
const AllSkills = () => {
  return <div>
    <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto"> 
        {skills.map((item, index) =>{
            return (
            <motion.div
            variants={fadeIn("up",`0.${index}`)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false,amount: 0}}>
            <SingleSkill key = {index} text= {item.skill} imgSvg= {<item.icon/>} />   
            </motion.div>
            );
        })}
    </div>
  </div>
}

export default AllSkills