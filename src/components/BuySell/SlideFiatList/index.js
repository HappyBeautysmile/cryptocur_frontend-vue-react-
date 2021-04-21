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
      <Card className="mb-spacing-6-x2 wallet_activeWallet">
        <div className="py-3">
          <div className="card-header d-flex align-items-center justify-content-between card-header-alt p-4 ">
            <h6 className="font-size-xl font-weight-bold mb-4" >
              Active Fiats
            </h6>
          </div>
          <div className="customizeGradientLine" ></div>
          {
            fiatsprops &&  
            <Slider className="overflow-hidden" {...widgetsCarousels2A}>
              { fiatsprops.map((item,i)=>(
                  <Grid container spacing={0}>
                    <Grid item key = {i} md ={12}> 
                      <Card   style={item.use === true  ? {height:"225px", margin:"0 10px"}:{height:"225px", margin:"0 10px" , border:"3px solid #3b3e66"}}  className={item.use === true ? "card  card-box bg-midnight-bloom text-white card-box card-box-hover-rise p-4 card-box-border-bottom mb-5 m-3" : "card-box card-box-hover-rise p-4 card-box-border-bottom mb-5 m-3"}  >
                      <div className="d-flex align-items-center mr-4">
                        <div className="font-weight-bold font-size-lg">
                          {item.name}
                        </div>
                      </div>
                      {
                        item.use === false &&
                        <Tooltip
                          classes={{ tooltip: 'text-center p-3 bg-midnight-bloom' }}
                          arrow
                          placement="top"
                          title="We can use this fiat.">
                          <Button className="bg-midnight-bloom btn-outline-secondary UseBtn"   onClick={handleCoin({item:item , eventaction:"changeWallet"})} >Use</Button>
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
                    </Grid>
                  </Grid>
                ))}
            </Slider>
          }
        </div>

      </Card>
    </>
  );
}
