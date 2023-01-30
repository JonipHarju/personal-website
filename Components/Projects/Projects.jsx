import React from "react";
import { Typography, Box } from "@mui/material";
import Style from "../../styles/Projects.module.css";
import { Container } from "@mui/system";
import Project from "./ProjectDisplaySkeleton";
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
      <Box
        sx={{
          width: "50%",
          display: "flex",
          justifyContent: "flex-start",
          flexDirection: "column",
        }}
        m={0}
      >
        <Typography
          variant="h3"
          component="h5"
          color="brand.main"
          mb={5}
          mt={5}
        >
          Projects
        </Typography>
        <Typography variant="h6" component="body1" fontWeight="light" mb={5}>
          Below are a few of my practice projects! Note that some of these I did
          after only coding for a few months
        </Typography>
      </Box>

      <Box
        sx={{
          width: "50%",
          backgroundColor: "red",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Project />
      </Box>
    </Container>
  );
}
