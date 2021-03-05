import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, Button, List, ListItem, Tooltip } from '@material-ui/core';

import CountUp from 'react-countup';
import PerfectScrollbar from 'react-perfect-scrollbar';

import TrendingUpTwoToneIcon from '@material-ui/icons/TrendingUpTwoTone';
import TrendingDownTwoToneIcon from '@material-ui/icons/TrendingDownTwoTone';
import { DataGrid } from '@material-ui/data-grid';
import {config} from "../../config"

const CoinImgUrl = config.CoinImgUrl;

export default function LivePreviewExample() {
  
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
  {field:"marketCap", headerName:"MARKET CAP" , flex:3,
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
    }
  ]
  return (
    <>
      <Card className="w-100 mb-5" >
        <div className="card-header d-flex align-items-center justify-content-between card-header-alt p-4">
          <div>
            <h6 className="font-weight-bold font-size-lg mb-1 text-black">
              CryptoCoinList
            </h6>
            <p className="text-black-50 mb-0">Status of My crypto assets.</p>
          </div>
          <div className="d-flex align-items-center">
            <Tooltip title="View stats for last week" arrow placement="top">
              <Button className="btn-link mx-1 px-1 py-2 font-weight-bold text-primary">
                <span>1W</span>
              </Button>
            </Tooltip>
            <Tooltip title="View stats for last month" arrow placement="top">
              <Button className="btn-link mx-1 px-1 py-2 font-weight-bold text-dark opacity-5">
                <span>1M</span>
              </Button>
            </Tooltip>
            <Tooltip title="View stats for last year" arrow placement="top">
              <Button className="btn-link ml-1 px-1 py-2 font-weight-bold text-dark opacity-5">
                <span>1Y</span>
              </Button>
            </Tooltip>
          </div>
        </div>
        <div className="scroll-area-lm shadow-overflow">
          <div style={{ height: 400}}>
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
          </div>
        </div>
      </Card>
    </>
  );
}
