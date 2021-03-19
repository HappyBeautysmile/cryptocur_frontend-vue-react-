import {Apirequest} from "../index"
import * as Types from "../../types"
import {history} from '../../../history'
import {Notification} from "../index"

export const userList = (usersData) =>{
    return async dispatch =>{
        var outdata =  await Apirequest("users/userlist",usersData);
        // console.log(outdata);
        if(outdata.status === "get_success"){
            var data = outdata.data;
            // var row = [];
            for(var i in data){
                data[i]["id"] = data[i]._id;
            }
            dispatch({ type : Types.GET_USERLIST, data});
        }
        else{

        }
    }
}

export const addUser = (user) =>{
    return async dispatch =>{
        // console.log(user);
        var outdata =  await Apirequest("users/signup",user);
        // console.log(outdata);
        if(outdata.status){
            // setSession(outdata.data);
            Notification("Success","New user was successfully added.","success")
            window.location.assign("/Users");
            // console.log(outdata);
        }else{
            Notification("Error","Sorry...The account already exists.","danger")
            // console.log(outdata);
        }
    }
}

export const editUser = (user) =>{
    return async dispatch =>{
        // console.log("guess user adm in I");
        var outdata =  await Apirequest("users/edit_user",user);
        // console.log(outdata);

        if(outdata.status){
            // setSession(outdata.data);
            Notification("Success","Changed personal information.","success")
            window.location.assign("/Users");
            // history.push("/Users");
            // console.log(outdata);
        }else{
            Notification("Error","Sorry...unfortunately it is impossible.","danger")
            // console.log(outdata);
        }
    }
}

export const deleteUser = (user) =>{
    return async dispatch =>{
        // console.log(user);
        var outdata =  await Apirequest("users/delete_user",user);
        // console.log(outdata);
        if(outdata.status){
            // setSession(outdata.data);
            window.location.assign("/Users");
            // console.log(outdata);
        }else{
            // console.log(outdata);
        }
    }
}
