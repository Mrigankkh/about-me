import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";
import { styles } from "./styles";
import experiences from "../../constants/experience";
import { SectionWrapper } from "../../hoc";
import { textVariant } from "../../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div  className='flex justify-center items-center w-full h-full'>
           <img
           style={{width:"100%",height:"100%", borderRadius:"100%", objectFit:"cover"}}
            src={experience.icon}
            alt={experience.company_name}
          /> 
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[28px] font-bold'>{experience.title}</h3>
        <b
          className='purple  '
          style={{ margin: 0 , fontSize:"20px", textAlign:"justify"}}
        >
          {experience.company_name}
        </b>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <p 
            key={`experience-point-${index}`}
            style={{ margin:"10px", fontSize:"18px"}}
            className='text-white-100 text-[22px] pl-1 tracking-wider'
          >
            {point}
           
          </p>
        
          
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
    
        <h2 className={`${styles.sectionHeadText} text-center`}>
          My Journey
        </h2>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");