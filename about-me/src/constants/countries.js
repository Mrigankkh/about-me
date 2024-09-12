import * as am5 from "@amcharts/amcharts5";
import USA_NY_ManhattanSkyline from "../assets/Travel/us/USA_NY_ManhattanSkyline.jpeg";
import US_NY_NYC_TimesSquare from "../assets/Travel/us/US_NY_NYC_TimesSquare.jpeg";
import US_MA_Cambridge_CharlesRiver from "../assets/Travel/us/US_MA_Cambridge_CharlesRiver.jpeg"
import Nepal_MTEVEREST from "../assets/Travel/np/NP_MTEVEREST.jpeg";
import AE_Dubai_BurjKhalifaView from "../assets/Travel/ae/AE_Dubai_BurjKhalifaView.jpg";
import AE_Dubai_Dunes from "../assets/Travel/ae/AE_Dubai_Dunes.jpg";
import AE_AbuDabhi_GrandMosque from "../assets/Travel/ae/AE_AbuDabhi_GrandMosque.jpg";
import IN_DL_HumayunsTomb from "../assets/Travel/in/IN_DL_HumayunTomb.jpg";
import IN_HP_Shimla_gh from  "../assets/Travel/in/IN_HP_Shimla_gh.jpg";
import IN_KL_Wayanad_Lake from "../assets/Travel/in/IN_KL_Wayanad_Lake.jpg";

const countries = 
  [{
    id: "US",
    url: "#us",
    name: "United States",
    polygonSettings: {
      fill: am5.color("#68187a  ")
      },
      images: [
        {
          url: USA_NY_ManhattanSkyline,
          title: "Manhattan Skyline",
          description: "Manhattan Skyline in Spring, NYC, New York",
        },{
          url: US_NY_NYC_TimesSquare,
          title: "Times Square",
          description: "Times Square in New York City, USA",
        },
        {
          url: US_MA_Cambridge_CharlesRiver,
          title: "Charles River",
          description: "Charles River in Cambridge, Massachusetts, USA",
        }
      ]
    }, 
    {
    id: "IN",
    url: "#in",
    name: "India",
    polygonSettings: {
      fill: am5.color("#68187a ")
      },
      images: [
        {
          url: IN_DL_HumayunsTomb,
          title: "Humayun's Tomb",
          description: "Humayun's Tomb, Delhi, India",
        },
        {
          url: IN_KL_Wayanad_Lake,
          title: "Pookode Lake",
          description: "Pookode Lake, Wayanad, Kerala, India",
        }
      ]
    },
    {
    id: "NP",
    url: "#np",
    name: "Nepal",
    polygonSettings: {
      fill: am5.color("#68187a  ")
      },
      images: [
        {
          url: Nepal_MTEVEREST,
          title: "Mount Everest", 
          description: "A view of Mount Everest, Nepal",
        }
      ]
    },
    {
    id: "AE",
    url: "/#ae",
    name: "United Arab Emirates",
    polygonSettings: {
      fill: am5.color("#68187a ")
      },
      images: [
        {
          url: AE_Dubai_BurjKhalifaView,
          title: "View from Burj Khalifa",
          description: "View from Burj Khalifa, Dubai, UAE",
        },
        {
          url: AE_Dubai_Dunes,
          title: "Dunes of Dubai!",
          description: "Dunes of Dubai, UAE",
        },
        {
          url: AE_AbuDabhi_GrandMosque,
          title: "Sheikh Zayed Grand Mosque",
          description: "A view of the Mosaic ceiling of Sheikh Zayed Grand Mosque, Abu Dhabi, UAE",
        },

      ]
    },
    {
      id: "LK",
      url: "#lk",
      name: "Sri Lanka",
      polygonSettings: {
        fill: am5.color("#68187a  ")
        },
        images: [
          {
            url: "https://example.com/srilanka.jpg",
            title: "Sri Lanka Image",
            description: "Description of Sri Lanka Image",
          }
        ]
      },
      {
      id: "SG",
      url: "#sg",
      name: "Singapore",
      polygonSettings: {
        fill: am5.color("#68187a  ")
        },
        images: [
          {
            url: "https://example.com/singapore.jpg",
            title: "Singapore Image",
            description: "Description of Singapore Image",
          }
        ]
      },
    {
    id: "GB",
    url: "/travel#gb",
    name: "United Kingdom",
    polygonSettings: {
      fill: am5.color("#68187a ")
      },
      images: [
        {
          url: "https://example.com/uk.jpg",
          title: "UK Image",
          description: "Description of UK Image",
        }
      ]
    },
    {
    id: "TR",
    url: "/travel#tr",
    name: "Turkey",
    polygonSettings: {
      fill: am5.color("#68187a ")
      },
      images: [
        {
          url: "https://example.com/turkey.jpg",
          title: "Turkey Image",
          description: "Description of Turkey Image",
        }
      ]
    }
  
  ]


export default countries;