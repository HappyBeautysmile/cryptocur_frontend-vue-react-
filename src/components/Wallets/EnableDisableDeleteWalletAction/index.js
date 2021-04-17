import React, { useState ,lazy ,useEffect} from 'react';
import { Grid,Container, Dialog, Button, TextField,ListItem ,List} from '@material-ui/core';
import {addWallet,changestatusaction,deleteWallet} from "../../../reduxs/actions/wallets/wallets"
import {  useSelector, useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';
import ExploreOffIcon from '@material-ui/icons/ExploreOff';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';

function EnalbeDisableDeleteWalletAction(props) {
  const [addModal, setaddModal] = useState(false);
  const [name , setName] = useState("");
  // const [email ,setEmail] = useState("");
  const { actionType,curwallet , setDetailPartAction,modalCss } = props;
  const dispatch = useDispatch();
  const authprops = useSelector(state => state.auth.user);
  const ToggleChange = () => setaddModal(!addModal);
  const addToggle =() =>
  {
    ToggleChange();
    if(actionType ==="Disable" || actionType === "Delete_enalbe" )
      setDetailPartAction(null);
  }
  const handleEditSubmit = evt => {
    evt.preventDefault()
    // console.log(name  + " : " + email) ;
    let fpdata = {
      walletName : name,
      owner : authprops.email,
    }
    if(actionType === "Delete" || actionType === "Delete_enalbe")
    {
      dispatch(deleteWallet(fpdata));
    } 
    if(actionType ==="Disable" || actionType ==="Enable")
    {
      dispatch(changestatusaction(fpdata));
    }
    
    addToggle();
  };
  useEffect(() => {
    if(curwallet)
    {
      setName(curwallet.walletName);
    }
  }, [curwallet])
  return (
    <>
      {actionType ==="Disable" &&
        <ListItem
          button
          onClick={addToggle} >
          <div className="mr-2">
            <ExploreOffIcon />
          </div>
          <span className="font-size-md">Disable</span>
        </ListItem>
      }
      {
        actionType ==="Delete_enalbe" &&
          <List className="nav-neutral-danger nav-pills-rounded flex-column p-3">
            <ListItem
              button
              href="#/"
              onClick={addToggle}>
              <div className="mr-2">
                <DeleteTwoToneIcon />
              </div>
              <span>Delete</span>
            </ListItem>
          </List>
      }
      {actionType === "Delete" &&
          <Button
          className="btn-danger" style={{marginLeft:"5px"}}
          onClick={addToggle}>
          <span className="btn-wrapper--icon">
            <FontAwesomeIcon icon={['far', 'trash-alt']} />
          </span>
          <span className="btn-wrapper--label text-uppercase">
            <small className="font-weight-bold">Delete</small>
          </span>
        </Button>
      }
      <div className="d-flex align-items-center justify-content-center flex-wrap">
        <Dialog
          scroll="body"
          maxWidth="sm"
          open={addModal}
          onClose={addToggle}
          classes={{ paper: 'shadow-lg rounded' }}>
            <div className="text-center p-5">
              <div className="avatar-icon-wrapper rounded-circle m-0">
                <div 
                // className={"d-inline-flex justify-content-center p-0 rounded-circle btn-icon avatar-icon-wrapper bg-warning text-white m-0 d-130"}
                    className ={` d-inline-flex justify-content-center p-0 rounded-circle btn-icon avatar-icon-wrapper  ${modalCss.iconColor} ${modalCss.textColor} text-white m-0 d-130`}
                >
                  <FontAwesomeIcon
                    icon={[`${modalCss.iconForm}`, `${modalCss.iconType}`]}
                    className="d-flex align-self-center display-3"
                  />
                </div>
              </div>
              <div className="font-weight-bold font-size-lg mt-4">
                {modalCss.actionStr1}
              </div>
              <p className="mb-0 mt-2 text-muted">
                {modalCss.actionStr2}
              </p>
              <div className="pt-4">
                <Button
                  onClick={addToggle}
                  className="btn-neutral-secondary btn-pill mx-1">
                  <span className="btn-wrapper--label">Cancel</span>
                </Button>
                <Button
                  onClick={handleEditSubmit}
                  variant="text"
                  className={`${modalCss.submitBtnColor} btn-pill mx-1`}>
                  <span className="btn-wrapper--label">{modalCss.submitBtnStr}</span>
                </Button>
              </div>
            </div>
        </Dialog>
      </div>
      {actionType === "Enable" &&
          <Button
          className="btn-success" style={{marginRight:"5px"}}
          onClick={addToggle}>
          <span className="btn-wrapper--icon">
            <DoneOutlineIcon fontSize="small"/>
          </span>
          <span className="btn-wrapper--label text-uppercase">
            <small className="font-weight-bold">Enable</small>
          </span>
        </Button>
      }
    </>
  );
}

export default EnalbeDisableDeleteWalletAction;