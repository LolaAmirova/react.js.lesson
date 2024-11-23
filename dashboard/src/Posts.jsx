import React, { useState } from 'react';

const Posts = () => {
    const [data, setData] = useState(null);
    const [gorod, setGorod] = useState('');

    const SearchGorod = async () => {
        const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${gorod}&days=3`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '9ba4fca862mshb9b777f0678dc30p179d40jsn6a6ca73e9c81',
                'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            if (!response.ok) throw new Error('Network response was not ok');
            const malumot = await response.json();
            setData(malumot);
        } catch (error) {
            console.error("Error fetching weather data:", error);
            setData(null);
        }
    };

    return (
        <div className="bg-white mt-8 w-full max-w-3xl p-6 rounded-xl mx-auto shadow-lg">
            <div className="flex items-center justify-center space-x-3 mb-6">
                <input
                    onChange={(e) => setGorod(e.target.value)}
                    className="w-full max-w-sm px-4 py-3 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text"
                    placeholder="Enter city "
                />
                <button
                    onClick={SearchGorod}
                    className="px-4 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200"
                >
                    Search
                </button>
            </div>

            {data ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {data.forecast.forecastday.map((day, index) => (
                        <div key={index} className="bg-gray-100 p-5 rounded-lg shadow-md text-center">
                            <h2 className="text-xl font-semibold mb-2">
                                {new Date(day.date).toLocaleDateString('en-US', { weekday: 'long' })}
                            </h2>
                            <p className="text-gray-600 mb-3">{day.day.condition.text}</p>
                            <img src={day.day.condition.icon} alt="weather icon" className="mx-auto mb-3" />
                            <p className="text-2xl font-bold text-blue-500">{day.day.avgtemp_c}°C</p>
                            <p className="text-gray-500 text-sm mb-3">{data.location.name}, {data.location.country}</p>
                            <div className="text-sm text-gray-600 space-y-1">
                                <p>🌬️ Wind: {day.day.maxwind_kph} kph</p>
                                <p>💧 Humidity: {day.day.avghumidity}%</p>
                                <p>🌡️ Pressure: {day.day.pressure_mb} mb</p>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="mt-6 text-center text-gray-500">
                  
                </p>
            )}
        </div>
    );
};

export default Posts;


