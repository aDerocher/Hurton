import React, { useEffect }from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
// import { useParams } from 'react-router';
import { getOneItem } from './../../store/items';


const Snowboard = () => {
    const params = useParams()
    console.log("params==========", params)
    const dispatch = useDispatch()
    const item = useSelector(state => state.items[0])
    // const itemTypes = useSelector(state => state.item_types)

    useEffect(() => {
        // dispatch(getOneItem(board_id))
        console.log(item)
    }, [dispatch])
    
    const goToItem = (e, item_id) => {
        
    }

    return (
        <div className="item-page-container">
            <div>
                <h1>This is one Item</h1>
                <p>{item?.name}</p>
            </div>
        </div>
    );
}

export default Snowboard;