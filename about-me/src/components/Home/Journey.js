import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { Container } from "react-bootstrap";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "./styles";
import experiences from "../../constants/Experiences";
import { SectionWrapper } from "../../utils/hoc";
import { textVariant } from "../../utils/motion";
import JourneyCard from "./JourneyCard";
const Journey = () => {
  return (
    <Container className="home-journey-section">
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center`}>My Journey</h2>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <JourneyCard key={`experience-${index}`} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </Container>
  );
};

export default SectionWrapper(Journey, "work");
