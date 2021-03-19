import {Apirequest} from "../index"
import * as Types from "../../types"
// import {history} from '../../../history'
import {Notification} from "../index"

export const allCoinList = (coinsData) =>{

    return async dispatch =>{
        var outdata =  await Apirequest("coins/coinlist",coinsData);
        // console.log(outdata);
        if(outdata.status === "get_success"){
            var data = outdata.data;
            // console.log("yes");
            // console.log(data);
            for(var i in data){
                data[i]["id"] = data[i]._id;
            }
            dispatch({ type : Types.GET_ALLCOINSLIST, data});
        }
        else{

        }
    }
}

export const addCoin = (coin) =>{
    return async dispatch =>{
        var outdata =  await Apirequest("coins/add",coin);
        if(outdata.status){
            Notification("Success","New Coin was successfully added.","success")
            dispatch(allCoinList());
        }else{
            Notification("Error","Sorry...The Coin already exists.","danger")
        }
    }
}

// export const editFiat = (fiat) =>{
//     return async dispatch =>{
//         var outdata =  await Apirequest("fiats/edit",fiat);
//         if(outdata.status){
//             Notification("Success","Changed Fiat information.","success")
//             dispatch(allFiatList());
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
//             dispatch(allFiatList());   
//         }else{
//         }
//     }
// }
