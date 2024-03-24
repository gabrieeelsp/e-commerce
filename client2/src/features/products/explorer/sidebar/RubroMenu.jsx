import { NavLink, useLocation } from 'react-router-dom'

import SubrubroMenu from './SubrubroMenu'

import slugify from 'slugify'
import { useEffect, useState } from 'react';

const RubroMenu = (props) => {
    const { rubro } = props;

    const location = useLocation();

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if ( location.pathname.split('/')[1].toLowerCase() === slugify(rubro.name, {lower: true, strict: true})) {
            setIsOpen(true)
        } else {
            setIsOpen(false)
        }
    }, [location])

    return (
        <li>
            <div className='flex justify-between'>
                <NavLink 
                    className={(navData) => navData.isActive ? 'text-purple-600' : ''}
                    to={`/${slugify(rubro.name, {lower: true, strict: true})}`}
                >{rubro.name}</NavLink>
                <button onClick={() => setIsOpen(oldValue => !oldValue)} >
                    { isOpen ? <span>-</span> : <span>+</span> }
                </button>
            </div>
            
            <div className={`grid overflow-hidden transition-all duration-100 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                <ul className='overflow-hidden'>
                    {rubro.subrubros.map((subrubro) => (
                        <SubrubroMenu 
                            key={`subrubro-${subrubro.id}`} 
                            subrubro={subrubro} 
                            rubro={rubro}
                            />
                    ))}
                </ul>
            </div>
            
        </li>
    )
}

export default RubroMenu