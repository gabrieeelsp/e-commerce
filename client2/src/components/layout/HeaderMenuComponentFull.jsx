import { useRef, useState } from "react";

const HeaderMenuComponent = (props) => {
    const { rubro, handlerClickRubro } = props;

    const menuRef = useRef(null);

    const handleToggle = () => {
        menuRef.current.classList.toggle(`hidden`)
    }

    return (
        <div className="py-3" onMouseEnter={handleToggle} onMouseLeave={handleToggle}>
            <button className="uppercase"
                onClick={() => handlerClickRubro(rubro.id)}
            >
                {rubro.name}
            </button>
            <div ref={menuRef} className="hidden absolute right-0 mt-3 w-full  bg-white rounded-md shadow-xl" >
                { rubro.subrubros.map((subrubro) => <a href="#" key={subrubro.id} className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">{subrubro.name}</a>)} 
            </div>
        </div>    
    )
}

export default HeaderMenuComponent