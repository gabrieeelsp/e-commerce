import { useSelector } from "react-redux"
import { useSearchParams } from "react-router-dom";
import slugify from "slugify";

const BrandsFilter = () => {

    const { brands } = useSelector((state) => state.brands)
    const brandsActive = useSelector((state) => state.products.meta.brands)
    

    const [currentQueryParameters, setSearchParams] = useSearchParams();

    const handlerClickBrand = (brandName) => {
        currentQueryParameters.append('brand',  slugify(brandName, {lower: true, strict: true}))
        setSearchParams(currentQueryParameters)
    }   
    return (
        <>
            <div>
                <span className="font-bold">Marca</span>
                { brandsActive &&
                    brandsActive.filter((brandActive) => brandActive).map((b) => (
                        <div key={'brand-'+brands[b].id} className="ml-2">
                            <button onClick={() => handlerClickBrand(brands[b].url)} >{brands[b].name}</button>
                        </div>
                    ))}
            </div>
        </>
    )
}

export default BrandsFilter