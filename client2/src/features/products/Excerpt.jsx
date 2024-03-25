import { Link } from "react-router-dom";
import slugify from "slugify";
import { toMoney } from "../../utils/calcs";
import { useEffect, useState } from "react";
import { addItem } from "../cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const Excerpt = (porps) => {
    const { id, name, price } = porps;

    const dispatch = useDispatch()

    const [cant, setCant] = useState(1)
    const handlerChangeCantidad = (e) => {
        setCant(e.target.value)
    }
    const handlerClickIncrement = () => {
        setCant((cant) => cant + 1)
    }

    const handlerClickDecrement = () => {
        setCant((cant) => cant - 1)
    }

    const handlerClicAddItem = () => {
        dispatch(addItem({productId: id, quantity: cant}))
    }

    const { status, error } = useSelector((state) => state.cart)

    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        if ((status === 'succeedded' || status === 'error') && isLoading ) setIsLoading(false)
    }, [status, error, isLoading])

    return (
        <>
            <div className=" flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                <Link to='#' className="mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" > 
                    <img className="peer h-full w-full object-cover" src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60?a=b" alt="product image" />
                </Link>

                <div className="mt-4 px-5 pb-1">
                    <Link to={`/products/${slugify(name, { lower: true, strict: true})}`}>
                        <h5 className="text-md tracking-tight text-slate-900">{name}</h5>
                    </Link>
                    <div className="mt-2 mb-2 flex justify-end items-baseline">
                            <span className="text-sm text-slate-900 line-through ">$699</span>
                            <span className="text-2xl font-bold text-slate-900 ml-2 ">{toMoney(price)}</span>&nbsp;
                    </div>
                </div>
                <div className="flex justify-between mt-2 mb-3 px-4">
                        
                        <div className="w-24  flex justify-between botder border-gray-200 border-2 text-sm">
                            <button 
                                className="flex-1  font-bold py-1 p-2"
                                onClick={handlerClickDecrement}
                                disabled={cant === 1 || (status === 'pending' && isLoading)}
                            >-</button>
                            <input 
                                value={cant}
                                onChange={handlerChangeCantidad}
                                type="text" 
                                className={`w-12 text-center focus:outline-none ${isLoading ? 'text-gray-100' : ''}`} 
                                disabled
                            />
                            <button 
                                className="flex-1  font-bold py-1 p-2"
                                onClick={handlerClickIncrement}
                                disabled={isLoading}
                            >+</button>
                        </div>
                        <button 
                            onClick={handlerClicAddItem}
                            className=" px-3 border border-purple-300 text-purple-500 rounded-lg col-span-2 text-sm hover:bg-purple-300 hover:text-white">
                            Añadir al carrito
                        </button>
                        
                    </div>
            </div>
        </>
    )
}

export default Excerpt