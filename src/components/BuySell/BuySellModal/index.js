import React, { useState ,lazy ,useEffect} from 'react';
import { Grid,Container, Dialog, Button,Card, TextField,ListItem,  FormControl,Menu,List,InputAdornment} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import {Notification} from "../../../reduxs/actions"

function BuySellModal(props) {
    const [anchorEl, setAnchorEl] = useState(null);
    const {statusModal, statusModalSetting , currentWalletAndRate,initialChoiceMoney,modalCssSetting} = props;
    const [choiceMoney ,setChoiceMoney] = useState({}); //we are going to buy coin using that money

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
                choiceCurrency: {name:"USD" , quantity:3500 ,totalQuantity:3500,exchange_rate: 1 }
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
    const handleChangeChoicePrice =(event)=>{

        const changePirce =event;
        let tempconvertCoinPrice = 0;
        if( changePirce && choiceMoney.wantedCoin)
            tempconvertCoinPrice = changePirce * choiceMoney.choiceCurrency.exchange_rate / choiceMoney.wantedCoin.coinPrice;

        if(changePirce > choiceMoney.choiceCurrency.totalQuantity)
        {
            Notification("Warning","Total is " + choiceMoney.choiceCurrency.totalQuantity,"warning");
        }
        if(changePirce < 0)
        {
            Notification("Warning","Please input correctly. Price is Essence Number" ,"warning");
        }
        if(changePirce >=0 && changePirce <= choiceMoney.choiceCurrency.totalQuantity)
        {
            setChoiceMoney({...choiceMoney, choiceCurrency:{...choiceMoney.choiceCurrency, quantity: changePirce} ,convertCoinPrice:tempconvertCoinPrice});
                // setChoiceMoney({...choiceMoney, choiceCurrency:{name:choiceMoney.choiceCurrency.name ,exchange_rate:choiceMoney.choiceCurrency.exchange_rate , quantity: changePirce} ,convertCoinPrice:tempconvertCoinPrice});
        }
        // console.log(choiceMoney);
    }
    const handleChangeChoiceCoinPrice =(event)=>{
        const changeCoinPirce =event;
        let tempconvertChanePrice = 0;
        if( changeCoinPirce && choiceMoney.wantedCoin)
            tempconvertChanePrice = changeCoinPirce * choiceMoney.wantedCoin.coinPrice / choiceMoney.choiceCurrency.exchange_rate ;
        if(tempconvertChanePrice > choiceMoney.choiceCurrency.totalQuantity)
        {
            Notification("Warning","Total is " + choiceMoney.choiceCurrency.totalQuantity,"warning");
        }   
        if(changeCoinPirce < 0)
        {
            Notification("Warning","Please input correctly. Price is Essence Number" ,"warning");
        }
        if(tempconvertChanePrice >=0 && tempconvertChanePrice <= choiceMoney.choiceCurrency.totalQuantity)
        {
            setChoiceMoney({...choiceMoney, choiceCurrency:{...choiceMoney.choiceCurrency,quantity: tempconvertChanePrice} ,convertCoinPrice:changeCoinPirce});
        }
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
          maxWidth="md"
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
                            
                            value={choiceMoney.choiceCurrency ? choiceMoney.choiceCurrency.quantity : 1}
                            // value={tempMoney}
                            classes={{
                                input: 'font-size-lg font-weight-bold p-4 h-auto',
                                notchedOutline: 'border-2'
                            }}
                            onChange = { (e) =>handleChangeChoicePrice(e.target.value)}
                            type="Number"
                            endAdornment={
                                <InputAdornment position="end">
                                <Button
                                    onClick={handleClick}
                                    size="small"
                                    className="btn-neutral-dark d-flex align-items-center">
                                    <span className="btn-wrapper--label">{choiceMoney.choiceCurrency ? choiceMoney.choiceCurrency.name : "ERORR"}</span>
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
                            onChange = { (e) =>handleChangeChoiceCoinPrice(e.target.value)}
                            type="Number"
                            classes={{
                                input: 'font-size-lg font-weight-bold p-4 h-auto',
                                notchedOutline: 'border-2'
                            }}
                            endAdornment={
                                <InputAdornment position="end">
                                <Button
                                    size="small"
                                    className="btn-neutral-dark d-flex align-items-center">
                                    <span className="btn-wrapper--label">{choiceMoney.wantedCoin ? choiceMoney.wantedCoin.coinName : 1 }</span>
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
                                className={modalCssSetting.modalFormBtnBgColor ==="btn-success" ? "btn-success py-2 mt-3 px-5 font-weight-bold font-size-lg" : "btn-warning py-2 mt-3 px-5 font-weight-bold font-size-lg"} style={{width:"80%",marginLeft:"10%",marginRight:"10%"}}
                                >
                                    {modalCssSetting.modalTitle +" " }
                                    { choiceMoney.wantedCoin ? choiceMoney.wantedCoin.coinFullName : ""} 
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