import React, { useState } from 'react';
import {
  Grid,
  Dialog,
  Button,
  TextField
} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import {sign} from "../../../reduxs/actions/auth/login"


import people3 from '../../../assets/images/stock-photos/people-3.jpg';

function LivePreviewExample(props) {
  const [modal2, setModal2] = useState(false);

  const toggle2 = () => setModal2(!modal2);
  const {loginTitle} = props;


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = evt => {
    evt.preventDefault();
    props.sign({email : email,password :password});
  };


  return (
    <>
      <div className="d-flex align-items-center  flex-wrap">
      {/* <div className="d-flex align-items-center justify-content-center flex-wrap"> */}
        { loginTitle ==="Login" && 
            <Button onClick={toggle2}  className="rounded-sm text-nowrap font-size-xs font-weight-bold text-uppercase shadow-second-sm btn-first">
              {loginTitle} 
            </Button>
        }
        { loginTitle ==="Get Started" &&
            <Button onClick={toggle2}  size="large" className="justify-content-left rounded-sm font-weight-bold shadow-second-sm btn-first">
              <span className="btn-wrapper--label">
                {loginTitle} 
              </span>
              <span className="btn-wrapper--icon">
                <FontAwesomeIcon icon={['fas', 'arrow-right']} />
              </span>
            </Button>
        }

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
            <form onSubmit={handleSubmit}>

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
                      value={email}
                      onChange={(e)=>setEmail(e.target.value)}
                      fullWidth
                      placeholder="yourname@yourmail.com"
                      type="email"
                    />
                  </div>
                  <div className="mb-4">
                    {/* <div className="d-flex justify-content-between">
                      <label className="font-weight-bold mb-2">Password</label>
                      <a href="#/" onClick={(e) => e.preventDefault()}>
                        Forgot password?
                      </a>
                    </div> */}
                    <TextField
                      variant="outlined"
                      size="small"
                      fullWidth
                      placeholder="Enter your password"
                      type="password"
                      value={password}
                      onChange = {(e)=>setPassword(e.target.value)}
                    />
                  </div>
                  <Button
                    type="submit"
                    size="large"
                    fullWidth
                    className="text-uppercase font-weight-bold font-size-sm btn-primary">
                    Sign in
                  </Button>
                </div>
              </Grid>
              </form>
          </div>
        </Dialog>
      </div>
    </>
  );
}
const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  sign
}

export default connect(mapStateToProps, mapDispatchToProps)(LivePreviewExample);
