import React from "react";
import { Typography, Box } from "@mui/material";
import Style from "./Projects.module.css";
import { Container } from "@mui/system";
import Project from "./ProjectDisplaySkeleton";
import Image2 from "../../public/memoryGame.jpg";
import Image1 from "../../public/signUpPage.jpg";
import Image3 from "../../public/weatherApp.jpg";
import Image4 from "../../public/quizApp.jpg";
export default function Projects() {
  return (
    <Container
      disableGutters
      sx={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "#e6efff",
        flexDirection: "column",
      }}
      maxWidth="false"
    >
      <div className={Style.projectsHeadingContainer}>
        <Typography
          variant="h2"
          component="h6"
          color="brand.main"
          mb={5}
          mt={5}
          fontWeight="bold"
        >
          Projects
        </Typography>
      </div>

      <div className={Style.projectsContainer}>
        <Project
          header={"Memory Game"}
          image={Image1}
          text={
            "A simple memory game made with React. You need to click each card once and after each click they shuffle around. "
          }
        />
        <Project
          header={"Memory Game"}
          image={Image2}
          text={
            "A simple memory game made with React. You need to click each card once and after each click they shuffle around. "
          }
        />
        <Project
          header={"Memory Game"}
          image={Image3}
          text={
            "A simple memory game made with React. You need to click each card once and after each click they shuffle around. "
          }
        />
        <Project
          header={"Memory Game"}
          image={Image4}
          text={
            "A simple memory game made with React. You need to click each card once and after each click they shuffle around. "
          }
        />
      </div>
    </Container>
  );
}
