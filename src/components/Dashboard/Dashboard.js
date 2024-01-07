import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import ArticleCard from '../ArticleDetailPage/ArticleCard';
import CreateArticle from './CreateArticle';
import { useSelector, useDispatch } from 'react-redux';
import { addData } from '../../store/features/ApiData';
import axios from 'axios';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

export default function Dashboard() {
    const dispatch = useDispatch();
    const apiCall = async () => {
        try {
            const url = "https://impresario-global-backend.vercel.app/api/news-blog"
            const response = await axios.get(url);
            dispatch(addData(response.data));
        } catch (err) {
            console.log("error found", err)
        }
    }
    const blog_data = useSelector((state) => state.Api.newsData);
    // props receve from Sign in
    const location = useLocation();
    // const token = location.state?.token || null;
    const userName = location.state?.userName || null;
    const userName1 = location.state?.userName || null;
    // console.log("from dashboard:", userName);
    useEffect(() => {
        apiCall();
    }, [dispatch, userName])
    //
    const [isUpdateMode, setIsUpdateMode] = useState(false);
    const [selectedNewsId, setSelectedNewsId] = useState(null);

    //display data 
    const cardsPerPage = 2;
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(blog_data.length / cardsPerPage);

    const startIdx = (currentPage - 1) * cardsPerPage;
    const visibleData = blog_data.slice(startIdx, startIdx + cardsPerPage);
    // handle button
    const handlePageChange = (direction) => {
        if (direction === 'prev' && currentPage > 1) {
            setCurrentPage(currentPage - 1);
        } else if (direction === 'next' && currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const navigate = useNavigate();
    const handleBackButton = () => {
        navigate("/")
    }

    const [formData, setFormData] = useState({
        title: "",
        content: "",
        description: "",
        image_url: "",
        link: "",
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    // create blog:::
    const handleCreateNews = async () => {
        try {
            await axios.post("https://impresario-global-backend.vercel.app/api/create-article", formData);
            apiCall();
        } catch (error) {
            console.error("Error creating news:", error.message);
        }
    };

    //update blog:
    const handleUpdateButtonClick = (id) => {
        const selectedNews = blog_data.find((item) => item._id === id);
        setFormData(selectedNews);
        setIsUpdateMode(true);
        setSelectedNewsId(id);
    };

    const handleUpdateNews = async (id) => {
        try {
            await axios.put(`https://impresario-global-backend.vercel.app/api/create-article/${id}`, formData);
            apiCall();
        } catch (error) {
            console.error("Error updating news:", error.message);
        }
    };

    //delete blogs
    const handleDeleteNews = async (id) => {
        try {
            // console.log("delete id ", id)
            await axios.delete(`https://impresario-global-backend.vercel.app/api/delete-post/${id}`);
            apiCall();
        } catch (error) {
            console.error("Error deleting news:", error.message);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="text-center justify-start bg-gray-300">
                <div className='flex justify-between items-center bg-gray-400 mt-10 p-2 rounded'>
                    <div className='flex flex-col items-start p-2'>
                        <h1 className='font-bold text-3xl'>Dashboard</h1>
                        <h1 className='font-bold text-md'>Welcome : <span className='text-white capitalize'>{userName ? userName : userName1}</span></h1>
                    </div>
                    <button className='text-white bg-yellow-500 h-10 p-2 font-semibold rounded'
                        onClick={handleBackButton}
                    >Back To Home Page</button>
                </div>
                <div className="flex items-center mx-10 space-x-8 ">
                    {currentPage >= 1 && (
                        <button
                            onClick={() => handlePageChange('prev')}
                            className="p-2 bg-black text-white rounded"
                        >
                            <FaArrowAltCircleLeft />
                        </button>
                    )}

                    <div className="flex flex-wrap gap-4 text-start">
                        {visibleData.map((item) => (
                            <ArticleCard
                                userName={userName}
                                key={item._id}
                                data={item}
                                handleUpdateNews={() => handleUpdateButtonClick(item._id)}
                                handleDeleteNews={handleDeleteNews}
                            />
                        ))}
                    </div>

                    {currentPage <= totalPages && (
                        <button
                            onClick={() => handlePageChange('next')}
                            className="p-2 bg-black text-white rounded"
                        >
                            <FaArrowAltCircleRight />
                        </button>
                    )}
                </div>
                <p className='mt-5 mb-5 font-bold '>Page Number : {currentPage}</p>
            </div>
            <div className='mb-2 mt-2 w-1/2'>
                <CreateArticle
                    formData={formData}
                    handleInputChange={handleInputChange}
                    handleCreateNews={handleCreateNews}
                    isUpdateMode={isUpdateMode}
                    handleUpdateNews={() => {
                        handleUpdateNews(selectedNewsId);
                        setIsUpdateMode(false);
                        setSelectedNewsId(null);
                    }}
                />
            </div>
        </div>
    )
}
