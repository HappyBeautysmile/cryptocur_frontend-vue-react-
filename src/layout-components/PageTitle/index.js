import React from 'react';

import clsx from 'clsx';

import { connect } from 'react-redux';

import HomeWorkTwoToneIcon from '@material-ui/icons/HomeWorkTwoTone';

const PageTitle = (props) => {
  const {
    pageTitleStyle,
    pageTitleBackground,
    pageTitleShadow,
    pageTitleIconBox,
    pageTitleDescription,
    titleHeading,
    titleDescription,
    children
  } = props;
  return (
    <>
      <div
        className={clsx('app-page-title', pageTitleStyle, pageTitleBackground, {
          'app-page-title--shadow': pageTitleShadow
        })}>
        <div>
          <div className="app-page-title--first">
            {pageTitleIconBox && (
              <div className="app-page-title--iconbox d-70">
                <div className="d-70 d-flex align-items-center justify-content-center display-1">
                  <HomeWorkTwoToneIcon className="text-primary" />
                </div>
              </div>
            )}
            <div className="app-page-title--heading">
              <h1>{titleHeading}</h1>
              {pageTitleDescription && (
                <span style={{color:"rgb(129, 104, 239)"}}>
                  {titleDescription}
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center">{children}</div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  pageTitleStyle: state.pagetitle.pageTitleStyle,
  pageTitleBackground: state.pagetitle.pageTitleBackground,
  pageTitleShadow: state.pagetitle.pageTitleShadow,
  pageTitleIconBox: state.pagetitle.pageTitleIconBox,
  pageTitleDescription: state.pagetitle.pageTitleDescription
});

export default connect(mapStateToProps)(PageTitle);
