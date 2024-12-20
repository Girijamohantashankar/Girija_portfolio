"use client";
import React, { useState } from "react";
import "../../../styles/projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import MobileApplication from "../mobileapplication/page";
import WebProjects from "../webproject/page";
import CompanyTask from "../companytask/page";
import LanguageProject from "../languageproject/page";

const projects = [
  {
    images: ["/images/codeweavetech1.png", "/images/codeweavetech2.png", "/images/codeweavetech3.png","/images/codeweavetech4.png","/images/codeweavetech5.png"],
    title: "CodeweaveTech",
    summary:
      "Welcome to CodeweaveTech, a cutting-edge IT solutions platform built with modern web technologies and hosted on Vercel. With a sleek and professional design featuring a black background and vibrant #00bcd4 accents, our website embodies innovation and style. At CodeweaveTech, we specialize in delivering comprehensive tech services tailored to meet your business needs. Explore our expertise in software development, digital transformation, and IT consulting, and discover how we can help weave technology seamlessly into your success.",
    github: "https://github.com/Girijamohantashankar/CodeweaveTech.git",
    demo: "https://codeweavetech.vercel.app/",
  }, 
  {
    images: ["/images/chitchat1.png", "/images/chitchat2.png", "/images/chitchat3.png","/images/chitchat4.png","/images/chitchat5.png"],
    title: "ChitChat",
    summary:
      "Introducing a modern chat application built with React Native, offering real-time messaging and a user-friendly interface. This app provides seamless communication, incorporating features such as instant notifications, personalized user profiles, and smooth navigation. Designed to ensure a reliable and interactive user experience, it is optimized for both iOS and Android platforms, making it accessible and functional for diverse users. Perfect for connecting with friends, family, or colleagues anytime, anywhere.",
    github: "https://github.com/Girijamohantashankar/chitchat.git",
    demo: "https://chitchat-drab-ten.vercel.app/",
  },            
  {
    images: ["/images/qr1.png", "/images/qr2.png", "/images/qr3.png"],
    title: "Qr Code Generator(Vue js)",
    summary:
      "I have developed a QR code generator using Vue.js, where users can input a URL and instantly generate a corresponding QR code. The application is simple, user-friendly, and perfect for those who want to quickly create QR codes for websites, links, or any online resources. Built with a modern and responsive UI, it ensures a seamless experience across devices. This project showcases the power of Vue.js for building interactive and dynamic web applications.",
    github: "https://github.com/Girijamohantashankar/QR-Code-Generator.git",
    demo: "https://girija-qr.netlify.app/",
  },
  {
    images: [
      "/images/jsmaster1.png",
      "/images/jsmaster2.png",
      "/images/jsmaster3.png",
      "/images/jsmaster4.png",
      "/images/jsmaster5.png",
    ],
    title: "JS Master(Next js)",
    summary:
      "The JS Master project is a robust web application designed to enhance user interaction and data management through a seamless interface. At its core, the project features comprehensive user authentication, including secure login, registration, and password reset functionalities. Users can manage their content through a personalized dashboard, which includes tools for creating and editing posts, and uploading images. The application leverages advanced data visualization techniques, such as charts and progress indicators, to provide users with clear insights into their activities and achievements. Built using React and Next.js, the project ensures a responsive and mobile-friendly design, while Firebase handles authentication and storage needs. Deployed on Vercel, the application emphasizes scalability, maintainability, and security, addressing challenges such as client-server rendering discrepancies and robust error handling. Overall, the JS Master project aims to deliver an intuitive and secure platform for managing user content and tracking progress efficiently.",
    github: "https://github.com/Girijamohantashankar/js-master.git",
    demo: "https://js-masters.vercel.app/",
  },
  {
    images: [
      "/images/1.png",
      "/images/2.png",
      "/images/3.png",
      "/images/4.png",
      "/images/5.png",
    ],
    title: "My Portfolio(Next js)",
    summary:
      "Girija Portfolio is a personal portfolio website built with Next.js and MongoDB, showcasing my projects, skills, and professional experience. The website features an elegant design with smooth animations and dynamic content, providing an engaging user experience. From frontend development to backend integration, the portfolio highlights my expertise in modern web technologies. It includes sections like Projects, Skills, Work Experience, and Certificates to give a comprehensive overview of my professional journey. Hosted on Vercel, the website is optimized for performance and SEO, making it easily accessible and fast.",
    github: "https://github.com/Girijamohantashankar/Girija_portfolio.git",
    demo: "https://girija-portfolio.vercel.app/",
  },
  {
    images: [
      "/images/project-1.png",
      "/images/project-11.png",
      "/images/project-12.png",
      "/images/project-13.png",
    ],
    title: "Jobupdate360",
    summary:
      "JobUpdate360 is a full-stack web application built with React, Node.js, and MongoDB that provides users with a comprehensive platform to post, manage, and search for jobs. The project streamlines the job-hunting process by allowing recruiters to post job listings and candidates to apply directly through the platform. With features like job filtering, application tracking, and user authentication, JobUpdate360 offers a seamless experience for both recruiters and job seekers. The backend is powered by Node.js and MongoDB, ensuring efficient data management and a robust API for handling job-related operations.",
    github: "https://github.com/Girijamohantashankar/jobupdate360.git",
    demo: "https://jobupdate360.in/",
  },
  {
    images: [
      "/images/project-2.png",
      "/images/project-21.png",
      "/images/project-23.png",
      "/images/project-24.png",
    ],
    title: "Pocket Saving",
    summary:
      "PacketSaving is a full-stack web application designed to help users manage and optimize their finances. Built using React, Node.js, and MongoDB, this platform offers various tools and features that allow users to track expenses, set savings goals, and monitor their financial progress. With secure user authentication and a responsive interface, users can easily input their financial data, view reports, and gain insights into their spending habits. The backend, developed with Node.js and MongoDB, ensures that all financial data is stored securely and efficiently, making PacketSaving a reliable solution for personal financial management.",
    github: "https://github.com/Girijamohantashankar/PocketSaving-App.git",
    // demo: 'https://pocketsaving.onrender.com/'
  },

  {
    images: [
      "/images/project-3.png",
      "/images/project-31.png",
      "/images/project-33.png",
    ],
    title: "DeepChat",
    summary:
      "DeepChat is a real-time chat application built using React, Node.js, and MongoDB, with Chakra UI for styling. This platform enables users to connect and communicate instantly with others through a clean and intuitive interface. Featuring real-time messaging, user authentication, and group chat options, DeepChat offers a seamless experience across devices. The use of Chakra UI ensures a consistent and responsive design, while the backend, powered by Node.js and MongoDB, handles real-time communication and data storage efficiently. DeepChat provides a secure and interactive way to stay connected with friends, colleagues, and communities.",
    github: "https://github.com/Girijamohantashankar/DeepChat.git",
    demo: "https://deepchat-app.onrender.com/",
  },
  {
    images: [
      "/images/project-4.png",
      "/images/project-41.png",
      "/images/project-42.png",
      "/images/project-43.png",
      "/images/project-44.png",
    ],
    title: "Adventure Trip",
    summary:
      "Adventure Trip is a dynamic travel platform built using React, Node.js, MongoDB, and Firebase, with SCSS for styling. This platform allows users to explore and book various adventure trips around the world. With Firebase integrated for user authentication and real-time data synchronization, the app ensures secure and seamless user experiences. SCSS is used to provide a visually appealing, responsive design, while Node.js and MongoDB handle backend logic and data management. Adventure Trip offers a one-stop solution for travel enthusiasts looking for thrilling adventure experiences.",
    github: "https://github.com/Girijamohantashankar/Adventuretrip.git",
    demo: "https://adventuretrip.onrender.com/",
  },
  {
    images: [
      "/images/project-5.png",
      "/images/project-51.png",
      "/images/project-52.png",
      "/images/project-53.png",
      "/images/project-54.png",
    ],
    title: "ShortPost",
    summary:
      "Shortpost is a modern blogging platform developed with React, Node.js, MongoDB, and Cloudinary. The app enables users to create, edit, and share short-form content effortlessly. Cloudinary is utilized for managing and optimizing media assets, ensuring fast and reliable image and video handling. The platform leverages MongoDB for robust data storage and retrieval, Node.js for backend processing, and React for a dynamic and responsive user interface. Shortpost provides a seamless experience for content creators and readers alike, with a focus on simplicity and efficiency.",
    github: "https://github.com/Girijamohantashankar/ShortPost.git",
    demo: "https://shortpost.onrender.com/",
  },
  {
    images: [
      "/images/project-7.png",
      "/images/project-71.png",
      "/images/project-72.png",
      "/images/project-73.png",
    ],
    title: "JS Master",
    summary:
      "Currently developing JSMaster, a full-stack web application designed to offer a comprehensive JavaScript problem-solving platform. The frontend is built with React to provide an interactive and responsive user interface, while Node.js handles the backend operations, ensuring efficient server-side logic. Mongoose is utilized for managing MongoDB databases, enabling effective data storage and retrieval. The application aims to feature a range of JavaScript problems, user authentication, and performance tracking, with ongoing development focused on enhancing functionality and user experience.",
    github: "https://github.com/Girijamohantashankar/jsmaster.git",
    demo: "",
  },
];

export default function ProjectsPage() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleReadMore = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="projects_container">
      <div className="recent_work">
        <h1>
          My Re<span>cent</span> Work
        </h1>
        <p>
          Here are a few <span className="span_text">full stack projects</span>{" "}
          I have worked on recently.
        </p>

        <div className="project_grid">
          {projects.map((project, index) => (
            <div key={index} className="project_card">
              <Slider {...settings}>
                {project.images.map((image, imgIndex) => (
                  <div key={imgIndex} className="project_image_wrapper">
                    <Image
                      src={image}
                      alt={`Project ${index} Image ${imgIndex}`}
                      className="project_image"
                      layout="responsive"
                      width={500}
                      height={300}
                    />
                  </div>
                ))}
              </Slider>
              <div className="project_info">
                <h2>{project.title}</h2>
                <p className="project_para">
                  {expandedIndex === index
                    ? project.summary
                    : project.summary.length > 100
                    ? project.summary.substring(0, 100) + "..."
                    : project.summary}
                  {project.summary.length > 100 && (
                    <span
                      onClick={() => handleReadMore(index)}
                      className="read_more_button"
                    >
                      {expandedIndex === index ? "Read Less" : "Read More"}
                    </span>
                  )}
                </p>

                <div className="project_buttons">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project_button"
                  >
                    <FontAwesomeIcon icon={faGithub} /> GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project_button"
                  >
                    <FontAwesomeIcon icon={faExternalLinkAlt} /> Demo View
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <MobileApplication />
      <WebProjects />
      <CompanyTask />
      <LanguageProject />
    </div>
  );
}
