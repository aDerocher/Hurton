import React, { useEffect, useState }from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getOrderHistory } from '../../store/session';
import SBForm from './../Forms/SBForm';
import './../../styles/item-details.css';


const ItemForm = (item) => {
	const currentItem  = item?.item
	const images = [currentItem?.image1, currentItem?.image2, currentItem?.image3];
	const dispatch = useDispatch()
	const sessionUser = useSelector(state => state.session?.user)
	
    
  useEffect(() => {
		if(sessionUser){
			dispatch(getOrderHistory(sessionUser?.id))
		}
	}, [ dispatch, sessionUser ])
    

	const changeDisplayImage = (e, img) => {
		e.preventDefault()
		setOrigImage(false)
		setDisplayImage(img)
	}
	// for handling the photo viewer
	const [ origImage, setOrigImage ] = useState(true)
	const [ displayImage, setDisplayImage ] = useState('')


	return (
		<div className='item-details-selection flex-row-cont'>
			<div className='item-deets-imgs flex-col-cont'>
				{images.map((image) => (
					<>
						{image && 
							<img className='imageTile' src={image} onClick={e=>changeDisplayImage(e,image)}alt='sb' />
						}
					</>
				))}
			</div>

			<div className='item-deets-img'>
				<img src={origImage ? currentItem?.image1 : displayImage} alt='sb' />
			</div>

			<div className='currentItem-deets-form'>
					<SBForm item={currentItem} />
			</div>
		</div>    
    );
}

export default ItemForm;