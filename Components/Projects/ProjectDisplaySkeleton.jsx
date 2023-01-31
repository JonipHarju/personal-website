import { Typography } from "@mui/material";
import React from "react";
import Style from "./ProjectDisplaySkeleton.module.css";
import Image from "next/image";

export default function Project(props) {
  return (
    <div className={Style.projectContainer}>
      <div className={Style.textContainer}>
        <Typography variant="h4" component="h6" mb={5} mt={5}>
          {props.header}
        </Typography>
        <Typography variant="h6" component="body1" fontWeight="bold" mb={5}>
          {props.text}
        </Typography>
      </div>

      <div className={Style.imageContainer}>
        <Image
          src={props.image}
          fill
          style={{ objectFit: "fill" }}
          alt="Image of the project"
        />
      </div>
    </div>
  );
}
