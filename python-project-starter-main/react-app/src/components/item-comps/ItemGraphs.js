import React, { useEffect, useState }from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './../../styles/ItemGraphs.css'
import tripleTriangles from './../../images/green-triangles.png'
import oneTriangle from './../../images/green-triangle.png'

const ItemGraphs = (item) => {
    const curItem = item.item;
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)

    useEffect(() => {

    }, [curItem])

    let attr1;
    let attr2;
    let label1;
    let label2;
    let label3;
    let label4;
    switch(curItem?.item_type){
        case 1:
            attr1 = curItem.personality;
            attr2 = curItem.terrain;
            label1 = `Park`
            label2 = `All Mountain`
            label3 = `Playful`
            label4 = `Responsive`
            break;
        case 2:
            attr1 = curItem.warmth;
            attr2 = curItem.waterproofing;
            label1 = `Shell`
            label2 = `Heavy`
            label3 = `Performance`
            label4 = `Ultimate`
            break;
        case 3:
            break;
        case 4:
            attr1 = curItem.response;
            attr2 = curItem.stiffness;
            label1 = `Shell`
            label2 = `Heavy`
            label3 = `Performance`
            label4 = `Ultimate`
            break;
        default:
            break;
    }
    
    console.log(curItem)
    return (
        <div className='item-details-selection flex-row-cont'>
            <div className='graphs-container'>
                {/* =========== Top Graph =========== */}
                <div id='graph-1'className='item-graph' style={{marginLeft: `${attr1*10-30}%`}}>
                    <img src={oneTriangle} className='triangles-img' />
                </div>
                <div className='graph-labels-top flex-row-cont'>
                    <p className='graph-label'>{label1}</p>
                    <p className='graph-label'>{label2}</p>
                </div>
                <br />
                {/* =========== Bottom Graph =========== */}
                <div id='graph-2'className='item-graph'  style={{marginLeft: `${attr2*10-30}%`}}>
                    <img src={tripleTriangles} className='triangles-img' />
                </div>
                <div className='graph-labels-top flex-row-cont'>
                    <p className='graph-label'>{label3}</p>
                    <p className='graph-label'>{label4}</p>
                </div>
            </div>
            <div className='graphs-descriptor'>left</div>
        </div>
    );
}

export default ItemGraphs;