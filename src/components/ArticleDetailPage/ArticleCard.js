import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function ArticleCard({ userName, data, handleUpdateNews, handleDeleteNews }) {
    // const displayDescription = showMoreDes
    //     ? data?.description
    //     : data?.description
    //         ? data?.description.slice(0, 100)
    //         : '';
    const displayDescription = data?.description.slice(0, 110);

    // console.log("ashif", data)
    const navigate = useNavigate();
    const location = useLocation();
    const user_info = location.state?.userName;
    
    const handleClick = (id)=>{
        const blogClickId = id;
        navigate(`/article-detail-page`, { state : { blogClickId : id, user_info: user_info } })
    }
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg mt-10">
            <img className="w-full h-48" src={data?.image_url ? data.image_url : ""} alt="ima.jpeg" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 justify-start">{data?.title}</div>
                <div className="text-gray-700 text-base">
                    {displayDescription}
                </div>
                <button className='text-purple-500 text-sm mt-2' onClick={()=>handleClick(data._id)}>Read more</button>
            </div>
            <div className='flex justify-between items-center p-2'>
                <button
                    className="bg-sky-300 hover:bg-sky-700 hover:text-white font-bold py-2 px-4 rounded mb-2"
                    onClick={() => handleUpdateNews(data._id)}
                >
                    Update
                </button>
                <button
                    className="bg-yellow-500 hover:bg-yellow-600 hover:text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleDeleteNews(data._id)}
                >
                    Delete
                </button>
            </div>
        </div>
    )
}
