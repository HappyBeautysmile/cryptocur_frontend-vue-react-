import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { Sidebar, Header, Footer } from '../../layout-components';

const LeftSidebar = (props) => {
  const {
    children,
    sidebarToggle,
    sidebarToggleMobile,
    sidebarFixed,
    headerFixed,
    headerSearchHover,
    headerDrawerToggle,
    footerFixed,
    contentBackground
  } = props;

  return (
    <>
      <div
        className={clsx('app-wrapper', contentBackground, {
          'header-drawer-open': headerDrawerToggle,
          'app-sidebar-collapsed': sidebarToggle,
          'app-sidebar-mobile-open': sidebarToggleMobile,
          'app-sidebar-fixed': sidebarFixed,
          'app-header-fixed': headerFixed,
          'app-footer-fixed': footerFixed,
          'search-wrapper-open': headerSearchHover
        })}>
        <div>
          <Sidebar />
        </div>
        <div className="app-main">
          <Header />
          <div className="app-content">
            <div className="app-content--inner">
              <div className="app-content--inner__wrapper">{children}</div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

LeftSidebar.propTypes = {
  children: PropTypes.node
};

const mapStateToProps = state =>{

  return {
    sidebarToggle: state.sidebar.sidebarToggle,
    sidebarToggleMobile: state.sidebar.sidebarToggleMobile,
    sidebarFixed: state.sidebar.sidebarFixed,

    headerFixed: state.header.headerFixed,
    headerSearchHover: state.header.headerSearchHover,
    headerDrawerToggle: state.header.headerDrawerToggle,

    footerFixed: state.footer.footerFixed,

    contentBackground: state.maincontent.contentBackground
  }
}


export default connect(mapStateToProps)(LeftSidebar);
