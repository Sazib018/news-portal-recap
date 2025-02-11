import React from 'react';
import HomeLeft from '../Components/Home/HomeLeft/HomeLeft';
import { Outlet } from 'react-router-dom';
import RightNav from '../Components/Shared/RightNav/RightNav';

const HomeLayout = () => {
    return (
        <div className='flex justify-between gap-6'>
            <div className='max-w-[267px] mx-auto'>
                <HomeLeft></HomeLeft>
            </div>
            <Outlet></Outlet>
            <div>
                <RightNav></RightNav>
            </div>
        </div>
    );
};

export default HomeLayout;