import React from 'react';

const BuySellPageTitleActions = () => {
  return (
    <>
      <div>
        <div className="font-weight-bold text-first mb-1 text-uppercase font-size-xs">
          Last price
        </div>
        <div className="font-size-lg font-weight-bold line-height-1">
          $4297,34
        </div>
      </div>
      <div className="mx-5">
        <div className="font-weight-bold text-danger mb-1 text-uppercase font-size-xs">
          24h change
        </div>
        <div className="font-size-lg font-weight-bold line-height-1">
          12.39%
        </div>
      </div>
      <div>
        <div className="font-weight-bold text-success mb-1 text-uppercase font-size-xs">
          24h highest
        </div>
        <div className="font-size-lg font-weight-bold line-height-1">
          $4875,23
        </div>
      </div>
    </>
  );
};

export default BuySellPageTitleActions;
