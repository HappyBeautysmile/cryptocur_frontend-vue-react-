import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Grid,
  InputAdornment,
  FormControlLabel,
  Dialog,
  Checkbox,
  Button,
  TextField
} from '@material-ui/core';

import MailOutlineTwoToneIcon from '@material-ui/icons/MailOutlineTwoTone';
import LockTwoToneIcon from '@material-ui/icons/LockTwoTone';

import people2 from '../../../assets/images/stock-photos/people-2.jpg';
import people3 from '../../../assets/images/stock-photos/people-3.jpg';
export default function LivePreviewExample() {
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);

  const toggle1 = () => setModal1(!modal1);
  const toggle2 = () => setModal2(!modal2);

  const [checked1, setChecked1] = useState(true);

  const handleChange1 = (event) => {
    setChecked1(event.target.checked);
  };

  return (
    <>
      <div className="d-flex align-items-center justify-content-center flex-wrap">
        <Button onClick={toggle1} className="btn-primary m-2">
          Horizontal Login Modal
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
              <div className="hero-wrapper bg-composed-wrapper bg-sunrise-purple h-100 rounded br-xl-right-0">
                <div className="flex-grow-1 w-100 d-flex align-items-center">
                  <div
                    className="bg-composed-wrapper--image rounded br-xl-right-0 opacity-7"
                    style={{ backgroundImage: 'url(' + people2 + ')' }}
                  />
                  <div className="bg-composed-wrapper--bg bg-second opacity-2 rounded br-xl-right-0" />
                  <div className="bg-composed-wrapper--bg bg-slick-carbon opacity-3 rounded br-xl-right-0" />
                  <div className="bg-composed-wrapper--content justify-content-center text-center text-xl-left p-5">
                    <div className="text-white text-center">
                      <h1 className="display-3 mb-3 font-weight-bold">Login</h1>
                      <p className="font-size-lg mb-0 text-white-50">
                        Fill in the fields below to login to your account
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xl={7}>
              <Grid item lg={8} xl={10} className="mx-auto">
                <div className="bg-white p-4 rounded">
                  <div className="text-center py-4 rounded bg-secondary my-4">
                    <Button
                      className="m-2 btn-pill px-4 font-weight-bold btn-google"
                      size="small">
                      <span className="btn-wrapper--icon">
                        <FontAwesomeIcon icon={['fab', 'google']} />
                      </span>
                      <span className="btn-wrapper--label">
                        Login with Google
                      </span>
                    </Button>
                    <Button
                      className="m-2 btn-pill px-4 font-weight-bold btn-facebook"
                      size="small">
                      <span className="btn-wrapper--icon">
                        <FontAwesomeIcon icon={['fab', 'facebook']} />
                      </span>
                      <span className="btn-wrapper--label">
                        Login with Facebook
                      </span>
                    </Button>
                  </div>
                  <div className="text-center text-black-50 mb-4">
                    or sign in with credentials
                  </div>
                  <div>
                    <div className="mb-3">
                      <TextField
                        fullWidth
                        variant="outlined"
                        id="textfield-email"
                        label="Email address"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <MailOutlineTwoToneIcon />
                            </InputAdornment>
                          )
                        }}
                      />
                    </div>
                    <div className="mb-3">
                      <TextField
                        fullWidth
                        variant="outlined"
                        id="textfield-password"
                        label="Password"
                        type="password"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <LockTwoToneIcon />
                            </InputAdornment>
                          )
                        }}
                      />
                    </div>
                    <div className="d-flex justify-content-between align-items-center font-size-md">
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={checked1}
                            onChange={handleChange1}
                            value="checked1"
                            color="primary"
                          />
                        }
                        label="Remember me"
                      />
                      <div>
                        <a
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="text-first">
                          Recover password
                        </a>
                      </div>
                    </div>
                    <div className="text-center py-4">
                      <Button className="btn-first font-weight-bold w-50 my-2">
                        Sign in
                      </Button>
                    </div>
                    <div className="text-center text-black-50 mt-3">
                      Don't have an account?{' '}
                      <a
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="text-first">
                        Sign up
                      </a>
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Dialog>

        <Button onClick={toggle2} className="btn-primary m-2">
          Vertical Login Modal
        </Button>
        <Dialog
          scroll="body"
          maxWidth="md"
          open={modal2}
          onClose={toggle2}
          classes={{ paper: 'w-100 rounded shadow-sm-dark border-0 bg-white' }}>
          <div className="hero-wrapper bg-composed-wrapper bg-skim-blue h-100 rounded-top">
            <div className="flex-grow-1 w-100 d-flex align-items-center">
              <div
                className="bg-composed-wrapper--image rounded-top opacity-4"
                style={{ backgroundImage: 'url(' + people3 + ')' }}
              />
              <div className="bg-composed-wrapper--bg bg-second opacity-4 rounded-top" />
              <div className="bg-composed-wrapper--content text-center pt-5">
                <div className="text-white">
                  <h1 className="display-3 my-3 font-weight-bold">Login</h1>
                  <p className="font-size-lg mb-0 text-white-50">
                    Fill in the fields below to login to your account
                  </p>
                </div>
                <div className="shape-container-top-1" style={{ margin: 0 }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320">
                    <path
                      fill="var(--white)"
                      fillOpacity="1"
                      d="M0,288L48,250.7C96,213,192,139,288,106.7C384,75,480,85,576,112C672,139,768,181,864,176C960,171,1056,117,1152,128C1248,139,1344,213,1392,250.7L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
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
                <div className="mb-3">
                  <label className="font-weight-bold mb-2">Email address</label>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    placeholder="yourname@yourmail.com"
                    type="email"
                  />
                </div>
                <div className="mb-4">
                  <div className="d-flex justify-content-between">
                    <label className="font-weight-bold mb-2">Password</label>
                    <a href="#/" onClick={(e) => e.preventDefault()}>
                      Forgot password?
                    </a>
                  </div>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    placeholder="Enter your password"
                    type="password"
                  />
                </div>
                <Button
                  size="large"
                  fullWidth
                  className="text-uppercase font-weight-bold font-size-sm btn-primary">
                  Sign in
                </Button>
              </div>
            </Grid>
          </div>
        </Dialog>
      </div>
    </>
  );
}
