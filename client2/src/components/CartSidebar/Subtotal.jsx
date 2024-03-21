import { useSelector } from "react-redux"
import { getTotal, toMoney } from "../../utils/calcs"

const Subtotal = () => {

    const { items } = useSelector((state) => state.cart)



    return (
        <>
            <div className="flex justify-between">
                <span className="font-bold">Subtotal (Sin envío)</span>
                <span className="font-bold">{toMoney(getTotal(items))}</span>
            </div>
        </>
    )
}

export default Subtotal