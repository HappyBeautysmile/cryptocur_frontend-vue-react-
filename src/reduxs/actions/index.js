import axios from "axios"
import {config} from "../../config"
import {PROFILE_USER} from "../types"
import { store } from 'react-notifications-component';

const BaseUrl = config.BaseUrl



export const getSession = () =>{
    var auth =  window.localStorage.getItem("coinauthtoken");
    return auth;
}

export const authinstance = axios.create({
    baseURL: BaseUrl,
    timeout: 50000,
    headers: {
		authorization: `${getSession()}`,
		"Content-Type": "application/json",
    },
});

export const Apirequest = async (url,inputdata) =>{
    try{
        console.log(inputdata)
		var	Response =  await authinstance.post( url , inputdata );
		if(Response.data){
			if(Response.data.session){
				fake_session();
				window.location.assign("/");
			}else{
				return Response.data
			}
		}else{
			return {status : false,error : "error"}
		}
	}catch(e){
		return {status : false,error : "error"}
	}
}

export const setSession = (authtoken) =>{
    window.localStorage.setItem("coinauthtoken",authtoken)
}

export const is_session = () =>{
    var auth =  window.localStorage.getItem("coinauthtoken");
    if(auth){
        return auth;
    }else{
        return false;
    }
}

export const fake_session = () =>{
    window.localStorage.removeItem("coinauthtoken")
}

export const sessionchecking = (decoded) =>{
    return async dispatch =>{
        var user = await Apirequest("users/get_userinfor",{token : decoded});
		var userdata = user.data;
        dispatch({ type : PROFILE_USER, data : userdata});
        // if(url_path() === "/" ){
            // history.push("/");
		// }

    }
}

export const Notification = (title,message,type) =>{
    store.addNotification({
        title: title,
        message: message,
        type: type,
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 3000,
        }
    });
}
