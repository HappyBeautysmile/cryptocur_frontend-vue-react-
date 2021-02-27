import {Apirequest} from "../index"
import {Notification} from "../index"

export const regist = (user) =>{
    return async dispatch =>{
        // console.log(user);
        var outdata =  await Apirequest("users/signup",user);
        // console.log(outdata);
        if(outdata.status){
            // setSession(outdata.data);
            Notification("Success","Register Success!","success")
            window.location.assign("/");
            // console.log(outdata);

        }else{
            Notification("Error","An account with email already exists! please try again another email address.","danger")
            // console.log(outdata);
        }
    }
}