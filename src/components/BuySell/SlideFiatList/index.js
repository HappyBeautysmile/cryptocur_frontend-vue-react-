import React, { useState ,useEffect} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  Grid,  Card,  Menu,  Button,  List,  ListItem,  Tooltip,Container} from '@material-ui/core';
import { NavLink } from 'react-router-dom';

import StarTwoToneIcon from '@material-ui/icons/StarTwoTone';
import {UserFiatList} from "../../../reduxs/actions/fiats/fiats"

import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
import TrendingDownTwoToneIcon from '@material-ui/icons/TrendingDownTwoTone';
import TrendingUpTwoToneIcon from '@material-ui/icons/TrendingUpTwoTone';
import { useSelector, useDispatch } from 'react-redux'
import {selectFiat} from "../../../reduxs/actions/fiats/fiats"

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
  const [widgetsCarousels2A ,setWidgetsCarousels2A] = useState({
    dots: true,
    speed: 500,
    slidesToShow:  1,
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


  const dispatch = useDispatch();
  const fiatsprops = useSelector(state => state.fiats.fiatsData) ;
  const authprops = useSelector(state => state.auth.user);

  useEffect(() => {
    // AddCurrencylWalletAndRate()
    if(authprops)
      dispatch(UserFiatList({email:authprops.email}));
  }, [dispatch])

  useEffect(() => {
    // AddCurrencylWalletAndRate()
      // console.log("fiatsprops");
      // console.log(fiatsprops);
      // console.log("fiatsprops");
      if(fiatsprops && fiatsprops.length > 2)
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
      if(fiatsprops && fiatsprops.length === 2)
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
      if(fiatsprops && fiatsprops.length === 1)
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
      // dispatch(UserFiatList({email:authprops.email}));

  }, [fiatsprops])

  const handleCoin =(event)=>(evt)=>{
    evt.preventDefault();
    evt.stopPropagation();
    let fpdata = {
      walletName : event.item.walletName,
      owner : authprops.email,
    }
    if(event.eventaction ==="changeWallet")
    {
      let fpdata = {
        name : event.item.name,
        owner : authprops.email,
      }
      dispatch(selectFiat(fpdata));
    }
  }
  // fiatsprops ? (fiatsprops.legnth < 2 ? 3 : 1) : 0
  
  return (
    <>
      <h3 className="font-size-xl font-weight-bold mb-4">Active Fiats</h3>
      <Card className="mb-spacing-6-x2">
        <div className="py-3">
        {
        fiatsprops &&  
         <Slider className="overflow-hidden" {...widgetsCarousels2A}>
          { fiatsprops.map((item,i)=>(
            //  onClick={handleCoin({item:item,event:"chooseCoinUse"})}
              <div  key = {i} > 
                <Card   style={{height:"225px", margin:"0 10px"}} className={item.use === true ? "card-box card-box-hover-rise p-4 card-box-border-bottom bg-success text-white border-primary mb-5" : "card-box card-box-hover-rise p-4 card-box-border-bottom border-warning mb-5"} >
                  <div className="d-flex align-items-center mr-4">
                    <div className="font-weight-bold font-size-lg">
                      {item.name}
                    </div>
                  </div>
                  {
                    item.use === false &&
                    <Tooltip
                      classes={{ tooltip: 'text-center p-3 tooltip-success' }}
                      arrow
                      placement="top"
                      title="We can use this fiat.">
                      <Button className="btn-success m-2" style={{fontSize:"16px",float:"right" }} onClick={handleCoin({item:item , eventaction:"changeWallet"})} >Use</Button>
                    </Tooltip>                       
                  }
                  <div className="d-flex my-4">
                    <div className="text-left"> 
                      <div className={item.use === true ? "text-white opacity-5 font-size-lg" :"text-success opacity-5 font-size-lg"}>$0</div>
                    </div>
                  </div> <div className="d-flex my-4">
                    <div className="text-left"> 
                    <div className={item.use === true ? "text-white opacity-5 font-size-lg" :"text-success opacity-9 font-size-lg"}>{item.createdAt}</div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
        </Slider>
        }
        </div>
      </Card>
    </>
  );
}
