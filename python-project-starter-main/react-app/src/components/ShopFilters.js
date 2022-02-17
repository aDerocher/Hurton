import React, { useState, useEffect } from 'react';
import './../styles/shop-filters.css'


const ShopFilters = (props) => {

    // const dispItems = props.dispItems
    const setDispItems = props.setDispItems

	const [ searchVal, setSearchVal ] = useState("")
	const [ colorFilter, setColorFilter ] = useState([])
	const [ sizeFilter, setSizeFilter ] = useState([])
	const [ typeFilter, setTypeFilter ] = useState([])

    // useEffect(() => {
	// 	if(searchVal === ""){ setDispItems(props.dispItems) }
	// 	let lowSearchVal = searchVal.toLowerCase()
	// 	if(!props.dispItems) { return }
    //     console.log(props.dispItems, '<=== is this empty? Shouldnt see this!')
	// 	// ======== filter all of the data
	// 	let newList = [...props.dispItems].filter((dItem)=> {
	// 		// ======== check data against each of the filters
	// 		if(colorFilter.length > 0 && !colorFilter.includes(dItem.color)){ return false }
	// 		if(sizeFilter.length > 0 && !sizeFilter.includes(dItem.size)){ return false }
	// 		if(typeFilter.length > 0 && !typeFilter.includes(dItem.type)){ return false }
	// 		// ======== check data against search term
	// 		if(dItem?.name.toLowerCase().includes(lowSearchVal) ||
	// 			dItem.type.toLowerCase().includes(lowSearchVal) ||
	// 			dItem.color.toLowerCase().includes(lowSearchVal) ||
	// 			dItem.size.toLowerCase().includes(lowSearchVal)){
	// 			return true
	// 		}
	// 	})
	// 	setDispItems(newList)
	// },[searchVal, colorFilter, sizeFilter, typeFilter])

    return (
        <div className='filters-container'>
            <div className="filter-section">
                <label>Search </label>
                <input type='text' value={searchVal} onChange={e=>setSearchVal(e.target.value)}></input>
            </div>

            <div className="filter-section">
                <div className="filter-topper">
                    <p className='topper-title'>Color</p>
                    <p className='filter-exp'>+</p>
                </div>
                <div className='filter-body color'>
                    <div className="swatch"></div>
                    <div className="swatch"></div>
                    <div className="swatch"></div>
                    <div className="swatch"></div>
                    <div className="swatch"></div>
                    <div className="swatch"></div>
                    <div className="swatch"></div>
                    <div className="swatch"></div>
                </div>
            </div>

            <div className="gender filter-section">
                <div className="filter-topper">
                    <p className='topper-title'>Gender</p>
                    <p className='filter-exp'>+</p>
                </div>

                <div className="filter-input">
                    <label>Men</label>
                    <div className="faux-check"></div>
                    <input hidden type="checkbox" name="men" value='men' />
                </div>
                <div className="filter-input">
                    <label>Women</label>
                    <div className="faux-check"></div>
                    <input hidden type="checkbox" name="women" value='women' />
                </div>
            </div>

            <div className="bend filter-section">
                <div className="filter-topper">
                    <p className='topper-title'>Bend</p>
                    <p className='filter-exp'>+</p>
                </div>

                <div className="filter-input">
                    <label >Camber</label>
                    <div className="faux-check"></div>
                    <input hidden type="checkbox" name="camber" value='camber' />
                </div>
                <div className="filter-input">
                    <label>Directional Camber</label>
                    <div className="faux-check"></div>
                    <input hidden type="checkbox" name="directionalcamber" value='directionalcamber' />
                </div>
                <div className="filter-input">
                    <label>PurePop Camber</label>
                    <div className="faux-check"></div>
                    <input hidden type="checkbox" name="purepop" value='purepop' />
                </div>
                <div className="filter-input">
                    <label>Flying V</label>
                    <div className="faux-check"></div>
                    <input hidden type="checkbox" name="flyingv" value='flyingv' />
                </div>
                <div className="filter-input">
                    <label>Flat Top</label>
                    <div className="faux-check"></div>
                    <input hidden type="checkbox" name="flattop" value='flattop' />
                </div>
            </div>
        </div>
    );
}

export default ShopFilters;
