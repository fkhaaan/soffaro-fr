
import { Box, Button, Stack, Container } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import  MonetizationOnIcon  from "@mui/icons-material/MonetizationOn";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Badge from "@mui/material/Badge";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "../../css/products.css";

const products = [
    {productName: "Cutlet", imagePath: "/img/cutlet.webp"},
    {productName: "Kebab", imagePath: "/img/kebab-fresh.webp"},
    {productName: "Kebab", imagePath: "/img/kebab.webp"},
    {productName: "Lavash", imagePath: "/img/lavash.webp"},
    {productName: "Lavash", imagePath: "/img/lavash.webp"},
    {productName: "Cutlet", imagePath: "/img/cutlet.webp"},
    {productName: "Kebab", imagePath: "/img/kebab-fresh.webp"},
    {productName: "Kebab", imagePath: "/img/kebab.webp"},
];


export default function Products() {
    return (
        <div className="products">
            <Container>
                <Stack flexDirection={"column"} alignItems={"center"}>
                    <Stack className="avatar-big-box">
                        <div className="top-text">
                            <p>Bumarak Restaurant</p>
                        </div>
                        <div className="single-search-big-box">
                            <input type="search" 
                            className="single-search-input"
                            name="singleResearch"
                            placeholder="Type here"
                            />
                            <Button className="single-button-search" variant="contained" color="primary">
                                Search
                                <SearchIcon/>
                            </Button>
                        </div>
                    </Stack>

                    <Stack className="dishes-filter-section">
                        <Stack className="dishes-filter-box">
                            <Button
                            variant="contained"
                            color="primary"
                            className="order"
                            >
                             New
                            </Button>
                              <Button
                            variant="contained"
                            color="secondary"
                            className="order"
                            >
                             Price
                            </Button>
                              <Button
                            variant="contained"
                            color="secondary"
                            className="order"
                            >
                             Views
                            </Button>
                        </Stack>
                    </Stack>

                    <Stack className="list-category-section">
                        <Stack className="product-category">
                            <div className="category-main">
                                <Button variant="contained" color="secondary">
                                    Other
                                    </Button>
                                <Button variant="contained" color="secondary"  size="medium">
                                    Dessert
                                    </Button>
                                <Button variant="contained" color="secondary">
                                    Drink
                                    </Button>
                                <Button variant="contained" color="secondary">
                                    Salad
                                    </Button>
                                <Button variant="contained" color="primary">
                                    Dish
                                    </Button>
                            </div>
                        </Stack>
                        <Stack className="product-wrapper">
                              {products.length !== 0 ? (
                              products.map((product, index) => {
                                return (
                                     <Stack key={index} className="product-card">
                                        <Stack
                                        className="product-img"
                                        sx={{backgroundImage: `url(${product.imagePath})`}}
                                        >
                                        <div className="product-sale">Normal Size</div>
                                        <Button className="shop-btn">
                                            <img
                                             src="/icons/shopping-cart.svg"
                                             style={{display: "flex"}}
                                             />
                                        </Button>
                                        <Button className="view-btn" sx={{right:"36px"}}>
                                            <Badge badgeContent={20} color="secondary">
                                                <RemoveRedEyeIcon 
                                                sx={{color: 0 ? "gray" : "white"}} />
                                            </Badge>
                                        </Button>
                                        </Stack>
                                        <Box className="product-desc">
                                            <span className="product-title">
                                                {product.productName}
                                            </span>
                                            <div className="product-desc">
                                                <MonetizationOnIcon/>
                                                {12}
                                            </div>
                                        </Box>
                                     </Stack>
                                );
                            })
                            ) : 
                             (<Box className="no-data"> Products are not available now!</Box>
                             )}
                        </Stack>
                    </Stack>

                    <Stack className="pagination-section">
                        <Pagination
                        count={3}
                        page={2}
                        renderItem={(item) => (
                            <PaginationItem
                            components={{
                                previous: ArrowBackIcon,
                                next: ArrowForwardIcon,
                            }}
                            {...item}
                            color="secondary"
                            />
                        )}
                        >
                        </Pagination>
                    </Stack>
                </Stack>
            </Container>

            <div className="brands-logo">
                <Container className="family-brands">
                    <Box className="category-title">Our Family Brands</Box>
                    <Stack className="brand-list">
                        <Box className="review-box">
                            <img src={"/img/gurme.webp"} alt=""/>
                        </Box>
                        <Box className="review-box">
                            <img src={"/img/seafood.webp"} alt=""/>
                        </Box>
                        <Box className="review-box">
                            <img src={"/img/doner.webp"} alt=""/>
                        </Box>
                        <Box className="review-box">
                            <img src={"/img/sweets.webp"} alt=""/>
                        </Box>
                    </Stack>
                </Container>
            </div>

            <div className="address">
                <Container className="address-area"  maxWidth = {"lg"}>
                    <Box className="title">Our Address</Box>
                    <iframe
                    style={{marginTop: "60px"}}
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96326.03685561026!2d28.92022666528895!3d41.02112846139867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab82bea99445f%3A0x6ed7f4baceb4476c!2sMaiden's%20Tower!5e0!3m2!1sen!2skr!4v1757106097524!5m2!1sen!2skr"
                     width="1320"
                     height="500"
                     referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </Container>
            </div>
        </div>
    ); 
}