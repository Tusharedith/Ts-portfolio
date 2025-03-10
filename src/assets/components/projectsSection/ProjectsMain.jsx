import React from 'react'
import SingleProject from './SingleProject'
import ProjectsText from './ProjectsText'
import {motion} from "framer-motion";
import {fadeIn} from "../../../framerMotion/variants";

const projects = [
    {
      name: "AgriTech",
      year: "Oct2024",
      align: "right",
      image: "../../public/images/website-img-1.png",
      link: "https://github.com/Tusharedith/Agritech",
    },
    {
      name: "Legal Navigator App",
      year: "Jan2024",
      align: "left",
      image: "../../public/images/website-img-2.png",
      link: "https://github.com/Tusharedith/Legal-Navigator",
    },
    {
      name: "AI Chatbot Mindly",
      year: "Jan2025",
      align: "right",
      image: "../../public/images/website-img-4.png",
      link: "https://github.com/Umanginigam/Mindly",
    },
    {
      name: "Pinterest Clone",
      year: "May2024",
      align: "left",
      image: "../../public/images/website-img-3.png",
      link: "https://github.com/Tusharedith/pinterest-project",
    },
  ];
  
const ProjectsMain = () => {
  return (
    <div  id="projects" className="max-w-[1200px] mx-auto px-4">
        <motion.div
                variants={fadeIn("up",0.2)}
                initial='hidden'
                whileInView='show'
                viewport={{ once: false,amount: 0}}
                >
        <ProjectsText />
        </motion.div>
        <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
            {projects.map((item,index) => {
                return (
                <SingleProject 
                key={index}
                name={item.name}
                year={item.year}
                align={item.align}
                image={item.image}
                link = {item.link}
                />
                );
            })}
        </div>
    </div>
  )
}

export default ProjectsMain