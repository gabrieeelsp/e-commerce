import { useEffect, useState } from "react"
import { toMoney } from "../../utils/calcs"
import { useDispatch, useSelector } from "react-redux"
import { removeNewItem } from "../../features/cart/cartSlice"

const NewItemAlert = () => {
    const dispatch = useDispatch()

    const { newItem } = useSelector((state) => state.cart)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        let timer = null;
        let timerOpacity = null;
        if ( newItem ) { 
            setVisible(true)
            timerOpacity = setTimeout(() => {
                setVisible(false)
            }, 4000)
            timer = setTimeout(() => {
                dispatch(removeNewItem())
            }, 5000)
        } else {
            setVisible(false)
        }

        return () => {clearTimeout(timer), clearTimeout(timerOpacity)}
    }, [dispatch, newItem])
    
    return (
        <>
        {newItem && (
            <div className={`absolute w-[450px] bg-white -right-3 p-2 shadow-2xl rounded-md ${visible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500 `}>
                <div className="flex justify-start">
                    <div className="w-20">
                        <img className="peer h-full w-full object-cover" src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60?a=b" alt="product image" />
                    </div>
                    <div className="ml-2 text-slate-600 w-full">
                        <span>{newItem.name}</span>
                        <div className="text-sm">
                            {newItem.quantity} x {toMoney(newItem.price)}
                        </div>
                        <div className="flex justify-center ">
                            <span className="mt-1 text-slate-900">Agregado al carrito con éxito!</span>
                        </div>
                    </div>
                </div>
                <hr className="text-slate-200 mt-3" />
                <div className="flex justify-center mt-3">
                    <button 
                        className="bg-purple-500 w-[80%] rounded-full py-1 uppercase"
                        >Ver carrito
                    </button>
                </div>
            </div>
        )}
        </>
    )
}

export default NewItemAlert