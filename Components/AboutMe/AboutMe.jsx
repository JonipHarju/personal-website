import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Style from "../../styles/AboutMe.module.css";

export default function () {
  return (
    <main className={Style.container}>
      <div className={Style.aboutMeContainer}>
        <Typography variant="h3" component="h5" color="brand.main" mb={3}>
          A bit about me
        </Typography>
        <Typography variant="h6" component="body1" fontWeight="light">
          I am a driven and enthusiastic junior web developer with a passion for
          building innovative and user-friendly websites. I have a solid
          understanding of HTML, CSS, and JavaScript, as well as experience
          working with React and Next.js <br />
          <br />I am constantly seeking out opportunities to expand my skill set
          and knowledge of the latest web development technologies. My
          dedication to writing clean and efficient code, along with my strong
          problem-solving abilities, make me a valuable asset to any development
          team. I am eager to use my skills and knowledge to bring creative and
          effective solutions to a wide range of web development projects."
        </Typography>
      </div>
      {/* #3399FF */}
      <div className={Style.technologyContainer}>
        <Typography variant="h3" component="h6" mb={3} color="brand.main">
          My Arsenal
        </Typography>
        <div className={Style.imageContainer}>
          <img
            className={Style.techImage}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
            alt="html"
          />
          <img
            className={Style.techImage}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
            alt="css3"
          />
          <img
            className={Style.techImage}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            alt="javascript"
          />
          <img
            className={Style.techImage}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
            alt="React"
          />
          <img
            className={Style.techImage}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
            alt="Next.js"
          />
          <img
            className={Style.techImage}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg"
            alt="Firebase"
          />
          <img
            className={Style.techImage}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
            alt="Material Ui"
          />
          <img
            className={Style.techImage}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-plain.svg"
            alt="webpack"
          />
        </div>
      </div>
    </main>
  );
}
