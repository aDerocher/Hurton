import React, { useEffect, useState }from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getOrderHistory } from '../../store/session';
import SBForm from './../Forms/SBForm';
import './../../styles/item-details.css';


const ItemForm = (item) => {
    const curItem  = item?.item
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session?.user)
    
    
    useEffect(() => {
        if(sessionUser){
            dispatch(getOrderHistory(sessionUser?.id))
        }
    }, [ dispatch, sessionUser ])
    

    const changeDispImage = (e, img) => {
        e.preventDefault()
        setOrigImage(false)
        setDispImage(img)
    }
    // for handling the photo viewer
    const [ origImage, setOrigImage ] = useState(true)
    const [ dispImage, setDispImage ] = useState('')


    return (
        <div className='item-details-selection flex-row-cont'>
            <div className='item-deets-imgs flex-col-cont'>
                <img className='imageTile' src={curItem?.image1} onClick={e=>changeDispImage(e,curItem?.image1)}alt='sb' />
                {curItem?.image2 &&
                    <img className='imageTile' src={curItem?.image2} onClick={e=>changeDispImage(e,curItem?.image2)}alt='sb' />}
                {curItem?.image3 &&
                    <img className='imageTile' src={curItem?.image3} onClick={e=>changeDispImage(e,curItem?.image3)}alt='sb' />}
            </div>

            <div className='item-deets-img'>
                { origImage &&
                    <img src={curItem?.image1} alt='sb' />}
                { !origImage &&
                    <img src={dispImage} alt='sb' />}
            </div>

            <div className='curItem-deets-form'>
                <SBForm item={curItem} />
            </div>
            
        </div>
    
    );
}

export default ItemForm;