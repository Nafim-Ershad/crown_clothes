import { createSelector } from "reselect";

export const COLLECTION_ID_MAP = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5
}

const selectShop = (state) => state.shop;

export const selectShopCollection = createSelector(
    [selectShop],
    shop => shop.collections
)

// Used by collection-preview component as it uses arrays, not objects
export const selectCollectionForPreview = createSelector(
    [selectShopCollection],
    collections => Object.keys(collections).map(key => collections[key])
    // Obj.keys("Obj") makes an array with nly the keys as its element, 
    // .map() returns an array of objects without the keys, but with the index of the keys
)

// Returns the collection ID from the object in the ID_MAP
export const selectCollection = collectionUrlParam => (
    createSelector(
        [selectShopCollection],
        collections => collections[collectionUrlParam]
    )
)

// Data Normalization, making arrays into objects