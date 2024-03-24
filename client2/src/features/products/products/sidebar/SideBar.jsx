import { useSearchParams } from "react-router-dom";
import BrandsFilter from "./BrandsFilter"
import { useSelector } from "react-redux";
import { getOneByURL } from "../../../brands/brandsSlice";

const SideBar = () => {

    const { brands } = useSelector((state) => state.brands)

    const [currentQueryParameters, setSearchParams] = useSearchParams();
    const brandURL = currentQueryParameters.get('brand')

    const handlerClickBrandFilter = () => {
        currentQueryParameters.delete('brand')
        setSearchParams(currentQueryParameters)
    }

    const brand = useSelector((state) => getOneByURL(state, brandURL))
    
    return (
        <>
            {brands && brandURL && <button onClick={handlerClickBrandFilter} >{brand.name}</button>}
            {brands && !brandURL && <BrandsFilter />}
        </>
    )
}

export default SideBar