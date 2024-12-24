import React from "react";
import { Container, Grid2, Box, Grid, Stack, Typography, Button, useMediaQuery } from "@mui/material";
import { CirconomyIconMain } from "./CirconomyIcon";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  // Typography,
  // Stack,
  // Box,
  Link,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import zIndex from "@mui/material/styles/zIndex";

const FooterComponent = () => {
  return (
    <Box
      sx={{
        // backgroundColor: '#f5f5f5',
        padding: '20px',
        textAlign: 'center',
      }}
    >
      {/* Circonomy Section */}
      <Accordion elevation={0}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Circonomy for</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack spacing={1}>
            <Link href="" underline="none" color="inherit">
              <Typography>Buyers</Typography>
            </Link>
            <Link href="" underline="none" color="inherit">
              <Typography>Farmers</Typography>
            </Link>
            <Link href="" underline="none" color="inherit">
              <Typography>Suppliers</Typography>
            </Link>
          </Stack>
        </AccordionDetails>
      </Accordion>

      {/* About Section */}
      <Accordion elevation={0}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>About</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack spacing={1}>
            <Link href="/about" underline="none" color="inherit">
              <Typography>About</Typography>
            </Link>
            <Link href="/carbon-removal" underline="none" color="inherit">
              <Typography>Carbon Removal</Typography>
            </Link>
            <Link href="/about" underline="none" color="inherit">
              <Typography>Team</Typography>
            </Link>
            <Link href="/privacy-policy" underline="none" color="inherit">
              <Typography>Privacy Policy</Typography>
            </Link>
            <Link href="/cancellation-refund-policy" underline="none" color="inherit">
              <Typography>Cancellation Policy</Typography>
            </Link>
            <Link href="/terms-and-conditions" underline="none" color="inherit">
              <Typography>Terms and Conditions</Typography>
            </Link>
          </Stack>
        </AccordionDetails>
      </Accordion>

      {/* Meet Us Section */}
      <Accordion elevation={0}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Meet us</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack spacing={1}>
            <Link href="" underline="none" color="inherit">
              <Typography>21 Jalan Jelita</Typography>
            </Link>
            <Link href="" underline="none" color="inherit">
              <Typography>McMahon Park</Typography>
            </Link>
            <Link href="" underline="none" color="inherit">
              <Typography>Singapore, 278345</Typography>
            </Link>
          </Stack>
        </AccordionDetails>
      </Accordion>

      {/* Footer Note */}
      <Typography sx={{ marginTop: '20px' }} variant="body2">
        © Circonomy Pte. Ltd. All rights reserved
      </Typography>
    </Box>
  );
};

const Footer = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  return (
    <Stack

      sx={{
        display: "flex",
        overflow: "hidden",
        // maxWidth:"100%",
        // justifyContent: "space-between",
        position: "relative",
        alignItems: "center",
        // padding: "3rem 0 3rem 0",
        gap: 4,
        width: "100%",
        height: {
          xs: "100vh",
          md: "85vh"
        },
        backgroundColor:"white",
        zIndex:-1
      }}
    >
      {/* <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width: { xs: "90%", sm: "80%", lg: "60%" },
          paddingTop: "50px",
        }}
        >123</Box> */}
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          flex: 1,
          width: { xs: "90%", sm: "80%", lg: "60%" },
          // maxWidth: "lg",
          paddingTop: "50px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "fit-content",
          }}
        >
          <CirconomyIconMain zIndex={-2} width={{ xs: "280px" }}
          // sx={{
          //   zIndex:1
          // }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              paddingTop: "50px"
            }}
          >
            <Typography variant={"p"}
            >
              hello@circonomy.co
            </Typography>
            <Typography variant={"p"}
            >
              +65 1122334455
            </Typography>
            <Typography variant={"p"}
            >
              +65 1122334455
            </Typography>
            <Button
              sx={{
                width: {
                  // xs: "100%",
                  xs: "fit-content"
                },
                px: 4,
                py: 1,
                fontFamily: "Overpass",
                fontSize: "16px",
                borderRadius: "8px",
                marginTop: "20px"
              }}
              variant="contained"
              color="primary"
              href="/remove-co2/plan"
            >
              Contact Us
            </Button>
          </Box>
        </Box>
        {isMobile ? <FooterComponent /> :
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 3
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1.5
              }}
            >
              <Typography variant="span"
                sx={{
                  fontFamily: "Overpass",
                  fontSize: "18px",
                  fontWeight: 500
                }}
              >
                Circonomy for
              </Typography>
              <Typography variant={"span"}
                sx={{
                  fontFamily: "Overpass",
                  fontSize: "16px",
                  fontWeight: 400,
                }}
              >
                Buyers
              </Typography>
              <Typography variant={"span"}
                sx={{
                  fontFamily: "Overpass",
                  fontSize: "16px",
                  fontWeight: 400,
                }}
              >
                Farmers
              </Typography>
              <Typography variant={"span"}
                sx={{
                  fontFamily: "Overpass",
                  fontSize: "16px",
                  fontWeight: 400,
                }}
              >
                Suppliers
              </Typography>
            </Box>
            <Box
              sx={{
                display: {
                  xs: "none",
                  md: "flex"
                },
                flexDirection: "column",
                gap: 1.5,
              }}
            >
              <Typography variant="span"
                sx={{
                  fontFamily: "Overpass",
                  fontSize: "18px",
                  fontWeight: 500
                }}
              >
                About
              </Typography>
              <Typography variant={"span"}
                sx={{
                  fontFamily: "Overpass",
                  fontSize: "16px",
                  fontWeight: 400,
                }}
              >
                Biochar
              </Typography>
              <Typography variant={"span"}
                sx={{
                  fontFamily: "Overpass",
                  fontSize: "16px",
                  fontWeight: 400,
                }}
              >
                Carbon Removal
              </Typography>
              <Typography variant={"span"}
                sx={{
                  fontFamily: "Overpass",
                  fontSize: "16px",
                  fontWeight: 400,
                }}
              >
                Projects
              </Typography>
              <Typography variant={"span"}
                sx={{
                  fontFamily: "Overpass",
                  fontSize: "16px",
                  fontWeight: 400,
                }}
              >
                Teams
              </Typography>
              <Typography variant={"span"}
                sx={{
                  fontFamily: "Overpass",
                  fontSize: "16px",
                  fontWeight: 400,
                }}
              >
                Privacy Policy
              </Typography>
              <Typography variant={"span"}
                sx={{
                  fontFamily: "Overpass",
                  fontSize: "16px",
                  fontWeight: 400,
                }}
              >
                Cancellation Policy
              </Typography>
              <Typography variant={"span"}
                sx={{
                  fontFamily: "Overpass",
                  fontSize: "16px",
                  fontWeight: 400,
                }}
              >
                Terms and Conditions
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1.5
              }}
            >
              <Typography variant="span"
                sx={{
                  color: "black"
                }}
              >
                Circonomy for
              </Typography>
              <Typography variant={"span"}
                sx={{
                  fontFamily: "Overpass",
                  fontSize: "16px",
                  fontWeight: 400,
                }}
              >
                Buyers
              </Typography>
              <Typography variant={"span"}
                sx={{
                  fontFamily: "Overpass",
                  fontSize: "16px",
                  fontWeight: 400,
                }}
              >
                Farmers
              </Typography>
              <Typography variant={"span"}
                sx={{
                  fontFamily: "Overpass",
                  fontSize: "16px",
                  fontWeight: 400,
                }}
              >
                Suppliers
              </Typography>
            </Box>
          </Box>}
      </Box>
      <Box
        sx={{
          position: "relative",
          display:"flex",
          flexDirection:"column",
          flex: 1,
          maxWidth: "100%",
          width: "100%",
          justifyContent:"space-between"
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
            backgroundImage: "url('/assets/images/homeFooter.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundColor: "rgba(0,0,0,0.5)",
            color: "transparent",
            objectFit: "cover",
            objectPosition: "center"
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection:"column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            justifyContent:"space-between",
            paddingTop:"20px"
          }}
        >
          <Box
            sx={{
              width: {
                xs:"50%",
                md:"20%"
              },
              height: "30%"
            }}
          >
            <Typography
              component="p"
              sx={{
                textAlign:"center",
                color: "white",
                fontFamily: "Overpass",
                fontSize: {
                  xs: "24px",
                  md: "40px"
                },
                whiteSpace:"wrap"
              }}
            >
              Making positive impact on people' life and for climate change
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            height: "30%",
            // borderBlock:"solid",
            // borderColor:"white",
            // borderBottom:"2px"
          }}
        >
          <Typography
            variant="p"
            sx={{
              color: "white",
              fontFamily: "Overpass",
              fontSize: {
                xs: "16px",
                // md:"40px"
              }
            }}
          >
            © Circonomy Pte. Ltd. All rights reserved
          </Typography>
          <Typography
            variant="p"
            sx={{
              color: "white",
              fontFamily: "Overpass",
              fontSize: {
                xs: "16PX",
                // md:"40px"
              }
            }}
          >
            Follow for more info
          </Typography>
        </Box>
        {/* <FooterComponent /> */}
      </Box>
    </Stack>
  );
}

const Footer2 = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto"
      }}
    >
      <Grid2 container
        sx={{
          flexDirection: "column"
        }}
      >
        <Grid2
          sx={{
            height: "400px"
          }}
          size={{
            xs: 12
          }}
        >
          abc
        </Grid2>
        <Grid2
          sx={{
            height: "400px"
          }}
          size={{
            xs: 12
          }}
        >
          123
        </Grid2>
      </Grid2>
    </Box>
  );
}

export default Footer;