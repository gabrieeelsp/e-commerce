import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'


import HeaderMenuComponent from "./HeaderMenuComponent"
import { logout } from "../../features/auth/authSlice";
// import HeaderMenuComponentFull from "./HeaderMenuComponentFull"

const HeaderComponent = () => {

    const dispatch = useDispatch();

    const { rubros } = useSelector((state) => state.rubros)

    const { user, verified } = useSelector((state) => state.auth)

    const handlerClickLogout = () => {
        dispatch(logout())
    }

    return (
        <>
            <header className="text-white">
                <section  className="bg-purple-400">
                    <div className="max-w-5xl mx-auto py-4 flex justify-between items-center">
                        <h1 className="text-4xl font-medium"><Link>Intertienda</Link></h1>
                        { verified && (
                            <>
                            { !user && <Link to='/account/login' className="text-sm">ACCEDER / REGISTRARSE</Link> }
                            { user && (
                                <div>
                                    <span className="text-sm">{ user.name }</span>
                                    <button className="ml-3" onClick={handlerClickLogout}>Salir</button>
                                </div>
                            ) }
                            </>
                        )}
                        
                    </div>
                </section>

                <section  className="bg-purple-500 px-4 ">
                    <div className="relative max-w-5xl mx-auto flex justify-start space-x-12">

                        {
                            rubros && 
                                rubros.map((rubro) => <HeaderMenuComponent key={rubro.id} rubro={rubro}  />)
                        }

                    </div>
                </section>
            </header>
        </>

        
    )
}

export default HeaderComponent