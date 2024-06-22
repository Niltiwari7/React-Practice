import React, { useState } from 'react';

export default function Counter() {
    const [value, setValue] = useState(0);

    const handleIncrement = () => {
        setValue((prev) => prev + 1);
    }

    const handleDecrement = () => {
        setValue((prev) => prev - 1);
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            <h1 className="text-center text-5xl font-bold text-white mb-12">
                Counter App
            </h1>
            <div className="flex items-center justify-center gap-8 bg-white p-10 rounded-lg shadow-lg">
                <button 
                    onClick={handleIncrement}
                    className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition duration-300 transform hover:scale-105 focus:outline-none"
                >
                    Increment
                </button>
                <div className="text-5xl font-extrabold text-gray-800 mx-4">
                    {value}
                </div>
                <button 
                    onClick={handleDecrement}
                    className="bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-600 transition duration-300 transform hover:scale-105 focus:outline-none"
                >
                    Decrement
                </button>
            </div>
        </div>
    );
}
