import {Apirequest} from "../../index"
import * as Types from "../../../types"
// import {history} from '../../../history'
import {Notification} from "../../index"
 
export const BuySellTransaction = (buyselltransactionlistData) =>{
    return async dispatch =>{
        var outdata =  await Apirequest("buyselltransactions/onwerbuyselltransactions",buyselltransactionlistData);

        // console.log(outdata);
        if(outdata.status === "get_success"){
            var data = outdata.data;
            var usedWallet = outdata.usedWallet;
            // console.log("yes");
            // console.log(data);
            for(var i in data){
                data[i]["id"] = data[i]._id;
            }
            dispatch({ type : Types.GET_OWNERBUYELLTRANSACTIONSLIST, data ,usedWallet});
        }
        else{
            Notification("Error","Sorry...The Buy/Sell transaction doesn't exist.","danger")

        }
    }
}

export const addBuySellTransaction = (buyselltransactionlistData) =>{
    return async dispatch =>{
        var outdata =  await Apirequest("buyselltransactions/add",buyselltransactionlistData);
        if(outdata.status){
            Notification("Success","New Buy/Sell transaction was successfully added.","success")
            dispatch(BuySellTransaction());

            // dispatch(UserFiatList(buyselltransactionlistData));
        }else{
            Notification("Error","Sorry...The Buy/Sell transaction already exists.","danger")
        }
    }
}

 