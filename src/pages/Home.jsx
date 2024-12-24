import { Container, Grid2, Box, Stack, Typography, Button, styled, Grid, Card, CardContent, Collapse } from "@mui/material";
import '../assets/css/Home.css'

import Header from "../components/Header";
import Footer from "../components/Footer";
import ResponsiveCard from "../components/ResponsiveCard";
import MultiCardContainer from "../components/MultiCardContainer";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useState } from "react";


const HomeCardGrid2Containers = ({ imgSrc, head, text, cardColor }) => {
  return (
    <Grid2
      sx={{
        height: "40vh",
      }}
      size={{
        xs: 12,
        sm: 6,
        md: 4,
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card
          sx={{
            width: "100%",
            height: "100%",
            backgroundColor: cardColor,
            borderRadius: "8px"
          }}>
          <CardContent
            sx={{
              display: "flex",
              height: "100%",
              flexDirection: "column",
              justifyContent: "space-evenly",
            }}
          >
            <Box
              component={"img"}
              sx={{
                width: "20%"
              }}
              src={imgSrc}
            />
            <Typography
              sx={{
                fontSize: "32px",
                fontWeight: 700
              }}
              variant="h3">{head}</Typography>
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "400px",
                lineHeight: 1.2
              }}
              component="p" color="#241C17">
              {text}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Grid2>
  );
}

const CertsComponent = ({ Imgsrc }) => {
  return (
    <Box
      sx={{
        width: "25%",
        height: "120px"
      }}
      component={"img"}
      src={Imgsrc} />
  );
}


const SectionComponentExpandable = ({ head, text }) => {
  const [isOpen, setisOpen] = useState(false);
  const onClickHandler = (e) => {
    setisOpen(!isOpen);
  }

  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        minHeight: "100px",
        backgroundColor: "#FBF7F6",
        placeContent: "center",
        borderRadius: "16px"
      }}
      onClick={onClickHandler}
    >
      <Box
        sx={{
          display: "flex",
          padding: "32px 60px",
          justifyContent: "space-between"
        }}
      >
        <Typography
          sx={{
            fontSize: {
              xs: "20px",
              md: "24px"
            },
            textAlign: {
              xs: "start"
            },
            width: {
              xs: "100%",
              md: "max-content"
            },
            padding: "5px",
            fontWeight: "400",
            whiteSpace: "wrap"
          }}
          component={"h3"}
        >
          {head}
        </Typography>
        {isOpen ?
          <Box
            display="flex"
            // onClick={onClickHandler}
            justifyContent="center"
            alignItems="center"
            sx={{
              animation: "bounce 1.5s infinite",
              "@keyframes bounce": {
                "0%, 100%": { transform: "translateY(0)" },
                "50%": { transform: "translateY(8px)" },
              },
            }}
          >
            <KeyboardArrowUpIcon fontSize="large" />
          </Box>
          :
          <Box
            display="flex"
            // onClick={onClickHandler}
            justifyContent="center"
            alignItems="center"
            sx={{
              animation: "bounce 1.5s infinite",
              "@keyframes bounce": {
                "0%, 100%": { transform: "translateY(0)" },
                "50%": { transform: "translateY(8px)" },
              },
            }}
          >
            <KeyboardArrowDownIcon fontSize="large" />
          </Box>
        }
      </Box>
      <Collapse in={isOpen} timeout="auto">
        <Box
          sx={{
            display: isOpen ? "flex" : "none",
            padding: "0px 60px 10px 60px",
            justifyContent: "space-between"
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: "16px",
                // md: "24px"
              },
              textAlign: {
                xs: "start",
                // md: "start"
              },
              width: {
                // xs: "100%",
                md: "max-content"
              },
              padding: "5px",
              fontWeight: "400",
              whiteSpace: "wrap"
            }}
            component={"p"}
          >
            {text}
          </Typography>
        </Box>
      </Collapse>
    </Box>
    // <Grid2
    //   sx={{
    //     width: "100%",
    //     height: "auto",
    //     minHeight: "130px",
    //     backgroundColor: "#FBF7F6",
    //     placeContent: "center",
    //     borderRadius: "16px"
    //   }}
    //   size={{
    //     xs: 12,
    //   }}
    // >
    //   <Box
    //     sx={{
    //       display: "flex",
    //       padding: "32px 60px",
    //       flexDirection: {
    //         xs: "column",
    //         md: "row"
    //       },
    //     }}
    //   >
    //     <Typography
    //       sx={{
    //         fontSize: {
    //           xs: "20px",
    //           md: "24px"
    //         },
    //         textAlign: {
    //           xs: "center",
    //           md: "start"
    //         },
    //         width: {
    //           xs: "100%",
    //           md: "max-content"
    //         },
    //         padding: "5px",
    //         fontWeight: "500",
    //         whiteSpace: "nowrap"
    //         // overflow:"hidden",
    //         // textOverflow:"ellipsis"
    //       }}
    //       component={"h3"}
    //     >
    //       {head}
    //     </Typography>
    //     <Typography
    //       sx={{
    //         fontSize: {
    //           xs: "16px",
    //           md: "20px"
    //         },
    //         textAlign: {
    //           xs: "center",
    //           md: "start"
    //         },
    //         width: {
    //           xs: "100%",
    //           md: "fit-content"
    //         },
    //         padding: "5px"
    //       }}
    //       component={"p"}
    //     >
    //       {text}
    //     </Typography>
    //   </Box>
    // </Grid2>
  );
}


const SectionComponent = ({ head, text }) => {
  return (
    <Grid2
      sx={{
        width: "100%",
        height: "auto",
        minHeight: "130px",
        backgroundColor: "#FBF7F6",
        placeContent: "center",
        borderRadius: "16px"
      }}
      size={{
        xs: 12,
      }}
    >
      <Box
        sx={{
          display: "flex",
          padding: "32px 60px",
          flexDirection: {
            xs: "column",
            md: "row"
          },
        }}
      >
        <Typography
          sx={{
            fontSize: {
              xs: "20px",
              md: "24px"
            },
            textAlign: {
              xs: "center",
              md: "start"
            },
            width: {
              xs: "100%",
              md: "max-content"
            },
            padding: "5px",
            fontWeight: "500",
            whiteSpace: "nowrap"
            // overflow:"hidden",
            // textOverflow:"ellipsis"
          }}
          component={"h3"}
        >
          {head}
        </Typography>
        <Typography
          sx={{
            fontSize: {
              xs: "16px",
              md: "20px"
            },
            textAlign: {
              xs: "center",
              md: "start"
            },
            width: {
              xs: "100%",
              md: "fit-content"
            },
            padding: "5px"
          }}
          component={"p"}
        >
          {text}
        </Typography>
      </Box>
    </Grid2>
  );
}


const Grid2SectionComponent = ({ head, text }) => {
  return (
    <Grid2
      sx={{
        backgroundColor: "#FBF7F6",
        borderRadius: "16px",
        minHeight: "80px",
        height: "auto"
      }}
      size={{
        xs: 12
      }}
    >
      <Grid2
        sx={{
          flexDirection: {
            xs: "column",
            md: "row"
          },
          height: "100%",
          placeContent: "center"
        }}
        container spacing={2}>
        <Grid2>
          <Typography
            sx={{
              fontSize: {
                xs: "20px",
                md: "24px"
              },
              textAlign: {
                xs: "center",
                md: "start"
              }
            }}
            component={"h2"}
          >
            {head}
          </Typography>
        </Grid2>
        <Grid2>
          <Typography
            sx={{
              fontSize: {
                xs: "16px",
                md: "20px"
              },
              textAlign: {
                xs: "center",
                md: "start"
              },
              // backgroundColor: "blue"
            }}
            component={"p"}
          >
            {text}
          </Typography>
        </Grid2>
      </Grid2>
    </Grid2>
  );
}

const Home = () => {
  return (
    <Stack>
      <Header />
      {/* Now Page is divided into different component Content */}
      <section>
        <Stack
          sx={{
            width: "100%",
            height: "80vh"
          }}>
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: -1,
              backgroundImage: "url('/assets/images/homeHeroSection.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              // backgroundColor: "rgba(0,0,0,0.5)",
              color: "transparent",
              // filter: "blur(1px)",
              // transform: "scale(1)",
              objectFit: "cover",
              objectPosition: "center"
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: -1,
              backgroundColor: "rgba(0,0,0,0.5)",
              objectFit: "cover",
              objectPosition: "center"
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: {
                xs: "center",
                sm: "start",
              },
              zIndex: 1,
              color: "white",
              px: 3,
              width: { xs: "90%", sm: "80%", lg: "60%" },
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2rem", sm: "3rem", md: "40px", lg: "72px" },
                fontWeight: "bold",
              }}
            >
              One-Stop-Shop Solution for Biochar in the Tropics
            </Typography>

            <Typography
              variant="body2"
              sx={{
                fontSize: { xs: "1rem", sm: "1.25rem" },
                marginTop: 2,
              }}
            >
              Scalable, transparent carbon removal credits.
              <br />
              Empowering local farmers.
              <br />
              Enriching communities.
            </Typography>

            <Button
              variant="contained"
              color="primary"
              size="medium"
              sx={{
                px: 4, // Horizontal padding
                py: 1, // Vertical padding
                fontSize: "1rem",
                marginTop: 3,
              }}
              href="/remove-co2/plan"
            >
              Remove CO<sub>2</sub>
            </Button>
          </Box>
        </Stack>
      </section>
      <section>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
            width: "100%",
            padding: "3rem 0 3rem 0",
            backgroundColor: "white"
          }}>
          <Box
            sx={{
              width: { xs: "90%", sm: "80%", lg: "60%" },
              paddingTop: "50px"
            }}
          >
            <Grid2 container spacing={2}
              sx={{
                height: "inherit"
              }}
            >
              <Grid2
                sx={{
                  backgroundColor: "white",
                }}
                size={
                  {
                    xs: 12,
                    md: 7,
                  }
                }

              >
                <Box
                  sx={{
                    width: "100%"
                  }} >
                  <Box
                    sx={{
                      width: "100%"
                    }} >
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "14px",
                          md: "16px"
                        }
                      }}
                      component={"p"}>
                      WHY IGNITE CHANGE
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      width: "100%"
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "40px",
                          md: "54px"
                        }
                      }}
                      variant={"h2"}
                    >
                      Bringing change through biochar
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      width: "100%",
                    }} >
                    <Box
                      sx={{
                        width: "100%",
                        paddingTop: {
                          xs: "18px",
                          sm: "24px"
                        },
                      }} >
                      <Typography
                        sx={{
                          fontSize: {
                            xs: "18px",
                            md: "24px"
                          },
                          fontWeight: "400",
                          color: "#504945",
                        }}
                        variant="p"
                      >
                        The devastating impact of agricultural burning, blazes with the force of black carbon, a climate culprit <Typography sx={{ color: "rgb(196, 71, 54)" }} variant="span">460-1,500</Typography> times more potent than carbon dioxide.
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: "100%",
                        paddingTop: {
                          xs: "18px",
                          sm: "24px"
                        }
                      }} >
                      <Typography
                        sx={{
                          fontSize: {
                            xs: "18px",
                            md: "24px"
                          },
                          fontWeight: "400",
                          color: "#504945",
                        }}
                        variant="p"
                      >
                        Our mission is to transform this threat into an opportunity for healing. By harnessing the power of biochar, we're not just removing carbon - we're nurturing communities, restoring lands, and forging a sustainable legacy that transcends generations.
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid2>
              <Grid2
                sx={{
                  // backgroundColor: "blue",
                }}
                size={
                  {
                    xs: 12,
                    md: 5,
                  }
                }
              >
                <Box
                  sx={{
                    display: "flex",
                    width: "fit-content",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingTop: "10px"
                  }}
                >
                  <Box
                    component="img"
                    sx={{
                      // height: "50%",
                      width: "90%",
                    }}
                    alt="Soil image"
                    src="/assets/images/homeHeroSection.png"
                  />
                </Box>
              </Grid2>
            </Grid2>
          </Box>
        </Box>
      </section>
      <section>
        <Box
          sx={{
            display: "flex",
            position: "relative",
            width: "100%",
            height: "fit-content",
            // backgroundColor: "yellow",
            justifyContent: "center"
          }}>
          <Box
            sx={{
              width: { xs: "90%", sm: "80%", lg: "60%" },
              paddingTop: "50px"
            }}
          >
            <Box>
              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                  justifyContent: {
                    xs: "start",
                    md: "center"
                  },
                }} >
                <Typography
                  sx={{
                    fontSize: {
                      xs: "14px",
                    },
                    color: "#504945"
                  }}
                  component={"span"}>
                  CREATING LASTING CHANGE
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                  justifyContent: {
                    xs: "start",
                    md: "center"
                  },
                }} >
                <Typography
                  sx={{
                    fontSize: {
                      xs: "40px",
                      md: "54px"
                    },
                    textAlign: {
                      xs: "start",
                      md: "center"
                    }
                  }}
                  variant={"h2"}
                >
                  Commitement To Transformation
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "100%",
                }} >
                <Box
                  sx={{
                    width: "100%",
                    paddingTop: {
                      xs: "18px",
                      sm: "24px"
                    },
                  }} >
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "18px",
                        md: "24px"
                      },
                      fontWeight: "400",
                      color: "#504945",
                      textAlign: {
                        xs: "start",
                        md: "center"
                      }
                    }}
                    component="p"
                  >
                    We collaborate closely with local farmers, breathing new life into agricultural waste by converting it into biochar - a potent force for ecological revival.
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    paddingTop: {
                      xs: "18px",
                      sm: "24px"
                    }
                  }} >
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "18px",
                        md: "24px"
                      },
                      fontWeight: "400",
                      color: "#504945",
                      textAlign: {
                        xs: "start",
                        md: "center"
                      }
                    }}
                    component="p"
                  >
                    Our journey is two fold: revitalizing landscapes and livelihoods. By synergizing with communities, we cultivate fertile grounds, not just for crops, but for sustainable prosperity. To fuel this vision, we invite individuals and corporations to invest in carbon credits, catalyzing a wave of positive change that ripples from fields to boardrooms.
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                padding: "20px 0 20px 0",
                justifyContent: "center"
              }}
            >
              <ResponsiveCard />
            </Box>
          </Box>
        </Box>
      </section>
      <section>
        <Box
          sx={{
            display: "flex",
            position: "relative",
            width: "100%",
            height: "fit-content",
            // backgroundColor: "yellow",
            justifyContent: "center"
          }}>
          <Box
            sx={{
              width: { xs: "90%", sm: "80%", lg: "60%" },
              paddingTop: "50px"
            }}
          >
            <Box>
              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                  justifyContent: {
                    xs: "start",
                    md: "center"
                  },
                }} >
                <Typography
                  sx={{
                    fontSize: {
                      xs: "14px",
                    },
                    color: "#504945"
                  }}
                  component={"span"}>
                  HOW IT WORKS
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                  justifyContent: {
                    xs: "start",
                    md: "center"
                  },
                }} >
                <Typography
                  sx={{
                    fontSize: {
                      xs: "40px",
                      md: "54px"
                    },
                    textAlign: {
                      xs: "start",
                      md: "center"
                    }
                  }}
                  variant={"h2"}
                >
                  The Circonomy Way
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "100%",
                }} >
                <Box
                  sx={{
                    width: "100%",
                    paddingTop: {
                      xs: "18px",
                      sm: "24px"
                    },
                  }} >
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "18px",
                        md: "24px"
                      },
                      fontWeight: "400",
                      color: "#504945",
                      textAlign: {
                        xs: "start",
                        md: "center"
                      }
                    }}
                    component="p"
                  >
                    We're cultivating sustainability with biochar – a natural solution born from agricultural waste. Think of it as soil's superhero, enriching crops and capturing carbon. We've scaled this and made large volumes of biochar accessible, seamlessly transforming them into high quality carbon removal credits.
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                padding: "20px 0 20px 0",
                justifyContent: "center",
                width: "100%",
                height: "auto",
                overflow: "hidden"
              }}
            >
              <Box
                component={"img"}
                sx={{
                  width: "100%",
                  maxWidth: {
                    xs: "80%",
                    md: "60%"
                  },
                  height: "auto"
                }}
                src="/assets/images/Pyramid.svg"
              />
            </Box>
          </Box>
        </Box>
      </section>
      <section>
        <Box
          sx={{
            display: "flex",
            position: "relative",
            width: "100%",
            height: "fit-content",
            justifyContent: "center",
            paddingTop: "60px",
            paddingBottom: "60px"
          }}>
          <Box
            sx={{
              width: { xs: "90%", sm: "80%", lg: "60%" },
              paddingTop: "50px"
            }}
          >
            <Box>
              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                  justifyContent: {
                    xs: "start",
                    md: "center"
                  },
                }} >
                <Typography
                  sx={{
                    display: {
                      xs: "none",
                      md: "block"
                    },
                    color: "#504945"
                  }}
                  component={"p"}>
                  Circonomy Sustainability Circular
                </Typography>
              </Box>
              <Grid2 container spacing={2}>
                <SectionComponent head={"Training farmers"} text={"On-site training for Artisanal production and application of biochar"} />
                <SectionComponent head={"Collect biomass waste"} text={"The collection of biomass waste involves gathering these organic materials from various sources, ensuring their availability for the biochar production."} />
                <SectionComponent head={"Produce Biochar"} text={"Our team works with farmers and biomass aggregators to process Agri-waste to produce the biochar and earn carbon credits by using Kon-tiki technology."} />
                <SectionComponent head={"Increase soil health"} text={"Mix biochar with compost or fertilizer and apply it to the soil."} />
                <SectionComponent head={"MRV platform"} text={"Use Circonomy’s MRV platform to monitor, track the whole process, receive reports and the verification of carbon removal credits you purchase."} />
                {/* <Grid2SectionComponent head={"Training farmers"} text={"On-site training for Artisanal production and application of biochar"}/> */}
              </Grid2>
              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                  alignItems: "center",
                  flexDirection: "column"
                }} >
                <Box
                  sx={{
                    width: "120px",
                    height: "120px"
                  }}
                  component={"img"}
                  src="/assets/images/plant.svg"
                />
                <Button
                  sx={{
                    width: {
                      xs: "100%",
                      sm: "fit-content"
                    },
                    px: 8,
                    py: 2,
                    fontFamily: "Overpass",
                    fontSize: "20px",
                    // margin: "50px",
                    borderRadius: "8px"
                  }}
                  variant="contained"
                  color="primary"
                  href="/remove-co2/plan"
                >
                  Remove CO<sub>2</sub>
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </section>
      <section>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
            width: "100%",
            height: {
              xs: "fit-content",
              md: "50vh"
            },
            overflow: "hidden"
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
              backgroundImage: "url('/assets/images/certandstan.svg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              color: "transparent",
              objectFit: "cover",
              objectPosition: "center"
            }}
          />
          <Box
            sx={{
              width: { xs: "90%", sm: "80%" },
            }}
          >
            <Typography
              sx={{
                color: "white",
                width: "100%",
                textAlign: "center",
                fontFamily: "Overlock",
                fontWeight: 900,
                paddingTop: 8,
              }}
              variant={"h3"}
            >
              Certificates & Standards
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: {
                  xs: "column",
                  md: "row"
                },
                justifyContent: "space-between",
                alignItems: "center",
                paddingTop: 5,
              }}
            >
              <CertsComponent Imgsrc={"/assets/images/cert1.svg"} />
              <CertsComponent Imgsrc={"/assets/images/cert2.svg"} />
              <CertsComponent Imgsrc={"/assets/images/cert3.svg"} />
              <CertsComponent Imgsrc={"/assets/images/cert4.svg"} />
            </Box>
          </Box>
        </Box>
      </section>
      <section>
        <Box
          sx={{
            display: "flex",
            position: "relative",
            width: "100%",
            height: "fit-content",
            justifyContent: "center",
            paddingTop: "60px",
            paddingBottom: "60px"
          }}>
          <Box
            sx={{
              width: { xs: "90%", sm: "80%", lg: "60%" },
              paddingTop: "50px"
            }}
          >
            <Grid2 container
              sx={{
                // backgroundColor: "lightgray"
              }}
              spacing={2}
            >
              <HomeCardGrid2Containers imgSrc="/assets/images/impactDrivenImage.svg" head={"Reliability"} text={"Across the entire value chain. Directly source CDR to ensure co-benefits are maximized"} cardColor={"#8CB43D"} />
              <HomeCardGrid2Containers imgSrc="/assets/images/transparencyImage.svg" head={"Transparency"} text={"Through our robust MRV system which ensures accuracy in data and scalability of projects"} cardColor={"#E4BB3B"} />
              <HomeCardGrid2Containers imgSrc="/assets/images/collaborationImage.svg" head={"Integrity"} text={"Across three key aspects-Biodiversity, Climate and Social"} cardColor={"#9AC6E9"} />
            </Grid2>
            <Box
              sx={{
                height: {
                  md: "300px",
                  xs: "450px"
                },
                background: "linear-gradient(216deg, #C44736 0%, #E97262 100%)",
                borderRadius: "16px",
                marginTop: "10px",
                paddingTop: "5px",
              }}
            >
              <Grid2 container
                sx={{
                  height: "inherit",
                  flexWrap: "wrap-reverse",
                }} >
                <Grid2
                  sx={{
                    display: "flex",
                    maxHeight: "300px",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  size={{
                    xs: 12,
                    md: 6
                  }}
                >
                  <Box
                    sx={{
                      height: "80%",
                    }}
                    component={"img"}
                    src="/assets/images/phone.png"
                  />
                </Grid2>
                <Grid2
                  sx={{

                  }}
                  size={{
                    xs: 12,
                    md: 6
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      // gap:4,
                      justifyContent: "space-evenly",
                      height: "100%"
                    }}
                  >
                    <Typography
                      sx={{
                        justifyContent: "start",
                        fontFamily: "Overlock",
                        fontSize: {
                          xs: 40,
                          md: 54
                        },
                        fontWeight: 900,
                        lineHeight: 0.8,
                        color: "white",
                        textAlign: "center"
                      }}
                      component={"h1"}
                    >
                      Impact-driven approach
                    </Typography>
                    <Typography
                      sx={{
                        // justifyContent: "start",
                        fontFamily: "Overpass",
                        fontSize: {
                          xs: 16,
                          md: 20
                        },
                        fontWeight: 400,
                        lineHeight: 1.57,
                        color: "white",
                        textAlign: "center"

                      }}
                      component={"p"}
                    >
                      Data collection, calculations, and reporting with automation. Everything is updated on our MRV app.
                    </Typography>
                  </Box>
                </Grid2>
              </Grid2>
            </Box>
          </Box>
        </Box>
      </section>
      <section>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
            width: "100%",
            padding: "3rem 0 3rem 0",
            backgroundColor: "white"
          }}>
          <Box
            sx={{
              width: { xs: "90%", sm: "80%", lg: "60%" },
              paddingTop: "50px"
            }}
          >
            <Grid2 container spacing={2}
              sx={{
                height: "inherit"
              }}
            >
              <Grid2
                sx={{
                  // backgroundColor: "blue",
                }}
                size={
                  {
                    xs: 12,
                    md: 5,
                  }
                }
              >
                <Box
                  sx={{
                    display: "flex",
                    width: "fit-content",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingTop: "10px"
                  }}
                >
                  <Box
                    component="img"
                    sx={{
                      width: "90%",
                    }}
                    alt="Male Farmer"
                    src="/assets/images/maleFarmer.svg"
                  />
                </Box>
              </Grid2>
              <Grid2
                sx={{
                  backgroundColor: "white",
                }}
                size={
                  {
                    xs: 12,
                    md: 7,
                  }
                }

              >
                <Box
                  sx={{
                    width: "100%"
                  }} >
                  <Box
                    sx={{
                      width: "100%"
                    }} >
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "14px",
                          md: "16px"
                        }
                      }}
                      component={"p"}>
                      PRODUCTION SITES
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      width: "100%"
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "40px",
                          md: "54px"
                        }
                      }}
                      variant={"h2"}
                    >
                      Empowering Ventures
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      width: "100%",
                    }} >
                    <Box
                      sx={{
                        width: "100%",
                        paddingTop: {
                          xs: "18px",
                          sm: "24px"
                        },
                      }} >
                      <Typography
                        sx={{
                          fontSize: {
                            xs: "18px",
                            md: "24px"
                          },
                          fontWeight: "400",
                          color: "#504945",
                        }}
                        variant="p"
                      >
                        Embracing our commitment to a better world, we propel change through purposeful development and funding. Our projects span the globe and prioritize carbon emission reduction, biodiversity protection, and tangible benefits for local communities. Together, we can make a meaningful impact, enriching lives and our planet.
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid2>
            </Grid2>
          </Box>
        </Box>
      </section>
      <section>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
            width: "100%",
            padding: "3rem 0 3rem 0",
            backgroundColor: "white"
          }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              width: { xs: "90%", sm: "80%", lg: "60%" },
              paddingTop: "50px",
            }}
            >
            <SectionComponentExpandable head="What is Biochar and how is it produced?" text={"Biochar is a carbon-rich form of charcoal produced from sustainable biomass residue. This organic material is transformed through a controlled heating process, resulting in biochar. It is highly valued for its applications in agriculture and environmental management, particularly in enhancing soil quality and carbon sequestration.We utilize an artisanal production method called the Kon-tiki kiln to create our biochar. Beginning with responsibly sourced biomass residue, this method involves carefully heating the biomass following meticulous process to limit unavoidable greenhouse gas emissions to a minimum. This method is characterized by its accessibility, requiring only a modest initial investment, and its unique ability to engage local communities."} />
            <SectionComponentExpandable head="What is Biochar and how is it produced?" text={"Biochar is a carbon-rich form of charcoal produced from sustainable biomass residue. This organic material is transformed through a controlled heating process, resulting in biochar. It is highly valued for its applications in agriculture and environmental management, particularly in enhancing soil quality and carbon sequestration.We utilize an artisanal production method called the Kon-tiki kiln to create our biochar. Beginning with responsibly sourced biomass residue, this method involves carefully heating the biomass following meticulous process to limit unavoidable greenhouse gas emissions to a minimum. This method is characterized by its accessibility, requiring only a modest initial investment, and its unique ability to engage local communities."} />
            <SectionComponentExpandable head="What is Biochar and how is it produced?" text={"Biochar is a carbon-rich form of charcoal produced from sustainable biomass residue. This organic material is transformed through a controlled heating process, resulting in biochar. It is highly valued for its applications in agriculture and environmental management, particularly in enhancing soil quality and carbon sequestration.We utilize an artisanal production method called the Kon-tiki kiln to create our biochar. Beginning with responsibly sourced biomass residue, this method involves carefully heating the biomass following meticulous process to limit unavoidable greenhouse gas emissions to a minimum. This method is characterized by its accessibility, requiring only a modest initial investment, and its unique ability to engage local communities."} />
            <SectionComponentExpandable head="What is Biochar and how is it produced?" text={"Biochar is a carbon-rich form of charcoal produced from sustainable biomass residue. This organic material is transformed through a controlled heating process, resulting in biochar. It is highly valued for its applications in agriculture and environmental management, particularly in enhancing soil quality and carbon sequestration.We utilize an artisanal production method called the Kon-tiki kiln to create our biochar. Beginning with responsibly sourced biomass residue, this method involves carefully heating the biomass following meticulous process to limit unavoidable greenhouse gas emissions to a minimum. This method is characterized by its accessibility, requiring only a modest initial investment, and its unique ability to engage local communities."} />
            <SectionComponentExpandable head="What is Biochar and how is it produced?" text={"Biochar is a carbon-rich form of charcoal produced from sustainable biomass residue. This organic material is transformed through a controlled heating process, resulting in biochar. It is highly valued for its applications in agriculture and environmental management, particularly in enhancing soil quality and carbon sequestration.We utilize an artisanal production method called the Kon-tiki kiln to create our biochar. Beginning with responsibly sourced biomass residue, this method involves carefully heating the biomass following meticulous process to limit unavoidable greenhouse gas emissions to a minimum. This method is characterized by its accessibility, requiring only a modest initial investment, and its unique ability to engage local communities."} />
          </Box>
        </Box>
      </section>
      <Footer />
    </Stack >
  );
}

export default Home;
