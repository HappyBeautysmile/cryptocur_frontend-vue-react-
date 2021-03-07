import React ,{useEffect,useState} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Button,Tooltip} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux'

import { DataGrid } from '@material-ui/data-grid';
import {config} from "../../../config";
import Moment from 'react-moment';
import VerifiedUserTwoToneIcon from '@material-ui/icons/VerifiedUserTwoTone';
import {UserFiatList} from "../../../reduxs/actions/fiats/fiats"
import FiatEdit from "../FiatEdit"
import WithdrawDepositModal from "../WDModal"

Moment.globalFormat = 'YYYY/MM/DD hh:mm:ss';

export default function LivePreviewExample() {
  

  const dispatch = useDispatch();
  const fiatsprops = useSelector(state => state.fiats.fiatsData) ;
  const authprops = useSelector(state => state.auth.user);

  //withdraw and deposite part ******************************************* start ****************************
  const [withdrawDepositStatusModal, setWithdrawDepositStatusModal] = useState(false);
  const [currentFiatAndRate , setCurrentWalletAndRate] = useState([]);
  const [initialChoiceMoney,setinitialChoiceMoney] =useState([]);
  const [modalCssSetting,setModalCssSetting] = useState([]);
  const depositStatusToggle = () => setWithdrawDepositStatusModal(!withdrawDepositStatusModal);

  const currentFiat =[
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
        for(var t = 0 ; t < currentFiat.length ; t++)
        {
            if(tempWalletAndRate[i].name === currentFiat[t].name)
            {
                tempWalletAndRate[i].quantity = 0 ; //exchange money
                tempWalletAndRate[i].totalQuantity = currentFiat[t].quantity ; //total money
                break ;
            }
        }
        if(t === currentFiat.length )
        {
            tempWalletAndRate[i].quantity = 0;
        }
    }
    setCurrentWalletAndRate(tempWalletAndRate);
// console.log(currentFiatAndRate);
}   

  const modalSettingFunc =(cryptoCoin) =>{
    let curMoney =[] ;
    curMoney =currentFiatAndRate[0] ;
    /*
        tempchocieMoney =
        {name:"USD" , quantity:3500 ,totalQuantity:3500,exchange_rate: 1 }
             
        },
    */
    // setinitialChoiceMoney(curMoney);
    setinitialChoiceMoney(curMoney);
    
      // console.log("currentFiatAndRate " );
      // console.log(currentFiatAndRate[0] );
  }
  const  WithdrawFunc =(cryptoCoin)=>() =>
  {

      modalSettingFunc(cryptoCoin)
      //We can choose buy modal .
      setModalCssSetting({modalTitle:"Withdraw",modalFormBtnBgColor:"btn-success"});
      depositStatusToggle();

  }

  const  DepositFunc =(cryptoCoin)=>() =>
  {

      modalSettingFunc(cryptoCoin)
      //We can choose buy modal .
      setModalCssSetting({modalTitle:"Deposit",modalFormBtnBgColor:"btn-danger"});
      depositStatusToggle();

  }

  //withdraw and deposite part ******************************************* end ****************************
  // dispatch(UserFiatList({email:authprops.email}));

  useEffect(() => {
    AddCurrencylWalletAndRate()
    if(authprops)
      dispatch(UserFiatList({email:authprops.email}));
    // usersprops = useSelector(state => state)
    // const userTableRows = usersprops.data
  }, [dispatch])
  // console.log(fiatsprops);

  const fiatColumns = [
    { field: 'id', headerName: 'ID', flex: 0.8,
      renderCell: (params) => (
        <div className="text-right mr-3">
          <div className="font-weight-bold font-size-lg text-black opacity-4">
            {params.value}
          </div>
      </div>
      )
     },

    {field:"name", headerName:"Fiat Name" , flex:1,
      renderCell: (params) => (
        <div className="text-right mr-3">
          <div className="font-weight-bold font-size-lg text-black" style={{color:"#40456e"}}>
            {params.value }
          </div>
      </div>
      ),
    },
  // {field:"email", headerName:"Owner" , flex:1,
  //   renderCell: (params) => (
  //     <div className="text-right mr-3">
  //       <div className="font-weight-bold font-size-lg text-black opacity-4">
  //         {params.value }
  //       </div>
  //   </div>
  //   ),
  // },
  { field: 'createdAt', headerName: "CreatedAt" ,  flex:1,
    renderCell: (params) => (
        <div className="d-flex align-items-center mr-4">
          {params.value }
        </div>
      ),
    }, 
    {
      field: 'action', headerName: "ACTION" , flex:1.5,
      renderCell: (params) => (
          <div className="d-flex align-items-center mr-4">
            <Tooltip
                classes={{ tooltip: 'text-center p-3 tooltip-danger' }}
                arrow
                placement="top"
                title="We can deposit coin we want !">
                <Button className="btn-danger m-2" onClick={DepositFunc(params.value)}>DEPOSIT</Button>

            </Tooltip>
            <Tooltip
                classes={{ tooltip: 'text-center p-3 tooltip-success' }}
                arrow
                placement="top"
                title="We can withdraw coin we want !">
                <Button className="btn-success m-2" onClick={WithdrawFunc(params.value)} >WITHDRAW</Button>
            
            </Tooltip>
            
          </div>
      ),
    }
    ,
    {
      field: 'actions', headerName: 'ACTIONS', flex: 1,
      renderCell: (params) => (
          <FiatEdit  curFiat={params.value}/>
      ),
    }
  ]
  

 
  return (
    <>
      <DataGrid 
        rows={fiatsprops ? fiatsprops.map((item,i)=>({
          id: i+1, 
          name:item.name,
          // email:item.owner,
          createdAt:item.createdAt,
          actions: item,
          withdrawDeposite: item
        })):[]}
        columns={fiatColumns} pageSize={10} rowsPerPageOptions={[10, 15, 20]} pagination  rowHeight="70"
      />
      <WithdrawDepositModal statusModal={withdrawDepositStatusModal} initialChoiceMoney ={initialChoiceMoney} currentFiatAndRate={currentFiatAndRate} statusModalSetting={(e)=>setWithdrawDepositStatusModal(e)} modalCssSetting={modalCssSetting} />
    </>
  );
}
