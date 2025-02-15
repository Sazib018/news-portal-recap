import React, { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';


const RightNav = () => {
    const { signInWithGithub } = useContext(AuthContext);

    const handleGithubLogin = () => {
        signInWithGithub()
            .then(result => {
                console.log("User logged in:", result.user);
            })
            .catch(error => {
                console.error("GitHub login error:", error);
            });
    };

    return (
        <>
            <div className="flex items-center ">
            <div className="bg-white p-6 rounded-lg shadow-md w-80">
                <h2 className="text-lg font-bold text-gray-800 mb-4">Login With</h2>
                <button className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 border border-gray-500 rounded-md  ">
                    <img className="w-5 h-5 mr-2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/225px-Google_%22G%22_logo.svg.png"
                        alt="" />
                    Login with Google
                </button>
                <button onClick={ handleGithubLogin} className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 border border-gray-500 rounded-md mt-2">
                    <img className="w-5 h-5 mr-2" src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                        alt="" />
                    Login with GitHub
                </button>
            </div>
        </div>

        {/* Find Us */}
        <div className='h-[190px] mt-8'>
            <h3 className='text-[#403F3F] text-xl font-semibold'>Find Us On</h3>

            <div className=' rounded-[5px] border border-[#E7E7E7] p-[17px] mt-5'>
                <div className='flex gap-[10px] '>
                    <img className='w-7 h-7' src="https://i.ibb.co.com/7JM7XpM/download.png" alt="" />
                    <p>Facebook</p>
                </div>

                <div className='flex gap-[10px] mt-5'>
                    <img className='w-7 h-7' src="https://i.ibb.co.com/N6dQBPQ/Twitter.png" alt="" />
                    <p>Twitter</p>
                </div>

                <div className='flex gap-[10px] mt-5'>
                    <img className='w-7 h-7' src="https://i.ibb.co.com/PchBYp6/Instagram.png" alt="" />
                    <p>Instagram</p>
                </div>
            </div>
        </div>

        {/*  Q-Zone */}

        <div className='mt-12 bg-[#F3F3F3] '>
            <h2 className='text-[#403F3F] text-xl font-semibold p-4'>Q-Zone</h2>

            <div className='px-3 py-4'>
                <img src="https://i.ibb.co.com/Y2rhqz8/qZone1.png" alt="" />
                <img src="https://i.ibb.co.com/F3524bC/qZone2.png" alt="" />
                <img src="https://i.ibb.co.com/fXsLDzq/qZone3.png" alt="" />
            </div>
        </div>

        <div className='h-[500px] mt-7 flex justify-center items-center p-4 text-center ' style={{ backgroundImage: "url('https://i.ibb.co/8578mxb/bg.png')" }}>

            <div className='space-y-6'>
                <h2 className='text-[#fff] text-3xl font-bold'>Create an Amazing Newspaper</h2>

                <p className='text-[#fff] font-normal'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                <button className="bg-[#D72050] px-4 md:px-6 py-2 text-[#FFF] text-base md:text-xl font-medium">Learn More</button>
            </div>

        </div>
        </>
    );
};

export default RightNav;
