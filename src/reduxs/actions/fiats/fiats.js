import {Apirequest} from "../index"
import * as Types from "../../types"
// import {history} from '../../../history'
import {Notification} from "../index"
import {getBankAccount} from "../../actions/settings/settings"
export const UserFiatList = (fiatsData) =>{
    return async dispatch =>{
        // console.log("fiatsData : " + fiatsData);
        var outdata =  await Apirequest("fiats/userfiatlist",fiatsData);
        // console.log(outdata);
        if(outdata.status === "get_success"){
            var data = outdata.data;
            // console.log("yes");
            // console.log(data);
            for(var i in data){
                data[i]["id"] = data[i]._id;
            }
            var selectedData = outdata.selectedFiat ;
            dispatch(getBankAccount());
            dispatch({type : Types.GET_ALLFIAtSLIST, data,selectedData});

        }
        else{

        }
    }
}


export const addFiat = (fiat) =>{
    return async dispatch =>{
        var outdata =  await Apirequest("fiats/newFiat",fiat);
        if(outdata.status){
            Notification("Success","New Fiat was successfully added.","success")
            dispatch(UserFiatList(fiat));
        }else{
            Notification("Error","Sorry...The Fiat already exists.","danger")
        }
    }
}

export const editFiat = (fiat) =>{
    return async dispatch =>{
        var outdata =  await Apirequest("fiats/edit",fiat);
        if(outdata.status){
            Notification("Success","Changed Fiat information.","success")
            dispatch(UserFiatList(fiat));
        }else{
            Notification("Error","Sorry...unfortunately it is impossible.","danger")
        }
    }
}
export const deleteFiat = (fiat) =>{
    return async dispatch =>{
        var outdata =  await Apirequest("fiats/delete",fiat);
        if(outdata.status){
            Notification("Success","Fiat was deleted.","success")
            dispatch(UserFiatList(fiat));   
        }else{
        }
    }
}

export const selectFiat = (fiat) =>{
    return async dispatch =>{
        var outdata =  await Apirequest("fiats/selectfiat",fiat);
        if(outdata.status){
            var selectedData = outdata.data;
            Notification("Success","Selected Fiat.","success")
            dispatch(UserFiatList({email:fiat.owner}));

        }else{
            Notification("Error","Sorry...unfortunately it is impossible.","danger")
        }
    }
}

