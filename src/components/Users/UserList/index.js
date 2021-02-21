import React, { useState,useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Moment from 'react-moment';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Table,
  InputLabel,
  InputAdornment,
  Card,
  MenuItem,
  // Button,
  // Tooltip,
  TextField,
  FormControl,
  Select
} from '@material-ui/core';

import Pagination from '@material-ui/lab/Pagination';

import avatar2 from '../../../assets/images/avatars/avatar2.jpg';
import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone';
// import AvatarImage from '../AvatarImage'
import RegisterModal from '../RegisterModal';
import ActionModal from '../ActionModal';
import {userList} from "../../../reduxs/actions/users/users"
// import { DataGrid } from '@material-ui/data-grid';

Moment.globalFormat = 'YYYY/MM/DD hh:mm:ss';


function UserList(props) {
  const [users, setUsers] = useState('1');
  // const [userData, setUserData] = useState({
  //   firstName: "Egor",
  //   lastName: "Mikhail",
  //   email: "test@gmail.com",
  //   password: "",
  //   status:"closed"
  // });
  const dispatch = useDispatch();
  
  const usersprops = useSelector(state => state.users.usersData) ;

  useEffect(() => {
    dispatch(userList());
    // usersprops = useSelector(state => state)
    // const userTableRows = usersprops.data
  }, [])

  // console.log(usersprops);

  const handleChange = (event) => {
    setUsers(event.target.value);
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
    },
  ];
  return (
    
    <>
      <Card className="card-box mb-spacing-6-x2">
        <div className="card-header py-3">
          <div className="card-header--title font-size-lg">Support board</div>
          <div className="card-header--actions">
              <RegisterModal registerTitle ="Add User" submitBtnName = "CREATE ACCOUNT" />
          </div>
        </div>
        <div className="d-flex justify-content-between px-4 py-3">
          <div className="d-flex align-items-center">
            <span>Show</span>
            <FormControl size="small" variant="outlined" className="mx-3">
              <InputLabel id="select-users-label">users</InputLabel>
              <Select
                labelId="select-users-label"
                id="select-users"
                value={users}
                onChange={handleChange}
                label="Users">
                <MenuItem className="mx-2" value={1}>
                  All users
                </MenuItem>
                <MenuItem className="mx-2" value={10}>
                  10
                </MenuItem>
                <MenuItem className="mx-2" value={15}>
                  15
                </MenuItem>
                <MenuItem className="mx-2" value={20}>
                  20
                </MenuItem>
                <MenuItem className="mx-2" value={25}>
                  25
                </MenuItem>
                <MenuItem className="mx-2" value={30}>
                  30
                </MenuItem>
              </Select>
            </FormControl>
            <span>users</span>
          </div>
          <div className="search-wrapper">
            <TextField
              variant="outlined"
              size="small"
              id="input-search"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchTwoToneIcon />
                  </InputAdornment>
                )
              }}
            />
          </div>
        </div>
        <div className="divider" />
        <div className="table-responsive-md">
          <Table className="table table-hover text-nowrap mb-0">
            <thead>
              <tr>
                <th className="bg-white text-left">No</th>
                <th className="bg-white text-center">Assignee</th>
                <th className="bg-white text-center">Full Name</th>
                <th className="bg-white text-left">Email</th>
                <th className="bg-white text-center">Status</th>
                <th className="bg-white text-center">Created date</th>
                <th className="bg-white text-center">Actions</th>
              </tr>
            </thead>
            <tbody>

              {
                usersprops ? usersprops.map((item,i)=>(
                <tr key={i}>
                  <td className="font-weight-bold">{i + 1}</td>
                  <td className="text-center">
                    <div
                      className="avatar-icon-wrapper avatar-icon-sm"
                      title="Lili Pemberton">
                      <div className="avatar-icon">
                        <img alt="..." src={avatar2} />
                      </div>
                    </div>
                  </td>
                  <td className="text-center">
                    <div className="badge-neutral-danger text-primary">
                      {
                        item.firstName + " " + item.lastName
                      }
                    </div>
                  </td>
                  <td>{item.email}</td>
                  <td className="text-center">
                    <div className="badge badge-neutral-dark text-dark">
                    {item.status}
                    </div>
                  </td>
                  <td className="text-center text-black-50">
                  <Moment  date={(new Date(item.createdAt))} />
                  </td>
                  <td className="text-center">
                    {/* <Button onClick={toggle1} className="btn-neutral-first mx-1 shadow-none d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
                      <FontAwesomeIcon
                        icon={['far', 'edit']}
                        className="font-size-sm"
                      />
                    </Button> */}
                    <RegisterModal registerTitle ="Edit User" submitBtnName = "Update User" userData={item}/>
                    <ActionModal registerTitle ="delete User" submitBtnName = "Sure" userData={item}/>

                    {/* <Button className="btn-neutral-danger mx-1 shadow-none d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
                      <FontAwesomeIcon
                        icon={['fas', 'times']}
                        className="font-size-sm"
                      />
                    </Button> */}
                  </td>
                </tr>
                )) : null
              }
           
            </tbody>
          </Table>
        </div>
        <div className="card-footer py-3 d-flex justify-content-between">
          <Pagination
            className="pagination-second"
            variant="outlined"
            count={usersprops  && usersprops.length ? usersprops.length : 0}
          />
          <div className="d-flex align-items-center">
            <span>Show</span>
            <FormControl size="small" variant="outlined" className="mx-3">
              <InputLabel id="select-users-label">Users</InputLabel>
              <Select
                labelId="select-users-label"
                id="select-users"
                value={users}
                onChange={handleChange}
                label="users">
                <MenuItem className="mx-2" value={1}>
                  All users
                </MenuItem>
                <MenuItem className="mx-2" value={10}>
                  10
                </MenuItem>
                <MenuItem className="mx-2" value={15}>
                  15
                </MenuItem>
                <MenuItem className="mx-2" value={20}>
                  20
                </MenuItem>
                <MenuItem className="mx-2" value={25}>
                  25
                </MenuItem>
                <MenuItem className="mx-2" value={30}>
                  30
                </MenuItem>
              </Select>
            </FormControl>
            <span>users</span>
          </div>
        </div>
      </Card>
      {/* <AvatarImage></AvatarImage> */}
    </>
  );
}

export default UserList
// const mapStateToProps = (state) => {
//   return {
//     autherdata: state.auth.user
//   }
// }

// const mapDispatchToProps = {
//   userList
// }

// export default connect(mapStateToProps, mapDispatchToProps)(UserList)

