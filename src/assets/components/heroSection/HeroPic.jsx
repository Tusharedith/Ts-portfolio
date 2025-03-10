import React from 'react'
import { FaRegCircle } from "react-icons/fa";
import {motion} from "framer-motion";
import {fadeIn} from "../../../framerMotion/variants";

const HeroPic = () => {
  return (
    <motion.div
          variants={fadeIn("left",0.2)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: false,amount: 0}}
    className="h-full flex items-center justify-center py-10">
      <img src="../../public/images/Untitled design.png" alt = "Tushar Swarnkar" className="max-h-[430px] w-auto rounded-full"/>
      <div className=" absolute -z-10 flex justify-center items-center animate-pulse">
      <FaRegCircle className ="md:h-[90%] sm:h-[120%] min-h-[500px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite]"/>
      </div>
    </motion.div>
  )
}

export default HeroPic;