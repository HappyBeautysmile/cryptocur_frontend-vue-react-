import React, { useState } from 'react';

import { Grid, Dialog, Button, TextField } from '@material-ui/core';

import people2 from '../../../assets/images/stock-photos/people-1.jpg';
import people3 from '../../../assets/images/stock-photos/people-3.jpg';
export default function LivePreviewExample() {
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);

  const toggle1 = () => setModal1(!modal1);
  const toggle2 = () => setModal2(!modal2);

  return (
    <>
      <div className="d-flex align-items-center justify-content-center flex-wrap">
        <Button onClick={toggle1} className="btn-primary m-2">
          Horizontal Register Modal
        </Button>
        <Dialog
          scroll="body"
          maxWidth="lg"
          open={modal1}
          onClose={toggle1}
          classes={{
            paper: 'w-100 rounded border-0 shadow-sm-dark bg-white p-3 p-xl-0'
          }}>
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
                        />
                      </div>
                    </Grid>
                  </Grid>
                  <div className="form-group my-3">
                    By clicking the <strong>Create account</strong> button below
                    you agree to our terms of service and privacy statement.
                  </div>
                  <div className="text-center mb-4">
                    <Button className="btn-primary text-uppercase font-weight-bold font-size-sm my-3">
                      Create account
                    </Button>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Dialog>

        <Button onClick={toggle2} className="btn-primary m-2">
          Vertical Register Modal
        </Button>
        <Dialog
          scroll="body"
          maxWidth="md"
          open={modal2}
          onClose={toggle2}
          classes={{ paper: 'w-100 rounded shadow-sm-dark border-0 bg-white' }}>
          <div className="hero-wrapper bg-composed-wrapper bg-ripe-malin h-100 rounded-top">
            <div className="flex-grow-1 w-100 d-flex align-items-center">
              <div
                className="bg-composed-wrapper--image rounded-top opacity-5"
                style={{ backgroundImage: 'url(' + people3 + ')' }}
              />
              <div className="bg-composed-wrapper--bg bg-second opacity-3 rounded-top" />
              <div className="bg-composed-wrapper--content text-center pt-5">
                <div className="text-white">
                  <h1 className="display-3 my-3 font-weight-bold">Register</h1>
                  <p className="font-size-lg mb-0 px-4 text-white-50">
                    View any of the 5+ live previews we&#39;ve set up to learn
                    why this dashboard template is the last one you&#39;ll ever
                    need!
                  </p>
                </div>
                <div className="shape-container-top-1" style={{ margin: 0 }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320">
                    <path
                      fill="var(--white)"
                      fillOpacity="1"
                      d="M0,224L80,197.3C160,171,320,117,480,112C640,107,800,149,960,165.3C1120,181,1280,171,1360,165.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div
            className="bg-white rounded pt-4 pt-lg-0"
            style={{ marginTop: '-80px' }}>
            <Grid
              item
              lg={10}
              xl={9}
              className="z-over pt-5 pt-lg-4 pb-4 mx-auto">
              <div className="px-4 py-5">
                <div className="text-center my-4">
                  <h1 className="display-4 mb-1 font-weight-bold">
                    Create your account
                  </h1>
                  <p className="font-size-lg mb-0 text-black-50">
                    Start benefiting from our tools right away
                  </p>
                </div>
                <div className="mb-3">
                  <label className="font-weight-bold mb-2">Email address</label>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    placeholder="Enter your email address"
                    type="email"
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
                      />
                    </div>
                  </Grid>
                  <Grid item md={6}>
                    <div>
                      <label className="font-weight-bold mb-2">Last name</label>
                      <TextField
                        variant="outlined"
                        size="small"
                        fullWidth
                        placeholder="Enter your last name"
                      />
                    </div>
                  </Grid>
                </Grid>
                <div className="form-group my-3">
                  By clicking the <strong>Create account</strong> button below
                  you agree to our terms of service and privacy statement.
                </div>
                <div className="text-center mb-4">
                  <Button className="btn-primary text-uppercase font-weight-bold font-size-sm my-3">
                    Create account
                  </Button>
                </div>
              </div>
            </Grid>
          </div>
        </Dialog>
      </div>
    </>
  );
}
