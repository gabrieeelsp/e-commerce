import { useLocation } from "react-router-dom"
import List from "../features/products/List"
import SideBar from "../features/products/sidebar/SideBar"
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { getAll } from "../features/products/productsSlice";

const Products = () => {
    const location = useLocation()
    const params = new URLSearchParams(location.search)
    const q = params.get('q')

    const limit = 6;

    const dispatch = useDispatch()

    const [currentPage, setCurrentPage] = useState(1);
    const fetchMoreData = () => {
        setCurrentPage(currentPage + 1)
    }

    useEffect(() => {
        setCurrentPage(1)
        dispatch(getAll({
            limit, 
            current_page: 1,
            q,
        }))
    }, [dispatch, q])

    useEffect(() => {
        dispatch(getAll({
            limit, 
            current_page: currentPage,
            q,
        }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, currentPage])

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