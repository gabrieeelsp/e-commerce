import { useSearchParams } from "react-router-dom"
import List from "../features/products/List"
import SideBar from "../features/products/products/sidebar/SideBar"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAll } from "../features/products/productsSlice";
import { getOneByURL } from "../features/brands/brandsSlice";

const Products = () => {

    const [currentQueryParameters, setSearchParams] = useSearchParams();

    const q = currentQueryParameters.get('q')
    const brandURL = currentQueryParameters.get('brand')

    const brand = useSelector((state) => getOneByURL(state, brandURL))

    const limit = 6;

    const dispatch = useDispatch()

    const [currentPage, setCurrentPage] = useState(1);
    const fetchMoreData = () => {
        setCurrentPage(currentPage + 1)
    }

    useEffect(() => {
        setCurrentPage(1)
    }, [q, brandURL])

    useEffect(() => {
        dispatch(getAll({
            limit, 
            current_page: currentPage,
            q,
            brandId: brand ? brand.id : null,
        }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, currentPage, q, brandURL])

    return (
        <div className="flex flex-row">
            <div className="w-60">
                
                <SideBar />
            </div>
            <div>
                <List fetchMoreData={fetchMoreData} />
            </div>
        </div>
    )
}

export default Products