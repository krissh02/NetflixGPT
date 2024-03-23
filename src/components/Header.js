import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { NETFLIX_LOGO, SUPPORTED_LANG } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLang } from '../utils/configSlice';

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(store => store.user)
    const showGptSearch = useSelector(store=> store.gpt.showGptSearch);

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

    const handleGptSearchClick = () => {
      dispatch(toggleGptSearchView());
    }
    const handleChangeLang = (e) => {
      dispatch(changeLang(e.target.value));
    }
  return (
    <div className='absolute pl-16 py-3 bg-gradient-to-b from-black w-screen z-10 flex justify-between items-center flex-col md:flex-row'>
        {
          <a href='/browse'>
            <img alt='netflix-logo' src={NETFLIX_LOGO} className='w-24 md:w-48'></img>
          </a>
        }
        {user && <div className='mr-6 flex'>
            {showGptSearch && <select className='p-2 px-6 bg-gray-800 text-white text-md md:text-lg font-bold' onChange={handleChangeLang}>
              { SUPPORTED_LANG.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
            </select>}
            <button className='bg-purple-500 text-white rounded-lg px-3 md:px-4 py-1 md:py-2 mx-8 text-base md:text-xl font-bold hover:bg-opacity-75' onClick={handleGptSearchClick}>{showGptSearch? "Home Page": "Gpt Search"}</button>
            <button className='px-4 p-2 rounded-full font-bold bg-red-700 text-sm md:text-2xl text-white mr-10 hover:bg-white hover:text-red-700' onClick={handleSignedOut}>Sign Out</button>
        </div>}
    </div>
  )
}

export default Header