import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import userLogo from "../../../../public/assets/user.png";
import { AuthContext } from '../../../Provider/AuthProvider';

const NavBar = () => {

    const { user, logOut } = useContext(AuthContext)
    console.log(user);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                
            }).catch((error) => {

            });
    }
    return (
        <div className="flex items-center justify-between mt-6 px-4 py-4 gap-4">

            <div className='h-4 w-4'>
            {user && user.email}
            </div>
            <div className="flex gap-4 text-[#706F6F] text-lg ml-[140px] font-medium">
                <Link to={'/'}>Home</Link>
                <Link to={'/about'}>About</Link>
                <Link to={'/career'}>Career</Link>
            </div>
            <div className="flex items-center gap-3 ">
                <img
                    className="w-8 h-8"
                    src={userLogo} />
                {
                    user? 
                    <button onClick={()=> handleLogOut()} className="bg-[#403F3F] text-white text-lg font-semibold px-[42px] py-2">LogOut
                </button>
                :
                <Link to={"/login"}><button className='font-semibold text-white text-xl bg-[#403F3F] px-[42px] py-[8px]'>Login</button></Link>
                }
            </div>
        </div>
    );
};

export default NavBar;