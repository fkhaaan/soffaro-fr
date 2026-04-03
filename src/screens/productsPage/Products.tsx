
import { Box, Button, Stack, Container } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Badge from "@mui/material/Badge";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "../../css/products.css";

const products = [
    {productName: "SuperSofa", imagePath: "/img/longblack.png"},
     {productName: "Future", imagePath: "/img/soffa.png"},
    {productName: "Future", imagePath: "/img/soffa.png"},
    {productName: "Green", imagePath: "/img/threegreen.png"},
    {productName: "Leos", imagePath: "/img/single-sofa.png"},
    {productName: "Cuppe", imagePath: "/img/twopurple.png"},
    {productName: "Lava", imagePath: "/img/single-sofa.png"},
    {productName: "C2oo", imagePath: "/img/twopurple.png"},
   
];


export default function Products() {
    return (
        <div className="products">
            <Container>
                <Stack flexDirection={"column"} alignItems={"center"}>
                    <Stack className="avatar-big-box">
                        <div className="single-search-big-box">
                              <SearchIcon className="search-icon"/>
                            <input type="search" 
                            className="single-search-input"
                            name="singleResearch"
                            placeholder="Search sofas..."
                            />
                        </div>
                       
                        <Stack className="filter-box">
                            <div className="category-box">
                                <Button variant="contained" color="secondary">
                                   new
                                    </Button>
    
                                <Button variant="contained" color="secondary">
                                    price
                                    </Button>
                                <Button variant="contained" color="secondary">
                                   Best
                                    </Button>
                            </div>
                        </Stack>
                       
                         <Stack className="category-main">
                            <div >
                                <Button variant="contained" color="secondary">
                                    All SOFAS
                                    </Button>
                                <Button variant="contained" color="secondary" >
                                    Luxury
                                    </Button>
                                <Button variant="contained" color="secondary">
                                    Modern
                                    </Button>
                                <Button variant="contained" color="secondary">
                                    Classic
                                    </Button>
                                <Button variant="contained" color="primary">
                                    retro
                                    </Button>
                            </div>
                        </Stack>
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
                                        <div className="product-sale">Best Selling</div>
                                         <Button className="view-btn" sx={{right:"36px"}}>
                                            <Badge badgeContent={20} color="secondary" >
                                                <RemoveRedEyeIcon className="eyeicon" 
                                                sx={{color: 0 ? "gray" : "white"}} />
                                            </Badge>
                                        </Button>
                                        </Stack>

                                        <Box className="product-desc">
                                            <div className="product-info">
                                                 <span className="product-type">
                                                LUXURY
                                            </span>
                                             <span className="product-name">
                                                {product.productName}
                                            </span>
                                            </div>
                                           <div className="product-shopping">
                                            <div className="product-price">
                                               <p>$200</p> 
                                            </div>
                                             <Button className="shop-btn">
                                            <img
                                             src="/icons/shopping-cart.svg"
                                             style={{display: "flex"}}
                                             />
                                        </Button>
                                           </div>
                                            
                                        </Box>
                                     </Stack>
                                );
                            })
                            ) : 
                             (<Box className="no-data"> Products are not available now!</Box>
                             )}
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

            <div className="address">
                <Container className="address-area"  maxWidth = {"lg"}>
                    <Box className="title">Our Address</Box>
                    <iframe src="https://lottie.host/embed/084cf2e0-b1be-4f6a-a51a-be2a23551693/Mq8GmxAQOE.lottie"></iframe>
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