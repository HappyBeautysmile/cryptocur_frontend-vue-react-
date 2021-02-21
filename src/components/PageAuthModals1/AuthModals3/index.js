import React, { useState } from 'react';

import {
  Grid,
  InputAdornment,
  Dialog,
  Button,
  TextField
} from '@material-ui/core';

import MailOutlineTwoToneIcon from '@material-ui/icons/MailOutlineTwoTone';

import people2 from '../../../assets/images/stock-photos/people-1.jpg';
import people1 from '../../../assets/images/stock-photos/people-1.jpg';
export default function LivePreviewExample() {
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);

  const toggle1 = () => setModal1(!modal1);
  const toggle2 = () => setModal2(!modal2);

  return (
    <>
      <div className="d-flex align-items-center justify-content-center flex-wrap">
        <Button onClick={toggle1} className="btn-primary m-2">
          Horizontal Recover Modal
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
            <Grid item xl={6}>
              <div className="hero-wrapper bg-composed-wrapper bg-second h-100 rounded br-xl-right-0">
                <div className="flex-grow-1 w-100 d-flex align-items-center">
                  <div
                    className="bg-composed-wrapper--image rounded br-xl-right-0 opacity-4"
                    style={{ backgroundImage: 'url(' + people2 + ')' }}
                  />
                  <div className="bg-composed-wrapper--bg bg-slick-carbon opacity-4 rounded br-xl-right-0" />
                  <div className="bg-composed-wrapper--content justify-content-center text-center text-xl-left p-5">
                    <div className="text-white text-center">
                      <h1 className="display-4 my-3 font-weight-bold">
                        Recover Password
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
            <Grid item xl={6}>
              <Grid item lg={8} xl={10} className="p-0 py-xl-5 mx-auto">
                <div className="bg-white p-5 rounded">
                  <div>
                    <label className="font-weight-bold mb-2">
                      Email address
                    </label>
                    <TextField
                      fullWidth
                      variant="outlined"
                      id="textfield-email"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <MailOutlineTwoToneIcon />
                          </InputAdornment>
                        )
                      }}
                    />
                  </div>
                  <div className="text-center">
                    <Button
                      fullWidth
                      className="text-uppercase font-weight-bold font-size-sm mt-4 btn-primary">
                      Send password
                    </Button>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Dialog>

        <Button onClick={toggle2} className="btn-primary m-2">
          Vertical Recover Modal
        </Button>
        <Dialog
          scroll="body"
          maxWidth="sm"
          open={modal2}
          onClose={toggle2}
          classes={{ paper: 'w-100 rounded shadow-sm-dark border-0 bg-white' }}>
          <div className="hero-wrapper bg-composed-wrapper bg-primary h-100 rounded-top">
            <div className="flex-grow-1 w-100 d-flex align-items-center">
              <div
                className="bg-composed-wrapper--image rounded-top opacity-3"
                style={{ backgroundImage: 'url(' + people1 + ')' }}
              />
              <div className="bg-composed-wrapper--content text-center pt-5">
                <div className="text-white">
                  <h1 className="display-3 my-3 font-weight-bold">
                    Recover Password
                  </h1>
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
                      d="M0,32L48,69.3C96,107,192,181,288,186.7C384,192,480,128,576,106.7C672,85,768,107,864,112C960,117,1056,107,1152,101.3C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div
            className="bg-white d-flex justify-content-center align-items-center flex-column rounded pt-4 pt-lg-0"
            style={{ marginTop: '-80px' }}>
            <Grid item lg={10} xl={9} className="z-over py-5 mx-auto">
              <div className="px-2 py-3 py-lg-5">
                <div>
                  <label className="font-weight-bold mb-2">Email address</label>
                  <TextField
                    fullWidth
                    variant="outlined"
                    id="textfield-email"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <MailOutlineTwoToneIcon />
                        </InputAdornment>
                      )
                    }}
                  />
                </div>
                <div className="text-center">
                  <Button
                    fullWidth
                    className="text-uppercase font-weight-bold font-size-sm mt-4 btn-primary">
                    Send password
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
