import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, useMediaQuery, Box, Container, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { RouterLink } from '../utils/Utils';

import { CirconomyIconMain, CirconomyIconWhite } from './CirconomyIcon';
import { useLogin } from '../contexts/LoginContext';

const Header = () => {
    const { user, isLoggedIn, logout } = useLogin();
    const [menuOpen, setMenuOpen] = useState(false);
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down('md'));

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        console.log(menuOpen);
    };

    return (
        <AppBar
            position='absolute'
            color='primary'
            sx={{
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.12)",
                backgroundColor: "transparent",
            }}
        >
            <Toolbar
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <Container
                    maxWidth="lg"
                    disableGutters
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Box
                        component="a"
                        href="/"
                        sx={{
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        {isLoggedIn ? <CirconomyIconMain zIndex={1} width='150px' /> : <CirconomyIconWhite width='150px' />}
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        {isMobile ? (
                            <IconButton edge="end" color="inherit" onClick={toggleMenu}>
                                <MenuIcon />
                            </IconButton>
                        ) : (
                            // Desktop menu: navigation buttons
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    color: "black"
                                }}
                            >
                                <RouterLink to="/123">Biochar</RouterLink>
                                <RouterLink to="/abc123">Carbon removal</RouterLink>
                                <RouterLink >Projects</RouterLink>
                                <RouterLink >About us</RouterLink>
                                <RouterLink >Contact us</RouterLink>
                                <RouterLink sx={{ color: "white", backgroundColor: "#C44736", height: "fit-content", padding: "4px 10px 0px 10px", margin: "6px 0 0 0", borderRadius: "6px", fontSize: "1rem" }} >Remove CO<sub>2</sub></RouterLink>
                                {isLoggedIn ?
                                    <Button
                                        onClick={logout}
                                        sx={{
                                            width: {
                                                // xs: "1%",
                                                sm: "fit-content"
                                            },
                                            px: 2,
                                            py: 2,
                                            fontFamily: "Overpass",
                                            fontSize: "8px",
                                            // margin: "50px",
                                            borderRadius: "2px"
                                        }}
                                        variant="contained"
                                        color="primary"
                                    >
                                        Logout
                                    </Button>
                                    :
                                    <RouterLink to="/login" >Login</RouterLink>
                                }
                            </Box>
                        )}
                    </Box>
                </Container>
            </Toolbar>
            {/* Dropdown Menu for Mobile */}
            {isMobile && menuOpen && (
                <Box
                    sx={{
                        position: 'absolute',
                        top: '64px',
                        right: 30,
                        backgroundColor: 'white',
                        color: "black",
                        boxShadow: 3,
                        zIndex: 1300,
                        width: '200px',
                        display: 'flex',
                        flexDirection: 'column',
                        borderRadius: "8px",
                    }}
                >
                    <RouterLink to="/123" sx={{ padding: "10px", width: "100%" }}>Biochar</RouterLink>
                    <RouterLink to="/abc123" sx={{ padding: "10px", width: "100%" }}>Carbon removal</RouterLink>
                    <RouterLink sx={{ padding: "10px", width: "100%" }}>Projects</RouterLink>
                    <RouterLink sx={{ padding: "10px", width: "100%" }}>About us</RouterLink>
                    <RouterLink sx={{ padding: "10px", width: "100%" }}>Contact us</RouterLink>
                    {isLoggedIn ?
                        <Button
                            onClick={logout}
                            sx={{
                                width: {
                                    // xs: "1%",
                                    sm: "fit-content"
                                },
                                px: 2,
                                py: 2,
                                fontFamily: "Overpass",
                                fontSize: "8px",
                                // margin: "50px",
                                borderRadius: "2px"
                            }}
                            variant="contained"
                            color="primary"
                        >
                            Logout
                        </Button>
                        :
                        <RouterLink to="/login" sx={{ padding: "10px", width: "100%" }}>Login</RouterLink>}
                </Box>
            )}
        </AppBar>
    );
}

export default Header;