import React from "react";
import dynamic from 'next/dynamic';
import { TypingText } from "@/components/CustomTexts";
import { fadeIn, staggerContainer } from "@/utils/motion";
import styles from "@/styles";
import { CustomPrimaryButton } from "../../components/Buttons/index";
import {motion,Variants} from "framer-motion"


export default function Community() {
  const staggerContainer: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0,
        delayChildren: 0,
      },
    },
  };
  return (
    <div className="container flex">
      <div className="font-semibold  text-black max-w-3xl mx-auto pt-10">
        <div className={`${styles.flexCenter} flex-col  gap-6 flex-wrap`}>
        <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    > 
   

          <motion.div
            variants={fadeIn('up', 'tween', 0.1, 1)}
            className=""
          >
           <div className="flex col gap-8  baseline justify-center">  
          <span className="font-semibold font-48 text-center leading-5 ">Create apps that</span>
          <CustomPrimaryButton
            buttonText="Run"
            icon={<img src="/Logo/global.png" width="35" />}
            size="large"
            className="font-semibold font-48 "
          />
          <span className="font-48 leading-5">everywhere.</span>
          </div>

           <div className="flex  col  gap-8 baseline justify-center">  
            <CustomPrimaryButton
            buttonText="Publish"
            icon={<img src="/Logo/publish.png" width="35" />}
            size="large"
            className="font-semibold font-48 "

          />
          <span className="font-48 leading-5 ">and share with the community</span>
          </div> 

     <div className="flex  col gap-8 baseline justify-center">   
                   <CustomPrimaryButton
                    buttonText="Edge"
                    icon={<img src="/Logo/community.png" width="35" />}
                    size="large"
                    className="font-semibold font-48 "

                    /> 
                  <TypingText title="to the edge, globally." textStyles="text-normal leading-5  font-48" />

           </div>  

          </motion.div>
    </motion.div>
          

        </div>
      </div>
    </div>
  );
}
