import React from "react";
import { Card, CardContent, CardMedia, Grid2, Typography, Box } from "@mui/material";

const MultiCardContainer = () => {
  const cards = [
    {
      id: 1,
      title: "Card 1",
      description: "This is the description for Card 1.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Card 2",
      description: "This is the description for Card 2.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "Card 3",
      description: "This is the description for Card 3.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      title: "Card 4",
      description: "This is the description for Card 4.",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <Box
      sx={{
        padding: 2,
        overflowX: {
          xs: "auto", // Enable horizontal scrolling for small screens
          md: "hidden", // No scrolling for medium and larger screens
        },
        whiteSpace: "nowrap", // Prevents wrapping for horizontal scroll
      }}
    >
      <Grid2
        container
        spacing={2}
        sx={{
          display: "flex",
          flexWrap: {
            xs: "nowrap", // No wrap for small screens
            md: "wrap", // Wrap cards for medium and larger screens
          },
        }}
      >
        {cards.map((card) => (
          <Grid2
            item
            key={card.id}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            sx={{
              minWidth: {
                xs: "80%", // Wide cards for horizontal scrolling
                sm: "45%", // Adjust width on small screens
                md: "100%", // Full width within grid on larger screens
              },
            }}
          >
            <Card sx={{ height: "100%" }}>
              <CardMedia
                component="img"
                alt={card.title}
                height="140"
                image={card.image}
              />
              <CardContent>
                <Typography variant="h6">{card.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default MultiCardContainer;
