import React, { useEffect }from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { NavLink } from 'react-router-dom';
// import { useParams } from 'react-router';
// import { getAllItems } from '../store/items';
import './../styles/shop-filters.css'


const ShopFilters = () => {

    
    return (
        <div>
            <h1>Filters</h1>
            <p>Filters Sec A</p>
            <ul>
                <li>Filter 1</li>
                <li>Filter 2</li>
                <li>Filter 3</li>
            </ul>
            <p>Filters Sec B</p>
            <ul>
                <li>Filter 1</li>
                <li>Filter 2</li>
                <li>Filter 3</li>
            </ul>
        </div>
    );
}

export default ShopFilters;