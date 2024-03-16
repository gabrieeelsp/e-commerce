import { useSelector } from "react-redux"
import InfiniteScroll from 'react-infinite-scroll-component';

import Excerpt from "./Excerpt";
import { useEffect, useState } from "react";

const List = (props) => {

    const { fetchMoreData } = props;

    const { products } = useSelector((state) => state.products)
    const { current_page, total_pages } = useSelector((state) => state.products.pagination)

    const [hasMore, setHasMore] = useState(false);
    useEffect(() => {
        setHasMore(current_page !== total_pages)
    }, [current_page, total_pages])

    return (
        <section>
                <InfiniteScroll
                className="grid grid-cols-3 gap-3"
                    dataLength={products.length}
                    next={fetchMoreData}
                    hasMore={hasMore}
                    loader={<h4>Cargando...</h4>}
                    endMessage={<p>No hay más productos para cargar</p>}
                >
                    {products.map((product) => (
                        <Excerpt key={product.id} id={product.id} name={product.name} />
                    ))}
                </InfiniteScroll>
        </section>
    )
}

export default List