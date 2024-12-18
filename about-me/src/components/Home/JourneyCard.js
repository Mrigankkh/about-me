import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

const JourneyCard = ({ experience }) => {
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
        <div className="flex justify-center items-center w-full h-full">
          <img
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "100%",
              objectFit: "cover",
            }}
            src={experience.icon}
            alt={experience.company_name}
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[28px] font-bold">{experience.title}</h3>
        <b
          className="purple  "
          style={{ margin: 0, fontSize: "20px", textAlign: "justify" }}
        >
          {experience.company_name}
        </b>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <p
            key={`experience-point-${index}`}
            style={{ margin: "10px", fontSize: "18px" }}
            className="text-white-100 text-[22px] pl-1 tracking-wider"
          >
            {point}
          </p>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};
export default JourneyCard;
