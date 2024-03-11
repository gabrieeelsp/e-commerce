import {   createRef, useEffect, useRef, useState } from "react";

const HeaderMenuComponent = (props) => {
    const { title } = props;

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
            <button className="" >
                { title }
            </button>
            <div ref={menuRef} className="hidden absolute mt-3 min-w-[350px]  bg-white rounded-md shadow-xl" onTransitionEnd={console.log('termino')}>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">Account settings</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">Support</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">Sign out</a> 
            </div>
        </div>    
    )
}

export default HeaderMenuComponent