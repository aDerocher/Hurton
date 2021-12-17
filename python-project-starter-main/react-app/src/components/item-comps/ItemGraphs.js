import React, { useEffect, useState }from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './../../styles/item-details.css'


const ItemGraphs = (item) => {
    const curItem = item.item;
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)

    useEffect(() => {

    }, [curItem])

    switch(curItem?.item_type){
        case 1:
            console.log(curItem.item_type)
            break;
        case 2:
            console.log(curItem.item_type)
            break;
        case 3:
            console.log(curItem.item_type)
            break;
        case 4:
            console.log(curItem.item_type)
            break;
        default:
            break;
    }
    
    console.log(curItem)
    return (
        <div className='item-details-selection flex-row-cont'>
            <div className='graphs-container'>
                <div className='item-graph-container'>
                    <div id='graph-1'className='item-graph'>
                        <img src='' />
                    </div>
                </div>
                <div className='item-graph-container'>
                    <div id='graph-2'className='item-graph'>
                        <img src='' />
                    </div>
                </div>
            </div>
            <div>left</div>
        </div>
    );
}

export default ItemGraphs;