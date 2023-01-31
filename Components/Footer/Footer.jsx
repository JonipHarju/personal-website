import { Link, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

export default function Footer() {
  return (
    <Container
      disableGutters
      sx={{ backgroundColor: "white" }}
      maxWidth="false"
    >
      <Box sx={{ marginLeft: "5rem", marginTop: "3rem" }}>
        <Typography variant="h5" component="h6" fontWeight="light">
          Email:
        </Typography>
        <Typography variant="h6" fontWeight="light" mb={5}>
          jonipharju@gmail.com
        </Typography>
        <Typography variant="h5" component="h6" fontWeight="light" mb={5}>
          socials:
        </Typography>
        <Link href="https://github.com/JonipHarju">
          <img
            width="50px"
            style={{ marginRight: "10px" }}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
            alt="github"
          />
        </Link>
        <Link href="https://www.linkedin.com/in/joni-h-89172a134/">
          <img
            width="50px"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg"
            alt="linkedin"
          />
        </Link>
      </Box>
      <Box></Box>
    </Container>
  );
}
