import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAll } from "./productsSlice";
import Excerpt from "./Excerpt";

const List = () => {

    const dispatch = useDispatch();

    const { status, error, products } = useSelector((state) => state.products)

    let content;
    if (status === 'pending') {
        content = <p>"Loading..."</p>;
    } else if (status === 'succeeded') {
        content = (
            <div className="grid grid-cols-3 gap-3">
                {products.map(product => <Excerpt key={product.id} id={product.id} name={product.name} /> )}
            </div>
        )
    } else if (status === 'error') {
        content = <p>{error}</p>;
    }

    return (
        <section>
            {content}
        </section>
    )
}

export default List