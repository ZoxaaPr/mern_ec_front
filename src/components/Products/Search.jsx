import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const navigate = useNavigate();
    const [keyword, setKeyword] = useState("")

    const searchSubmitHandler = (e) => {
        e.preventDefault();
        if (keyword.trim()) {
            navigate(`/products/${keyword}`)
        } else {
            navigate(`/products/`)
        }
    }
    return (
        <div className='filter_div'>
            <form action="" onSubmit={searchSubmitHandler}>
                <input type="text" placeholder="Search" className='filter_div_text'
                    onChange={(e) => setKeyword(e.target.value)} />
                <input className='filter_div_search' type="submit" value={"sea"} />

            </form>
        </div>
    )
}

export default Search