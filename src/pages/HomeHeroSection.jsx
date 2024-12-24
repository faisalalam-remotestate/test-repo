import React from "react";
import { Box, Container, Stack, Typography, Button } from "@mui/material";

const HomeHeroSection = () => {
  return (
    <Box
      className="shouldAdaptForNavbar"
      sx={{
        position: "relative",
        height: "100vh", // Adjust height based on your requirement
        overflow: "hidden",
      }}
    >
      {/* Background Image */}
      <Box
        component="img"
        alt="bgImage"
        src="/_next/static/media/homeHeroSection.97c6cc95.jpg"
        sx={{
          position: "absolute",
          height: "100%",
          width: "100%",
          inset: 0,
          objectFit: "cover",
          color: "transparent",
        }}
      />

      {/* Content */}
      <Container
        className="section-content"
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Stack
          className="banner-container"
          spacing={2}
          sx={{
            textAlign: "center",
            color: "white",
          }}
        >
          {/* Title */}
          <Typography
            className="title"
            variant="h1"
            sx={{
              fontSize: { xs: "2rem", sm: "3rem", lg: "4rem" },
              fontWeight: "bold",
            }}
          >
            One-Stop-Shop Solution for Biochar in the Tropics
          </Typography>

          {/* Subtitle */}
          <Typography
            className="sub-title"
            variant="body2"
            sx={{
              fontSize: { xs: "1rem", sm: "1.25rem" },
            }}
          >
            Scalable, transparent carbon removal credits.
            <br />
            Empowering local farmers.
            <br />
            Enriching communities.
          </Typography>

          {/* Button */}
          <Button
            className="button"
            href="/remove-co2/plan"
            variant="contained"
            color="primary"
            size="medium"
            sx={{
              px: 4, // Horizontal padding
              py: 1, // Vertical padding
              fontSize: "1rem",
            }}
          >
            Remove CO<sub>2</sub>
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default HomeHeroSection;
