import {Apirequest,setSession,fake_session} from "../index"
import {history} from "../../../history"
import {Notification} from "../../../reduxs/actions/index"
import {getBankAccount} from "../../../reduxs/actions/settings/settings"
export const sign = (user) =>{
    return async dispatch =>{
        // console.log(user);
        var outdata =  await Apirequest("users/signin",user);
        // console.log(outdata);
        if(outdata.status){
            setSession(outdata.data);
            Notification("Success","Login Success!","success")
            window.location.assign("/Fund");
            // history.push("/Fund")

        }else{
            Notification("Error","The email address or password doesn't match any account.","danger")
        }
    }
}

export const logout = () =>{
    return async dispatch =>{
        // var outdata =  await Apirequest("users/logout",);
       await Apirequest("users/logout",);
        fake_session();
        history.push("/")
    }
}

