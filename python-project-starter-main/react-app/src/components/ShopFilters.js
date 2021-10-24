import React, { useEffect }from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { NavLink } from 'react-router-dom';
// import { useParams } from 'react-router';
// import { getAllItems } from '../store/items';
import './../styles/shop-filters.css'


const ShopFilters = () => {

    
    return (
        <div class='filters-container'>

            <div class="filter-section">
                <div class="filter-topper">
                    <p class='topper-title'>Color</p>
                    <p class='filter-exp'>+</p>
                </div>
                <div class='filter-body color'>
                    <div class="swatch"></div>
                    <div class="swatch"></div>
                    <div class="swatch"></div>
                    <div class="swatch"></div>
                    <div class="swatch"></div>
                    <div class="swatch"></div>
                    <div class="swatch"></div>
                    <div class="swatch"></div>
                </div>
            </div>

            <div class="gender filter-section">
                <div class="filter-topper">
                    <p class='topper-title'>Gender</p>
                    <p class='filter-exp'>+</p>
                </div>

                <div class="filter-input">
                    <label for="men">Men</label>
                    <div class="faux-check"></div>
                    <input hidden type="checkbox" name="gender" value='men' />
                </div>
                <div class="filter-input">
                    <label for="women">Women</label>
                    <div class="faux-check"></div>
                    <input hidden type="checkbox" name="gender" value='women' />
                </div>
            </div>

            <div class="bend filter-section">
                <div class="filter-topper">
                    <p class='topper-title'>Bend</p>
                    <p class='filter-exp'>+</p>
                </div>

                <div class="filter-input">
                    <label for="camber">Camber</label>
                    <div class="faux-check"></div>
                    <input hidden type="checkbox" name="camber" value='camber' />
                </div>
                <div class="filter-input">
                    <label for="directionalcamber">Directional Camber</label>
                    <div class="faux-check"></div>
                    <input hidden type="checkbox" name="camber" value='directionalcamber' />
                </div>
                <div class="filter-input">
                    <label for="purepop">PurePop Camber</label>
                    <div class="faux-check"></div>
                    <input hidden type="checkbox" name="camber" value='purepop' />
                </div>
                <div class="filter-input">
                    <label for="flyingv">Flying V</label>
                    <div class="faux-check"></div>
                    <input hidden type="checkbox" name="camber" value='flyingv' />
                </div>
                <div class="filter-input">
                    <label for="flattop">Flat Top</label>
                    <div class="faux-check"></div>
                    <input hidden type="checkbox" name="camber" value='flattop' />
                </div>
            </div>
        </div>
    );
}

export default ShopFilters;