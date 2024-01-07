import React, { useState } from 'react';

const Card = ({ data }) => {
    const [showMoreDes, setShowMoreDes] = useState(false);
    const displayDescription = showMoreDes
        ? data?.description
        : data?.description
        ? data?.description.slice(0, 100)
        : '';

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg mt-10">
            <img className="w-full h-48" src={data.image_url} alt={data.title} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 justify-start">{data.title}</div>
                <div className="text-gray-700 text-base">
                {displayDescription}
                    {data?.description && data?.description.length > 100 && (
                        <div>
                            <button
                            onClick={() => setShowMoreDes(!showMoreDes)}
                            className="font-semibold p-0.5 rounded-sm mb-2 b text-teal-700 cursor-pointer underline"
                        >
                            {showMoreDes ? "Read Less" : "Read More"}
                        </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Card;