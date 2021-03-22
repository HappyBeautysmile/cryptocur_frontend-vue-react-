import React, { useState ,useEffect} from 'react';

import clsx from 'clsx';
import { useSelector, useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  Table,  Card} from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import {BuySellTransaction} from "../../../reduxs/actions/transactions/buyselltransactions"
import TrendingUpTwoToneIcon from '@material-ui/icons/TrendingUpTwoTone';
import TrendingDownTwoToneIcon from '@material-ui/icons/TrendingDownTwoTone';


export default function LivePreviewExample(props) {
  const {transactionListType} = props

  const dispatch = useDispatch();
  const buyselltransactionlistData = useSelector(state => state.buyselltransactions.buyselltransactionlistData) ;
  const usedWallet = useSelector(state => state.buyselltransactions.usedWallet) ;

  const authprops = useSelector(state => state.auth.user);

  useEffect(() => {
    if(authprops)
      dispatch(BuySellTransaction({owner:authprops.email}));
  }, [authprops])

// console.log(buyselltransactionlistData);
// console.log(usedWallet);

const usedWalletColumns = [
  {field:"currency", headerName:"Currency" , flex:1,
  renderCell: (params) => (
    <div className="d-flex align-items-center">
       { params.value.actiontype ==="Buy" &&
          <div className="d-40 text-white d-flex align-items-center justify-content-center rounded-pill mr-3 bg-neutral-success text-success">
            <TrendingUpTwoToneIcon />
          </div>
        }
        { params.value.actiontype ==="Sell" &&
          <div className="d-40 text-white d-flex align-items-center justify-content-center rounded-pill mr-3 bg-neutral-first text-first">
            <TrendingDownTwoToneIcon />
          </div>
        }
      <div>
        <div className="font-weight-bold">{params.value.actiontype} {params.value.walletInformation.selectedCoin.coinName + " ("  + params.value.walletInformation.selectedCoin.coinFullName+ ")"}</div>
        <div className="opacity-7">{params.value.createdAt} </div>
      </div>
    </div>
  ),
},
  {field:"amount", headerName:"Amount" , flex:1,
    renderCell: (params) => (
      <div className="text-right px-4">
        <div className="text-success font-size-lg pr-2">
            {params.value.actiontype === "Sell" ? "-" : "+"}   {params.value.walletInformation.selectedCoin.quantity + " "+params.value.walletInformation.selectedCoin.coinName}
        </div>
      <div className="text-black-50 pr-2">  {params.value.actiontype !== "Sell" ? "-" : "+"}   {params.value.fiatInformation.selectedCurrency.quantity + " " +  params.value.fiatInformation.selectedCurrency.name}</div>
      </div>
    ),
  },
  {field:"status", headerName:"Status" , flex:1,
    renderCell: (params) => (
      <div className="d-flex align-items-center">
        {params.value === 0 &&
          <div className="px-4 py-1 h-auto text-warning border-1 border-warning badge badge-neutral-warning">
              Pendding       
          </div>
        }
        {params.value === 1 &&
          <div className="px-4 py-1 h-auto text-success border-1 border-success badge badge-neutral-success">
              Completed          
          </div>
        }
        {params.value === 2 &&
          <div className="px-4 py-1 h-auto text-danger border-1 border-danger badge badge-neutral-danger">
              Rejected         
          </div>
        }

      </div>
    ),
  }
]

const ownerWalletListColumns = [
  {field:"currency", headerName:"Currency" , flex:2,
    renderCell: (params) => (
    <div className="d-flex align-items-center">
        { params.value.actiontype ==="Buy" &&
          <div className="d-40 text-white d-flex align-items-center justify-content-center rounded-pill mr-3 bg-neutral-success text-success">
            <TrendingUpTwoToneIcon />
          </div>
        }
        { params.value.actiontype ==="Sell" &&
          <div className="d-40 text-white d-flex align-items-center justify-content-center rounded-pill mr-3 bg-neutral-first text-first">
            <TrendingDownTwoToneIcon />
          </div>
        }
     <div>
        {params.value.actiontype ==="Buy"  &&
          <div className="font-size-sm font-weight-bold">
            buy to  <span className="text-success">{params.value.walletInformation.walletName}</span> wallet 
          </div>
          }
        {params.value.actiontype ==="Sell" &&
          <div className="font-size-sm font-weight-bold">
            Sell to  <span className="text-first">{params.value.walletInformation.walletName}</span> wallet 
            {/* sell to <span className="text-first"> {params.value.fiatInformation.fiatName}</span> Fiat  <span className="text-success">{params.value.walletInformation.walletName}</span> wallet from */}
          </div>
          }
        <div className="opacity-7">{params.value.createdAt} </div>

      </div>
    </div>
    ),
  },
  {
    field:"source" , headerName:"SOURCE" , flex:1,
      renderCell: (params) =>(
      <div className="font-size-sm font-weight-bold">
        <span className="text-first">{params.value.fiatInformation.fiatName}</span> Fiat 
      </div>
      )
  },

  {field:"amount", headerName:"Amount" , flex:3,
    renderCell: (params) => (
      <div className="text-right px-4">
        <div className="text-success font-size-lg pr-2">
            {params.value.actiontype === "Sell" ? "-" : "+"}   {params.value.walletInformation.selectedCoin.quantity + " "+params.value.walletInformation.selectedCoin.coinName}
        </div>
      <div className="text-black-50 pr-2">  {params.value.actiontype !== "Sell" ? "-" : "+"}   {params.value.fiatInformation.selectedCurrency.quantity + " " +  params.value.fiatInformation.selectedCurrency.name}</div>
      </div>
    ),
  },
  {field:"status", headerName:"Status" , flex:1,
    renderCell: (params) => (
      <div className="d-flex align-items-center">
        {params.value === 0 &&
          <div className="px-4 py-1 h-auto text-warning border-1 border-warning badge badge-neutral-warning">
              Pendding       
          </div>
        }
        {params.value === 1 &&
          <div className="px-4 py-1 h-auto text-success border-1 border-success badge badge-neutral-success">
              Completed          
          </div>
        }
        {params.value === 2 &&
          <div className="px-4 py-1 h-auto text-danger border-1 border-danger badge badge-neutral-danger">
              Rejected         
          </div>
        }

      </div>
    ),
  },
]
  return (
    <>
      { transactionListType === "usedWalletTransactionList" &&
        <DataGrid 
          rows={buyselltransactionlistData ? buyselltransactionlistData.filter(item=>item.walletInformation.walletName === usedWallet.walletName).map((item,i)=>({
            id: i+1, 
            currency : item,
            status : item.process,
            amount : item
          })):[]}
          columns={usedWalletColumns} pageSize={5} rowsPerPageOptions={[5, 10, 20]} pagination  rowHeight="25" 
        />
      }
        { transactionListType === "ownerWalletTransactionList" &&
        <DataGrid 
          rows={buyselltransactionlistData ? buyselltransactionlistData.map((item,i)=>({
            id: i+1, 
            walletName : item ,
            currency : item,
            source : item,
            status : item.process,
            amount : item
          })):[]}
          columns={ownerWalletListColumns} pageSize={10} rowsPerPageOptions={[10, 15, 20]} pagination  rowHeight="25" 
        />
      }
    
    </>
  );
}
