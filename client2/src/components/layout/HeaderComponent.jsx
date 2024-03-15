import { Link } from "react-router-dom"

import HeaderMenuComponent from "./HeaderMenuComponent"
import HeaderMenuComponentFull from "./HeaderMenuComponentFull"

const HeaderComponent = () => {
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
                        <HeaderMenuComponentFull title="INGREDIENTES" />
                        <HeaderMenuComponentFull title="HERRAMIENTAS" />
                        <HeaderMenuComponent title="DECORACIÓN" />
                        <HeaderMenuComponentFull title="GOLOSINAS" />

                    </div>
                </section>
            </header>
        </>

        
    )
}

export default HeaderComponent