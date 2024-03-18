import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage,setErrorMessage] = useState(null);
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = () => {
        // validate the email and password
        const message = checkValidData(email.current.value,password.current.value);
        setErrorMessage(message);
        if(message) return;

        if(!isSignInForm){
            // Sign Up logic
            createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode+"-"+errorMessage);
            });
        }   
        else{
            // Sign In logic
            signInWithEmailAndPassword(auth, email.current.value,password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode+"-"+errorMessage);
            });
        }

    }

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

  return (
    <div>
        <Header />
        <div className='absolute'>
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_medium.jpg'/>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className='absolute bg-black w-[28%] my-36 mx-auto right-0 left-0 px-20 py-6 flex flex-col bg-opacity-80 rounded-md'>
            <h1 className='text-white text-4xl font-bold my-5'>{isSignInForm? "Sign In" : "Sign Up"}</h1>
            {/* Input Field */}
            {!isSignInForm && 
            <input ref={name} type='text' placeholder='Name' className='text-white text-lg rounded-sm py-5 w-full border border-white border-solid px-2 my-3 font-bold placeholder:font-bold text-white bg-transparent text-xl'></input>}

            <input ref={email} type='text' placeholder='Email or phone number' className='text-white text-lg rounded-sm py-5 w-full border border-white border-solid px-2 my-3 font-bold placeholder:font-bold text-white bg-transparent text-xl'></input>
            
            <input ref={password} type="password" placeholder="Password" className="text-white text-lg rounded-sm py-5 w-full border border-white border-solid px-3 my-3 font-bold placeholder:font-bold text-white bg-transparent text-xl"></input>
            
            <p className='text-red-600 text-lg font-bold'>{errorMessage}</p>
            
            <button className='w-full bg-red-600 text-white my-2 rounded-sm py-3 font-bold text-lg' onClick={ handleButtonClick}>{isSignInForm? "Sign In" : "Sign Up"}</button>
            
            <p className='font-bold text-base text-white mx-auto my-2'>Forgot password?</p>
            
            <div className='mt-10 mb-2'>
                <input type='checkbox' className='inline mr-2 cursor-pointer h-4 w-4'/>
                <p className='text-xl text-white inline'>Remember me</p>
            </div>
            <div className='mb-10'>
                <p className='text-xl text-gray-300 inline mr-2'>{isSignInForm? "New to Netflix?" : "Already registered?"}</p>
                <p className='text-xl text-white inline cursor-pointer' onClick={toggleSignInForm}>
                    {isSignInForm? "Sign Up now.": "Sign In now."}</p>
            </div>
        </form>
    </div>
  )
}

export default Login