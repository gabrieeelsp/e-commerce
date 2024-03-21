import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addItem } from "../cart/cartSlice";

const ProductCard = () => {
    const { product } = useSelector((state) => state.product)

    const dispatch = useDispatch();

    const [cant, setCant] = useState(1)

    const handlerChangeCantidad = (e) => {
        setCant(e.target.value)
    }

    const handlerIncrementCantidad = () => {
        setCant(cant => cant + 1)
    }

    const handlerDecrementCantidad = () => {
        setCant(cant => cant - 1)
    }

    const handlerClickAddToCart = () => {
        dispatch(addItem({productId: product.id, quantity: cant}))
    }

    return (
        <div className="flex ">
            <div className="w-1/2 px-5">
                <img className="peer h-full w-full object-cover" src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60?a=b" alt="product image" />
            </div>
            <div className="w-1/2 px-5 ">
                <h1 className="text-3xl font-bold">{product.name}</h1>
                <div className="mt-2 mb-2 flex items-center justify-between">
                    <p>
                        <span className="text-2xl font-bold text-slate-900">$449</span>&nbsp;
                        <span className="text-sm text-slate-900 line-through">$699</span>
                    </p>
                </div>
                <div className="flex mt-5">
                    <div className="w-28 flex justify-between botder border-gray-200 border-2 text-lg">
                        <button 
                            className="flex-1  font-bold py-1 p-2"
                            onClick={handlerDecrementCantidad}
                        >-</button>
                        <input 
                            value={cant}
                            onChange={handlerChangeCantidad}
                            type="text" 
                            className="w-14 text-center focus:outline-none" 
                        />
                        <button 
                            className="flex-1  font-bold py-1 p-2"
                            onClick={handlerIncrementCantidad}
                        >+</button>
                    </div>
                    <button 
                        className="w-40 ml-5 border border-purple-300 text-purple-500 rounded-lg text-sm hover:bg-purple-300 hover:text-white"
                        onClick={handlerClickAddToCart}
                        >Añadir al carrito</button>
                </div>
                
            </div>
        </div>
    )
}

export default ProductCard