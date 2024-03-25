import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addItem, setNewItem } from "../cart/cartSlice"

const AddItemCoomponent = (props) => {
    const { id, name, price, size } = props;

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
        setIsLoading(true)
        dispatch(addItem({productId: id, quantity: cant}))
    }

    const { status, error } = useSelector((state) => state.cart)

    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        if ((status === 'succeedded') && isLoading ) {
            dispatch(setNewItem({
                name, price, quantity: cant
            }))
            
        }
        if ((status === 'succeedded' || status === 'error') && isLoading ) {
            setIsLoading(false)
            
        }
    }, [dispatch, status, error, isLoading])

    return (
        <>
            <div className={`${size === 'sm' ? 'w-24' : 'w-28'} flex justify-between botder border-gray-200 border-2 text-sm`}>
                <button 
                    className="flex-1  font-bold py-1 p-2"
                    onClick={handlerClickDecrement}
                    disabled={cant === 1 || (status === 'pending' && isLoading)}
                >-</button>
                <input 
                    value={cant}
                    onChange={handlerChangeCantidad}
                    type="text" 
                    className={`${size === 'sm' ? 'w-12' : 'w-14'} text-center focus:outline-none ${isLoading ? 'text-gray-400' : ''}`} 
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
                className={`${size === 'sm' ? 'w-32' : 'w-40 ml-3'} border border-purple-300 text-purple-500 rounded-lg col-span-2 text-sm hover:bg-purple-300 hover:text-white ${isLoading ? 'bg-purple-300': ''}`}
                disabled={isLoading}
                >
                {!isLoading ? 
                    <span>Añadir al carrito</span> 
                    : 
                    <span className="w-full flex justify-center">
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-100" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-100" fill="currentColor" d="M4 12a8 8 0 018-8V2.83a1 1 0 112 0V4a8 8 0 01-8 8z"></path>
                        </svg>
                    </span>
                }
                
            </button>
        </>
    )
}

export default AddItemCoomponent