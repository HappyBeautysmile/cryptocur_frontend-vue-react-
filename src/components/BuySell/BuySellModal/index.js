import React, { useState ,lazy ,useEffect} from 'react';
import { Grid,Container, Dialog, Button,Card, TextField,ListItem,  FormControl,Menu,List,InputAdornment} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {editCurrency} from "../../../reduxs/actions/currencies/currencies"
// import {deleteCurrency} from "../../../reduxs/actions/currencies/currencies"
// import {  useDispatch } from 'react-redux'
import OutlinedInput from '@material-ui/core/OutlinedInput';

function BuySellModal(props) {
    const [anchorEl, setAnchorEl] = useState(null);
    const {statusModal, statusModalSetting ,cryptoCoin, currentWalletAndRate,initialChoiceMoney} = props;
    const [choiceMoney ,setChoiceMoney] = useState([]); //we are going to buy coin using that money

    // console.log("cryptoCoin" + cryptoCoin.coinName );

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const modalClose =() =>{
        statusModalSetting(!statusModal);
    }
    /*
        tempchocieMoney =
            { 
                choiceCurrency: {name:"USD" , quantity:3500 ,exchange_rate: 1 }
                ,convertCoinPrice:121.212,
                wantedCoin : {
                    iconType : "fab", iconName: "bitcoin", marketCap: 112314 , coinFullName:"Bitcoin", coinName:"BTC", coinPrice:48465.20, currencyType:"$", trending:"up",backgroundColor:"bg-warning"
                }
            },
    */
    const handleCurrentChange = (evt)=>()=>{
        let tempchocieMoney = choiceMoney ;
        if( evt.quantity)
            tempchocieMoney.convertCoinPrice = evt.quantity * evt.exchange_rate / tempchocieMoney.wantedCoin.coinPrice;
        else{
            tempchocieMoney.convertCoinPrice = 0;
        }
        tempchocieMoney.choiceCurrency = evt;
        setChoiceMoney(tempchocieMoney);
        setAnchorEl(null);
        // console.log(evt)
    }
  useEffect(() => {
    if(initialChoiceMoney) setChoiceMoney(initialChoiceMoney);
  }, [initialChoiceMoney]);

// console.log("initialChoiceMoney : " + initialChoiceMoney);
// console.log(initialChoiceMoney.choiceCurrency ? initialChoiceMoney.choiceCurrency.quantity : "sss");

  return (
    <>
      <div className="d-flex align-items-center justify-content-center flex-wrap">
        <Dialog
          scroll="body"
          maxWidth="sm"
          open={statusModal}
        //   onClose={statusToggle}
          classes={{
            paper: 'w-100 rounded border-0 shadow-sm-dark bg-white p-3 p-xl-0'
          }}>
            <form  action="" style={{padding:"10px"}}>
                <Card>
                    <div className="d-flex align-items-center justify-content-between mb-2 mt-4">
                        <div className="font-weight-bold font-size-xl text-primary">
                            Amount
                        </div>
                    </div>
                    <div className="divider mb-4" />
                    <div className="d-block d-md-flex align-items-center justify-content-center">
                        <FormControl variant="outlined" fullWidth>
                            <OutlinedInput
                            value={initialChoiceMoney.choiceCurrency ? initialChoiceMoney.choiceCurrency.quantity : "ERORR"}
                            classes={{
                                input: 'font-size-lg font-weight-bold p-4 h-auto',
                                notchedOutline: 'border-2'
                            }}
                            endAdornment={
                                <InputAdornment position="end">
                                <Button
                                    onClick={handleClick}
                                    size="small"
                                    className="btn-neutral-dark d-flex align-items-center">
                                    <span className="btn-wrapper--label">{initialChoiceMoney.choiceCurrency ? initialChoiceMoney.choiceCurrency.name : "ERORR"}</span>
                                    <span className="btn-wrapper--icon d-flex">
                                    <FontAwesomeIcon
                                        icon={['fas', 'chevron-down']}
                                        className="opacity-8 font-size-xs ml-1"
                                    />
                                    </span>
                                </Button>
                                <Menu
                                    anchorEl={anchorEl}
                                    keepMounted
                                    getContentAnchorEl={null}
                                    anchorOrigin={{
                                    vertical: 'center',
                                    horizontal: 'center'
                                    }}
                                    transformOrigin={{
                                    vertical: 'center',
                                    horizontal: 'center'
                                    }}
                                    open={Boolean(anchorEl)}
                                    classes={{ list: 'p-0' }}
                                    onClose={handleClose}>
                                    <div className="p-2">
                                        <List
                                            component="div"
                                            className="nav-pills p-0 m-0 nav-neutral-dark flex-column">
                                                {currentWalletAndRate.length ? currentWalletAndRate.map((item, i)=>(
                                                    <ListItem
                                                        key={i}
                                                        button
                                                        href="#/"
                                                        onClick={handleCurrentChange(item)}
                                                        selected
                                                        className="px-3 mx-2">
                                                        <span>{item.name}</span>
                                                    </ListItem>
                                                )):null}
                                        </List>
                                    </div>
                                </Menu>
                                </InputAdornment>
                            }
                            labelWidth={0}
                            />
                        </FormControl>
                        <div className="my-3 mx-auto my-md-0 d-60 d-flex align-items-center justify-content-center px-4">
                            <FontAwesomeIcon
                            icon={['fas', 'exchange-alt']}
                            className="opacity-8 font-size-xl"
                            />
                        </div>

                        <FormControl variant="outlined" fullWidth>
                            <OutlinedInput
                            value={choiceMoney.convertCoinPrice }
                            classes={{
                                input: 'font-size-lg font-weight-bold p-4 h-auto',
                                notchedOutline: 'border-2'
                            }}
                            endAdornment={
                                <InputAdornment position="end">
                                <Button
                                    size="small"
                                    className="btn-neutral-dark d-flex align-items-center">
                                    <span className="btn-wrapper--label">{cryptoCoin.coinName}</span>
                                </Button>
                              
                                </InputAdornment>
                            }
                            labelWidth={0}
                            />
                        </FormControl>
                    </div>
                    <Grid container >
                        <Grid item lg={6} >
                            <Button
                                className="btn-success py-2 mt-3 px-5 font-weight-bold font-size-lg" style={{width:"80%",marginLeft:"10%",marginRight:"10%"}}
                                >
                                Buy Bitcoin
                            </Button>
                        </Grid>
                        <Grid item lg={6}>
                            <Button  onClick={modalClose} className="btn-dark py-2 mt-3 px-5 font-weight-bold font-size-lg" style={{width:"80%",marginLeft:"10%",marginRight:"10%"}}>Cancel</Button>
                        </Grid>
                    </Grid>
                  
                </Card>
            </form>
        </Dialog>
      </div>
    </>
  );
}


export default BuySellModal;