import React ,{useEffect} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid,Container, Dialog, Button, TextField,ListItem,Tooltip,Table } from '@material-ui/core';

import { useSelector, useDispatch } from 'react-redux'

import { DataGrid } from '@material-ui/data-grid';
import {config} from "../../../config";
import Moment from 'react-moment';
// import VerifiedUserTwoToneIcon from '@material-ui/icons/VerifiedUserTwoTone';
import {WDTransaction} from "../../../reduxs/actions/transactions/wdtransactions/"
import TrendingUpTwoToneIcon from '@material-ui/icons/TrendingUpTwoTone';
import TrendingDownTwoToneIcon from '@material-ui/icons/TrendingDownTwoTone';


Moment.globalFormat = 'YYYY/MM/DD hh:mm:ss';

export default function WDTransactionList() {
  

  const dispatch = useDispatch();
  const wdtransactionlistData = useSelector(state => state.wdtransactions.wdtransactionlistData) ;
  const authprops = useSelector(state => state.auth.user);

  useEffect(() => {
    if(authprops)
    dispatch(WDTransaction({owner:authprops.email}));
    // usersprops = useSelector(state => state)
    // const userTableRows = usersprops.data
  }, [dispatch])
  // console.log(fiatsprops);

  const fiatColumns = [
    {field:"orderDetails", headerName:"ORDER DETAILS" , flex:2,
      renderCell: (params) => (
        <div className="d-flex align-items-center">
          { params.value.actiontype ==="Deposit" &&
            <div className="d-40 text-white d-flex align-items-center justify-content-center rounded-pill mr-3 bg-neutral-success text-success">
              <TrendingUpTwoToneIcon />
            </div>
          }
          { params.value.actiontype ==="Withdraw" &&
            <div className="d-40 text-white d-flex align-items-center justify-content-center rounded-pill mr-3 bg-neutral-first text-first">
              <TrendingDownTwoToneIcon />
            </div>
          }
         <div>
         {params.value.actiontype ==="Deposit"  &&

           <div className="font-size-sm font-weight-bold">
             deposite to  <span className="text-success">{params.value.fiatName}</span> Fiat  
           </div>
          }

         {params.value.actiontype ==="Withdraw" &&

           <div className="font-size-sm font-weight-bold">
             withdraw from <span className="text-first">{params.value.fiatName}</span> Fiat  
           </div>
          }
          <div className="font-size-sm opacity-7">
            {params.value.createdAt}
           </div>

         </div>
       </div>
      ),
    },
  {
    field:"source" , headerName:"SOURCE" , flex:1,
      renderCell: (params) =>(
        <div>
          <div className="font-size-sm font-weight-bold">
            Bank Account
          </div>
      <div className="font-size-sm opacity-7">{params.value.bankAddress}</div>
        </div>
      )
  },
  { field: 'amount', headerName: "AMOUNT" ,  flex:1,
    renderCell: (params) => (
      <div className="font-size-sm font-weight-bold">
        {params.value.actiontype === "Deposit" ? "+" :  "-"} {params.value.quantity} {params.value.currency}
      </div>
      ),
    },
    {
      field: 'status', headerName: 'STATUS', flex: 1,
      renderCell: (params) => (
        <div>
          {params.value === 2 &&
            <div className="px-4 py-1 h-auto text-success text-capitalize font-size-sm border-0 badge badge-neutral-success">
              Aceepted
            </div>
          }
          {params.value === 1 &&
            <div className="px-4 py-1 h-auto text-danger text-capitalize font-size-sm border-0 badge badge-neutral-danger">
              Rejected
            </div>
          }
          {params.value === 0 &&
            <div className="px-4 py-1 h-auto text-warning text-capitalize font-size-sm border-0 badge badge-neutral-warning">
              Pending
            </div>
          }
        </div>
      ),
    }
  ]
  

 
  return (
    <>
      <DataGrid 
        rows={wdtransactionlistData ? wdtransactionlistData.map((item,i)=>({
          id: i+1, 
          orderDetails:item,
          source: item,
          status: item.process,
          amount: item
        })):[]}
        columns={fiatColumns} pageSize={10} rowsPerPageOptions={[10, 15, 20]} pagination  rowHeight="25" 
      />
    </>
  );
}

