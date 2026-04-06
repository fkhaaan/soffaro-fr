
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
            <Container sx={{mt: "30px"}}>
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
                         </Stack>
                       
                         <Stack className="category-main"direction={"row"} spacing={1} justifyContent={"space-between"}>
                            
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
        </div>
    ); 
}