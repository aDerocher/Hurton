import React from 'react';
import './../styles/shop-filters.css'


// This component not in use, under development
const ShopFilters = () => {
    return (
        <div className='filters-container'>
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
