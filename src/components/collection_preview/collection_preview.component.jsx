import React from "react";

// Components
import CollectionItem from "../collection_item/collection_item.component";

// Styles
import "./collection_preview.styles.scss";

const CollectionPreview = ({ title, items }) => (
    <div className="collection_preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {
                items.filter((item, idx)=> idx < 4).map((item) => 
                    <CollectionItem key={item.id} item={item}/>
                )
            }
        </div>
    </div>
)

export default CollectionPreview;