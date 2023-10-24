import { CgGym } from "react-icons/cg";
import { IoMdNutrition } from "react-icons/io";
import { GiShower } from "react-icons/gi";
import { BsFillHeartPulseFill } from "react-icons/bs";
import { IoIosCall } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import {FaFacebookF} from "react-icons/fa6";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { BiLogoLinkedin } from "react-icons/bi";
import { IoIosFitness } from "react-icons/io";
import { IoFitnessSharp } from "react-icons/io5";
import {MdSportsGymnastics} from "react-icons/md";

import { gallery_1,gallery_2,gallery_3,gallery_4,gallery_5,gallery_6,gallery_7,gallery_8,gallery_9,gallery_10 } from "./images/images";

const links = [
  {
    id: 1,
    name: 'Home',
    path: '/'
  },
  {
    id: 2,
    name: 'About',
    path: '/about',
  },
  {
    id: 3,
    name: 'Gallery',
    path: '/gallery',    
  },
  {
    id: 4,
    name: 'Blog',
    path: '/blog',    
  },
  {
    id: 5,
    name: 'Services',
    path: '/services',    
  },

];


const fitness = [
  {
    id: 1,
    name: 'Quality Equipment',
    body:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aen ean commodo ligula eget dolor.',
    icon: <CgGym/>
  },
  {
    id: 2,
    name: 'Healthy Nutrition Plan',
    body:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aen ean commodo ligula eget dolor.',
    icon:<IoMdNutrition/>
  },
  {
    id: 3,
    name: 'Shower Service',
    body:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aen ean commodo ligula eget dolor.',
    icon: <GiShower/>
  },
  {
    id: 4,
    name: 'Unique to Your Needs',
    body:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aen ean commodo ligula eget dolor.',
    icon:<BsFillHeartPulseFill/>
  },

  
];

const contact = [
  {
    id: 1,
    text: '+123 456 7890',
    icon: <IoIosCall/>
  },
  {
    id: 2,
    text: 'navdeeprana1425@gmail.com',
    icon: <IoIosMail/>
  },
  {
    id: 3,
    text: '#1007 A, Sector 52/B, Chandigarh',
    icon: <FaLocationDot/>
  },
]


const social = [
  {
    id: 1,
    icon: <FaFacebookF/>,
    path:"https://www.facebook.com/"
  },
  {
    id: 2,
    icon: <BiLogoInstagramAlt/>,
    path:"https://www.instagram.com/"
  },
  {
    id: 3,
    icon: <BiLogoLinkedin/>,
    path:"https://in.linkedin.com/"
  },
]


const gallery = [
  {
    id: 1,
    alt: "gallery_1",
    path:gallery_1
  },
  {
    id: 2,
    alt: "gallery_2",
    path:gallery_2
  },
  
  {
    id: 3,
    alt: "gallery_3",
    path:gallery_3
  },
  
  {
    id: 4,
    alt: "gallery_4",
    path:gallery_4
  },
  
  {
    id: 5,
    alt: "gallery_5",
    path:gallery_5
  },

  {
    id: 6,
    alt: "gallery_6",
    path:gallery_6
  },

  {
    id: 7,
    alt: "gallery_7",
    path:gallery_7
  },

  {
    id: 8,
    alt: "gallery_8",
    path:gallery_8
  },

  {
    id: 9,
    alt: "gallery_9",
    path:gallery_9
  },
  {
    id: 10,
    alt: "gallery_10",
    path:gallery_10
  }
]



const services = [
  {
    id: 1,
    icon: <IoIosFitness/>,
    heading:"Group Fitness Classes",
    content:"Our expert personal trainers offer customized workout plans tailored to your specific fitness goals. Whether you're aiming for weight loss, muscle gain, or improved overall fitness, our trainers are dedicated to guiding you every step of the way."
  },
  {
    id: 2,    
    icon: <IoFitnessSharp/>,
    heading:"Group Fitness Classes",
    content:"Join our invigorating group fitness classes led by certified instructors. From high-intensity interval training (HIIT) and yoga to spin classes and Zumba, we offer a diverse range of group workouts designed to keep you motivated and engaged."
  },
  {
    id: 3,
    icon: <MdSportsGymnastics/>,
    heading:"State-of-the-Art Facilities",
    content:"Enjoy access to our cutting-edge gym equipment, including cardio machines, free weights, and strength training equipment. Our modern facilities are designed to provide a comfortable and motivating environment for all your workout needs."
  },
  {
    id: 4,
    icon: <BiLogoLinkedin/>,
    heading:"Nutritional Guidance",
    content:"Achieve your fitness goals faster with personalized nutritional guidance from our experienced nutritionists. Learn about the right diet and nutrition plans that complement your workout regimen and help you maintain a healthy lifestyle."
  },
  {
    id: 5,
    icon: <BiLogoLinkedin/>,
    heading:"Wellness and Recovery Programs",
    content:"Take advantage of our wellness and recovery programs, including massage therapy, yoga sessions, and specialized stretching programs. These offerings are designed to help you recover faster, prevent injuries, and maintain overall well-being."
  },
  {
    id: 6,
    icon: <BiLogoLinkedin/>,
    heading:"Virtual Training Options",
    content:"Access our virtual training sessions, allowing you to participate in workouts from the comfort of your home. Stay connected with our trainers and maintain your fitness routine even when you're unable to visit the gym in person."
  },
  {
    id: 7,
    icon: <BiLogoLinkedin/>,
    heading:"Fitness Assessments and Goal Setting",
    content:"Get started on your fitness journey with a comprehensive fitness assessment and goal-setting session. Our team will work with you to understand your current fitness level and help you establish realistic and achievable goals."
  },
  {
    id: 8,
    icon: <BiLogoLinkedin/>,
    heading:"Community Events and Challenges",
    content:"Engage with our vibrant fitness community through various events and challenges organized regularly. Participate in fitness challenges, seminars, and social gatherings that promote a sense of camaraderie and motivation among our members."
  }
]




export {links,fitness,contact,social,gallery,services};
