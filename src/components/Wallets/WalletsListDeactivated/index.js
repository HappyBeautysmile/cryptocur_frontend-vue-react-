import React, { useState ,useEffect} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid, Dialog, Card, Button } from '@material-ui/core';

import TrendingUpTwoToneIcon from '@material-ui/icons/TrendingUpTwoTone';
import TrendingDownTwoToneIcon from '@material-ui/icons/TrendingDownTwoTone';
import { useSelector, useDispatch } from 'react-redux'
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import Slider from 'react-slick';

import EnalbeDisableDeleteWalletAction from "../EnableDisableDeleteWalletAction"

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
export default function LivePreviewExample() {
  const [modalConfirmDelete, setConfirmDelete] = useState(false);
  const toggleConfirmDelete = () => setConfirmDelete(!modalConfirmDelete);
  const walletlist = useSelector(state => state.wallets.walletsData);
  const [anchorEl , setAnchorEl] = useState({});
  const [widgetsUnactiveCarousels2A ,setWidgetsUnactiveCarousels2A] = useState({
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
  const enableModalCss ={
    iconColor:"bg-neutral-success",
    iconType:"lightbulb",
    textColor:"text-success",
    iconForm:"far",
    actionStr1 :"  Do you want to enable this?",
    actionStr2 :"You can later review your options.",
    submitBtnStr:"Enable",
    submitBtnColor:"btn-outline-success",
    submitBtnPosition:"left",
  }
  
  useEffect(() => {
    var liveWalletValue = 0 ;
    if(walletlist)
    {
      liveWalletValue = walletlist.length  ;
      for(var i = 0 ; i < walletlist.length ; i++)
      {
        if(walletlist[i].status === true) liveWalletValue--;
      }
    }
    if(liveWalletValue > 2)
    {
      setWidgetsUnactiveCarousels2A({...widgetsUnactiveCarousels2A,slidesToShow:3,
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
      setWidgetsUnactiveCarousels2A({...widgetsUnactiveCarousels2A,slidesToShow:2,
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
      setWidgetsUnactiveCarousels2A({...widgetsUnactiveCarousels2A,slidesToShow:1,
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
  return (
    <>
      <Card className="mb-spacing-6-x2 wallet_activeWallet">
        <div className="py-3">

          <div className="card-header d-flex align-items-center justify-content-between card-header-alt p-4 ">
            <div>
              <h6 className="font-weight-bold font-size-lg mb-1" style={{color:"black"}}>
                Deactivated wallets
              </h6>
              <p className="text-danger  mb-0">
                These walllets are old and cannot be used anymore.
              </p>
            </div>
          </div>
          <div className="customizeGradientLine" ></div>
          <Slider className="overflow-hidden" {...widgetsUnactiveCarousels2A}>
              {walletlist ? walletlist.filter(item => item.status===false).map((item , i) =>(
                <Grid container spacing={0}>
                  <Grid item md={12} key={i}>
                    <Card className="card-box shadow-none bg-secondary m-3" style={{border:"1px solid #c5c5c5" }}>
                      <a
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="p-4 card-img-wrapper rounded" style={{backgroundColor:"#5b6491!important"}}> 
                        <div className="img-wrapper-overlay">
                          <div className="overlay-btn-wrapper">
                            <EnalbeDisableDeleteWalletAction curwallet ={item} setDetailPartAction = {(e) =>setAnchorEl(e)}   actionType="Enable" modalCss ={enableModalCss}  />
                            <EnalbeDisableDeleteWalletAction curwallet ={item} setDetailPartAction = {(e) =>setAnchorEl(e)}   actionType="Delete"  modalCss ={deleteModalCss} />
                          </div>
                        </div>
                        <div className="card-badges card-badges-bottom">
                          <div className="badge-pill badge badge-danger" style={{opacity:"0.7"}}>Disabled</div>
                        </div>
                        <div className="d-flex align-items-center mr-4 text-black">
                          <div className="font-weight-bold font-size-lg">
                            {item.walletName}
                          </div>
                        </div>
                        <div className="d-flex mt-4 text-black">
                          <div className="text-left">
                            <div className="font-size-xxl line-height-1">
                            {item.coinList[0].quantity + " " + item.coinList[0].coinName}
                            </div>
                            <div className="opacity-5 font-size-lg">$ 0</div>
                          </div>
                        </div>
                      </a>
                    </Card>
                  </Grid>
                </Grid>
              )):[]}
          </Slider>
        </div>
      </Card>

      <Dialog open={modalConfirmDelete} onClose={toggleConfirmDelete}>
        <div className="text-center p-5">
          <div className="avatar-icon-wrapper rounded-circle m-0">
            <div className="d-inline-flex justify-content-center p-0 rounded-circle avatar-icon-wrapper bg-neutral-danger text-danger m-0 d-130">
              <FontAwesomeIcon
                icon={['fas', 'times']}
                className="d-flex align-self-center display-3"
              />
            </div>
          </div>
          <h4 className="font-weight-bold line-height-sm mt-4">
            Are you sure you want to permanently delete this account?
          </h4>
          <p className="mb-0 font-size-lg text-muted">
            You cannot undo this operation.
          </p>
          <div className="pt-4">
            <Button
              onClick={toggleConfirmDelete}
              className="btn-neutral-secondary btn-pill mx-1">
              <span className="btn-wrapper--label">Cancel</span>
            </Button>
            <Button
              onClick={toggleConfirmDelete}
              className="btn-danger btn-pill mx-1">
              <span className="btn-wrapper--label">Delete</span>
            </Button>
          </div>
        </div>
      </Dialog>
    </>
  );
}
