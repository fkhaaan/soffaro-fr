import { Box, Button, Container, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import Basket from "./Basket";

export default function OtherNavbar() {
    const authMember = true;
    return <div className="other-navbar">
            <Container className="navbar-container">
                <Stack className="menu"
                >
                <Box>
                    <NavLink to="/">
                        <p className="brand-name">SOFFARO</p>
                    </NavLink>
                </Box>
                <Stack className="links"
                >
                <Box className={"hover-line"}>
                   <NavLink  to="/" >HOME</NavLink>
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
    
                </Stack>
                </Stack>
            
            </Container>
        </div>;
}