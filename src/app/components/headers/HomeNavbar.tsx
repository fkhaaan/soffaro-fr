import { Box, Button, Container, ListItemIcon, Menu, MenuItem, Stack } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import Basket from "./Basket";
import Divider from "../divider";
import { CartItem } from "../../../lib/types/search";
import { useGlobals } from "../../hooks/useGlobals";
import { serverApi } from "../../../lib/config";
import { Logout } from "@mui/icons-material";

const navClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? "head-main-txt underline" : "head-main-txt";

interface HomeNavbarProps {
    cartItems: CartItem[];
    onAdd: (item: CartItem) => void;
    onRemove: (item: CartItem) => void;
    onDelete: (item: CartItem) => void;
    onDeleteAll: () => void;
    setSignupOpen: (isOpen: boolean) => void;
    setLoginOpen: (isOpen: boolean) => void;
    anchorEl: HTMLElement | null;
    handleLogoutClick: (e: React.MouseEvent<HTMLElement>) => void;
    handleCloseLogout: () => void;
    handleLogoutRequest: () => void;
}

export default function HomeNavbar(props: HomeNavbarProps) {
    const navigate = useNavigate();
    const {
        cartItems,
        onAdd,
        onDelete,
        onDeleteAll,
        onRemove,
        setSignupOpen,
        setLoginOpen,
        handleLogoutClick,
        handleCloseLogout,
        anchorEl,
        handleLogoutRequest,
    } = props;
    const { authMember } = useGlobals();
    return <div className="home-navbar">
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
               <NavLink  to="/" className={navClass} >HOME</NavLink>
            </Box>
              <Box className={"hover-line"}>
                        <NavLink to="/products" className={navClass}>SOFAS</NavLink>
            </Box>
            {authMember ? (  
                <Box className={"hover-line"}>
                            <NavLink to="/orders" className={navClass}>ORDERS</NavLink>
            </Box>
            ) : null}
              {authMember ? (  
                <Box className={"hover-line"}>
                            <NavLink to="/member-page" className={navClass}>MY PAGE</NavLink>
            </Box>
            ) : null}
              <Box className={"hover-line"}>
                        <NavLink to="/help" className={navClass}>HELP</NavLink>
            </Box>
            
            <Basket
                        cartItems={cartItems}
                        onAdd={onAdd}
                        onRemove={onRemove}
                        onDelete={onDelete}
                        onDeleteAll={onDeleteAll} />

            {!authMember ? (
                <Box>
                    <Button variant="contained" 
                    className="login-button"
                    onClick={() => setLoginOpen(true)}
                    >
                    LOGIN
                    </Button>
                    </Box>
            ) : (<img className="user-avatar"
                            src={authMember?.memberImage
                                ? `${serverApi}/${authMember?.memberImage}`
                                : "/icons/default-user.webp"}
                aria-haspopup={"true"}
                            onClick={handleLogoutClick}
             />)}

                    <Menu
                        anchorEl={anchorEl}
                        id="account-menu"
                        open={Boolean(anchorEl)}
                        onClose={handleCloseLogout}
                        onClick={handleCloseLogout}
                        PaperProps={{
                            elevation: 0,
                            sx: {
                                overflow: 'visible',
                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                mt: 1.5,
                                '& .MuiAvatar-root': {
                                    width: 32,
                                    height: 32,
                                    ml: -0.5,
                                    mr: 1,
                                },
                                '&:before': {
                                    content: '""',
                                    display: 'block',
                                    position: 'absolute',
                                    top: 0,
                                    right: 14,
                                    width: 10,
                                    height: 10,
                                    bgcolor: 'background.paper',
                                    transform: 'translateY(-50%) rotate(45deg)',
                                    zIndex: 0,
                                },
                            },
                        }}
                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                    >
                        <MenuItem onClick={handleLogoutRequest}>
                            <ListItemIcon>
                                <Logout fontSize="small" style={{ color: 'blue' }} />
                            </ListItemIcon>
                            Logout
                        </MenuItem>
                    </Menu>

                <Box >
                        {!authMember ? (
                            <Button 
                            variant="contained"
                        className="signup-button"
                        onClick={() => setSignupOpen(true)}
                        >
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
                         variant="outlined"
                        onClick={() => navigate("/products")}
                         >EXPLORE COLLECTIONS</Button>
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