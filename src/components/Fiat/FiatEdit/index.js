import React, { useState ,lazy ,useEffect} from 'react';
import { Grid,Container, Dialog, Button, TextField,ListItem } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {editFiat} from "../../../reduxs/actions/fiats/fiats"
import {deleteFiat} from "../../../reduxs/actions/fiats/fiats"
import {  useDispatch } from 'react-redux'
import SearchIcon from '@material-ui/icons/Search';

function FiatEdit(props) {
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [name , setName] = useState("");
  const [owner , setOwner] = useState(1); //owner  === email

  const dispatch = useDispatch();
  const editToggle = () => setEditModal(!editModal);
  const deleteToggle = () => setDeleteModal(!deleteModal);
  const {curFiat} = props;
  const disabledClassNameProps = { className: "Mui-disabled" };
  useEffect(() => {
    // console.log(userData);
    if( curFiat!=null ){
      setName(curFiat.name);
      setOwner(curFiat.owner);
    }
  }, [curFiat]);
  // console.log(curFiat);

  const handleEditSubmit = evt => {
    evt.preventDefault();
    let fpdata ={
      name : name,
      email : curFiat.owner,
      oldName : curFiat.name,
      oldEmail :curFiat.owner,
    }
    dispatch(editFiat(fpdata));
    editToggle();
  };
  const handleDeletSubmit = evt =>{
    evt.preventDefault();
    let fpdata ={
      name : name,
      email : owner,
      oldName : curFiat.name,
      oldEmail :curFiat.owner,
    }
    dispatch(deleteFiat(fpdata));
    deleteToggle();
  }
  return (
    <>
      <div className="d-flex align-items-center justify-content-center flex-wrap">
        <Button className="btn-neutral-primary mx-1 shadow-none d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center" onClick={deleteToggle}>
          <SearchIcon fontSize="small"></SearchIcon>
        </Button>
         <Button className="btn-neutral-first mx-1 shadow-none d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center" onClick={editToggle}>
          <FontAwesomeIcon
            icon={['far', 'edit']}
            className="font-size-sm"
          />
        </Button>
        <Button className="btn-neutral-danger mx-1 shadow-none d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center" onClick={deleteToggle}>
          <FontAwesomeIcon
            icon={['fas', 'times']}
            className="font-size-sm"
          />
        </Button>
       
        
        <Dialog
          scroll="body"
          maxWidth="sm"
          open={editModal}
          onClose={editToggle}
          classes={{
            paper: 'w-100 rounded border-0 shadow-sm-dark bg-white p-3 p-xl-0'
          }}>
            <form  action="">
              <Container>
                <div className="p-4">
                  <h5 className="font-size-xl mb-1 font-weight-bold">
                    Edit Fiat
                  </h5>
                  <p className="text-black-50 mb-4">
                    please edit here!
                  </p>
                  <Grid container spacing={6}>
                    <Grid item md={12}>
                      <TextField
                        fullWidth
                        label="Name"
                        variant="outlined"
                        onChange = {(e)=>setName(e.target.value)}
                        value ={name}
                        style={{color:"rgba(0, 0, 0, 0.54)!important"}}                        
                      />
                    </Grid>
                    {/* <Grid item md={6}>
                      <TextField
                        fullWidth
                        label="Owner"
                        variant="outlined"
                        value = {owner}
                        onChange = {(e)=>setOwner(e.target.value)}
                        required
                      />
                    </Grid> */}
                  </Grid>
                  <Grid container spacing={6}>
                    <Grid item md={6}>
                    </Grid>
                    <Grid item md={6}>
                      <div>
                        <Button onClick={handleEditSubmit} type="submit" className="m-2 btn-neutral-success">Success</Button>
                        <Button onClick={editToggle} className="m-2 btn-neutral-dark">Cancel</Button>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </Container>
            </form>
        </Dialog>
        <Dialog
          open={deleteModal}
          onClose={deleteToggle}
          classes={{ paper: 'shadow-lg rounded' }}>
          <div className="text-center p-5">
            <div className="avatar-icon-wrapper rounded-circle m-0">
              <div className="d-inline-flex justify-content-center p-0 rounded-circle btn-icon avatar-icon-wrapper bg-neutral-danger text-danger m-0 d-130">
                <FontAwesomeIcon
                  icon={['fas', 'times']}
                  className="d-flex align-self-center display-3"
                />
              </div>
            </div>
            <h4 className="font-weight-bold mt-4">
              Are you sure you want to delete this Currency?
            </h4>
            <p className="mb-0 font-size-lg text-muted">
              You cannot undo this operation.
            </p>
            <div className="pt-4">
              <Button
                onClick={deleteToggle}
                className="btn-neutral-dark btn-pill mx-1">
                <span className="btn-wrapper--label">Cancel</span>
              </Button>
              {/* <Button  onClick={deleteToggle} className="m-2 btn-neutral-dark">Cancel</Button> */}

              <Button onClick={handleDeletSubmit}  className="btn-neutral-danger btn-pill mx-1">
                <span className="btn-wrapper--label">Delete</span>
              </Button>
            </div>
          </div>
        </Dialog>

      </div>
    </>
  );
}


export default FiatEdit;