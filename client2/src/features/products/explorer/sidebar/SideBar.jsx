import { useSelector } from 'react-redux'

import RubroMenu from './RubroMenu'

const SideBar = () => {
    const { rubros } = useSelector((state) => state.rubros)

    return (
        <>
            <ul>
                { rubros && 
                    rubros.map((rubro) => 
                        <RubroMenu 
                            key={`menu-${rubro.id}`} 
                            rubro={rubro} 
                        />
                    )}
            </ul>
        </>
    )
}

export default SideBar