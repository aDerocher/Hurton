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
        case 1: // board
            attr1 = curItem.personality;
            attr2 = curItem.terrain;
            label1 = `Park`
            label2 = `All Mountain`
            label3 = `Playful`
            label4 = `Responsive`
            break;
        case 2: // jacket
            attr1 = curItem.warmth;
            attr2 = curItem.waterproofing;
            label1 = `Shell`
            label2 = `Heavy`
            label3 = `Performance`
            label4 = `Ultimate`
            break;
        case 3: // boot - lacing system
            // attr1 = curItem.lacing;
            // console.log(curItem.lacing)
            if(curItem.lacing === 'boa') {
                attr1 = 1
                console.log(attr1)
            } else {
                attr1 = 7
                console.log(attr1)
            }
            label1 = `Boa`
            label2 = `Quick Lace`
            break;
        case 4: // binding
            attr1 = curItem.response;
            attr2 = curItem.stiffness;
            label1 = `Lower`
            label2 = `Higher`
            label3 = `Softer`
            label4 = `Stiffer`
            break;
        default:
            break;
    }
    
    console.log(curItem)
    return (
        <>
        {/* =========== Top Graph =========== */}
        <div id='graph-1'className='graphs-topper'>
            <h2>About this Product</h2>
        </div>
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
            {curItem?.item_type !== 3 && 
                <>
                <div id='graph-2'className='item-graph'  style={{marginLeft: `${attr2*10-30}%`}}>
                    <img src={tripleTriangles} className='triangles-img' />
                </div>
                <div className='graph-labels-top flex-row-cont'>
                    <p className='graph-label'>{label3}</p>
                    <p className='graph-label'>{label4}</p>
                </div>
                </>
            }
            </div>
            <div className='graphs-descriptor'>
                <h3>Details</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
        </div>
        </>
    );
}

export default ItemGraphs;