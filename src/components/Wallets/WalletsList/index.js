import React, { useState ,useEffect} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  Grid,  Card,  Menu,  Button,  List,  ListItem,  Tooltip} from '@material-ui/core';

import AttachMoneyTwoToneIcon from '@material-ui/icons/AttachMoneyTwoTone';
import StarTwoToneIcon from '@material-ui/icons/StarTwoTone';

import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone';
import TrendingDownTwoToneIcon from '@material-ui/icons/TrendingDownTwoTone';
import TrendingUpTwoToneIcon from '@material-ui/icons/TrendingUpTwoTone';
import { useSelector, useDispatch } from 'react-redux'
import {selectWallet} from "../../../reduxs/actions/wallets/wallets"
import EditWalletAction from "../EditWalletAction";

export default function LivePreviewExample() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [curWallet , setCurWallet] = useState({});
  const dispatch = useDispatch();
  const authprops = useSelector(state => state.auth.user);
  const walletlist = useSelector(state => state.wallets.walletsData);
  const handleClick = () =>(event) => {
    // console.log("sssss");
    event.preventDefault();
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  useEffect(() => {
  }, [])
  
  const handleCoin =(event)=>(evt)=>{
    evt.preventDefault();
    evt.stopPropagation();
    if(event.eventaction !=="changeWallet")
    {
      // console.log("AAAA");
      if(event.eventaction ==="detail")        
      {
        setCurWallet(event.item);
        setAnchorEl(evt.currentTarget);
      }
    }
    // alert("evt.event");
    // evt.preventDefault();
   
    if(event.eventaction ==="changeWallet")
    {
      // console.log("BBBBB");
    // alert("wow");
      let fpdata = {
        walletName : event.item.walletName,
        owner : authprops.email,
      }
      dispatch(selectWallet(fpdata));
    }

  }

//  console.log("walletlist");
//  console.log(walletlist);
//  console.log("walletlist");

  return (
    <>
      <h3 className="font-size-xl font-weight-bold mb-4">Active Wallets</h3>
      <Grid container spacing={6} >

        {walletlist ? walletlist.filter(item => item.status === true).map((item,i)=>(
          //  onClick={handleCoin({item:item,event:"chooseCoinUse"})}
            <Grid item md={4} key = {i} > 
              <Card    onClick={handleCoin({item:item , eventaction:"changeWallet"})} className={item.use === true ? "card-box card-box-hover-rise p-4 card-box-border-bottom bg-primary text-white border-primary mb-5" : "card-box card-box-hover-rise p-4 card-box-border-bottom border-warning mb-5"} >
                {item.newMessage > 0 && 
                  <div style={{float:"right" ,paddingRight:"30px"}}>
                    <FontAwesomeIcon
                        icon={['far', 'comment-dots']}
                        className="font-size-xxl"
                    />
                      <div className="badge badge-danger rounded-circle mr-4" style={{position:"absolute",top:"13px",right:"20px"}}>
                        {item.newMessage}
                      </div>
                  </div>
                  }
                  <div className="card-tr-actions"  onClick={handleCoin({item:item , eventaction:"detailarea"})}>
                  <div>
                    <Button
                      onClick={handleCoin({item:item , eventaction:"detail"})}
                      className={ item.use === true ? "btn-link d-30 border-0 p-0 text-left d-flex text-white justify-content-center align-items-center" : "btn-neutral-primary d-30 border-0 p-0 text-left d-flex justify-content-center align-items-center"}>
                      <FontAwesomeIcon
                        icon={['fas', 'ellipsis-h']}
                        className="font-size-lg"
                      />
                    </Button>
                    <Menu
                      anchorEl={anchorEl}
                      keepMounted
                      getContentAnchorEl={null}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right'
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right'
                      }}
                      open={Boolean(anchorEl)}
                      classes={{ list: 'p-0' }}
                      onClose={handleClose}>
                      <div className="dropdown-menu-lg overflow-hidden p-0">
                        <List className="nav-neutral-first nav-pills-rounded flex-column p-3">
                          <ListItem
                            button
                            href="#/"
                            onClick={handleCoin({item:item , eventaction:"details"})}>
                            <div className="mr-2">
                              <SearchTwoToneIcon />
                            </div>
                            <span className="font-size-md">View details</span>
                          </ListItem>
                          {/* <ListItem
                            button
                            href="#/"
                            onClick={(e) => e.preventDefault()}>
                            <div className="mr-2">
                              <EditTwoToneIcon />
                            </div>
                            <span className="font-size-md">Edit</span>
                          </ListItem> */}
                          <EditWalletAction curwallet ={curWallet} setDetailPartAction = {(e) =>setAnchorEl(e)}   actionType="Edit" />
                        </List>
                        <div className="divider" />
                        
                        <EditWalletAction curwallet ={curWallet}  setDetailPartAction = {(e) =>setAnchorEl(e)}  actionType="Delete" />

                      </div>
                    </Menu>
                  </div>
                </div>
                <div className="d-flex align-items-center mr-4">
                  {/* <div className="d-40 text-white d-flex align-items-center justify-content-center rounded-pill mr-3 bg-warning">
                    <FontAwesomeIcon
                      icon={['fab', 'bitcoin']}
                      className="font-size-xl"
                    />
                  </div> */}
                  <div className="font-weight-bold font-size-lg">{item.walletName}</div>
                </div>
                <div className="d-flex my-4">
                  {/* <div className="d-30 text-success mr-2">
                    <TrendingUpTwoToneIcon className="d-30" />
                  </div> */}
                  <div className="text-left"> 
                    <div className="font-size-xxl line-height-1">{item.coin.quantity + " " + item.coin.coinName}</div>
                    <div className={item.use === true ? "text-white opacity-5 font-size-lg" :"text-success opacity-5 font-size-lg"}>$0</div>
                  </div>
                </div>
                <div  style={{zIndex:"10"}}>
                  <Button onClick={handleCoin({item:item , eventaction:"sell"})}
                    className={item.use === true ? "mr-3 shadow-none btn-outline-secondary" : "mr-3 btn-outline-primary"}
                    size="small">
                    Sell
                  </Button>
                  <Button  onClick={handleCoin({item:item , eventaction:"buy"})}
                    className={item.use === true ? "mr-3 shadow-none btn-outline-secondary" : "mr-3 btn-outline-primary"}
                    size="small">
                    Buy
                  </Button>
                  {/* <Tooltip title="Withdraw funds" arrow placement="top">
                    <Button className="shadow-none btn-secondary" size="small">
                      <AttachMoneyTwoToneIcon className="max-w-70" />
                    </Button>
                  </Tooltip> */}
                </div>
              </Card>
              {/* <div className={item.use === true ? "card-box card-box-hover-rise p-4 card-box-border-bottom bg-primary text-white border-primary mb-5" : "card-box card-box-hover-rise p-4 card-box-border-bottom border-warning mb-5"} style={{width:"100%",height:"100%" , backgroundColor:"red",}}></div> */}
            
            </Grid>
        )):[]}
      </Grid>
    </>
  );
}
