import { Link } from "react-router-dom";

const Excerpt = (porps) => {
    const {  name } = porps;

    return (
        <>
            <div className=" flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                <Link to='#' className="mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" > 
                    <img className="peer h-full w-full object-cover" src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60?a=b" alt="product image" />
                </Link>

                <div className="mt-4 px-5 pb-1">
                    <a href="#">
                        <h5 className="text-md tracking-tight text-slate-900">{name}</h5>
                    </a>
                    <div className="mt-2 mb-2 flex items-center justify-between">
                        <p>
                            <span className="text-2xl font-bold text-slate-900">$449</span>&nbsp;
                            <span className="text-sm text-slate-900 line-through">$699</span>
                        </p>
                    </div>
                </div>
                <div className="mb-3 px-5 grid grid-cols-3 gap-2">
                    <input type="text" className="border border-gray-100 bg-white shadow-md text-md focus:outline-none focus:shadow-lg p-1 col-span-1" />
                    <button className="border border-purple-300 text-purple-500 rounded-lg col-span-2 text-sm hover:bg-purple-300 hover:text-white">Añadir al carrito</button>
                </div>
            </div>
        </>
    )
}

export default Excerpt