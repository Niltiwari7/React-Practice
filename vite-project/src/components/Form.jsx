import React, { useState } from 'react';

export default function Form() {
    const [formData, setFormData] = useState({});
    console.log(formData);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            <form className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Sign Up</h2>
                
                <div className="mb-4">
                    <input 
                        type="text" 
                        id="username" 
                        placeholder="Username"
                        onChange={handleChange} 
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                    />
                </div>

                <div className="mb-4">
                    <input 
                        type="email" 
                        id="email" 
                        placeholder="Email"
                        onChange={handleChange} 
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                    />
                </div>

                <div className="mb-6">
                    <input 
                        type="password" 
                        id="password" 
                        placeholder="Password"
                        onChange={handleChange} 
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                    />
                </div>

                <button 
                    type="submit" 
                    className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition duration-300"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
