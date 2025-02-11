import React from 'react';
import TopBar from '../Shared/TopBar/TopBar';
import DetailsCard from './DetailsCard/DetailsCard';
import RightNav from '../Shared/RightNav/RightNav';

const NewsDetails = () => {
    return (
        <div className='w-[1140px] mx-auto'>
            <div className='flex justify-center'>
            <TopBar></TopBar>
            </div>
            <div className='flex gap-6'>
            <div className='max-w-[849px]'>
            <DetailsCard></DetailsCard></div>  
             <div className='justify-center max-w-[267px]'>
             <RightNav></RightNav> 
             </div>
            </div>
        </div>
    );
};

export default NewsDetails;