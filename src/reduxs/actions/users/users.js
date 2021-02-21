import {Apirequest} from "../index"
import * as Types from "../../types"

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
            window.location.assign("/Users");
            // console.log(outdata);
        }else{
            // console.log(outdata);
        }
    }
}

export const editUser = (user) =>{
    return async dispatch =>{
        // console.log(user);
        var outdata =  await Apirequest("users/edit_user",user);
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
