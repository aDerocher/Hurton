import React, { useEffect }from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import { useParams } from 'react-router';
import { getAllItems } from '../store/items';


const Shop = () => {
    const dispatch = useDispatch()
    const items = useSelector(state => state.items)
    
    useEffect(() => {
        dispatch(getAllItems())
        console.log(items[0])
    }, [dispatch])
    

    return (
        <div>
            <h1>This is the shop</h1>

            <ul>
                {items?.map((item, i) => (
                    <li key={i}>
                        <p>{item.name}</p>
                        {/* <NavLink to={`/items/${item.type}/${item.id}`} exact={true}>go</NavLink> */}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Shop;