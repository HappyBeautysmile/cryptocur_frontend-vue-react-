import React, { useState ,lazy ,useEffect} from 'react';
import { Grid,Container, Dialog, Button,Card, TextField,ListItem,  FormControl,Menu,List,InputAdornment} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import {Notification} from "../../../reduxs/actions"
import InputLabel from '@material-ui/core/InputLabel';
import {  useDispatch } from 'react-redux'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
function WithdrawDepositModal(props) {
    const [anchorEl, setAnchorEl] = useState(null);
    const {statusModal, statusModalSetting , currentFiatAndRate,initialChoiceMoney,modalCssSetting} = props;
    const [choiceMoney ,setChoiceMoney] = useState({}); //we are going to buy coin using that money
    const [ownerBankAccount, setOwnerBankAccount] = useState("");
    const [sitebankAccount ] = useState("123123123123123");
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const modalClose =() =>{
        setOwnerBankAccount("");
        setChoiceMoney(initialChoiceMoney);
        statusModalSetting(!statusModal);
    }
    /*
        tempchocieMoney =
        {name:"USD" , quantity:3500 ,totalQuantity:3500,exchange_rate: 1 }
             
        },
    */
    const handleCurrentChange = (evt)=>()=>{
        let tempchocieMoney = choiceMoney ;
  
        tempchocieMoney = evt;
        setChoiceMoney(tempchocieMoney);
        setAnchorEl(null);
        // console.log(evt)
    }
    const handleChangeChoicePrice =(event)=>{

        const changePirce =event;
        if(Number(changePirce) <= 0)
        {
            Notification("Warning","Please input correctly. Quantity is Essence Number" ,"warning");
        }
        if(modalCssSetting.modalTitle !=="Deposit" && changePirce > choiceMoney.totalQuantity)
        {
            Notification("Warning","We can't withdraw than our quantity of fiat." ,"warning");
        }
        else{
            setChoiceMoney({...choiceMoney, quantity: changePirce});
        }
        // console.log(choiceMoney);
    }
    
  useEffect(() => {
    if(initialChoiceMoney) setChoiceMoney(initialChoiceMoney);
  }, [initialChoiceMoney]);

// console.log("initialChoiceMoney : " + initialChoiceMoney);
// console.log(initialChoiceMoney.choiceCurrency ? initialChoiceMoney.choiceCurrency.quantity : "sss");

const handleDepositSubmit = evt => {
    if(ownerBankAccount ==="")
    {
        Notification("Warning","Please input bank account correctly." ,"warning");
    }
    if(Number(choiceMoney.quantity)===0)
    {
        Notification("Warning","Please input curency's quantity  correctly." ,"warning");
    }
    
    evt.preventDefault();
  };

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
                            Honey
                        </div>
                    </div>
                    <div className="divider mb-4" />
                    
                    <div className="d-block d-md-flex align-items-center justify-content-center">
                        <FormControl variant="outlined" fullWidth>
                            <InputLabel htmlFor="outlined-adornment-amount">My Bank Account</InputLabel>
                            <OutlinedInput                            
                            variant="outlined"
                            label="My Bank Account"
                            value={ownerBankAccount}
                            // value={tempMoney}
                            classes={{
                                input: 'font-size-lg font-weight-bold p-4 h-auto',
                                notchedOutline: 'border-2'
                                
                            }}
                            onChange = { (e) =>setOwnerBankAccount(e.target.value)}
                            labelWidth={0}
                            required
                            />
                        </FormControl>
                        <div className="my-3 mx-auto my-md-0 d-60 d-flex align-items-center justify-content-center px-4">
                            
                            {modalCssSetting.modalTitle ==="Deposit" ? <ArrowForwardIosIcon/> : <ArrowBackIosIcon/>}
                        </div>

                        <FormControl variant="outlined" fullWidth>
                            <InputLabel htmlFor="outlined-adornment-amount">Site Bank Account</InputLabel>
                            <OutlinedInput
                            value={sitebankAccount}
                            label="Site Bank Account"
                            readOnly
                            classes={{
                                input: 'font-size-lg font-weight-bold p-4 h-auto',
                                notchedOutline: 'border-2'
                            }}
                            labelWidth={0}
                            disabled
                            />
                        </FormControl>
                    </div>
                    <div className="divider mb-4" />

                    <div className="d-block d-md-flex align-items-center justify-content-center">
                        <FormControl variant="outlined" fullWidth>
                            <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                            <OutlinedInput                            
                            variant="outlined"
                            label="Amount"
                            value={choiceMoney ? choiceMoney.quantity : 1}
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
                                    <span className="btn-wrapper--label">{choiceMoney ? choiceMoney.name : "ERORR"}</span>
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
                                                {currentFiatAndRate.length ? currentFiatAndRate.map((item, i)=>(
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
                        </div>

                        <FormControl variant="outlined" fullWidth>
                            <InputLabel htmlFor="outlined-adornment-amount">Hone's fiat quantity</InputLabel>
                            <OutlinedInput
                            value={modalCssSetting.modalTitle ==="Deposit" ? Number(choiceMoney.quantity) + Number(choiceMoney.totalQuantity) :  Number(choiceMoney.totalQuantity) - Number(choiceMoney.quantity) }
                            label="Hone fiat quantity"
                            classes={{
                                input: 'font-size-lg font-weight-bold p-4 h-auto',
                                notchedOutline: 'border-2'
                            }}
                            endAdornment={
                                <InputAdornment position="end">
                                <Button
                                    size="small"
                                    className="btn-neutral-dark d-flex align-items-center">
                                    <span className="btn-wrapper--label">{choiceMoney.name}</span>
                                </Button>
                              
                                </InputAdornment>
                            }
                            labelWidth={0}
                            disabled

                            />
                        </FormControl>
                    </div>
                    <Grid container >
                        <Grid item lg={6} >
                            <Button type= "submit" onClick={handleDepositSubmit}
                                className={modalCssSetting.modalFormBtnBgColor ==="btn-success" ? "btn-success py-2 mt-3 px-5 font-weight-bold font-size-lg" : "btn-danger py-2 mt-3 px-5 font-weight-bold font-size-lg"} style={{width:"80%",marginLeft:"10%",marginRight:"10%"}}
                                >
                                    {modalCssSetting.modalTitle +" to Honey " }
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


export default WithdrawDepositModal;