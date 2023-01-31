import React from "react";
import { Typography, Box } from "@mui/material";
import Style from "./Projects.module.css";
import { Container } from "@mui/system";
import Project from "./ProjectDisplaySkeleton";
import Image2 from "../../public/memoryGame.webp";
import Image1 from "../../public/signUpPage.webp";
import Image3 from "../../public/weatherApp.webp";
import Image4 from "../../public/quizApp.webp";
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
          url={"https://jonipharju.github.io/odin-sign-up-form/"}
          header={"Sign Up Page"}
          image={Image1}
          text={
            "A stylish sign up page. with a javascript validated form. Kinda cool imo :)"
          }
        />
        <Project
          url={"https://jonipharju.github.io/memory-game/"}
          header={"Memory Game"}
          image={Image2}
          text={
            "a simple memory game made with react featuring my family members"
          }
        />
        <Project
          url={"https://jonipharju.github.io/odin-weather-app/"}
          header={"Weather App"}
          image={Image3}
          text={
            "A barebones weather applications, that fetches the weather from api in celsius or fahrenheit"
          }
        />
        <Project
          url={"https://jonipharju.github.io/quiz-app/"}
          header={"Quiz Game"}
          image={Image4}
          text={
            "A video game themed Quiz Game with a scoreboard implemented with firebase. Still needs styling"
          }
        />
      </div>
    </Container>
  );
}
