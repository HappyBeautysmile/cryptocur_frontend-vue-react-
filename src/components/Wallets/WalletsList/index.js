import React, { useState ,useEffect} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  Grid,  Card,  Menu,  Button,  List,  ListItem,  Tooltip,Container} from '@material-ui/core';
import { NavLink } from 'react-router-dom';

import StarTwoToneIcon from '@material-ui/icons/StarTwoTone';

import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
import TrendingDownTwoToneIcon from '@material-ui/icons/TrendingDownTwoTone';
import TrendingUpTwoToneIcon from '@material-ui/icons/TrendingUpTwoTone';
import { useSelector, useDispatch } from 'react-redux'
import {selectWallet} from "../../../reduxs/actions/wallets/wallets"
import EditWalletAction from "../EditWalletAction";
import ViewDetailWalletAction from "../ViewDetailWalletAction";
import EnalbeDisableDeleteWalletAction from "../EnableDisableDeleteWalletAction";

import Slider from 'react-slick';

function SliderArrowNext(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <FontAwesomeIcon icon={['fas', 'chevron-right']} />
    </div>
  );
}

function SliderArrowPrev(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <FontAwesomeIcon icon={['fas', 'chevron-left']} />
    </div>
  );
}

export default function LivePreviewExample(props) {

  


  const [anchorEl, setAnchorEl] = useState(null);
  const [curWallet , setCurWallet] = useState({});
  const [buySellModal , setBuySellModal] = useState(false);
  const {parentPosition} = props;
  const dispatch = useDispatch();
  const authprops = useSelector(state => state.auth.user);
  const walletlist = useSelector(state => state.wallets.walletsData);
  const [widgetsCarousels2A ,setWidgetsCarousels2A] = useState({
    dots: true,
    speed: 500,
    slidesToShow:  1  ,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SliderArrowNext />,
    prevArrow: <SliderArrowPrev />,
    responsive: [
      {
        breakpoint: 1450,
        settings: { slidesToShow: 1, slidesToScroll: 1 }
      },
      {
        breakpoint: 1100,
        settings: { slidesToShow: 1, slidesToScroll: 1 }
      },
      {
        breakpoint: 900,
        settings: { slidesToShow: 1, slidesToScroll: 1 }
      }
    ]
  });
  const disableModalCss ={
    iconColor:"bg-warning",
    iconForm:"far",
    textColor:"text-white",
    iconType:"dot-circle",
    actionStr1 :"Do you want to disable this wallet?",
    actionStr2 :"Use the helper classes to style these paragraphs!",
    submitBtnStr:"Yes do it",
    submitBtnColor:"btn-outline-warning",
    submitBtnPosition:"left"
  }
  const deleteModalCss ={
    iconColor:"bg-danger",
    iconType:"times",
    textColor:"text-white",
    iconForm:"fas",
    actionStr1 :"Are you sure you want to delete this entry?",
    actionStr2 :"You cannot undo this operation.",
    submitBtnStr:"Delete",
    submitBtnColor:"btn-outline-danger",
    submitBtnPosition:"left",
  }
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
    var liveWalletValue = 0 ;
    if(walletlist)
    {
      liveWalletValue = walletlist.length  ;
      for(var i = 0 ; i < walletlist.length ; i++)
      {
        if(walletlist[i].status === false) liveWalletValue--;
      }
    }
    if(liveWalletValue > 2)
    {
      setWidgetsCarousels2A({...widgetsCarousels2A,slidesToShow:3,
        responsive: [
          {
            breakpoint: 1450,
            settings: { slidesToShow: 3, slidesToScroll: 1 }
          },
          {
            breakpoint: 1100,
            settings: { slidesToShow: 2, slidesToScroll: 1 }
          },
          {
            breakpoint: 900,
            settings: { slidesToShow: 1, slidesToScroll: 1 }
          }
        ]
      });
    }
    if(liveWalletValue  === 2)
    {
      setWidgetsCarousels2A({...widgetsCarousels2A,slidesToShow:2,
        responsive: [
          {
            breakpoint: 1450,
            settings: { slidesToShow: 2, slidesToScroll: 1 }
          },
          {
            breakpoint: 1100,
            settings: { slidesToShow: 2, slidesToScroll: 1 }
          },
          {
            breakpoint: 900,
            settings: { slidesToShow: 2, slidesToScroll: 1 }
          }
        ]
      });
    }
    if(liveWalletValue  === 1)
    {
      setWidgetsCarousels2A({...widgetsCarousels2A,slidesToShow:1,
        responsive: [
          {
            breakpoint: 1450,
            settings: { slidesToShow: 1, slidesToScroll: 1 }
          },
          {
            breakpoint: 1100,
            settings: { slidesToShow: 1, slidesToScroll: 1 }
          },
          {
            breakpoint: 900,
            settings: { slidesToShow: 1, slidesToScroll: 1 }
          }
        ]
      });
    }
  }, [walletlist])
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
      if(event.eventaction ==="Sell")
      {
        setBuySellModal(true);
      }
    }
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

  return (
    <>
      {walletlist  &&

        <Card className="mb-spacing-6-x2 wallet_activeWallet">
          <div className="py-3">
            <div className="card-header d-flex align-items-center justify-content-between card-header-alt p-4 wallet_activeWallet">
              <div>
                <h6 className="font-weight-bold font-size-lg mb-1" style={{color:"white"}}>
                  Active Wallets
                </h6>
                {/* <p className="text-danger opacity-6 mb-0">
                  These walllets are old and cannot be used anymore.
                </p> */}
              </div>
            </div>
            <div className="customizeGradientLine" ></div>
            <Slider className="overflow-hidden" {...widgetsCarousels2A}>

                {walletlist.filter(item => item.status === true).map((item,i)=>(
                //  onClick={handleCoin({item:item,event:"chooseCoinUse"})}

                  <Grid container spacing={0}>
                      <Grid item key = {i} md ={12}> 
                        <Card  style={item.use === true ? {height:"225px", margin:"0 10px" ,backgroundColor:"rgb(86 191 227)"}: {height:"225px", margin:"0 10px",backgroundColor:"whilte",border:'3px solid whitle!important',boxShadow: "0 0 20pt 0pt #b45999!important"}} className={item.use === true ? "card-box card-box-hover-rise p-4 card-box-border-bottom text-white border-primary mb-5 m-3" : "card-box card-box-hover-rise p-4 card-box-border-bottom border-warning mb-5 m-3"} >
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
                                <div className="dropdown-menu-lg overflow-hidden p-0"  style={{backgroundColor:"#242D59"}}>
                                  <List className="nav-neutral-first nav-pills-rounded flex-column p-3">
                                    <ViewDetailWalletAction curwallet ={curWallet} setDetailPartAction = {(e) =>setAnchorEl(e)}    />
                                    <EditWalletAction curwallet ={curWallet} setDetailPartAction = {(e) =>setAnchorEl(e)}   actionType="Edit" />
                                    <EnalbeDisableDeleteWalletAction curwallet ={curWallet} setDetailPartAction = {(e) =>setAnchorEl(e)}   actionType="Disable" modalCss ={disableModalCss} />
                                  </List>
                                  <div className="divider" />
                                    <EnalbeDisableDeleteWalletAction curwallet ={curWallet} setDetailPartAction = {(e) =>setAnchorEl(e)}   actionType="Delete_enalbe" modalCss ={deleteModalCss} />
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
                          {
                            item.use === false &&
                            <Tooltip
                              classes={{ tooltip: 'text-center p-3 tooltip-first' }}
                              arrow
                              placement="top"
                              title="We can use this fiat.">
                              <Button className="btn-first m-2" style={{fontSize:"16px",float:"right" }} onClick={handleCoin({item:item , eventaction:"changeWallet"})} >Use</Button>
                            </Tooltip>                       
                          }
                          <div className="d-flex my-4">
                            {/* <div className="d-30 text-success mr-2">
                              <TrendingUpTwoToneIcon className="d-30" />
                            </div> */}
                            
                            <div className="text-left"> 
                              <div className="font-size-xxl line-height-1">{item.coinList[0].quantity + " " + item.coinList[0].coinName}</div>
                              <div className={item.use === true ? "text-white opacity-5 font-size-lg" :"text-success opacity-5 font-size-lg"}>$0</div>
                            </div>
                          </div>
                            {item.use === true && parentPosition !== "BuySell" &&
                              <Button className="m-2 btn-success"  onClick={handleCoin({item:item , eventaction:"Null"})}>
                                <NavLink to="/BuySell">
                                  <span className="text-white" style={{fontWeight:"bold",fontSize:"18px"}}>
                                    Buy/Sell
                                  </span>
                                </NavLink>
                              </Button>
                            }           
                        </Card>
                      </Grid>
                  </Grid>

                ))}
            </Slider>
          </div>
        </Card>
      }
    </>
  );
}
