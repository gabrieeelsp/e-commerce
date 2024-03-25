import { IoTrashOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../features/cart/cartSlice";
import { useEffect, useState } from "react";
import { getSubtotal, toMoney } from "../../utils/calcs";


const Item = (props) => {
    const { item } = props

    const dispatch = useDispatch();

    const handlerClickRemove = () => {
        setIsLoading(true)
        dispatch(removeItem({productId: item.product.id}))
    }


    const [cant, setCant] = useState(1)
    const handlerChangeCantidad = (e) => {
        setCant(e.target.value)
    }
    const handlerClickIncrement = () => {
        setIsLoading(true)
        dispatch(addItem({productId: item.product.id, quantity: 1}))
    }

    const handlerClickDecrement = () => {
        setIsLoading(true)
        dispatch(addItem({productId: item.product.id, quantity: -1}))
    }

    const { status, error } = useSelector((state) => state.cart)
    useEffect(() => {
        setCant(item.quantity)
    }, [item])

    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        if ((status === 'succeedded' || status === 'error') && isLoading ) setIsLoading(false)
    }, [status, error, isLoading])



    return (
        <>
            <div className="flex justify-start align-middle mb-3">
                <div className="w-20">
                    <img className="peer h-full w-full object-cover" src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60?a=b" alt="product image" />
                </div>
                <div className="ml-2 w-full">
                    <div className="flex justify-between">
                        <span>{item.product.name}</span>
                        <button 
                            onClick={handlerClickRemove}
                            disabled={isLoading}
                        ><IoTrashOutline /></button>
                    </div>
                    <div className="flex justify-between mt-2">
                        

                        <div className="w-24 flex justify-between botder border-gray-200 border-2 text-sm">
                            <button 
                                className="flex-1  font-bold py-1 p-2"
                                onClick={handlerClickDecrement}
                                disabled={item.quantity === 1 || (status === 'pending' && isLoading)}
                            >-</button>
                            { !isLoading && (
                                <input 
                                value={cant}
                                onChange={handlerChangeCantidad}
                                type="text" 
                                className={`w-12 text-center focus:outline-none ${isLoading ? 'text-gray-500' : ''}`} 
                                disabled
                            />
                            ) }
                            {isLoading && (
                                <span className="w-full flex justify-center align-middle ">
                                    <svg className="animate-spin h-5 w-5 text-gray-300 mt-1 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-100" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-100" fill="currentColor" d="M4 12a8 8 0 018-8V2.83a1 1 0 112 0V4a8 8 0 01-8 8z"></path>
                                    </svg>
                                </span>
                            )}
                            <button 
                                className="flex-1  font-bold py-1 p-2"
                                onClick={handlerClickIncrement}
                                disabled={isLoading}
                            >+</button>
                        </div>
                        <div>
                            <span className="text-sm">{toMoney(item.product.price)} x {item.quantity} = </span>
                            <span>{toMoney(getSubtotal(item))}</span>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Item