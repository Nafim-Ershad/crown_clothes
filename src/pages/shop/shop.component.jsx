import React from "react";

import {Route} from "react-router-dom";

import CollectionOverview from "../../components/collections-overview/collections-overview.component";

import CollectionPage from "../collection/collection.pages";

const ShopPage =({match}) =>{
    return(
        <div className="shop_page">
            <Route exact path={`${match.path}`} component={CollectionOverview}/> {/* what i previously did wrong was put exact on the /shop url in App.jsx*/}
            <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
            {/* <CategoryPage/> */}
        </div>
    )
}

export default ShopPage;