import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const DetailsCard = () => {
    const [newsInfo , setNewsInfo] = useState([])
    const params = useParams();
   
    

    useEffect(()=>{
        fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
        .then(res => res.json())
        .then(data => setNewsInfo(data.data[0]))
    },[])
    return (
        <div className="max-w-4xl mx-auto mt-10 font-poppins">
      <h2 className="text-xl font-bold text-[#403F3F]">Dragon News</h2>
      <div className="border border-gray-200 rounded-lg shadow-md p-5 mt-4">
        <img
          src={newsInfo.image_url} 
          alt="News" 
          className="rounded-lg"
        />
        <h3 className="text-2xl font-semibold text-[#403F3F] mt-5">
            {newsInfo.title}

        </h3>
        <p className="text-[#403F3F] mt-4">
        {newsInfo.details}
        </p>
       <Link to={`/newCards/${newsInfo._id}`} > <button className="mt-5 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
          ← All news in this category
        </button></Link>
      </div>
    </div>
    );
};

export default DetailsCard;