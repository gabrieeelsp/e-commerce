import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import slugify from 'slugify'

const HeaderMenuComponent = (props) => {
    const { rubro } = props;

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
            <Link className="uppercase" to={`/${slugify(rubro.name, {lower: true, strict: true})}`} >{rubro.name}</Link>
            <div ref={menuRef} className="hidden absolute mt-3 min-w-[350px]  bg-white rounded-md shadow-xl" >
            { rubro.subrubros.map((subrubro) => <Link to={`/${slugify(rubro.name, { lower: true, strict: true })}/${slugify(subrubro.name, {lower: true, strict: true})}`} key={subrubro.id} className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white" >{subrubro.name}</Link>)} 
            </div>
        </div>    
    )
}

export default HeaderMenuComponent