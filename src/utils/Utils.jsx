import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from 'react-router-dom';

export { RouterLink }

const RouterLink = (props) => {
    function onClickHandler(e) {
        console.log(props.to);
    }

    return (
        <Box {...props} onClick={onClickHandler} width={"fit-content"} height={"fit-content"} padding={"10px"}>
            <Link style={{
                textDecoration: 'none',
                color: 'inherit',
            }}
            to={props.to}
            >
                <Typography variant="span" component="span"> {props.children} </Typography>
            </Link>
        </Box>
    );
}
