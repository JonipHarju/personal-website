import { Typography } from "@mui/material";
import React from "react";
import Style from "./Introduction.module.css";

export default function Introduction() {
  return (
    <div className={Style.container}>
      <div className={Style.infoContainer}>
        <Typography variant="h2" component="h1">
          Hi, I am Joni Harju <br />A Web Developer
        </Typography>
        <Typography variant="body1">I am also a god gamer</Typography>
      </div>
      <div className={Style.imageContainer}></div>
    </div>
  );
}
