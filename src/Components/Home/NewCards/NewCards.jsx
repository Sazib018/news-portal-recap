import React from 'react';
import { FaEye, FaShareAlt, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NewCards = ({ article }) => {
  return (
    <div className="max-w-[558px] bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={article.author.img}
            alt={article.author.name}
            className="w-10 h-10 rounded-full"
          />
          <div className="ml-3">
            <h3 className="text-sm font-semibold">{article.author.name}</h3>
            <p className="text-xs text-gray-500">
              {new Date(article.author.published_date).toDateString()}
            </p>
          </div>
        </div>
        <FaShareAlt className="text-gray-500 cursor-pointer" />
      </div>

      <div className="px-4">
        <h2 className="text-lg font-bold leading-tight mb-2">{article.title}</h2>
      </div>

      <img
        src={article.image_url}
        alt="News Thumbnail"
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <p className="text-sm text-gray-700 mb-2">
          {article.details.substring(0, 150)}...
        </p>
        <Link to={`/newsDetails/${article._id}`}>
          <button className="text-orange-500 font-semibold">Read More</button>
        </Link>
      </div>

      <div className="px-4 py-2 flex items-center justify-between border-t">
        <div className="flex items-center">
          <FaStar className="text-orange-500 mr-1" />
          <FaStar className="text-orange-500 mr-1" />
          <FaStar className="text-orange-500 mr-1" />
          <FaStar className="text-orange-500 mr-1" />
          <FaStar className="text-orange-500 mr-1" />
          <span className="text-sm font-semibold">{article.rating.number}</span>
        </div>
        <div className="flex items-center">
          <FaEye className="text-gray-500 mr-1" />
          <span className="text-sm font-semibold">{article.total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewCards;
