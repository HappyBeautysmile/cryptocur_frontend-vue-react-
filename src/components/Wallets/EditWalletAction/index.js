import React, { useState ,lazy ,useEffect} from 'react';
import { Grid,Container, Dialog, Button, TextField,ListItem ,List} from '@material-ui/core';
import {addWallet,editWallet,deleteWallet} from "../../../reduxs/actions/wallets/wallets"
import {  useSelector, useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';

function EditWalletAction(props) {
  const [addModal, setaddModal] = useState(false);
  const [name , setName] = useState("");
  // const [email ,setEmail] = useState("");
  const { actionType,curwallet , setDetailPartAction } = props;
  const dispatch = useDispatch();
  const authprops = useSelector(state => state.auth.user);
  const ToggleChange = () => setaddModal(!addModal);
  const addToggle =() =>
  {
    ToggleChange();
    if(actionType !=="ADD") setDetailPartAction(null);
  }
  const handleEditSubmit = evt => {
    evt.preventDefault()
    // console.log(name  + " : " + email) ;
    let fpdata = {
      walletName : name,
      owner : authprops.email
    }
    if(actionType ==="ADD")
    {
      dispatch(addWallet(fpdata));
    }
    else if(actionType ==="Edit") {
      fpdata.oldWalletName = curwallet.walletName; 
      dispatch(editWallet(fpdata));
    }
    else if(actionType ==="Delete")
    {
      // alert("delete");
      dispatch(deleteWallet(fpdata));
    }
    addToggle();
  };
  useEffect(() => {
    if((actionType==="Edit"  || actionType ==="Delete") && curwallet)
    {
      // console.log(curwallet.walletName);

      setName(curwallet.walletName);
    }
  }, [curwallet])
  return (
    <>
     {actionType ==="Edit" &&
           <ListItem
           button
           onClick={addToggle} >
           <div className="mr-2">
             <EditTwoToneIcon />
           </div>
           <span className="font-size-md">Edit</span>
          </ListItem>
      }
      {
        actionType ==="Delete" &&
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
      <div className="d-flex align-items-center justify-content-center flex-wrap">
        {/* <Button onClick={addToggle}
          variant="contained"
          className="rounded-sm text-nowrap font-size-xs font-weight-bold text-uppercase shadow-second-sm btn-warning">
          New Fiat
        </Button> */}
        {
          actionType ==='ADD' &&
          <Button onClick={addToggle} variant="contained" color="primary">
            <span className="btn-wrapper--icon">
              <FontAwesomeIcon icon={['fas', 'plus']} />
            </span>
            <span className="btn-wrapper--label">ADD a new Wallet</span>
          </Button>
        }

       
        <Dialog
          scroll="body"
          maxWidth="sm"
          open={addModal}
          onClose={addToggle}
          classes={{
            paper: 'w-100 rounded border-0 shadow-sm-dark   p-3 p-xl-0'
          }}  >
            <form>
              <div className="customizeGradientModalLine"></div>
              <Container className="customizeModal"> 
                <div className="p-4">
                  <h5 className="font-size-xl mb-1 font-weight-bold">
                    ADD
                  </h5>
                  <br></br>
                  <p className="text-black-50 mb-4">
                    please input here!
                  </p>
                  <Grid container spacing={6}>
                    <Grid item md={12}>
                      <TextField
                        fullWidth
                        placeholder="Name"
                        variant="outlined"
                        onChange ={actionType!=="Delete" ? ((e)=>setName(e.target.value)) :null}
                        value ={name}
                        className="modalTextStyle"
                        required
                      />
                    </Grid>
                  </Grid>
                  <Grid container spacing={6}>
                    <Grid item md={6}>
                    </Grid>
                    <Grid item md={6}>
                      <div>
                        {actionType !=="Delete" && 
                          <div> 
                            <Button type = "submit" onClick = {handleEditSubmit} className="m-2 text-success" style={{backgroundColor:"white"}}>{actionType}</Button>
                            <Button onClick={addToggle} className="m-2 btn-neutral-white text-dark"  style={{backgroundColor:"white"}}>Cancel</Button>
                          </div>
                        }
                        {actionType ==="Delete" &&
                          <div> 
                            <Button onClick={addToggle} className="m-2 btn-neutral-white text-dark "  style={{backgroundColor:"white"}}>Cancel</Button>
                            <Button type = "submit" onClick = {handleEditSubmit} className="m-2 btn-neutral-danger text-dark"  style={{backgroundColor:"white"}}>{actionType}</Button>
                          </div>
                        }
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

export default EditWalletAction;