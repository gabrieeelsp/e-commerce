import { useParams } from "react-router-dom"
import List from "../features/products/List"
import SideBar from "../features/products/sidebar/SideBar"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import slugify from "slugify";
import { getAll } from "../features/products/productsSlice";

const Products = () => {
    let { rubroName, subrubroName } = useParams();

    const dispatch = useDispatch();

    const { rubros } = useSelector((state) => state.rubros)
    // const { limit, current_page } = useSelector((state) => state.products.pagination)

    const limit = 6;

    const [rubro, setRubro] = useState(null);
    useEffect(() => {
        setCurrentPage(1);
        rubros.length && setRubro(rubroName ? rubros.find((r) => slugify(r.name, { lower: true,strict: true}) === rubroName.toLowerCase()) : null)
    }, [rubroName, rubros])

    const [subrubro, setSubrubro] = useState(null);
    useEffect(() => {
        setCurrentPage(1);
        rubros.length && setSubrubro(subrubroName && rubro ? rubro.subrubros.find((s) => slugify(s.name, { lower: true, strict: true}) === subrubroName.toLowerCase()) : null)
    }, [rubro, subrubroName, rubros])
    
    const [currentPage, setCurrentPage] = useState(1);
    const fetchMoreData = () => {
        setCurrentPage(currentPage + 1)
    }

    useEffect(() => {        
        if ( 
            (rubroName && rubro && subrubroName && subrubro) ||
            (rubroName && rubro && !subrubroName && !subrubro) ||
            (!rubroName && !rubro && !subrubroName && !subrubro)    
        ) {
            dispatch(getAll({
                limit, 
                current_page: currentPage, 
                rubroId: rubro ? rubro.id : null, 
                subrubroId: subrubro ? subrubro.id : null,
            }))
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, currentPage, rubros, rubro, subrubroName, subrubro]);


    // useEffect(() => {        
    //     if ( rubros.length ) {
    //         dispatch(getAll({
    //             limit, 
    //             current_page: currentPage, 
    //             rubroId: rubro ? rubro.id : null, 
    //             subrubroId: subrubro ? subrubro.id : null,
    //             refresh: true,
    //         }))
    //     }
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [dispatch, rubro, subrubro, rubros]);





    // useEffect(() => {
        
    //     const rubro = rubroName ? rubros.find((r) => slugify(r.name, { lower: true,strict: true}) === rubroName.toLowerCase()) : null;
    //     const subrubro = subrubroName && rubro ? rubro.subrubros.find((s) => slugify(s.name, { lower: true, strict: true}) === subrubroName.toLowerCase()) : null

        

    //     if ( rubros.length ) {
    //         dispatch(getAll({
    //             limit, 
    //             current_page: currentPage, 
    //             rubroId: rubro ? rubro.id : null, 
    //             subrubroId: subrubro ? subrubro.id : null,
    //         }))
    //     }

    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [dispatch, rubroName, subrubroName, rubros, currentPage]);

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