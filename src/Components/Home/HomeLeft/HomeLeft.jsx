import React, { useEffect, useState } from 'react';
import { IoCalendarClearOutline } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';

const HomeLeft = () => {

    const [category , setCategory] = useState([]);
    console.log(category);
    
    useEffect(() =>{
        fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => setCategory(data.data.news_category))
    },[])
    return (
        <div>
            <h2 className='text-xl font-semibold text-[#403F3F] mb-5'>All Category</h2>
            <div className='flex flex-col'>
                {
                    category?.map(cate => <NavLink to={`${cate.category_id}`} className={`"font-medium text-[#9F9F9F] text-xl  py-[17px] pl-[50px] rounded-[5px] w-[267px]`}>{cate.category_name}</NavLink>)
                }
            </div>
            <div className='mt-8 font-poppins'>
                <img src="https://i.ibb.co/Nt5H7GX/1.png" alt="" />
                <p className='text-[#403F3F] text-xl font-semibold my-5'>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                <div className='flex gap-5'>
                    <p className='text-[#403F3F] font-medium'>Sports</p>
                    <div className='flex items-center text-[#9F9F9F] gap-[10px]'>
                        <IoCalendarClearOutline />
                        <p className='font-medium'>Jan 4, 2022</p>
                    </div>
                </div>
            </div>
            <div className='mt-8 font-poppins'>
                <img src="https://i.ibb.co/ftXmGqd/2.png" alt="" />
                <p className='text-[#403F3F] text-xl font-semibold my-5'>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                <div className='flex gap-5'>
                    <p className='text-[#403F3F] font-medium'>Sports</p>
                    <div className='flex items-center text-[#9F9F9F] gap-[10px]'>
                        <IoCalendarClearOutline />
                        <p className='font-medium'>Jan 4, 2022</p>
                    </div>
                </div>
            </div>
            <div className='mt-8 font-poppins'>
                <img src="https://i.ibb.co/W0FcbR5/3.png" alt="" />
                <p className='text-[#403F3F] text-xl font-semibold my-5'>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                <div className='flex gap-5'>
                    <p className='text-[#403F3F] font-medium'>Sports</p>
                    <div className='flex items-center text-[#9F9F9F] gap-[10px]'>
                        <IoCalendarClearOutline />
                        <p className='font-medium'>Jan 4, 2022</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HomeLeft;