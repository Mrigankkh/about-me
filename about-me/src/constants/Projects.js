import IME from "../assets/Projects/IME.png";
import ASL from "../assets/Projects/ASL.png";
import UNISPHERE from "../assets/Projects/UNISHPERE.png";
import READMEAI from "../assets/Projects/READMEAI.png";
import CHASER from "../assets/Projects/CHASER.png";
import MELOSOFIA from "../assets/Projects/MELOSOFIA.png";
import CE from "../assets/Projects/codeEditor.png";
const PROJECTS = [

  {
    imgPath: READMEAI,
    isBlog: false,
    title: "Readme.ai",
    description:
      "An AWS hosted GenAI Web App that automates Readme generation for GitHub repositories using Anthropic's LLM APIs. ",
    ghLink: "https://github.com/Mrigankkh/Readme.ai",
    demoLink: "https://mrigankkh.github.io/Readme.ai",
  },

  {
    imgPath: MELOSOFIA,
    isBlog: false,
    title: "Melosifia",
    description:
      "Melosofia is a web application built using React, Node,js, Express and Firebase that explores the intersection of music and philosophy, allowing users to share and discover interpretations of song lyrics.",
    ghLink: "https://github.com/Mrigankkh/Melosofia",
    demoLink: "https://melosofia.netlify.app/",
  },
  {
    imgPath: CHASER,
    isBlog: false,
    title: "ChaseR",
    description:
      "A Game Artificial Intelligence System ",
    ghLink: "https://github.com/Mrigankkh/ChaseR",
   
  },
  {
    imgPath: IME,
    isBlog: false,
    title: "IME: Image Manipulation and Enhancement",
    description:
      "A Desktop image processing application in Java with a text-based and a GUI interface. ",
    ghLink: "https://github.com/Mrigankkh/Image-Manipulation-and-Enhancement",
  },
  {
    imgPath: UNISPHERE,
    isBlog: false,
    title: "UniSphere",
    description:
      "An android application for a social media platform for university students to connect and share. Developed using Java, Kotlin and Firebase. Features include Image Feed,Push Notifications, In-app Messaging and Real Time Events",
    ghLink: "https://github.com/Mrigankkh/UniSphere",
    demoLink:"http://appetize.io/app/b_qumyf7vpq3rizyuyqi4vyymaqe?device=pixel7&osVersion=13.0"
  },
  {
    imgPath: ASL,
    isBlog: false,
    title: "ASL-2-Sentence",
    description:
      "This project aims to integrate Computer Vision and Natural Language Processing to classify images of ASL hand signs to their respective characters and to generate meaningful sentences from the keywords signed.",
    ghLink: "https://github.com/Mrigankkh/ASL-2-Text",
  },
  {
    imgPath: CE,
    isBlog: false,
    title: "Descriptive Evaluation",
    description:
      "Built a tool in Python for Descriptive Answer Evaluation of subjective answers in semester0end evaluations. Various NLP techniques were compared including BERT and word embeddings to find semantic similarity between Student answers and the answer key.",
    ghLink: "https://github.com/Mrigankkh/DescriptiveEval",
  },
];

export default PROJECTS;
