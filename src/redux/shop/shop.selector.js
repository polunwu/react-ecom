import { createSelector } from 'reselect';

const selectShop = (state) => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectShopCollections],
  (collections) => Object.values(collections)
);

export const selectCollection = (collectionUrlParam) => {
  return createSelector(
    [selectShop],
    (shop) => shop.collections[collectionUrlParam]
  );
};
