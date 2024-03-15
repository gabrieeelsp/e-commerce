import List from "../features/products/List"
import SideBar from "../features/products/SideBar"

const Products = () => {
    return (
        <div className="flex flex-row">
            <SideBar />
            <List />
        </div>
    )
}

export default Products