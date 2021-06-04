import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectShopCollections } from '../../redux/shop/shop.selector';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

const ShopPage = ({ collections }) => {
  return (
    <div className='shop-page'>
      {collections.map(({ id, ...others }) => (
        <CollectionPreview key={id} {...others} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections,
});

export default connect(mapStateToProps)(ShopPage);
