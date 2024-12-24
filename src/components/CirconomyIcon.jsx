import React from 'react';
import { Box } from '@mui/material';


import { ReactComponent as CirconomyLogo } from '../assets/images/icons/circonomyLogo.svg';
import { ReactComponent as CirconomyLogoWhite } from '../assets/images/icons/circonomyLogoWhite.svg';

const CirconomyIconMain = ({ width = '200px' , ...props }) => {
    return (
        <Box
            display="flex"
            alignItems="center"
            width={width}
            sx={{
                zIndex:-2
            }}
        >
            <CirconomyLogo />
        </Box>
    );
};

const CirconomyIconWhite = ({ width = '200px' , ...props }) => {
    return (
        <Box
            display="flex"
            alignItems="center"
            width={width}
            sx={props}
        >
            <CirconomyLogoWhite fill='red'/>
        </Box>
    );
};

export { CirconomyIconMain, CirconomyIconWhite };