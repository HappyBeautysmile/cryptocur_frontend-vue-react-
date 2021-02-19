import {Apirequest,setSession} from "./index"


export const regist = (user) =>{
    return async dispatch =>{
        // console.log(user);
        var outdata =  await Apirequest("users/signup",user);
        // console.log(outdata);
        if(outdata.status){
            // setSession(outdata.data);

            window.location.assign("/");
            // console.log(outdata);

        }else{
            // console.log(outdata);
        }
    }
}