import { useParams } from "react-router-dom"
import List from "../features/products/List"
import SideBar from "../features/products/sidebar/SideBar"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import slugify from "slugify";
import { getAll, rubroChanged, subrubroChanged } from "../features/products/productsSlice";

const Products = () => {
    let { rubroName, subrubroName } = useParams();

    const dispatch = useDispatch();

    const { rubros } = useSelector((state) => state.rubros)
    const { limit, current_page } = useSelector((state) => state.products.pagination)

    useEffect(() => {
        const rubro = rubroName ? rubros.find((r) => slugify(r.name, { lower: true,strict: true}) === rubroName.toLowerCase()) : null;
        const subrubro = subrubroName && rubro ? rubro.subrubros.find((s) => slugify(s.name, { lower: true, strict: true}) === subrubroName.toLowerCase()) : null

        dispatch(getAll({
            limit, current_page, 
            rubroId: rubro ? rubro.id : null, 
            subrubroId: subrubro ? subrubro.id : null,
        }))

    }, [dispatch, rubroName, subrubroName, rubros, current_page, limit]);

    return (
        <div className="flex flex-row">
            <div className="w-60">
                <SideBar />
            </div>
            <div>
                <List />
            </div>
        </div>
    )
}

export default Products