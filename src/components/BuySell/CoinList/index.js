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
import {allCoinList} from "../../../reduxs/actions/coins/coins"
import { useSelector, useDispatch } from 'react-redux'
import {Notification} from "../../../reduxs/actions"

const CoinImgUrl = config.CoinImgUrl;

export default function BuySell() {
    
    const dispatch = useDispatch();
    const coinsprops = useSelector(state => state.coins.coinsData) ;
    const selectedFiat = useSelector(state => state.fiats.selectedFiat) ;
    const [buySellModal, setBuySellModal] = useState(false);
    const [currentWalletAndRate , setCurrentWalletAndRate] = useState([]);
    const [initialChoiceMoney,setinitialChoiceMoney] =useState([]);
    const [modalCssSetting,setModalCssSetting] = useState([]);
    const buySellModalToggle = () => setBuySellModal(!buySellModal);
  
    useEffect(() => {
        dispatch(allCoinList());
        // usersprops = useSelector(state => state)
        // const userTableRows = usersprops.data
      }, [dispatch])
    
    const modalSettingFunc =(cryptoCoin) =>{
        let curMoney =[] ;
        curMoney.wantedCoin = cryptoCoin;
        if(selectedFiat && selectedFiat.current_status)
        {
            curMoney.choiceCurrency =selectedFiat.current_status[0] ; 
            curMoney.convertCoinPrice =  selectedFiat.current_status[0].quantity/cryptoCoin.coinPrice;
        }
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
        modalSettingFunc(cryptoCoin);
        //We can choose buy modal .
        setModalCssSetting({modalTitle:"Buy",modalFormBtnBgColor:"btn-success"});
        if(selectedFiat)
        {
            buySellModalToggle();
        }
        else{
            Notification("Warning","Fiat doesn't exit." ,"warning");
        }
    }

    const  sellCryptoFunc =(cryptoCoin)=>() =>
    {
        modalSettingFunc(cryptoCoin)
        //We can choose buy modal .
        setModalCssSetting({modalTitle:"Sell",modalFormBtnBgColor:"btn-warning"});
        if(selectedFiat)
        {
            buySellModalToggle();
        }
        else{
            Notification("Warning","Fiat doesn't exit." ,"warning");
        }
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
                {params.value.coinPrice + " " + params.value.currency.name}
                </div>
            </div>
            ),
        },
        { field: 'during', headerName: "1W" ,  flex:1,
        renderCell: (params) => (
            <div className="d-flex align-items-center mr-4">
                { params.value === true &&
                <div className="font-size-lg text-success">
                    <TrendingUpTwoToneIcon />
                </div>
                }
                { params.value === false &&
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
    // AddCurrencylWalletAndRate();
    }, []);
  
  return (
    <>
        <PerfectScrollbar>
            <DataGrid 
            rows={coinsprops ? coinsprops.map((item,i)=>({
                id: i+1, 
                cryptoCurrency:item,
                price:{coinPrice:item.coinPrice ,currency:item.currency},
                during:item.trending,
                action: item
            })):[]}
            columns={columns} pageSize={10} rowsPerPageOptions={[10, 15, 20]} pagination  rowHeight="20"
            />
        </PerfectScrollbar>
        <BuySellModal buySellModal={buySellModal} initialChoiceMoney ={initialChoiceMoney} currentFiatAndRate={selectedFiat ? selectedFiat.current_status : []} statusModalSetting={(e)=>setBuySellModal(e)} modalCssSetting={modalCssSetting} />
    </>
  );
}
