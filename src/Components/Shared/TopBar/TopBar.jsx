import React from 'react';
import theDaily from "../../../../public/assets/logo.png";
import moment from 'moment';


const TopBar = () => {

    const dayPick = moment().format("dddd, MMMM D, YYYY");
    return (
        <div className='mt-[50px]'>
           <img src={theDaily} alt="" /> 
           <p className='text-[#706F6F] text-[18px] text-center mt-5'>Journalism Without Fear or Favour</p>
           <p className='text-center mt-[10px] text-xl font-medium'>{dayPick}</p>
        </div>
    );
};

export default TopBar;