import { ProductCollection, ProductSize, ProductStatus, ProductMaterial} from "../enums/product.enum";

export interface Product {
    productCollection: ProductCollection;
    _id: string;
    productStatus: ProductStatus;
    productName: string;
    productPrice: number;
    productLeftCount: number;
    productSize: ProductSize;
    productMaterial: ProductMaterial;
    productDesc?:string;
    productImages: string[];
    productViews: number;
     createdAt: Date;
    updatedAt: Date;
}

export interface ProductInquiry {
    order: string;
    page: number;
    limit: number;
    productCollection?: ProductCollection;
    search?: string;
}