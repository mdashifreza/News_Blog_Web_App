import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

export default function ArticleDetailPage() {
    const location = useLocation();
    const id = location.state?.blogClickId || null;
    const user_info = location.state?.user_info || null;
    console.log("articledeatil", user_info);

    const blog_data = useSelector((state) => state.Api.newsData);
    const filter_Value = blog_data.filter((item) => item._id === id)[0] || null;

    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate("/dashboard", {state : { user_info : user_info }})
    }
    return (
        <div className="container mx-auto my-8 p-4">
            <div className="mb-4 float-end">
                <button
                    onClick={handleGoBack}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
                >
                    Back
                </button>
            </div>
            {filter_Value ? (
                <div className="bg-white rounded-lg shadow-2xl p-6">
                    <img
                        src={filter_Value.image_url}
                        alt={filter_Value.title}
                        className="mb-4 w-full h-auto rounded-lg"
                    />
                    <h2 className="text-2xl font-bold mb-2"><span>Title:</span>{filter_Value.title}</h2>
                    <p className="text-gray-600 mb-4"><span>Description:</span>{filter_Value.description}</p>
                    <p className="text-gray-600 mb-4"><span>Content:</span>{filter_Value.content}</p>
                </div>
            ) : (
                <p className="text-red-500">Article not found</p>
            )}
        </div>
    );
}
