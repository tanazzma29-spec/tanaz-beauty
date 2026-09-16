"use client";
import { motion } from "framer-motion";

export default function Reveal({children,delay=0,className=""}:{
  children:React.ReactNode; delay?:number; className?:string
}) {
  return <motion.div className={className}
    initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}}
    viewport={{once:true,amount:.18}}
    transition={{duration:.72,delay,ease:[.22,1,.36,1]}}>
    {children}
  </motion.div>;
}