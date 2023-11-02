import React from 'react'
import {auth, provider} from '../Firebase-config.js';
import {signInWithPopup} from 'firebase/auth';
import Cookie from 'universal-cookie'; 

const cookies = new Cookie();

function Auth(prop) {
    const {setIsAuth} = prop;
    const SignInWithGoogle = async () =>{
        try{
            const result = await signInWithPopup(auth,provider);//gets the user data from google as a object "result" with auth and provider as arguments
            console.log(result);

            cookies.set("auth-token", result.user.refreshToken) //to make user not get looged out even after refresing the session 
            //name : auth-token
            setIsAuth(true);
        }catch(err){// to catch the error
            console.log(err) //to display the error
        }
    };

  return (
    <div>
        <button onClick={SignInWithGoogle}>Sign in with Google</button>
    </div>
  )
}

export default Auth;