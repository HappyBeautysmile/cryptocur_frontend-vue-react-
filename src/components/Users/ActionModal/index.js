import React, { useState,useEffect } from 'react';

import { Grid, Dialog, Button} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { connect } from 'react-redux';
import {deleteUser} from "../../../reduxs/actions/users/users"

function ActionModal(props) {
  const [modal1, setModal1] = useState(false);

  const toggle1 = () => setModal1(!modal1);
  const {registerTitle , submitBtnName,userData} = props;
  
  const [email, setEmail] = useState("");
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");

  const handleSubmit = evt => {
    evt.preventDefault();
    // console.log(email + " " + password + " " + firstName + " " + lastName);
    props.deleteUser({user_email : email});
  };
  useEffect(() => {
    // console.log(userData);
    if(userData!=null ){
      setFirstname(userData.firstName);
      setLastname(userData.lastName);
      setEmail(userData.email);
    }
  }, [userData]);
  return (
    <>
     
      {registerTitle === "delete User" && 
        <Button className="btn-neutral-danger mx-1 shadow-none d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center" onClick={toggle1}>
          <FontAwesomeIcon
            icon={['fas', 'times']}
            className="font-size-sm"
          />
        </Button>
        }
      <div className="d-flex align-items-center justify-content-center flex-wrap">
     
        <Dialog
          scroll="body"
          maxWidth="sm"
          open={modal1}
          onClose={toggle1}
          classes={{
            paper: 'w-100 rounded border-0 shadow-sm-dark bg-white p-3 p-xl-0'
          }}
          >
          <form onSubmit={handleSubmit}>

            <Grid container spacing={0}>
              <Grid item xl={12}>
                <Grid item lg={8} xl={10} className="mx-auto">
                  <div className="bg-white p-4 rounded">
                    <div className="text-center my-4">
                      <h1 className="display-4 mb-1 font-weight-bold">
                      {registerTitle}
                      </h1>
                      {/* <p className="font-size-lg mb-0 text-black-50">
                        Start benefiting from our tools right away
                      </p> */}
                    </div>
                    <h5>Are you sure to delete <span style={{color:"red"}}>{firstName} {lastName}</span>?</h5>
                    {/* <div className="form-group my-3">
                      By clicking the <strong>Create account</strong> button below
                      you agree to our terms of service and privacy statement.
                    </div> */}
                    <div className="text-center mb-4">
                      <Button  type="submit" className="btn-danger text-uppercase font-weight-bold font-size-sm my-3" style={{margin:"10px"}}>
                        {submitBtnName}
                      </Button>
                      <Button   onClick={(e)=>setModal1(false)} className="btn-primary text-uppercase font-weight-bold font-size-sm my-3">
                        Cancel
                      </Button>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Grid>
            </form>
        </Dialog>
      </div>
    
    </>
  );
}
const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  deleteUser
}

export default connect(mapStateToProps, mapDispatchToProps)(ActionModal);