import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewCards from '../NewCards/NewCards';

const HomeMiddle = () => {

    const data = useLoaderData()
    console.log(data.data);

    return (
        <div>
            <h2 className='text-xl font-semibold text-[#403F3F] mb-5'>Dragon News Home</h2>
            <div className='w-[558px] space-y-6'>
                {
                    data?.data?.map(newsInfo =><NewCards
                        key={newsInfo._id}
                        article={newsInfo}
                    ></NewCards>)
                }
            </div>
        </div>
    );
};

export default HomeMiddle;