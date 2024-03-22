import { IoCloseCircleOutline } from "react-icons/io5";
import ItemsList from "./ItemsList";
import Subtotal from "./Subtotal";
import Total from "./Total";

const Sidebar = ({ isOpen, onClose }) => {
    return (
        <div>
            {isOpen && (
            <div
                className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50"
                onClick={onClose}
            ></div>
            )}
            <div
                className={`fixed top-0 right-0 h-full w-[500px] bg-white transition-transform duration-300 transform ${
                isOpen ? 'translate-x-0' : 'translate-x-full'
                } z-50`}
            >
                <div className="flex justify-between align-middle text-white bg-purple-500 p-3">
                    <h4 className="text-xl">Carrito de Compras</h4>
                    <button
                        className="text-3xl"
                        onClick={onClose}
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
        </div>
    );
};

export default Sidebar;
