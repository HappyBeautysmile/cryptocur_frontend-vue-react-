import React, { useState , useRef } from 'react';

import { Grid, Dialog, Button, TextField } from '@material-ui/core';

import { connect } from 'react-redux';
import {regist} from "../../reduxs/actions/register"
import people2 from '../../assets/images/stock-photos/people-1.jpg';

function LivePreviewExample(props) {
  const [modal1, setModal1] = useState(false);

  const toggle1 = () => setModal1(!modal1);
  const {registerTitle} = props;
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");

  const handleSubmit = evt => {
    evt.preventDefault();
    // console.log(email + " " + password + " " + firstName + " " + lastName);
    props.regist({email : email,password :password ,firstName: firstName , lastName:lastName});
  };

  return (
    <>
      <div className="d-flex align-items-center justify-content-center flex-wrap">
        <Button onClick={toggle1} className="rounded-sm text-nowrap font-size-xs font-weight-bold text-uppercase shadow-second-sm btn-warning">
          {registerTitle}
        </Button>
        <Dialog
          scroll="body"
          maxWidth="lg"
          open={modal1}
          onClose={toggle1}
          classes={{
            paper: 'w-100 rounded border-0 shadow-sm-dark bg-white p-3 p-xl-0'
          }}>
          <form onSubmit={handleSubmit}>

            <Grid container spacing={0}>
              <Grid item xl={5}>
                <div className="hero-wrapper bg-composed-wrapper bg-skim-blue h-100 rounded br-xl-right-0">
                  <div className="flex-grow-1 w-100 d-flex align-items-center">
                    <div
                      className="bg-composed-wrapper--image rounded br-xl-right-0 opacity-7"
                      style={{ backgroundImage: 'url(' + people2 + ')' }}
                    />
                    <div className="bg-composed-wrapper--bg bg-second opacity-1 rounded br-xl-right-0" />
                    <div className="bg-composed-wrapper--bg bg-slick-carbon opacity-5 rounded br-xl-right-0" />
                    <div className="bg-composed-wrapper--content justify-content-center text-center text-xl-left p-5">
                      <div className="text-white text-center">
                        <h1 className="display-3 my-3 font-weight-bold">
                          Register
                        </h1>
                        <p className="font-size-lg mb-0 px-4 text-white-50">
                          View any of the 5+ live previews we&#39;ve set up to
                          learn why this dashboard template is the last one
                          you&#39;ll ever need!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item xl={7}>
                <Grid item lg={8} xl={10} className="mx-auto">
                  <div className="bg-white p-4 rounded">
                    <div className="text-center my-4">
                      <h1 className="display-4 mb-1 font-weight-bold">
                        Create your account
                      </h1>
                      <p className="font-size-lg mb-0 text-black-50">
                        Start benefiting from our tools right away
                      </p>
                    </div>
                    <div className="mb-3">
                      <label className="font-weight-bold mb-2">
                        Email address
                      </label>
                      <TextField
                        variant="outlined"
                        size="small"
                        fullWidth
                        placeholder="Enter your email address"
                        type="email"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <div className="d-flex justify-content-between">
                        <label className="font-weight-bold mb-2">Password</label>
                      </div>
                      <TextField
                        variant="outlined"
                        size="small"
                        fullWidth
                        placeholder="Enter your password"
                        type="password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                      />
                    </div>
                    <Grid container spacing={6}>
                      <Grid item md={6}>
                        <div>
                          <label className="font-weight-bold mb-2">
                            First name
                          </label>
                          <TextField
                            variant="outlined"
                            size="small"
                            fullWidth
                            placeholder="Enter your first name"
                            value={firstName}
                            onChange={(e)=>setFirstname(e.target.value)}
                          />
                        </div>
                      </Grid>
                      <Grid item md={6}>
                        <div>
                          <label className="font-weight-bold mb-2">
                            Last name
                          </label>
                          <TextField
                            variant="outlined"
                            size="small"
                            fullWidth
                            placeholder="Enter your last name"
                            value={lastName}
                            onChange={(e)=>setLastname(e.target.value)}                            
                          />
                        </div>
                      </Grid>
                    </Grid>
                    {/* <div className="form-group my-3">
                      By clicking the <strong>Create account</strong> button below
                      you agree to our terms of service and privacy statement.
                    </div> */}
                    <div className="text-center mb-4">
                      <Button  type = "submit" className="btn-primary text-uppercase font-weight-bold font-size-sm my-3">
                        Create account
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
  regist
}

export default connect(mapStateToProps, mapDispatchToProps)(LivePreviewExample);