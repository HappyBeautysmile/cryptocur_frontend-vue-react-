import {Apirequest} from "../../index"
import * as Types from "../../../types"
// import {history} from '../../../history'
import {Notification} from "../../index"
 
export const WDTransaction = (wdtransactionlistData) =>{
    return async dispatch =>{
        // console.log("fiatsData : " + fiatsData);
        var outdata =  await Apirequest("wdtransactions/onwerwdtransactions",wdtransactionlistData);
        // console.log(outdata);
        if(outdata.status === "get_success"){
            var data = outdata.data;
            // console.log("yes");
            // console.log(data);
            for(var i in data){
                data[i]["id"] = data[i]._id;
            }
            dispatch({ type : Types.GET_OWNERWDTRANSACTIONSLIST, data});
        }
        else{
        }
    }
}

export const addWDTransaction = (wdrequesttransactionsData) =>{
    return async dispatch =>{
        var outdata =  await Apirequest("wdtransactions/add",wdrequesttransactionsData);
        if(outdata.status){
            Notification("Success","New Withdraw/Deposite transaction was successfully added.","success")
            // dispatch(UserFiatList(wdrequesttransactionsData));
        }else{
            Notification("Error","Sorry...The Withdraw/Deposite transaction already exists.","danger")
        }
    }
}



// export const editFiat = (fiat) =>{
//     return async dispatch =>{
//         var outdata =  await Apirequest("fiats/edit",fiat);
//         if(outdata.status){
//             Notification("Success","Changed Fiat information.","success")
//             dispatch(UserFiatList(fiat));
//         }else{
//             Notification("Error","Sorry...unfortunately it is impossible.","danger")
//         }
//     }
// }
// export const deleteFiat = (fiat) =>{
//     return async dispatch =>{
//         var outdata =  await Apirequest("fiats/delete",fiat);
//         if(outdata.status){
//             Notification("Success","Fiat was deleted.","success")
//             dispatch(UserFiatList(fiat));   
//         }else{
//         }
//     }
// }
