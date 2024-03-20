import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { NETFLIX_LOGO } from '../utils/constants';

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(store => store.user)

    const handleSignedOut = () => {
        signOut(auth).then(() => {}).catch((error) => {
            console.log(error.message);
          });
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
        if (user) {
          //Signin / Signup
            const {uid,email,displayName} = user;
            dispatch(addUser({uid:uid,email:email,displayName:displayName}));
            navigate("/browse");
        } else {
            // Signed out
            dispatch(removeUser());
            navigate("/");
        }
        });

        return () => unsubscribed();
      },[])
  return (
    <div className='absolute pl-24 py-3 bg-gradient-to-b from-black w-screen z-10 flex justify-between items-center'>
        <img alt='netflix-logo' src={NETFLIX_LOGO} className='w-56'></img>
        {user && <div className='mr-6'>
            <button className='font-bold text-2xl' onClick={handleSignedOut}>Sign Out</button>
        </div>}
    </div>
  )
}

export default Header