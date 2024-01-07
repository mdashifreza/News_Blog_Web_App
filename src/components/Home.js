import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { addData } from '../store/features/ApiData';
import Card from './Card';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

export default function Home() {
    const dispatch = useDispatch();
    useEffect(() => {
        const apiCall = async () => {
            try {
                const url = "https://impresario-global-backend.vercel.app/api/news-blog"
                const response = await axios.get(url);
                // console.log("ashif", response.data)
                dispatch(addData(response.data));
            } catch (err) {
                console.log("error found", err)
            }
        }
    apiCall();
    }, [dispatch])

    const blog_data = useSelector((state) => state.Api.newsData);
    // const token_user = useSelector((state)=> state.Api.token);
    // console.log("home", blog_data, token_user)

    const cardsPerPage = 2;
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(blog_data.length / cardsPerPage);

    const startIdx = (currentPage - 1) * cardsPerPage;
    const visibleData = blog_data.slice(startIdx, startIdx + cardsPerPage);

    const handlePageChange = (direction) => {
        if (direction === 'prev' && currentPage > 1) {
            setCurrentPage(currentPage - 1);
        } else if (direction === 'next' && currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div className="flex items-center justify-center">
            <div className="text-center bg-gray-200 p-2 rounded">
                <p className="text-lg mt-6 font-semibold">'Sign-Up or Log-in' to Post Blog, Edit and Delete
                </p>
                <div className="flex items-center mx-10 space-x-8 ">
                    {currentPage >= 1 && (
                        <button
                            onClick={() => handlePageChange('prev')}
                            className="p-2 bg-black text-white rounded"
                        >
                            <FaArrowAltCircleLeft/>
                        </button>
                    )}

                    <div className="flex flex-wrap gap-4 text-start">
                        {visibleData.map((data, index) => (
                            <Card key={index} data={data} />
                        ))}
                    </div>

                    {currentPage <= totalPages && (
                        <button
                            onClick={() => handlePageChange('next')}
                            className="p-2 bg-black text-white rounded"
                        >
                            <FaArrowAltCircleRight/>
                        </button>
                    )}
                </div>
                <p className='mt-5 mb-5 font-bold '>Page Number : {currentPage}</p>
            </div>
        </div>
    );
}
