import React from "react";

// components
import CollectionPreview from "../../components/collection_preview/collection_preview.component";

// Data
import SHOP_DATA from "./shop.data";

class ShopPage extends React.Component{
    constructor(){
        super();
        this.state ={
           collections: SHOP_DATA
        }
    }

    render(){
        const { collections } = this.state;
        return(
            <div className="shop_page">
                {
                    collections.map(({id, ...otherCollectionProps})=>(
                        <CollectionPreview key={id} {...otherCollectionProps}/>
                    ))
                }
                
            </div>
        )
    }
}

export default ShopPage;