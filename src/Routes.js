import React, { lazy, Suspense ,useEffect } from 'react';
import { Switch, Route,Router,Redirect } from 'react-router-dom';
import { AnimatePresence, motion ,} from 'framer-motion';
import { connect } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
import MuiTheme from './theme';
import { history } from "./history"
import { ContextLayout } from "./utility/Layout"
import SuspenseLoading from "./utility/loading"
import {is_session,fake_session,sessionchecking,getSession} from "./reduxs/actions"
//Pages

// import Overview from './pages/Overview';
import Accounts from './pages/Accounts';
import Wallets from './pages/Wallets';
import BuySell from './pages/BuySell';
import Transactions from './pages/Transactions';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import PageRecoverCover from './pages/PageRecoverCover';
import PageError404 from './pages/PageError404';

const Homepage = lazy(() => import('./pages/Homepage'));
const Overview = lazy(() => import('./pages/Overview'));

const RouteConfig = ({ component: Component, LeftSidebar,MinimalLayout,PresentationLayout, ...rest }) =>{
  
  return(
    <Route
      {...rest}
      render={props => {
        return (
          <ContextLayout.Consumer>
            {context => {
              console.log(context)
              let LayoutTag =
              PresentationLayout === true ? context.PresentationLayout : MinimalLayout === true ? context.MinimalLayout :  context.LeftSidebar
              return (
                <LayoutTag {...props}  >
                  <Suspense fallback={<SuspenseLoading />}>
                    <Component {...props} />
                  </Suspense>
                </LayoutTag>
              )
            }}
          </ContextLayout.Consumer>
        )
      }}
    />
  )
}
const AppRoute = connect()(RouteConfig)


const RequireAuth = (data) => {
  if (!is_session()){
    fake_session();
    return <Redirect to={"/"} />;
  }
  if(data.children){
    let items = data.children;
      for(var i in items){
        if( items[i] && items[i].props.path === data.location.pathname){
          return items.slice(0, items.length-1);
        }
      }
      return items.slice(items.length-1, data.children.length);
  }else{
    return false;
  }
};


const Routes = (props) => {

  const pageVariants = {
    initial: {
      opacity: 0
    },
    in: {
      opacity: 1
    },
    out: {
      opacity: 0
    }
  };

  const pageTransition = {
    type: 'tween',
    ease: 'linear',
    duration: 0.3
  };
  useEffect(() => {
    let get_sess =  getSession();
    if(get_sess){
      props.sessionchecking(get_sess);
    }
  });


  return (
    <ThemeProvider theme={MuiTheme}>
      <AnimatePresence>
        <Suspense fallback={<SuspenseLoading />}>
          <Router history={history}>
            <Switch>
              <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
                <AppRoute exact path="/" component={Homepage} PresentationLayout />
                <AppRoute exact path="/Homepage" component={Homepage} PresentationLayout />
                <RequireAuth location={history.location}>
                  <AppRoute path="/Overview" component={Overview} LeftSidebar />
                  <AppRoute path="/Accounts" component={Accounts}  LeftSidebar/>
                  <AppRoute path="/Wallets" component={Wallets}  LeftSidebar/>
                  <AppRoute path="/BuySell" component={BuySell}  LeftSidebar/>
                  <AppRoute path="/Transactions" component={Transactions}  LeftSidebar/>
                  <AppRoute path="/Profile" component={Profile}  LeftSidebar/>
                  <AppRoute path="/Settings" component={Settings}  LeftSidebar />
                  <AppRoute path="/PageRecoverCover" component={PageRecoverCover} MinimalLayout />
                  <AppRoute path="/PageError404" component={PageError404} MinimalLayout />
                </RequireAuth>
              </motion.div>
            </Switch>
          </Router>
        </Suspense>
      </AnimatePresence>
    </ThemeProvider>
  );
};

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  sessionchecking
}

export default connect(mapStateToProps, mapDispatchToProps)(Routes)
