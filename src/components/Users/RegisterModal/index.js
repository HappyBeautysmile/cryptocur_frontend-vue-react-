import React, { useState ,lazy ,useEffect} from 'react';
import { Grid, Dialog, Button, TextField,ListItem } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {regist} from "../../../reduxs/actions/auth/register"
import {addUser} from "../../../reduxs/actions/users/users"
import {editUser} from "../../../reduxs/actions/users/users"
import people2 from '../../../assets/images/stock-photos/people-1.jpg';
import VerifiedUserTwoToneIcon from '@material-ui/icons/VerifiedUserTwoTone';
import {  useDispatch } from 'react-redux'
// import { useSelector, useDispatch } from 'react-redux'
import {Notification} from "../../../reduxs/actions/index"

const AvatarImage = lazy(() => import('../AvatarImage'));

function RegisterModal(props) {
  const dispatch = useDispatch();

  const [modal1, setModal1] = useState(false);
  const toggle1 = () => setModal1(!modal1);
  const [files, setFiles] = useState([]);
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [avatar, setAvatar] = useState("");

  const {registerTitle , submitBtnName ,userData} = props;
  const ExceptionHandlingFunc = (exceptionEnv)=>{ 
    if(exceptionEnv ==="Register" || exceptionEnv ==="Add User")
    {
       const exceptionStatus = email !== "" && password !== "" && firstName !=='' && lastName !=="" ;
       if(exceptionStatus === false)
       {
          Notification("Input Error","Please input all information","warning")
          return false;
       }
       if(password !== confirmPassword)
       {
          Notification("Password Error","Passwords Don't Match","warning")
          return false;
       }
    }
    return true;
  }

  const handleSubmit = evt => {
    
    evt.preventDefault();


    // if(registerTitle === "Edit User" || registerTitle ==='Profile')
    // {
    //   dispatch(editUser({user_email : email,user_password :password ,user_firstName: firstName , user_lastName:lastName}));
    // }
      let imgfile = files[0];
      let fpdata = new FormData();
      fpdata.append('fpImgFile', imgfile);
      fpdata.append('email', email);
      fpdata.append('password', password);
      fpdata.append('firstName', firstName);
      fpdata.append('lastName', lastName);

      if(ExceptionHandlingFunc(registerTitle)===true)
      {

        if(registerTitle === "Edit User" || registerTitle ==='Profile')
        {
          dispatch(editUser(fpdata));
        }

        if(registerTitle === "Register")
        {
          dispatch(regist({email : email,password :password ,firstName: firstName , lastName:lastName}));
        }
    
        if(registerTitle === "Add User")
        {
          dispatch(addUser({email : email,password :password ,firstName: firstName , lastName:lastName}));
        }
      }
  };
  
  useEffect(() => {
    // console.log(userData);
    if( userData!=null ){
      setFirstname(userData.firstName);
      setLastname(userData.lastName);
      setEmail(userData.email);
      setAvatar(userData.avatar);
    }
    else{
      setAvatar("images/avatars/default.jpg");
    }
  }, [userData]);
  
  return (
    <>
     {registerTitle === "Profile" && 
        <ListItem
          component="a"
          button
          onClick={toggle1}>
          <div className="mr-2 justify-content-left">
            <VerifiedUserTwoToneIcon />
          </div>
          <span className="font-size-md">Profile</span>
        </ListItem>
      }
      <div className="d-flex align-items-center justify-content-center flex-wrap">
        
        {registerTitle !== "Profile" && registerTitle !== "Edit User" &&
          <Button onClick={toggle1} className="rounded-sm text-nowrap font-size-xs font-weight-bold text-uppercase shadow-second-sm btn-warning">
          {registerTitle}
          </Button>
        }
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
                        {registerTitle !== "Register"  &&  registerTitle !== "Add User"?  
                          <AvatarImage    avatar={avatar} filechange={(e)=>setFiles(e)}  />
                          : null
                          // <AvatarImage files={files}  avatar={avatar} open ={open} getInputProps={getInputProps} getRootProps={getRootProps}/>
                        }
                        <h1 className="display-3 my-3 font-weight-bold">
                          {registerTitle}
                        </h1>
                        <p className="font-size-lg mb-0 px-4 text-white-50">
                          You can change ASSIGNEE in profile part
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
                      {/* <h1 className="display-4 mb-1 font-weight-bold">
                      {registerTitle}
                      </h1> */}
                      {/* <p className="font-size-lg mb-0 text-black-50">
                        Start benefiting from our tools right away
                      </p> */}
                    </div>
                    {registerTitle !== "Profile" &&  registerTitle !== "Edit User" &&
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
                            required
                            onChange={(e)=>setEmail(e.target.value)}
                          />
                        </div>
                    }
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
                            required
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
                            required
                            onChange={(e)=>setLastname(e.target.value)}                            
                          />
                        </div>
                      </Grid>
                    </Grid>
                    <div className="mb-3" style={{paddingTop:"10px"}}>
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
                        required
                        onChange={(e)=>setPassword(e.target.value)}
                      />
                    </div>
                    <div className="mb-3" style={{paddingTop:"10px"}}>
                      <div className="d-flex justify-content-between">
                        <label className="font-weight-bold mb-2">Confirm Password</label>
                      </div>
                      <TextField
                        variant="outlined"
                        size="small"
                        fullWidth
                        placeholder="Enter your confirm password"
                        type="password"
                        value={confirmPassword}
                        required
                        onChange={(e)=>setConfirmPassword(e.target.value)}
                      />
                    </div>
                    {/* <div className="form-group my-3">
                      By clicking the <strong>Create account</strong> button below
                      you agree to our terms of service and privacy statement.
                    </div> */}
                    <div className="text-center mb-4">
                      <Button  type = "submit" className="btn-primary text-uppercase font-weight-bold font-size-sm my-3">
                        {submitBtnName}
                      </Button>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Grid>
            </form>
        </Dialog>
      </div>
      {registerTitle === "Edit User" && 
          <Button className="btn-neutral-first mx-1 shadow-none d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center" onClick={toggle1}>
          <FontAwesomeIcon
            icon={['far', 'edit']}
            className="font-size-sm"
          />
        </Button>
        }
    </>
  );
}


export default RegisterModal;