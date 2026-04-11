
import { Box, Button, Stack, Container } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Badge from "@mui/material/Badge";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "../../css/products.css";
import { Product, ProductInquiry } from "../../lib/types/product";
import { setProducts } from "./slice";
import { createSelector, Dispatch } from "@reduxjs/toolkit";
import { retrieveProducts } from "./selector";
import { useDispatch, useSelector } from "react-redux";
import { ChangeEvent, useEffect, useState } from "react";
import ProductService from "../../app/services/ProductService";
import { useNavigate } from "react-router-dom";
import { serverApi } from "../../lib/config";
import { ProductCollection } from "../../lib/enums/product.enum";
import { CartItem } from "../../lib/types/search";


const actionDispatch = (dispatch: Dispatch) => ({
    setProducts: (data: Product[]) => dispatch(setProducts(data))
});

const productsRetriever = createSelector(
    retrieveProducts,
    (products) => ({ products })
);

interface ProductsProps {
    onAdd: (item: CartItem) => void;
}


export default function Products(props: ProductsProps) {

    const { onAdd } = props;
    const { setProducts } = actionDispatch(useDispatch());
    const { products } = useSelector(productsRetriever);
    const [productSearch, setProductSearch] = useState<ProductInquiry>({
        page: 1,
        limit: 8,
        order: "createdAt",
        // productCollection: ProductCollection.LUXURY,
        search: ""
    });

    const [searchText, setSearchText] = useState<string>("");
    const navigate = useNavigate();

    useEffect(() => {
        const product = new ProductService();
        product.getProducts(productSearch)
            .then((data) => setProducts(data))
            .catch((err) => console.log(err));
    }, [productSearch]);

    useEffect(() => {
        if (searchText === "") {
            productSearch.search = "";
            setProductSearch({ ...productSearch });
        }
    }, [searchText]);

    /**HaNDLERS */
    const searchCollectionHandler = (collection: ProductCollection) => {
        productSearch.page = 1;
        productSearch.productCollection = collection;
        setProductSearch({ ...productSearch });
    };

    const searchOrderHandler = (order: string) => {
        productSearch.page = 1;
        productSearch.order = order;
        setProductSearch({ ...productSearch });
    };

    const searchProductHandler = () => {
        productSearch.search = searchText;
        setProductSearch({ ...productSearch });
    };

    const paginationHandler = (_e: ChangeEvent<any>, value: number) => {
        productSearch.page = value;
        setProductSearch({ ...productSearch });/// yangi referencedagi object hosil qilishda ishledi
    };

    const chooseDishHandler = (id: string) => {
        navigate(`/products/${id}`);
    };
    
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
                                value={searchText}
                                onChange={(e) => setSearchText(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") searchProductHandler();
                                }}
                            />
                        </div>
                       
                        <Stack className="filter-box">
                            <div className="category-box">
                                <Button 
                                variant="contained" 
                                    sx={{
                                        backgroundColor:
                                            productSearch.order === "createdAt"
                                                ? "#D4AF37 !important"
                                                : "transparent"
                                    }}
                                onClick={() => searchOrderHandler("createdAt")}
                                >
                                   new
                                    </Button>
    
                                <Button 
                                variant="contained" 
                                    sx={{
                                        backgroundColor:
                                            productSearch.order === "productViews"
                                                ? "#D4AF37 !important"
                                                : "transparent"
                                    }}
                                onClick={() => searchOrderHandler("productViews")}
                                >
                                    best
                                    </Button>
                                <Button 
                                variant="contained"
                                    sx={{
                                        backgroundColor:
                                            productSearch.order === "productPrice"
                                                ? "#D4AF37 !important"
                                                : "transparent"}}

                                onClick={() => searchOrderHandler("productPrice")}
                                >
                                   price
                                    </Button>
                            </div>
                        </Stack>
                         </Stack>
                       
                         <Stack className="category-main"direction={"row"} spacing={1} justifyContent={"space-between"}>
                            
                            
                                <Button 
                                  variant="contained"
                               sx={{
                                backgroundColor:
                                    productSearch.productCollection === ProductCollection.LUXURY
                                        ? "#D4AF37 !important"   // gold
                                        : "transparent",
                              }}
                                  onClick={() => searchCollectionHandler(ProductCollection.LUXURY)}
                                 >
                                    Luxury
                                    </Button>
                                <Button 
                                 variant="contained"
                                sx={{
                                backgroundColor:
                                    productSearch.productCollection === ProductCollection.MODERN
                                        ? "#D4AF37 !important"  
                                        : "transparent",
                               }}
                                onClick={() => searchCollectionHandler(ProductCollection.MODERN)}
                                >
                                    Modern
                                    </Button>
                                <Button 
                                  variant="contained"
                                 sx={{
                                 backgroundColor:
                                    productSearch.productCollection === ProductCollection.CLASSIC
                                        ? "#D4AF37 !important"   
                                        : "transparent",
                               }}
                                 onClick={() => searchCollectionHandler(ProductCollection.CLASSIC)}
                                >
                                    Classic
                                    </Button>
                                <Button 
                                   variant="contained"
                               sx={{
                                backgroundColor:
                                    productSearch.productCollection === ProductCollection.RETRO
                                        ? "#D4AF37 !important"  
                                        : "transparent",
                              }}
                                   onClick={() => searchCollectionHandler(ProductCollection.RETRO)}
                                >
                                    retro
                                    </Button>
                           <Button
                            variant="contained"
                            sx={{
                                backgroundColor:
                                    productSearch.productCollection === ProductCollection.FAMILY
                                        ? "#D4AF37 !important"   
                                        : "transparent",
                            }}
                            onClick={() => searchCollectionHandler(ProductCollection.FAMILY)}
                        >
                            family
                        </Button>
                           
                        </Stack>
                   

                 
                
                       
                        <Stack className="product-wrapper">
                              {products.length !== 0 ? (
                              products.map((product: Product) => {
                                  const imagePath = `${serverApi}/${product.productImages[0]}`;
                                return (
                                     <Stack 
                                     key={product._id} 
                                     className="product-card"
                                        onClick={() => chooseDishHandler(product._id)}
                                     >
                                        <Stack
                                        className="product-img"
                                        sx={{backgroundImage: `url(${imagePath})`}}
                                        >
                                        <div className="product-sale">{product.productSize}</div>
                                         <Button className="view-btn" sx={{right:"36px"}}>
                                            <Badge badgeContent={product.productViews} color="secondary" >
                                                <RemoveRedEyeIcon className="eyeicon" 
                                                sx={{color: "black"}} />
                                            </Badge>
                                        </Button>
                                        </Stack>

                                        <Box className="product-desc">
                                            <div className="product-info">
                                                 <span className="product-type">
                                               {product.productCollection}
                                            </span>
                                             <span className="product-name">
                                                {product.productName}
                                            </span>
                                            </div>
                                           <div className="product-shopping">
                                            <div className="product-price">
                                               <p>${product.productPrice}</p> 
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
                        count={
                                products.length !== 0
                                    ? productSearch.page + 1
                                    : productSearch.page
                        }
                        page={productSearch.page}
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
                            onChange={paginationHandler}
                        >
                        </Pagination>
                    </Stack>
                </Stack>
            </Container>
        </div>
    ); 
}