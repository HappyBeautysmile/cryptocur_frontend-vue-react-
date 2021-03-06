import React, {useState,useEffect} from 'react';

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
    const [currentWalletAndRate , setCurrentWalletAndRate] = useState([]);
    const [initialChoiceMoney,setinitialChoiceMoney] =useState([]);
    const [modalCssSetting,setModalCssSetting] = useState([]);
    const statusToggle = () => setStatusModal(!statusModal);
    const coinList=[
        {iconType : "fab", iconName: "bitcoin", marketCap: 112314 , coinFullName:"Bitcoin", coinName:"BTC", coinPrice:48465.20, currencyType:"$", trending:"up",backgroundColor:"bg-warning"},
        {iconType : "fab", iconName: "ethereum", marketCap: 8000 , coinFullName:"Ethereum", coinName:"ETH", coinPrice:1506.29, currencyType:"$", trending:"up",backgroundColor:"bg-first"},
        {iconType : "fas", iconName: "dollar-sign",  marketCap: 10000 ,coinFullName:"Dollar", coinName:"USD", coinPrice:1, currencyType:"$", trending:"down",backgroundColor:"bg-success"},
        {iconType : "fas", iconName: "dollar-sign",  marketCap: 200000 ,coinFullName:"ZedCoin", coinName:"ZDC", coinPrice:50, currencyType:"$", trending:"up",backgroundColor:"bg-success"}
    ]
    const currentWallet =[
        { name:"USD" , quantity:3500 },
        { name:"EUR" , quantity:2300 },
        { name:"YEN" , quantity:15000 },
        { name:"GBP" , quantity:0}
    ]

    const currencyRate =[
        { name:"USD" , exchange_rate: 1},
        { name:"EUR" , exchange_rate: 1.2},
        { name:"YEN" , exchange_rate: 0.0092},
        { name:"GBP" , quantity:1.38 }
    ]

    const AddCurrencylWalletAndRate =() =>{
        let tempWalletAndRate =[];
        for(var i = 0 ; i < currencyRate.length ; i++)
        {
            tempWalletAndRate[i] = currencyRate[i] ;
            for(var t = 0 ; t < currentWallet.length ; t++)
            {
                if(tempWalletAndRate[i].name === currentWallet[t].name)
                {
                    tempWalletAndRate[i].quantity = currentWallet[t].quantity ; //exchange money
                    tempWalletAndRate[i].totalQuantity = currentWallet[t].quantity ; //total money
                    break ;
                }
            }
            if(t === currentWallet.length )
            {
                tempWalletAndRate[i].quantity = 0;
            }
        }
        setCurrentWalletAndRate(tempWalletAndRate);
    // console.log(currentWalletAndRate);
    }   

    const modalSettingFunc =(cryptoCoin) =>{
        let curMoney =[] ;
        curMoney.wantedCoin = cryptoCoin;
        curMoney.choiceCurrency =currentWalletAndRate[0] ;
        curMoney.convertCoinPrice =  currentWalletAndRate[0].quantity/cryptoCoin.coinPrice;
        /*
                curMoney =
                    { 
                        choiceCurrency: {name:"USD" , quantity:3500 ,exchange_rate: 1 }
                        ,convertCoinPrice:121.212,
                        wantedCoin : {
                            iconType : "fab", iconName: "bitcoin", marketCap: 112314 , coinFullName:"Bitcoin", coinName:"BTC", coinPrice:48465.20, currencyType:"$", trending:"up",backgroundColor:"bg-warning"
                        }
                    },
            */
        // setinitialChoiceMoney(curMoney);
        setinitialChoiceMoney(curMoney);
    }
    const  buyCryptoFunc =(cryptoCoin)=>() =>
    {

        modalSettingFunc(cryptoCoin)
        //We can choose buy modal .
        setModalCssSetting({modalTitle:"Buy",modalFormBtnBgColor:"btn-success"});
        statusToggle();

    }

    const  sellCryptoFunc =(cryptoCoin)=>() =>
    {

        modalSettingFunc(cryptoCoin)
        //We can choose buy modal .
        setModalCssSetting({modalTitle:"Sell",modalFormBtnBgColor:"btn-warning"});
        statusToggle();

    }
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
                    <Button className="btn-success m-2"  onClick={buyCryptoFunc(params.value)}>Buy</Button>
                </Tooltip>
                <Tooltip
                    classes={{ tooltip: 'text-center p-3 tooltip-warning' }}
                    arrow
                    placement="top"
                    title="We can sell coin we want !">
                    <Button className="btn-warning m-2" onClick={sellCryptoFunc(params.value)}>Sell</Button>
                </Tooltip>
                </div>
            ),
        }
    ]

  useEffect(() => {
    AddCurrencylWalletAndRate();
    }, []);
  
  return (
    <>
        <PerfectScrollbar>
            <DataGrid 
            rows={coinList ? coinList.map((item,i)=>({
                id: i+1, 
                cryptoCurrency:item,
                price:{coinPrice:item.coinPrice ,currencyType:item.currencyType},
                during:item.trending,
                marketCap: {marketCapCurrency: item.currencyType,marketCap:item.marketCap},
                action: item
            })):[]}
            columns={columns} pageSize={10} rowsPerPageOptions={[10, 15, 20]} pagination  rowHeight="20"
            />
        </PerfectScrollbar>
        <BuySellModal statusModal={statusModal} initialChoiceMoney ={initialChoiceMoney} currentWalletAndRate={currentWalletAndRate} statusModalSetting={(e)=>setStatusModal(e)} modalCssSetting={modalCssSetting} />
    </>
  );
}
