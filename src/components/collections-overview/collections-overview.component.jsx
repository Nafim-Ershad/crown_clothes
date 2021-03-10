import "./collections-overview.styles.scss";

// Essentials
import React from "react";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";

// Component
import CollectionPreview from "../collection_preview/collection_preview.component";

// Selector
import {selectCollectionForPreview} from "../../redux/shop/shop.selector";

const CollectionOverview = ({collections}) => {
    return (
        <div className="collections-overview">
            {
                collections.map(({id, ...otherProps}) => 
                    <CollectionPreview key={id} {...otherProps} />
                )
            }
        </div>
    )
}



const mapStateToProps = createStructuredSelector({
    collections:  selectCollectionForPreview
})

export default connect(mapStateToProps)(CollectionOverview);