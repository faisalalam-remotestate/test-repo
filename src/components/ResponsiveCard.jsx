import React from 'react';
import { Box, Card, CardMedia, CardContent, Typography } from '@mui/material';

const ResponsiveCard = () => {
  const cards = [
    {
      id: 1,
      title: 'Card Title 1',
      image: 'https://via.placeholder.com/300x200',
      description: 'This is a description for card 1.',
    },
    {
      id: 2,
      title: 'Card Title 2',
      image: 'https://via.placeholder.com/300x200',
      description: 'This is a description for card 2.',
    },
    // Add more cards as needed
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        overflowX: 'auto',
        padding: "5 2 0 0",
        '&::-webkit-scrollbar': {
          display: 'none',
        },
        scrollbarWidth: 'none',
      }}
    >
      {cards.map((card) => (
        <Card
          key={card.id}
          sx={{
            minWidth: 300,
            minHeight: 400,
            marginRight: 2,
            flexShrink: 0,
          }}
        >
          <CardMedia
            component="img"
            height="200"
            image={card.image}
            alt={card.title}
          />
          <CardContent>
            <Typography variant="h6" component="div">
              {card.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {card.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default ResponsiveCard;
