import React from 'react';

import Spinner from '../spinner/spinner.comonent';

const WithSpinner = (WrappedComponent) => {
  const WithSpinnerComponent = ({ isLoading, ...otherProps }) => {
    return isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />;
  };

  return WithSpinnerComponent;
};

export default WithSpinner;
