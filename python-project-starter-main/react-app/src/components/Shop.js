import React, { useEffect, useState }from 'react';
import { useSelector, useDispatch  } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getAllItems } from '../store/items';
import { getItemTypes } from '../store/item_types';
import ShopFilters from './ShopFilters';
import ShopItemsList from './ShopItemList';
import './../styles/shop.css'
// import ShopFilters from './ShopFilters';


const Shop = () => {
    
    const dispatch = useDispatch()
    const items = useSelector(state => state.items)
    // TODO: Add filtering options for shop
    const [ dispItems, setDispItems ] = useState([])
    const [ searchVal, setSearchVal ] = useState()
    const [ colorFilter, setColorFilter ] = useState([])
    const [ sizeFilter, setSizeFilter ] = useState([])
    const [ genderFilter, setGenderFilter ] = useState([])
    const [ typeFilter, setTypeFilter ] = useState([])
    
    useEffect(() => {
        dispatch(getAllItems())
        dispatch(getItemTypes())
    }, [dispatch])

    useEffect(() => {
        setDispItems(items)
    }, [items])

    useEffect(() => {
		let lowSearchVal;
        if(searchVal){ lowSearchVal = searchVal.toLowerCase() }
		// // ======== filter all of the data
		let newList = [...items].filter((dItem)=> {
			// ======== check data against each of the filters
            console.log(genderFilter)
			if(genderFilter.length > 0 && !genderFilter.includes(dItem.gender)){ return false }
			// if(colorFilter.length > 0 && !colorFilter.includes(dItem.color)){ return false }
			// if(sizeFilter.length > 0 && !sizeFilter.includes(dItem.size)){ return false }
			// ======== check data against search term
            
			if((dItem.name && dItem.name.toLowerCase().includes(lowSearchVal)) ||
                !lowSearchVal){
				return true
			}

		})
		setDispItems(newList)
	},[searchVal, genderFilter, sizeFilter, typeFilter])

	// ======== toggles an attribute in/out of a given filter
	const updateFilter = (attr, typeFilter) => {
		let newArr = [...typeFilter]
		if (newArr.indexOf(attr) < 0){
			newArr.push(attr)
		} else {
			newArr = newArr.filter((a) => {
				return a !== attr
			})
		}
		return newArr
	}
    
    return (
        <div className="shop-page-cont">

            <div className="flex-col-cont content-width shop-page-topper">
                <p className='grey-label'>Snowboarding / Shop All Snowboard Gear</p>
                <h1>Shop</h1>
                <p>Since day one, Hurton has been built on boards. Explore the
                    industry's most diverse snowboard lineup for park,
                    all-mountain, powder, splitboarding, and the backcountry.</p>
            </div>

            <div className='flex-row-cont content-width'>

                

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
                            <input type="checkbox" name="men" value='Men' 
                            onChange={e=>setGenderFilter(updateFilter(e.target.value, genderFilter))} />
                        </div>
                        <div className="filter-input">
                            <label>Women</label>
                            <div className="faux-check"></div>
                            <input type="checkbox" name="women" value='Women' 
                            onChange={e=>setGenderFilter(updateFilter(e.target.value, genderFilter))} />
                        </div>
                    </div>

                    <div className="bend filter-section">
                        <div className="filter-topper">
                            <p className='topper-title'>Bend</p>
                            <p className='filter-exp'>+</p>
                        </div>

                        <div className="filter-input">
                            <label>Camber</label>
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

                <ShopItemsList items={dispItems} />
            </div>
        </div>
    );
}

export default Shop;
