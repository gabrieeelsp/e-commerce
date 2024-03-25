import { useSearchParams } from "react-router-dom";
import BrandsFilter from "./BrandsFilter"
import { useSelector } from "react-redux";
import { getOneByURL } from "../../../brands/brandsSlice";
import PriceFilter from "./PriceFilter";

import { IoCloseOutline } from "react-icons/io5";

import { toMoney } from "../../../../utils/calcs"


const SideBar = () => {

    const { brands } = useSelector((state) => state.brands)

    const [currentQueryParameters, setSearchParams] = useSearchParams();
    const brandURL = currentQueryParameters.get('brand')
    const minPrice = currentQueryParameters.get('minPrice')
    const maxPrice = currentQueryParameters.get('maxPrice')

    const handlerClickBrandFilter = () => {
        currentQueryParameters.delete('brand')
        setSearchParams(currentQueryParameters)
    }

    const handlerClickPriceFilter = () => {
        currentQueryParameters.delete('minPrice')
        currentQueryParameters.delete('maxPrice')
        setSearchParams(currentQueryParameters)
    }

    const brand = useSelector((state) => getOneByURL(state, brandURL))
    
    return (
        <>
            <div className="flex gap-2 flex-wrap text-sm">
                {brands && brandURL && (
                    <button onClick={handlerClickBrandFilter} 
                        className="flex justify-start align-middle bg-gray-100 px-2 border border-gray-200"    
                    >
                        <span>{brand.name}</span> <IoCloseOutline className=" mt-1 ml-2" />
                    </button>
                )}
                {minPrice && maxPrice && (
                    <button onClick={handlerClickPriceFilter}
                        className="flex justify-start align-middle bg-gray-100 px-2 border border-gray-200" 
                    ><span>{toMoney(Number(minPrice))} a {toMoney(Number(maxPrice))}</span><IoCloseOutline className=" mt-1 ml-2" />
                </button>
                )}
            </div>
            <span className="block my-3 font-bold">Filtrar por</span>
            {brands && !brandURL && <BrandsFilter />}
            {!(minPrice || maxPrice) && (
                <>
                <hr className="text-gray-600 w-[80%] my-3" />
                <PriceFilter />
                </>
                )}
        </>
    )
}

export default SideBar