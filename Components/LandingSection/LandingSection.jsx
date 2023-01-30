import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Image from "../../public/backgroundImage.jpg";
import Introduction from "./Introduction/Introduction";
export default function LandingPage() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container disableGutters maxWidth="false">
        <Box
          sx={{
            backgroundImage: `url(${Image.src})`,
            backgroundSize: "cover",
            height: "100vh",
          }}
        >
          <Introduction />
        </Box>
      </Container>
    </React.Fragment>
  );
}
