import {Apirequest} from "../index"
import * as Types from "../../types"
// import {history} from '../../../history'
import {Notification} from "../index"

export const currencyList = (currenciesFiatRateData) =>{
    return async dispatch =>{
        var outdata =  await Apirequest("currencies/currencyfaitratedata",currenciesFiatRateData);
        // console.log(outdata);
        if(outdata.status === "get_success"){
            var data = outdata.data;
            // console.log("yes");
            // console.log(data);
            for(var i in data){
                data[i]["id"] = data[i]._id;
            }
            dispatch({ type : Types.GET_CURRENCYLIST, data});
        }
        else{

        }
    }
}
