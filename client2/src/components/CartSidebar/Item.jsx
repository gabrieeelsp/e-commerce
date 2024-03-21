import { IoTrashOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../features/cart/cartSlice";
import { useEffect, useState } from "react";
import { getSubtotal, toMoney } from "../../utils/calcs";


const Item = (props) => {
    const { item } = props

    const dispatch = useDispatch();

    const handlerClickRemove = () => {
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
                        <button onClick={handlerClickRemove}><IoTrashOutline /></button>
                    </div>
                    <div className="flex justify-between mt-2">
                        
                        <div className="w-24 flex justify-between botder border-gray-200 border-2 text-sm">
                            <button 
                                className="flex-1  font-bold py-1 p-2"
                                onClick={handlerClickDecrement}
                                disabled={item.quantity === 1 || (status === 'pending' && isLoading)}
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