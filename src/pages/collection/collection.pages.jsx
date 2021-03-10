import React from "react";

import {connect} from "react-redux";

import {selectCollection} from "../../redux/shop/shop.selector";

import "./collection.styles.scss";

import CollectionItem from "../../components/collection_item/collection_item.component";

// <Route/> passes 3 parameters match, location and history in the component 
const CollectionPage = (props) => {
    const {collection} = props;
    const {title, items} = collection;
    return(
        <div className="collection">
            <h2 className="title">{title}</h2>
            <div className="items">
                {items.map(item => 
                    <CollectionItem key={item.id} item={item}/>
                )}
            </div>
        </div>
    )
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
    // As the selectCollection itself is a function, that return a function of createSelector()
})

export default connect(mapStateToProps)(CollectionPage);