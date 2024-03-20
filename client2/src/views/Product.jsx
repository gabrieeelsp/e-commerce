import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react";
import { getOneByURL } from "../features/product/productSlice";
import ProductCard from "../features/product/ProductCard";

const Product = () => {
    const { productName } = useParams();

    const { product, status, error } = useSelector((state) => state.product)
    const dispatch = useDispatch();

    useEffect(() => {
      if ( productName ) dispatch(getOneByURL({url: productName}));
    }, [dispatch, productName])
  
    return (
        <>
            { product &&
                <ProductCard />
            }
            
        </>
    )
}

export default Product