import IME from "../assets/Projects/IME.png";
import ASL from "../assets/Projects/ASL.png";
import UNISPHERE from "../assets/Projects/UNISHPERE.png";
import CE from "../assets/Projects/codeEditor.png";
const PROJECTS = [
  {
    imgPath: IME,
    isBlog: false,
    title: "IME: Image Manipulation and Enhancement",
    description:
      "A Desktop image processing application in Java with a text-based and a GUI interface. As per the Academic Integrity Policy of the University, the source code can be made public only upon request. The JAR file is publicly available.",
    ghLink: "https://github.com/Mrigankkh/Image-Manipulation-and-Enhancement",
  },
  {
    imgPath: UNISPHERE,
    isBlog: false,
    title: "UniSphere",
    description:
      "An android application for a social media platform for university students to connect and share. Developed using Java with Firebase.",
    ghLink: "https://github.com/Mrigankkh/UniSphere",
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
