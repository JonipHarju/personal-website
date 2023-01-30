import { Button, Icon, Typography, Spacing } from "@mui/material";
import React from "react";
import Style from "../../../styles/Introduction.module.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Introduction() {
  console.log(GitHubIcon);
  return (
    <section className={Style.container}>
      <div className={Style.infoContainer}>
        <div className={Style.headerContainer}>
          <Typography variant="h2" component="h1" sx={{ fontWeight: "bold" }}>
            Hi, I am Joni Harju
          </Typography>
          <Typography
            variant="h2"
            sx={{ fontWeight: "bold" }}
            color="brand.main"
          >
            A Web Developer
          </Typography>
        </div>
        <Typography variant="h5" component="h3" mt={1}>
          Creating the most amazing websites
        </Typography>
        <div className={Style.iconContainer}>
          {/* <GitHubIcon fontSize="large" />
          <LinkedInIcon fontSize="large" /> */}
        </div>
        <div className={Style.buttonContainer}>
          <Button
            variant="contained"
            sx={[
              {
                width: "60%",
                backgroundColor: "brand.main",
                transition: "0.5s",
                marginTop: "1rem",
                color: "white",
              },
              {
                ":hover": {
                  backgroundColor: "#ffffff", // theme.palette.primary.main
                  color: "black",
                },
              },
            ]}
          >
            <Typography variant="h6" component="h4">
              Continue
            </Typography>
          </Button>
        </div>
      </div>
      <div className={Style.imageContainer}>
        <img
          className={Style.img}
          src="pngwing.com.png"
          alt="programmer logo"
        />
      </div>
    </section>
  );
}
