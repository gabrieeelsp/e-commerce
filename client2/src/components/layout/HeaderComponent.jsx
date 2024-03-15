import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'

import { rubroIdChanged, subrubroChanged } from "../../features/products/productsSlice"

import HeaderMenuComponent from "./HeaderMenuComponent"
// import HeaderMenuComponentFull from "./HeaderMenuComponentFull"

const HeaderComponent = () => {
    const dispatch = useDispatch();

    const { rubros } = useSelector((state) => state.rubros)

    const handlerClickRubro = (rubroId) => {
        dispatch(rubroIdChanged(rubroId))
    }

    const handlerClickSubrubro = (rubroId, subrubroId) => {
        dispatch(subrubroChanged({rubroId, subrubroId}));
    }
    return (
        <>
            <header className="text-white">
                <section  className="bg-purple-400">
                    <div className="max-w-5xl mx-auto py-4 flex justify-between items-center">
                        <h1 className="text-4xl font-medium"><Link>Intertienda</Link></h1>
                        <button className="text-sm">ACCEDER / REGISTRARSE</button>                    
                    </div>
                </section>

                <section  className="bg-purple-500 px-4 ">
                    <div className="relative max-w-5xl mx-auto flex justify-start space-x-12">

                        {
                            rubros && 
                                rubros.map((rubro) => <HeaderMenuComponent key={rubro.id} rubro={rubro} handlerClickRubro={handlerClickRubro} handlerClickSubrubro={handlerClickSubrubro} />)
                        }

                    </div>
                </section>
            </header>
        </>

        
    )
}

export default HeaderComponent