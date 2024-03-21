import { IoCloseCircleOutline } from "react-icons/io5";
import ItemsList from "./ItemsList";
import Subtotal from "./Subtotal";
import Total from "./Total";


const CartSidebar = (props) => {
    const { showCartSidebar, setShowCartSidebar } = props
    return (
        <>
            <div className={`top-0 right-0 w-[35vw] bg-white  fixed h-full z-40 ${showCartSidebar ? "translate-x-0 " : "translate-x-full"} ease-in-out duration-300`}>
                <div className="flex justify-between align-middle text-white bg-purple-800 p-3">
                    <h4 className="text-xl">Carrito de Compras</h4>
                    <button
                        className="text-3xl"
                        onClick={() => setShowCartSidebar(false)}
                    ><IoCloseCircleOutline />
                    </button>
                </div>

                <div className="p-3">
                    <ItemsList />
                </div>
                
                <hr className="w-[90%] mx-auto my-2" />

                <div className="p-3">
                    <Subtotal />
                </div>

                <hr className="w-[90%] mx-auto my-2" />

                <div className="p-3">
                    <Total />
                </div>
            </div>
        </>
    )
}

export default CartSidebar