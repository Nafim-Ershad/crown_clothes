import React from "react";
import {connect} from "react-redux";

import {addItem} from "../../redux/cart/cart.action";
import CustomButton from "../custom_button/custom_button.component";

import "./collection_item.styles.scss";

const CollectionItem = ({item, addItem}) => {
    const { name, price, imageUrl } = item;
    return(
    <div className="collection_item">
        <div  className="image"
        style={{
            backgroundImage : `url(${imageUrl})`
        }}/>
        <div className="collection_footer">
            <span className='name'>{name}</span>
            <span className='price'>{`$${price}`}</span>
        </div>
        <CustomButton inverted onClick={()=>addItem(item)}>ADD TO CART</CustomButton>
    </div>
)}

const mapDispatchToProps = (dispatch) => ({
    addItem: (item) => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);