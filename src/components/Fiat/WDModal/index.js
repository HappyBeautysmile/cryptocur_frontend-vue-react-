import React, { useState ,lazy ,useEffect} from 'react';
import { Grid,Container, Dialog, Button,Card, TextField,ListItem,  FormControl,Menu,List,InputAdornment} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import {Notification} from "../../../reduxs/actions"
import InputLabel from '@material-ui/core/InputLabel';
import {  useDispatch } from 'react-redux'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {addWDTransaction} from "../../../reduxs/actions/transactions/wdtransactions"
function WithdrawDepositModal(props) {
    const [anchorEl, setAnchorEl] = useState(null);
    const {statusModal, statusModalSetting , choosedfiat,modalCssSetting,bankAccount} = props;
    const dispatch = useDispatch();

// choosedfiat
    //   {
  //     createdAt: 2021-03-06T11:54:36.648Z,
  //     _id: 60436e52164d7159d08c5cf5,
  //     owner: 'admin@gmail.com',
  //     name: 'Love',
  //     __v: 0,
  //     current_status: [
            // { name : USD:,  exchange_rate: 1, quantity: 0 ,exchangeQuantity:0},
            // { name : EUR:, exchange_rate: 1.2, quantity: 0 ,exchangeQuantity:0}
  //     ]
  //   },
    const [choiceMoneyQuantity ,setChoiceMoneyQuantity] = useState(0); //we are going to buy coin using that money
    const [chocieCurrencyIndex ,setChoiceCurrencyIndex] = useState(0);  
    const [ownerBankAccount, setOwnerBankAccount] = useState("");
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const modalClose =() =>{
        setOwnerBankAccount("");
        setChoiceMoneyQuantity(0);
        setChoiceCurrencyIndex(0);
        statusModalSetting(!statusModal);
    }
    const handleCurrentChange = (evt)=>()=>{
        setChoiceCurrencyIndex(evt);
        setAnchorEl(null);
    }

    const handleChangeChoicePrice =(event)=>{
        const changePirce =event;
        if(Number(changePirce) <= 0)
        {
            Notification("Warning","Please input correctly. Quantity is Essence Number" ,"warning");
        }
        if(modalCssSetting.modalTitle !=="Deposit" && changePirce  > choosedfiat.current_status[chocieCurrencyIndex].quantity)
        {
            console.log(choosedfiat.current_status[chocieCurrencyIndex].quantity);
            Notification("Warning","We can't withdraw than our quantity of fiat." ,"warning");
        }
        else{
            // setChoiceMoneyQuantity({...choiceMoneyQuantity, quantity: changePirce});
            setChoiceMoneyQuantity(changePirce);
        }
    }

    
  useEffect(() => {
    //   if(choosedfiat.current_status)
    //     setChoiceMoneyQuantity(choosedfiat.current_status[0].quantity);
    // console.log(choosedfiat.current_status);;
  }, [choosedfiat]);

const handleDepositSubmit = evt => {
    if(ownerBankAccount ==="")
    {
        Notification("Warning","Please input bank account correctly." ,"warning");
    }
    else if(Number(choiceMoneyQuantity)===0)
    {
        Notification("Warning","Please input curency's quantity  correctly." ,"warning");
    }
    else{
        let fpdata = {
            owner : choosedfiat.owner,
            fiatName : choosedfiat.name,
            currency :choosedfiat.current_status[chocieCurrencyIndex].name,
            quantity : choiceMoneyQuantity,
            // choiceMoneyQuantity:choiceMoneyQuantity,
            actiontype:modalCssSetting.modalTitle ,
            bankAddress:ownerBankAccount,
        }
        // console.log("fpdata.actionType");
        // console.log(fpdata.actionType);
        dispatch(addWDTransaction(fpdata));
    }
    setOwnerBankAccount("");
    setChoiceMoneyQuantity(0);
    setChoiceCurrencyIndex(0);
    statusModalSetting(!statusModal);
    evt.preventDefault();
  };
  
  return (
    <>
    {
    choosedfiat.current_status &&

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
                            {choosedfiat.name}
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
                            value={bankAccount.address}
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
                            value={choiceMoneyQuantity}
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
                                    <span className="btn-wrapper--label">{ choosedfiat.current_status[chocieCurrencyIndex].name  }</span>
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
                                                {choosedfiat.current_status ? choosedfiat.current_status.map((item, i)=>(
                                                    <ListItem
                                                        key={i}
                                                        button
                                                        href="#/"
                                                        onClick={handleCurrentChange(i)}
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
                            value={modalCssSetting.modalTitle ==="Deposit" ? Number(choiceMoneyQuantity) +  Number(choosedfiat.current_status[chocieCurrencyIndex].quantity) :  Number(choosedfiat.current_status[chocieCurrencyIndex].quantity) - Number(choiceMoneyQuantity) }
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
                                    <span className="btn-wrapper--label">{ choosedfiat.current_status[chocieCurrencyIndex].name }</span>
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
                                className={modalCssSetting.modalFormBtnBgColor ==="btn-success" ? "bg-midnight-bloom btn-outline-secondary py-2 mt-3 px-5 font-weight-bold font-size-lg" : "btn-info py-2 mt-3 px-5 font-weight-bold font-size-lg"} style={{width:"80%",marginLeft:"10%",marginRight:"10%",borderRadius:"10px"}}
                                >
                                    {modalCssSetting.modalTitle +" to Honey " }
                            </Button>
                        </Grid>
                        <Grid item lg={6}>
                            <Button  onClick={modalClose} className="btn-dark py-2 mt-3 px-5 font-weight-bold font-size-lg" style={{width:"80%",marginLeft:"10%",marginRight:"10%",borderRadius:"10px"}}>Cancel</Button>
                        </Grid>
                    </Grid>
                  
                </Card>
            </form>
        </Dialog>
      </div>
        }
    </>
  );
  
}


export default WithdrawDepositModal;