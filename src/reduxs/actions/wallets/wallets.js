import {Apirequest} from "../index"
import * as Types from "../../types"
// import {history} from '../../../history'
import {Notification} from "../index"
import {getBankAccount} from "../settings/settings"

export const UserWalletList = (walletsData) =>{
    return async dispatch =>{
        var outdata =  await Apirequest("wallets/getownerwalletlist",walletsData);
        // console.log("outdata");
        if(outdata.status === true){
        var data = outdata.data;
            // console.log(data);
            for(var i in data){
                data[i]["id"] = data[i]._id;
            }
            dispatch({type : Types.GET_WALLETLIST, data});
        }
        else{
            console.log("heee");
        }
    }
}


export const addWallet = (wallet) =>{
    return async dispatch =>{
        var outdata =  await Apirequest("wallets/add",wallet);
        if(outdata.status){
            Notification("Success","New Wallet was successfully added.","success")
            dispatch(UserWalletList(wallet));
        }else{
            Notification("Error","Sorry...The Wallet already exists.","danger")
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
