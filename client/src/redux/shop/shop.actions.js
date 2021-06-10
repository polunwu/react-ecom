import ShopActionsTypes from './shop.types';

export const fetchCollectionsStart = () => {
  return {
    type: ShopActionsTypes.FETCH_COLLECTIONS_START,
  };
};

export const fetchCollectionsSuccess = (collectionsMap) => {
  return {
    type: ShopActionsTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap,
  };
};

export const fetchCollectionsFailure = (errorMessage) => {
  return {
    type: ShopActionsTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage,
  };
};
