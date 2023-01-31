import { Typography, Box } from "@mui/material";
import React from "react";
import Style from "./ProjectDisplaySkeleton.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Project(props) {
  return (
    <div className={Style.projectContainer}>
      <div className={Style.textContainer}>
        <Typography variant="h4" component="h6" mb={5} mt={2}>
          {props.header}
        </Typography>
        <Typography variant="h6" component="body1" fontWeight="bold" mb={5}>
          {props.text}
        </Typography>
      </div>

      <Box
        className={Style.imageContainer}
        sx={{ height: { xs: "15rem", sm: "20rem", md: "25rem" } }}
      >
        <Link href={`${props.url}`}>
          <Image
            src={props.image}
            fill
            style={{ objectFit: "fill" }}
            alt="Image of the project"
          />
        </Link>
      </Box>
    </div>
  );
}
