import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid, Dialog, Card, Button } from '@material-ui/core';

import TrendingUpTwoToneIcon from '@material-ui/icons/TrendingUpTwoTone';
import TrendingDownTwoToneIcon from '@material-ui/icons/TrendingDownTwoTone';
import { useSelector, useDispatch } from 'react-redux'
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';

import EnalbeDisableDeleteWalletAction from "../EnableDisableDeleteWalletAction"
export default function LivePreviewExample() {
  const [modalConfirmDelete, setConfirmDelete] = useState(false);
  const toggleConfirmDelete = () => setConfirmDelete(!modalConfirmDelete);
  const walletlist = useSelector(state => state.wallets.walletsData);
  const [anchorEl , setAnchorEl] = useState({});
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
  return (
    <>
      <Card className="mb-5">
        <div className="card-header d-flex align-items-center justify-content-between card-header-alt p-4">
          <div>
            <h6 className="font-weight-bold font-size-lg mb-1">
              Deactivated wallets
            </h6>
            <p className="text-danger opacity-6 mb-0">
              These walllets are old and cannot be used anymore.
            </p>
          </div>
        </div>
        <div className="divider" />
        <div className="divider" />
        <div className="p-2">
          <Grid container spacing={0}>
            {walletlist ? walletlist.filter(item => item.status===false).map((item , i) =>(
               <Grid item md={4} key={i}>
                <Card className="card-box shadow-none bg-secondary m-3">
                  <a
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                    className="p-4 card-img-wrapper rounded">
                    <div className="img-wrapper-overlay">
                      <div className="overlay-btn-wrapper">
                        <EnalbeDisableDeleteWalletAction curwallet ={item} setDetailPartAction = {(e) =>setAnchorEl(e)}   actionType="Enable" modalCss ={enableModalCss}  />
                        <EnalbeDisableDeleteWalletAction curwallet ={item} setDetailPartAction = {(e) =>setAnchorEl(e)}   actionType="Delete"  modalCss ={deleteModalCss} />

                        {/* <Button
                          className="btn-success" style={{marginRight:"5px"}}
                          // onClick={addToggle}
                          >
                          <span className="btn-wrapper--icon">
                            <DoneOutlineIcon fontSize="small"/>
                          </span>
                          <span className="btn-wrapper--label text-uppercase">
                            <small className="font-weight-bold">Enable</small>
                          </span>
                        </Button>
                        <Button
                          className="btn-danger" style={{marginLeft:"5px"}}
                          onClick={toggleConfirmDelete}>
                          <span className="btn-wrapper--icon">
                            <FontAwesomeIcon icon={['far', 'trash-alt']} />
                          </span>
                          <span className="btn-wrapper--label text-uppercase">
                            <small className="font-weight-bold">Delete</small>
                          </span>
                        </Button> */}
                      </div>
                    </div>
                    <div className="card-badges card-badges-bottom">
                      <div className="badge-pill badge badge-danger" style={{opacity:"0.7"}}>Disabled</div>
                    </div>
                    <div className="d-flex align-items-center mr-4 text-black">
                      {/* <div className="d-40 text-white d-flex align-items-center justify-content-center rounded-pill mr-3 bg-dark">
                        <FontAwesomeIcon
                          icon={['fab', 'bitcoin']}
                          className="font-size-xl"
                        />
                      </div> */}
                      <div className="font-weight-bold font-size-lg">
                        {item.walletName}
                      </div>
                    </div>
                    <div className="d-flex mt-4 text-black">
                      {/* <div className="d-30 text-success mr-2">
                        <TrendingUpTwoToneIcon className="d-30" />
                      </div> */}
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
            )):[]}
          </Grid>
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
