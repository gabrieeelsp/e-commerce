import {   createRef, useEffect, useRef, useState } from "react";

const HeaderMenuComponent = (props) => {
    const { rubro, handlerClickRubro, handlerClickSubrubro } = props;

    const divRef = useRef(null)
    const menuRef = useRef(null);

    useEffect(() => {
        let parent = divRef.current.parentNode
        while ( !parent.classList.contains('relative') ) {
            parent = parent.parentNode;
        }

        const left = (divRef.current.getBoundingClientRect().x - parent.getBoundingClientRect().x)
        menuRef.current.classList.toggle(`left-[${Math.floor(left)}px]`)
    }, [divRef])
    
    const handleToggle = () => {
        menuRef.current.classList.toggle(`hidden`)
    }

    return (
        <div className="py-3" ref={divRef} onMouseEnter={handleToggle} onMouseLeave={handleToggle}>
            <button className="uppercase" onClick={() => handlerClickRubro(rubro.id)}>
                { rubro.name }
            </button>
            <div ref={menuRef} className="hidden absolute mt-3 min-w-[350px]  bg-white rounded-md shadow-xl" onTransitionEnd={console.log('termino')}>
            { rubro.subrubros.map((subrubro) => <a href="#" key={subrubro.id} className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white" onClick={() => handlerClickSubrubro(rubro.id, subrubro.id)}>{subrubro.name}</a>)} 
            </div>
        </div>    
    )
}

export default HeaderMenuComponent