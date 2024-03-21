import { useSelector } from 'react-redux' 
import Item from './Item'
const ItemsList = () => {
    const { items } = useSelector((state) => state.cart)
    return (
        <>
            <div>
                {items && items.map((item) => <Item key={item.product.id} item={item} />)

                }
            </div>
        </>
    )
}

export default ItemsList