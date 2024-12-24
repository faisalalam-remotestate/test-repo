import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { CirconomyIconWhite } from "../components/CirconomyIcon";
import Footer from "../components/Footer";
import MultipartSignUpForm from "../components/MultipartSignUpForm";

const SignUp = () => {
    return (
        <>
            <Stack
                sx={{
                    flexDirection: "row",
                    width: "100%",
                    height: "100vh"
                }}
            >
                <Box
                    sx={{
                        position: "relative",
                        display: "flex",
                        flexDirection: "row",
                        flex: 1,
                        // backgroundColor: "yellow",
                    }}
                >
                    <Box
                        component="img"
                        sx={{
                            position: "absolute",
                            height: "150%",
                            width: "100%",
                            overflow: "hidden",
                            zIndex: -1
                        }}
                        alt="Soil image"
                        src="/assets/images/loginSignupImage.png"
                    />
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            flexDirection: "column",
                            paddingLeft: "15%",
                            height: "100%",
                            width: "100%",

                        }}
                    >
                        <CirconomyIconWhite height="fit-content" padding="40px 0px 0px" />
                        <Typography variant="p"
                            sx={{
                                fontFamily: "Overpass",
                                fontSize: "42px",
                                paddingBottom: "88px",
                                color: "white",
                                width: "60%"
                            }}
                        >
                            Making <Typography variant="span"
                                sx={{
                                    fontFamily: "Overpass",
                                    fontSize: "42px",
                                    color: "rgb(140, 180, 61)",
                                }}
                            >positive impact</Typography> on people' life and for climate change
                        </Typography>
                    </Box>
                </Box>
                <MultipartSignUpForm />
            </Stack>
            <Footer />
        </>
    );
}

export default SignUp;