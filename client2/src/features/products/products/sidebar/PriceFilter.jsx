import { useState } from "react"
import { useSelector } from "react-redux"

import { IoChevronForwardCircle } from "react-icons/io5";
import { useSearchParams } from "react-router-dom";


const PriceFilter = () => {
    const { prices } = useSelector((state) => state.products.meta)
    const [minPrice, setMinPrice] = useState('')
    const [maxPrice, setMaxPrice] = useState('')

    const handlerChangeMin = (e) => {
        setMinPrice(e.target.value)
    }

    const handlerChangeMax = (e) => {
        setMaxPrice(e.target.value)
    }

    const [currentQueryParameters, setSearchParams] = useSearchParams();

    const handlerClickBrand = () => {

        if ( isNaN(minPrice) || isNaN(maxPrice)) return


        const minimo = minPrice.trim() !== '' ? Number(minPrice) : prices.min
        const maximo = maxPrice.trim() !== '' ? Number(maxPrice) : prices.max

        console.log(minimo, maximo)

        currentQueryParameters.append('minPrice', minimo)
        currentQueryParameters.append('maxPrice', maximo)
        setSearchParams(currentQueryParameters)
        
    } 

    return (
        <>
            
            <span className="font-bold">Precio</span>
            <div className="flex justify-start">
                
                <input 
                    type="text" 
                    value={minPrice}  
                    className="w-20 shadow-lg focus:outline-none border border-gray-200 rounded-lg pl-3 py-1 ml-2"
                    placeholder={prices.min}
                    onChange={handlerChangeMin}
                />
                <input 
                    type="text" 
                    value={maxPrice}  
                    className="w-20 shadow-lg focus:outline-none ml-2 border border-gray-200 rounded-lg pl-3 py-1"
                    placeholder={prices.max}
                    onChange={handlerChangeMax}
                />
                <button 
                    className="ml-3 text-2xl text-blue-600"
                    onClick={handlerClickBrand}
                    >
                    <IoChevronForwardCircle />
                </button>
            </div>
        </>
    )
}

export default PriceFilter