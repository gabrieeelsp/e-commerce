import { Link } from "react-router-dom";
import slugify from "slugify";
import { toMoney } from "../../utils/calcs";
import AddItemCoomponent from "./AddItemCoomponent";

const Excerpt = (porps) => {
    const { id, name, price } = porps;

    return (
        <>
            <div className=" flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                <Link to='#' className="mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" > 
                    <img className="peer h-full w-full object-cover" src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60?a=b" alt="product image" />
                </Link>

                <div className="mt-4 px-5 pb-1">
                    <Link to={`/products/${slugify(name, { lower: true, strict: true})}`}>
                        <h5 className="text-md tracking-tight text-slate-900">{name}</h5>
                    </Link>
                    <div className="mt-2 mb-2 flex justify-end items-baseline">
                            <span className="text-sm text-slate-900 line-through ">$699</span>
                            <span className="text-2xl font-bold text-slate-900 ml-2 ">{toMoney(price)}</span>&nbsp;
                    </div>
                </div>
                <div className="flex justify-between mt-2 mb-3 px-4">
                        
                        <AddItemCoomponent 
                            id={id}
                            name={name}
                            price={price}
                            size="sm"
                        />
                        
                    </div>
            </div>
        </>
    )
}

export default Excerpt