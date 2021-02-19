import {Apirequest,setSession,fake_session} from "./index"
import {history} from "../../history"

export const sign = (user) =>{
    return async dispatch =>{
        // console.log(user);
        var outdata =  await Apirequest("users/signin",user);
        // console.log(outdata);
        if(outdata.status){
            setSession(outdata.data);
            window.location.assign("/Overview");
        }else{

        }
    }
}

export const logout = () =>{
    return async dispatch =>{
        var outdata =  await Apirequest("users/logout",);
        fake_session();
        history.push("/")
    }
}

