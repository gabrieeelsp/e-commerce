import { useSelector } from "react-redux"
import AddItemCoomponent from "../products/AddItemCoomponent";
import { toMoney } from "../../utils/calcs";

const ProductCard = () => {
    const { product } = useSelector((state) => state.product)

    return (
        <div className="flex ">
            <div className="w-1/2 px-5">
                <img className="peer h-full w-full object-cover" src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60?a=b" alt="product image" />
            </div>
            <div className="w-1/2 px-5 ">
                <h1 className="text-3xl font-bold">{product.name}</h1>
                <div className="mt-2 mb-2 flex items-center justify-between">
                    <p>
                        <span className="text-2xl font-bold text-slate-900">{toMoney(product.price)}</span>&nbsp;
                        <span className="text-sm text-slate-900 line-through">$699</span>
                    </p>
                </div>
                <div className="flex mt-5">
                    <AddItemCoomponent 
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        size="xl"
                    />
                </div>
                
            </div>
        </div>
    )
}

export default ProductCard