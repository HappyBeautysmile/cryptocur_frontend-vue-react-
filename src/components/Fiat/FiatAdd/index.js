import React, { useState ,lazy ,useEffect} from 'react';
import { Grid,Container, Dialog, Button, TextField,ListItem } from '@material-ui/core';
import {addFiat} from "../../../reduxs/actions/fiats/fiats"
import {  useSelector, useDispatch } from 'react-redux'

function FiatAdd() {
  const [addModal, setaddModal] = useState(false);
  const [name , setName] = useState("");
  const [email ,setEmail] = useState("");
  
  const dispatch = useDispatch();
  const authprops = useSelector(state => state.auth.user);
  const addToggle = () => setaddModal(!addModal);
  const handleSubmit = evt => {
    evt.preventDefault()
    // console.log(name  + " : " + email) ;
    let fpdata = {
      name : name,
      email : authprops.email
    }
    dispatch(addFiat(fpdata));
    addToggle();
  };
  return (
    <>
      <div className="d-flex align-items-center justify-content-center flex-wrap">
        <Button onClick={addToggle}
          variant="contained"
          className="rounded-sm text-nowrap font-size-xs font-weight-bold text-uppercase shadow-second-sm btn-warning">
          New Fiat
        </Button>
        <Dialog
          scroll="body"
          maxWidth="sm"
          open={addModal}
          onClose={addToggle}
          classes={{
            paper: 'w-100 rounded border-0 shadow-sm-dark bg-white p-3 p-xl-0'
          }}>
            <form onSubmit ={handleSubmit} action="">
              <Container>
                <div className="p-4">
                  <h5 className="font-size-xl mb-1 font-weight-bold">
                    Add a New Fiat
                  </h5>
                  <p className="text-black-50 mb-4">
                    please input here!
                  </p>
                  <Grid container spacing={6}>
                    <Grid item md={12}>
                      <TextField
                        fullWidth
                        label="Name"
                        variant="outlined"
                        onChange ={(e)=>setName(e.target.value)}
                        value ={name}
                        required
                      />
                    </Grid>
                    {/* <Grid item md={6}>
                      <TextField
                        fullWidth
                        label="User Email"
                        type="email"
                        variant="outlined"
                        onChange={(e)=>setEmail(e.target.value)}
                        value ={email}
                        required
                      />
                    </Grid> */}
                  </Grid>
                  <Grid container spacing={6}>
                    <Grid item md={6}>
                    </Grid>
                    <Grid item md={6}>
                      <div>
                        <Button type = "submit" className="m-2 btn-neutral-success">Success</Button>
                        <Button onClick={addToggle} className="m-2 btn-neutral-dark">Cancel</Button>
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

export default FiatAdd;