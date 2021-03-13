import {Apirequest} from "../index"
import * as Types from "../../types"
// import {history} from '../../../history'
// import {Notification} from "../index"

export const getBankAccount = () =>{
    return async dispatch =>{
        var outdata =  await Apirequest("settings/get");
        if(outdata.status === "get_success"){
            var data = outdata.data;
            dispatch({ type : Types.GET_BANKACCOUNT, data});
        }
    }
}


