import React, { useState ,lazy ,useEffect} from 'react';
import { Grid,Container, Dialog, Button, TextField,ListItem ,List , Card, Menu  } from '@material-ui/core';
import {addWallet,editWallet,deleteWallet} from "../../../reduxs/actions/wallets/wallets"
import {  useSelector, useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';
import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone';

import CountUp from 'react-countup';
import Chart from 'react-apexcharts';


function ViewDetailWalletAction(props) {
  const [addModal, setaddModal] = useState(false);
  const [showCoinIndex, setShowCoinIndex] = useState(0);
  const [name , setName] = useState("");
  // const [email ,setEmail] = useState("");
  const { actionType,curwallet , setDetailPartAction } = props;
  const dispatch = useDispatch();
  const authprops = useSelector(state => state.auth.user);
  const ToggleChange = () => setaddModal(!addModal);
  const addToggle =() =>
  {
    ToggleChange();
    setDetailPartAction(null);
    setShowCoinIndex(0);
  }
  
  useEffect(() => {
    if(curwallet)
    {
      setName(curwallet.walletName);
    }
  }, [curwallet])
// console.log(curwallet);
  const chart6Options = {
    chart: {
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    grid: {
      strokeDashArray: '5',
      borderColor: 'rgba(125, 138, 156, 0.3)'
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    fill: {
      color: '#4191ff',
      gradient: {
        shade: 'light',
        type: 'vertical',
        shadeIntensity: 0.3,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 0,
        stops: [0, 100]
      }
    },
    colors: ['#4191ff'],
    legend: {
      show: false
    },
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July']
  };
  const chart6Data = [
    {
      name: 'Net Profit',
      data: [3.3, 3.1, 4.0, 5.8, 2.1, 3.6, 3.2]
    },
    {
      name: 'Net Loss',
      data: [2.1, 2.1, 2.8, 2.8, 4.3, 2.7, 1.4]
    }
  ];

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const changeCurrentCoinFunc =(i) =>()=>{
    setShowCoinIndex(i);
    setAnchorEl(null);

  }
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  return (
    <>
      <ListItem
        button
        href="#/"
        onClick={addToggle}>
        <div className="mr-2">
          <SearchTwoToneIcon />
        </div>
        <span className="font-size-md">View details</span>
      </ListItem>
      
      <div className="d-flex align-items-center justify-content-center flex-wrap">
        <Dialog
          scroll="body"
          maxWidth="xl"
          open={addModal}
          onClose={addToggle}
          classes={{
            paper: 'w-100 rounded border-0 shadow-sm-dark bg-white p-3 p-xl-0'
          }}>
            <form>
              <Container>
                <div className="p-4">
                  <h5 className="font-size-xl mb-1 font-weight-bold">
                    View Detail
                  </h5>
                  <p className="text-black-50 mb-4">
                  </p>
                  <Card className="p-4 p-lg-5">
                    <div className="d-block d-lg-flex text-center text-lg-left align-items-center justify-content-between mb-4">
                      <div className="d-flex align-items-center justify-content-center justify-content-lg-start">
                        <div className="display-4 line-height-1 font-weight-bold mr-3">
                          <span className=" text-success">{curwallet.walletName}</span> Balance
                        </div>
                        <div>
                          <Button
                            onClick={handleClick}
                            size="small"
                            className="btn-neutral-dark d-flex align-items-center">
                            <span className="btn-wrapper--label">{curwallet.coinList ? curwallet.coinList[showCoinIndex].coinName :""}</span>
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
                              vertical: 'top',
                              horizontal: 'center'
                            }}
                            transformOrigin={{
                              vertical: 'top',
                              horizontal: 'center'
                            }}
                            open={Boolean(anchorEl)}
                            classes={{ list: 'p-0' }}
                            onClose={handleClose}>
                            <div className="p-3">
                              <List
                                component="div"
                                className="nav-pills nav-neutral-dark flex-column">
                                  {curwallet.coinList ? curwallet.coinList.map((item , i) =>(
                                    <ListItem
                                      key = {i}
                                      button
                                      href="#/"
                                      onClick={changeCurrentCoinFunc(i)}
                                      selected>
                                      <span>{item.coinName}</span>
                                  </ListItem>
                                  )):[]}
                              </List>
                            </div>
                          </Menu>
                        </div>
                      </div>
                    </div>
                    <div className="rounded p-4 bg-secondary text-center border-light mb-5 border-1">
                      <Grid container spacing={6}>
                        <Grid item md={4}>
                        </Grid>
                        <Grid item md={4}>
                          <div className="text-dark pb-1">Current Amount</div>
                          <div className="font-size-lg d-flex align-items-center justify-content-center text-second">
                            <div className="badge badge-first mr-2 badge-circle">
                              Badge first
                            </div>
                            <span>
                              <CountUp
                                start={0}
                                end={curwallet.coinList ? curwallet.coinList[showCoinIndex].quantity :0}
                                duration={6}
                                deplay={2}
                                separator=""
                                decimals={3}
                                decimal="."
                              />
                            </span>
                            <small className="opacity-6 pr-1"> {curwallet.coinList ? curwallet.coinList[showCoinIndex].coinName :""}</small>
                          </div>
                        </Grid>
                        <Grid item md={4}>
                        </Grid>
                      </Grid>
                    </div>

                    <Grid container spacing={6}>
                      <Grid item xl={4}>
                        <Card className="card-box mb-4 p-3">
                          <div className="display-3 text-black font-weight-bold">{curwallet.failedTransfers}</div>
                          <div className="divider mt-2 mb-3 border-2 w-25 bg-first rounded border-first" />
                          <div className="font-weight-bold opacity-7 text-uppercase">
                            Failed transfers
                          </div>
                        </Card>
                      </Grid>
                      <Grid item xl={4}>
                        <Card className="card-box mb-4 p-3">
                          <div className="display-3 text-black font-weight-bold">{curwallet.successfulTransfers}</div>
                          <div className="divider mt-2 mb-3 border-2 w-25 bg-success rounded border-success" />
                          <div className="font-weight-bold opacity-7 text-uppercase">
                            Successful transfers
                          </div>
                        </Card>
                      </Grid>
                      <Grid item xl={4}>
                        <Card className="card-box mb-4 p-3">
                          <div className="display-3 text-black font-weight-bold">{curwallet.transactions}</div>
                          <div className="divider mt-2 mb-3 border-2 w-25 bg-warning rounded border-warning" />
                          <div className="font-weight-bold opacity-7 text-uppercase">
                            Transactions
                          </div>
                        </Card>
                      </Grid>
                    </Grid>

                    {/* <Chart
                      options={chart6Options}
                      series={chart6Data}
                      type="area"
                      height={311}
                    /> */}
                  </Card>
                


                  <Grid container spacing={6}>
                    <Grid item md={6}>
                    </Grid>
                    <Grid item md={6}>
                      <div>
                        <Button onClick={addToggle} style={{float:"right"}} className="m-2 btn-neutral-dark">Close</Button>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </Container>
            </form>
        </Dialog>
      </div>
    </>
  );
}

export default ViewDetailWalletAction;