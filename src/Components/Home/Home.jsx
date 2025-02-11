import React from 'react';
import TopBar from '../Shared/TopBar/TopBar';
import NavBar from '../Shared/NavBar/NavBar';
import Marquee from 'react-fast-marquee';
import HomeLayout from '../../Layouts/HomeLayout';

const Home = () => {
    return (
        <div className='max-w-[1140px] mx-auto'>
           <div className='flex justify-center'>
           <TopBar></TopBar>
           </div>

           <div className='flex gap-2 items-center bg-[#F3F3F3] p-4 mt-[30px]'>

           <button className='bg-[#D72050] text-base font-medium text-[#FFFFFF] px-6 py-[9px]'>Letest</button>
                <Marquee speed={100} pauseOnHover={true}>
                <p className='text-[#403F3F] text-[18px] font-semibold'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
                </Marquee>
           </div>

           <div className='mt-[21px]'>
            <NavBar></NavBar>
           </div>
           <div className='mt-20'>
            <HomeLayout></HomeLayout>
           </div>
        </div>
    );
};

export default Home;