import sabre from "../Assets/sabre-logo.png"
import dell from "../Assets/dell-logo.jpeg"
import neu from "../Assets/neu-logo.png"
import msrit from "../Assets/msrit-logo.jpeg"
const experiences = [
    {
        title: "M.S. Computer Science",
        company_name: "Northeastern University",
        icon: neu ,
        iconBg: "#383E56",
        date: "Sept 2023 - Present",
        points: [
          "A graduate student at Northeastern University, Boston. Some of my courseworks here include Programming Design and Paradigms, Artificial Intelligence",
          
        ],
      },
    {
      title: "Software Development Intern",
      company_name: "Sabre",
      icon: sabre ,
      iconBg: "#383E56",
      date: "Jan 2023 - July 2023",
      points: [ "Programmed product features, bug fixes and security enhancements in C# and OracleDB on the Radixx Res product in the Radixx vertical.",
         "Designed and developed a dashboard in React, Express, NodeJS, JavaScript and OracleDB to provide enhanced accessibility to sales data aimed at reducing and resolving sales disputes.",
         "Awarded 2nd place in Intern Hackathon organized by the company."
    
      ],
    },
    {
      title: "Undergraduate Intern",
      company_name: "Dell Technologies",
      icon: dell,
      iconBg: "#383E56",
      date: "Apr 2022 - June 2023",
      points: [
        "Developed a system using Python leveraging Bayesian ARM model to detect and flag combinations of parts that may cause a high product failure rate.",
      ],
    },
    {
      title: "Research Intern",
      company_name: "Ramaiah Institute of Technology",
      icon: msrit,
      iconBg: "#E6DEDD",
      date: "Feb 2022 - Aug 2022",
      points: [
      "  Built a tool in Python for Descriptive Answer Evaluation of subjective answers in semester-end examinations."
      ,"Compared various NLP Techniques, including BERT, word embeddings for finding semantic similarity between model answers and student answers."
      ],
    },
    {
        title: "B.E. Computer Science & Engineering",
        company_name: "Ramaiah Institute of Technology",
        icon: msrit,
        iconBg: "#E6DEDD",
        date: "Aug 2019 - July 2023",
        points: [
          "Relevant coursework: Data Structures, Design and Analysis of algorithms, Database Systems, Object Oriented Design",
          "Core team member of the Apple Developers Group, Ramaiah Institute of Technology"
        ],
      },
  ];
export default experiences  