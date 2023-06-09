import React from "react"
import { Card, Typography } from "antd"
import { CodeCardProps } from '../../types/Card';
import { Variants, motion } from "framer-motion";
import { staggerContainer } from "@/utils/motion";
import styles from "@/styles";


export const CustomCodeCard: React.FC<CodeCardProps> = ({
  content = null,
}) => {
  const staggerContainer: Variants= {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0,
        delayChildren: 0,
      },
    },
  };
  return (
    <Card  className="codecardshadow codecardbackground" >
   <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
  >
      {content}
      </motion.div>
    </Card>
  
  );
}