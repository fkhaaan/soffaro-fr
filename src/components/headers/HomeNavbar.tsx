import { Box, Button, Container, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import Basket from "./Basket";
import Divider from "../divider";

export default function HomeNavbar() {
    const authMember = false;
    return <div className="home-navbar">
        <Container className="navbar-container">
            <Stack className="menu"
            >
            <Box>
                <NavLink to="/">
                   <a className="brand-name">SOFFARO</a>
                </NavLink>
            </Box>
            <Stack className="links"
            >
            <Box className={"hover-line"}>
               <NavLink  to="/" activeClassName="underline">HOME</NavLink>
            </Box>
              <Box className={"hover-line"}>
               <NavLink to="/products" activeClassName="underline">SOFAS</NavLink>
            </Box>
            {authMember ? (  
                <Box className={"hover-line"}>
               <NavLink to="/orders" activeClassName="underline">ORDERS</NavLink>
            </Box>
            ) : null}
              {authMember ? (  
                <Box className={"hover-line"}>
               <NavLink to="/member-page" activeClassName="underline">MY PAGE</NavLink>
            </Box>
            ) : null}
              <Box className={"hover-line"}>
               <NavLink to="/help" activeClassName="underline">CONTACT</NavLink>
            </Box>
            
            <Basket />

            {!authMember ? (
                <Box>
                    <Button variant="contained" 
                    className="login-button"
                    >
                    LOGIN
                    </Button>
                    </Box>
            ) : (<img className="user-avatar"
                src="/icons/default-user.webp"
                aria-haspopup={"true"}
             />)}

                <Box >
                        {!authMember ? (
                            <Button 
                            variant="contained"
                        className="signup-button">
                            SIGN UP
                            </Button>) : null}
                     </Box>

            </Stack>
            </Stack>
            <Stack className="header-frame">
                    <Box className="head-main-txt">
                     COMFORT MEETS MODERN DESIGN
                    </Box>
                    <Box className="wel-txt">
                        PREMIUM LUXURY SOFAS
                    </Box>
                    <Box className="desc-txt">
                        Discover our curated collection of premium sofas designed for comfort and elegance.
                         Find the perfect piece that transforms your living space and reflects your style.
                    </Box>
                    <Box>
                         <Button className="explore-btn" 
                         variant="outlined">EXPLORE COLLECTIONS</Button>
                    </Box>
                   
                     
            </Stack>
            <Box className="collection-txt">
                        <a>LUXURY</a>
                         <Divider height="15" width="4" bg="#8a701d"/>
                         <a>MODERN</a>
                         <Divider height="15" width="4" bg="#8a701d"/>
                         <a>CLASSIC</a>
                         <Divider height="15" width="4" bg="#8a701d"/>
                         <a>FAMILY</a>
                         <Divider height="15" width="4" bg="#8a701d"/>
                         <a>RETRO</a>
                         <Divider height="15" width="4" bg="#8a701d"/>
                         <a>PREMIUM</a>
                         <Divider height="15" width="4" bg="#8a701d"/>
                         <a>MINIMALISTIC</a>
                    
                    </Box>
        </Container>
    </div>;
}