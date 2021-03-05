import React, {useState} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, Button, List, ListItem, Tooltip } from '@material-ui/core';

import CountUp from 'react-countup';
import PerfectScrollbar from 'react-perfect-scrollbar';

import TrendingUpTwoToneIcon from '@material-ui/icons/TrendingUpTwoTone';
import TrendingDownTwoToneIcon from '@material-ui/icons/TrendingDownTwoTone';
import { DataGrid } from '@material-ui/data-grid';
import {config} from "../../../config"
import BuySellModal from "../BuySellModal"
const CoinImgUrl = config.CoinImgUrl;

export default function BuySell() {
  
    const [statusModal, setStatusModal] = useState(false);

  const statusToggle = () => setStatusModal(!statusModal);

  const coinList=[
    {iconType : "fab", iconName: "bitcoin", marketCap: 112314 , coinFullName:"Bitcoin", coinName:"BTC", coinPrice:16497, currencyType:"$", trending:"up",backgroundColor:"bg-warning"},
    {iconType : "fab", iconName: "ethereum", marketCap: 8000 , coinFullName:"Ethereum", coinName:"ETH", coinPrice:6398, currencyType:"$", trending:"up",backgroundColor:"bg-first"},
    {iconType : "fas", iconName: "dollar-sign",  marketCap: 10000 ,coinFullName:"Dollar", coinName:"USD", coinPrice:1, currencyType:"$", trending:"down",backgroundColor:"bg-success"},
    {iconType : "fas", iconName: "dollar-sign",  marketCap: 200000 ,coinFullName:"ZedCoin", coinName:"ZDC", coinPrice:50, currencyType:"$", trending:"up",backgroundColor:"bg-success"}
  ]
  const columns = [
    { field: 'id', headerName: 'ID', flex: 0.8,
      renderCell: (params) => (
        <div className="text-right mr-3">
          <div className="font-weight-bold font-size-lg text-black opacity-4">
            {params.value}
          </div>
      </div>
      )
     },
    { field: 'cryptoCurrency', headerName: 'CRYPTOCURRENCY' , flex:2,
      renderCell: (params) => (
          <div className="d-flex justify-content-between align-items-center py-3">
            <div className="d-flex align-items-center mr-4">
              <div className={"d-40 text-white d-flex align-items-center justify-content-center rounded-pill mr-3 " +  `${params.value.backgroundColor}`}    >
                {
                  params.value.coinName !=="ZDC" &&
                  <FontAwesomeIcon
                  icon={[params.value.iconType, params.value.iconName]}
                  className="font-size-lg"
                />
                }
                {
                  params.value.coinName ==="ZDC" &&
                  <img style ={{width:"40px",height:"40px",borderRadius:"50%" }}
                    alt="Bamburgh React Crypto Application with Material-UI PRO"
                    src={CoinImgUrl +"/zedcoin.png" }
                  />
                  
                }
              </div>
              <div>
                <div className="font-weight-bold">{params.value.coinName}</div>
                <span className="text-warning d-block">{params.value.coinFullName}</span>
              </div>
            </div>
          </div>
      ),
    },
    {field:"price", headerName:"PRICE" , flex:2,
      renderCell: (params) => (
        <div className="text-right mr-3">
          <div className="font-weight-bold font-size-lg text-black opacity-4">
            {params.value.currencyType + " "+ params.value.coinPrice }
          </div>
      </div>
      ),
    },
  {field:"marketCap", headerName:"MARKET CAP" , flex:2,
    renderCell: (params) => (
      <div className="text-right mr-3">
        <div className="font-weight-bold font-size-lg text-black" style={{color:"#40456e"}}>
          {params.value.marketCapCurrency + " " +  params.value.marketCap }
        </div>
    </div>
    ),
  },
  { field: 'during', headerName: "1W" ,  flex:1,
    renderCell: (params) => (
        <div className="d-flex align-items-center mr-4">
          { params.value === "up" &&
            <div className="font-size-lg text-success">
              <TrendingUpTwoToneIcon />
            </div>
          }
          { params.value !== "up" &&
              <div className="font-size-lg text-danger">
                <TrendingDownTwoToneIcon />
              </div>
            }
        </div>
      ),
    },
    { field: 'action', headerName: "ACTION" ,  flex:2,
      renderCell: (params) => (
          <div className="d-flex align-items-center mr-4">
            <Tooltip
              classes={{ tooltip: 'text-center p-3 tooltip-success' }}
              arrow
              placement="top"
              title="We can buy coin we want !">
              <Button className="btn-success m-2"  onClick={statusToggle}>Buy</Button>
            </Tooltip>
            <Tooltip
              classes={{ tooltip: 'text-center p-3 tooltip-warning' }}
              arrow
              placement="top"
              title="We can sell coin we want !">
              <Button className="btn-warning m-2">Sell</Button>
            </Tooltip>
          </div>
        ),
    }
  ]
 

  return (
    <>
        <PerfectScrollbar>
            <DataGrid 
            rows={coinList ? coinList.map((item,i)=>({
                id: i+1, 
                cryptoCurrency:item,
                price:{coinPrice:item.coinPrice ,currencyType:item.currencyType},
                during:item.trending,
                marketCap: {marketCapCurrency: item.currencyType,marketCap:item.marketCap}
            })):[]}
            columns={columns} pageSize={10} rowsPerPageOptions={[10, 15, 20]} pagination  rowHeight="20"
            />
        </PerfectScrollbar>
        <BuySellModal statusModal={statusModal}  statusModalSetting={(e)=>setStatusModal(e)}/>
    </>
  );
}
