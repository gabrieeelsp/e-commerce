import { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";


const SearchBar = () => {
    const location = useLocation()
    

    useEffect(() => {
        
        const params = new URLSearchParams(location.search)
        const q = params.get('q')
        setName(q ? q : '')
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const [name, setName] = useState('');
    const handlerChange = (e) => {
        setName(e.target.value)
    }

    const navigate = useNavigate()
    const handlerClickSearch = () => {
        navigate(`/products?q=${name}`)
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handlerClickSearch()
        }
    };

    return (
        <>
            <div className="flex justify-center bg-white px-2 rounded-lg">
                <input 
                    type="text" 
                    placeholder="¿Que estas buscando?"
                    className="w-96 text-gray-600 text-xl  py-1 focus:outline-none "
                    value={name}
                    onChange={handlerChange}
                    onKeyUp={handleKeyPress}
                    />
                <button 
                    className="bg-white text-purple-700 text-2xl font-bold"
                    onClick={handlerClickSearch}
                >
                    <IoSearchOutline />
                </button>
            </div>
        </>
    )
}

export default SearchBar