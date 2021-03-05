import React, { useState ,lazy ,useEffect} from 'react';
import { Grid,Container, Dialog, Button,Card, TextField,ListItem,  FormControl,Menu,List,InputAdornment} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {editCurrency} from "../../../reduxs/actions/currencies/currencies"
// import {deleteCurrency} from "../../../reduxs/actions/currencies/currencies"
// import {  useDispatch } from 'react-redux'
import OutlinedInput from '@material-ui/core/OutlinedInput';

function BuySellModal(props) {
    const [anchorEl, setAnchorEl] = useState(null);
    const {statusModal,statusModalSetting} = props;

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
        statusModalSetting(!statusModal);
    };

    const [activeTab, setActiveTab] = useState('1');

    const toggle = (tab) => {
        if (activeTab !== tab) setActiveTab(tab);
    };

//   const statusToggle = () => setStatusModal(!statusModal);

//   const [deleteModal, setDeleteModal] = useState(false);
//   const [name , setName] = useState("");
//   const [exchange_rate , setExchange_rate] = useState(1);

//   const dispatch = useDispatch();
//   const deleteToggle = () => setDeleteModal(!deleteModal);
//   const {curCurrency} = props;
//   const disabledClassNameProps = { className: "Mui-disabled" };
  useEffect(() => {
    // console.log(userData);
    // if( curCurrency!=null ){
    //   setName(curCurrency.name);
    //   setExchange_rate(curCurrency.exchange_rate);
    // }
  }, []);

//   const handleEditSubmit = evt => {
//     let fpdata ={
//       name : name,
//       exchange_rate : exchange_rate
//     }
//     dispatch(editCurrency(fpdata));
//     editToggle();
//   };
//   const handleDeletSubmit = evt =>{
//     let fpdata ={
//       name : name,
//     }
//     dispatch(deleteCurrency(fpdata));
//     deleteToggle();
//   }
console.log("status : " + statusModal );
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
                            value="567.34"
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
                                    <span className="btn-wrapper--label">USD</span>
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
                                        <ListItem
                                        button
                                        href="#/"
                                        onClick={(e) => e.preventDefault()}
                                        selected
                                        className="px-3 mx-2">
                                        <span>USD</span>
                                        </ListItem>
                                        <ListItem
                                        button
                                        href="#/"
                                        onClick={(e) => e.preventDefault()}
                                        className="px-3 mx-2">
                                        <span>Euro</span>
                                        </ListItem>
                                        <ListItem
                                        button
                                        href="#/"
                                        onClick={(e) => e.preventDefault()}
                                        className="px-3 mx-2">
                                        <span>Yen</span>
                                        </ListItem>
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
                            value="0.549"
                            classes={{
                                input: 'font-size-lg font-weight-bold p-4 h-auto',
                                notchedOutline: 'border-2'
                            }}
                            endAdornment={
                                <InputAdornment position="end">
                                <Button
                                    size="small"
                                    className="btn-neutral-dark d-flex align-items-center">
                                    <span className="btn-wrapper--label">BTC</span>
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
                            <Button  onClick={handleClose} className="btn-dark py-2 mt-3 px-5 font-weight-bold font-size-lg" style={{width:"80%",marginLeft:"10%",marginRight:"10%"}}>Cancel</Button>
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