import React from "react";
import { Container, Grid2, Box } from "@mui/material";

// Custome Imports
// import {Header , ResponsiveHeader} from "../components/Header2";
import Footer from "../components/Footer";

import AppBarHeader from "../components/AppBarHeader";

const DefaultLayout = ({children}) => {
    return (
        <Container>
            {/* <Grid2 container item direction={"column"} spacing={2}>
                <Header />
                <AppBarHeader />
                <ResponsiveHeader />
            </Grid2>
            {children}
            <Grid2 container item direction={"column"} spacing={2}>
                <Footer />
            </Grid2> */}
        </Container>
    );
}

export default DefaultLayout;