import React, { useState,useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Moment from 'react-moment';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  // Table,
  // InputLabel,
  // InputAdornment,
  Card,
  // MenuItem,
  // // Button,
  // // Tooltip,
  // TextField,
  // FormControl,
  // Select
} from '@material-ui/core';

// import Pagination from '@material-ui/lab/Pagination';

// import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone';
// import AvatarImage from '../AvatarImage'
import RegisterModal from '../RegisterModal';
import ActionModal from '../ActionModal';
import {userList} from "../../../reduxs/actions/users/users"
// import { DataGrid } from '@material-ui/data-grid';
import {config} from "../../../config"
import { DataGrid } from '@material-ui/data-grid';

const ImgUrl = config.ImgUrl

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
  }, [dispatch])

  // console.log(usersprops);

  const handleChange = (event) => {
    setUsers(event.target.value);
  };

  
  const columns = [
    { field: 'id', headerName: 'ID', flex: 0.5 },
    { field: 'assignee', headerName: 'ASSIGNEE', flex: 1 ,
      renderCell: (params) => (
        <div
        className="avatar-icon-wrapper avatar-icon-sm"
        title="Lili Pemberton">
          <div className="avatar-icon">
            <img alt="..." src={ImgUrl + params.value}  />
          </div>
        </div>
      ),
    },
    {
      field: 'fullName',
      headerName: 'FULL NAME',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      flex: 1,
      valueGetter: (params) =>
        `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
    },
    
    {
      field: 'email',
      headerName: 'EMAIL',
      flex: 1,
    },
    {
      field: 'status',
      headerName: 'STATUS',
      flex: 1,
    },
    {
      field: 'createdDate',
      headerName: 'CREATED DATE',
      flex: 1,
    },
    {
      field: 'actions', headerName: 'ACTIONS', flex: 1 ,
      renderCell: (params) => (
        <div>
          <RegisterModal registerTitle ="Edit User" submitBtnName = "Update User" userData={params.value}/>
          <ActionModal registerTitle ="delete User" submitBtnName = "Sure" userData={params.value}/>
        </div>
      ),
    },
  ];

  return (
    
    <>
      <Card className="card-box mb-spacing-6-x2">
        <div className="card-header py-3">
          <div className="card-header--title font-size-lg">Users board</div>
          <div className="card-header--actions">
              <RegisterModal registerTitle ="Add User" submitBtnName = "CREATE ACCOUNT" />
          </div>
        </div>
        <div style={{ height: 650, width: '100%' }}>
            <DataGrid 
              rows={usersprops ? usersprops.map((item,i)=>({
                id: i+1, 
                firstName: item.firstName,
                lastName: item.lastName,
                email: item.email,
                status:item.status,
                createdDate: item.createdAt,
                actions:item,
                assignee:item.avatar
              })):[]}
              columns={columns} pageSize={10} rowsPerPageOptions={[10, 15, 20]} pagination  checkboxSelection  
            />
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

