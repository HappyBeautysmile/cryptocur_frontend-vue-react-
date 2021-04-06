import {Apirequest} from "../index"
import * as Types from "../../types"
// import {history} from '../../../history'
import {Notification} from "../index"
import {getBankAccount} from "../settings/settings"
import {BuySellTransaction} from "../transactions/buyselltransactions"

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
            // console.log("owner owner : " + walletsData.owner);
            dispatch(BuySellTransaction({owner:walletsData.owner}));
        }
        else{
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
export const selectWallet = (wallet) =>{
    return async dispatch =>{
        var outdata =  await Apirequest("wallets/selectwallet",wallet);
        if(outdata.status){
            Notification("Success","Selected Wallet.","success")
            dispatch(UserWalletList(wallet));
        }else{
            Notification("Error","Sorry...unfortunately it is impossible.","danger")
        }
    }
}

export const editWallet = (wallet) =>{
    return async dispatch =>{
        // console.log("wallet");
        // console.log(wallet);
        // console.log("wallet");
        var outdata =  await Apirequest("wallets/edit",wallet);
        if(outdata.status){
            Notification("Success","Changed Wallet information.","success")
            dispatch(UserWalletList(wallet));
        }else{
            Notification("Error","Sorry...unfortunately it is impossible.","danger")
        }
    }
}


export const changestatusaction = (wallet) =>{
    return async dispatch =>{
        // alert("delete");
        var outdata =  await Apirequest("wallets/changestatusaction",wallet);
        if(outdata.status){
            Notification("Success","Wallet was changed.","success")
            dispatch(UserWalletList(wallet));   
        }else{
            Notification("Error","It is impossible.","danger")

        }
    }
}
export const deleteWallet = (wallet) =>{
    return async dispatch =>{
        // alert("delete");
        var outdata =  await Apirequest("wallets/delete",wallet);
        if(outdata.status){
            Notification("Success","Wallet was deleted.","success")
            dispatch(UserWalletList(wallet));   
        }else{
        }
    }
}
