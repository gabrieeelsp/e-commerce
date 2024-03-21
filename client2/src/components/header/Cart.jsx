import { IoCartOutline } from "react-icons/io5";

import { useSelector } from "react-redux"

const Cart = (props) => {
    const { setShowCartSidebar } = props
    const { items } = useSelector((state) => state.cart)
    return (
        <>
            <div className="relative" >
                <button onClick={() => setShowCartSidebar(true)}>
                    <IoCartOutline 
                        
                        className="text-3xl"
                    />
                </button>
                 
                <span
                    className={`absolute -top-1 -right-2 bg-purple-800 rounded-full text-sm w-5 h-5 flex justify-center align-middle ${ items.length === 0 ? 'opacity-0' : 'opacity-100' } transition-opacity duration-100 ease-in-out`}
                >{ items.length }</span>
            </div>
        </>
    )
}

export default Cart