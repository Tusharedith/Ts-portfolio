import React from 'react';
import {motion} from "framer-motion";
import {fadeIn} from "../../../framerMotion/variants";


const HeroText = () => {
  return (
    <div className= "flex flex-col gap-4 h-full justify-center md:text-left sm:text-center"> 
      <motion.h2 
      variants={fadeIn("down",0.2)}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false,amount: 0}}
      className="lg:text-2xl sm:text-xl uppercase text-cyan">AI - ML & Web Devloper</motion.h2>
      <motion.h1
            variants={fadeIn("right",0.4)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false,amount: 0}}
      className="md:text-[2.8rem] lg:text-6xl sm:text-4xl font-bold font-special text-orange">Tushar Swarnkar</motion.h1>
      <motion.p
            variants={fadeIn("up",0.6)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false,amount: 0}}
       className ="text-lg mt-4 text-white">
       A passionate AI-driven developer with a sharp eye for design and <br/>love for crafting intelligent digital experiences.
      </motion.p>
      <button
      onClick={() => window.open('/images/Tushar_Swarnkar.pdf', '_blank')}
      className="border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-1 hover:bg-orange transition-all duration-400 cursor-pointer md:self-start sm:self-center text-white hover:text-black mx-0">
      Get Resume
      </button>

    </div>
  )
}

export default HeroText;