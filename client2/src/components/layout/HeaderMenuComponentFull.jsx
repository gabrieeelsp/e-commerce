import { useRef, useState } from "react";

const HeaderMenuComponent = (props) => {
    const { title } = props;

    const menuRef = useRef(null);

    const handleToggle = () => {
        menuRef.current.classList.toggle(`hidden`)
    }

    return (
        <div className="py-3" onMouseEnter={handleToggle} onMouseLeave={handleToggle}>
            <button className="" >
                {title}
            </button>
            <div ref={menuRef} className="hidden absolute right-0 mt-3 w-full  bg-white rounded-md shadow-xl" >
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">Account settings</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">Support</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">Sign out</a> 
            </div>
        </div>    
    )
}

export default HeaderMenuComponent