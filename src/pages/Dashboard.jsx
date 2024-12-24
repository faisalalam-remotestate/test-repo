import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Box } from "@mui/material";

import { useLogin } from "../contexts/LoginContext";
import { Navigate } from "react-router-dom";

const Dashboard = () => {
    const { user, isLoggedIn, logout } = useLogin();

    if (!isLoggedIn) {
        Navigate("/login");
        return <p>Please log in to view the dashboard.</p>;
    }
    return (
        <>
            <Header color="black"/>
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
                        paddingTop: "50px",
                        backgroundColor:"yellow",
                    }}
                >
                    123
                </Box>
            </Box>
            <Footer />
        </>
    );
}

export default Dashboard;