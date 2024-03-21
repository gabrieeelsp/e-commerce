import { useSelector } from "react-redux"
import { getTotal, toMoney } from "../../utils/calcs"

const Total = () => {

    const { items } = useSelector((state) => state.cart)



    return (
        <>
            <div className="flex justify-between text-purple-800 text-3xl">
                <span className="font-bold">Total</span>
                <span className="font-bold">{toMoney(getTotal(items))}</span>
            </div>
        </>
    )
}

export default Total