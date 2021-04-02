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
  const bankAccount = useSelector(state => state.settings.bankAccount);
  // console.log(bankAccount);
  // 
  // [
  //   {
  //     createdAt: 2021-03-06T11:54:36.648Z,
  //     _id: 60436e52164d7159d08c5cf5,
  //     owner: 'admin@gmail.com',
  //     name: 'Love',
  //     __v: 0,
  //     current_status: {
            // {
            //   USD: { exchange_rate: 1, quantity: 0 ,exchangeQuantity:0},
            //   EUR: { exchange_rate: 1.2, quantity: 0 ,exchangeQuantity:0}
            // }
  //     }
  //   },
  // ]

  /*
  */
  const authprops = useSelector(state => state.auth.user);
  
  //withdraw and deposite part ******************************************* start ****************************
  const [withdrawDepositStatusModal, setWithdrawDepositStatusModal] = useState(false);
  // const [currentFiatAndRate , setCurrentWalletAndRate] = useState([]);
  const [choosedfiat,setChoosedFiat] =useState({});
  const [modalCssSetting,setModalCssSetting] = useState([]);
  const depositStatusToggle = () => setWithdrawDepositStatusModal(!withdrawDepositStatusModal);

  const  WithdrawFunc =(cryptoCoin)=>() =>
  {

      // modalSettingFunc(cryptoCoin)
      //We can choose buy modal .
      setChoosedFiat(cryptoCoin);
      setModalCssSetting({modalTitle:"Withdraw",modalFormBtnBgColor:"btn-first"});
      depositStatusToggle();

  }

  const  DepositFunc =(cryptoCoin)=>() =>
  {
      setChoosedFiat(cryptoCoin);
      setModalCssSetting({modalTitle:"Deposit",modalFormBtnBgColor:"btn-success"});
      depositStatusToggle();

  }

  //withdraw and deposite part ******************************************* end ****************************
  // dispatch(UserFiatList({email:authprops.email}));
  useEffect(() => {
    // AddCurrencylWalletAndRate()
    if(authprops)
      dispatch(UserFiatList({email:authprops.email}));
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
  { field: 'createdAt', headerName: "CreatedAt" ,  flex:1,
    renderCell: (params) => (
        <div className="d-flex align-items-center mr-4">
          {params.value }
        </div>
      ),
    }, 
    {
      field: 'withdrawDeposite', headerName: "ACTION" , flex:1.5,
      renderCell: (params) => (
          <div className="d-flex align-items-center mr-4">
            <Tooltip
                classes={{ tooltip: 'text-center p-3 tooltip-success' }}
                arrow
                placement="top"
                title="We can deposit coin we want !">
                <Button className="btn-success m-2" onClick={DepositFunc(params.value)}>DEPOSIT</Button>

            </Tooltip>
            <Tooltip
                classes={{ tooltip: 'text-center p-3 tooltip-first' }}
                arrow
                placement="top"
                title="We can withdraw coin we want !">
                <Button className="btn-first m-2" onClick={WithdrawFunc(params.value)} >WITHDRAW</Button>
            
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
      <WithdrawDepositModal statusModal={withdrawDepositStatusModal}  statusModalSetting={(e)=>setWithdrawDepositStatusModal(e)} choosedfiat ={choosedfiat}  modalCssSetting={modalCssSetting} bankAccount ={bankAccount} />
    </>
  );
}
