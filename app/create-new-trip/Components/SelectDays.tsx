import React, { useState } from "react";

function SelectDays({ onSelectedOption }: any) {
  const [days, setDays] = useState(1);

  const incrementDays = () => {
    const newDays = days + 1;
    setDays(newDays);
  };

  const decrementDays = () => {
    if (days > 1) {
      const newDays = days - 1;
      setDays(newDays);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value >= 1 && value <= 365) {
      setDays(value);
    }
  };

  const handleConfirm = () => {
      onSelectedOption(`${days} days`); 
  };

  return (
    <div className="flex flex-col items-center space-y-6 p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl shadow-xl max-w-sm mx-auto border border-blue-200">
      <div className="text-center">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Trip Duration
        </h3>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full mx-auto mt-2"></div>
      </div>

      <div className="flex items-center space-x-6">
        <button
          onClick={decrementDays}
          disabled={days <= 1}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-red-400 to-pink-500 text-white text-2xl font-bold hover:from-red-500 hover:to-pink-600 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105 disabled:hover:scale-100"
        >
          −
        </button>

        <div className="flex flex-col items-center">
          <div className="relative">
            <input
              type="number"
              value={days}
              onChange={handleInputChange}
              min="1"
              max="365"
              className="w-24 h-16 text-3xl text-black font-bold text-center bg-transparent border-3 border-blue-200 rounded-xl focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-200 shadow-inner transition-all duration-200"
            />
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-xl opacity-20 blur-sm"></div>
          </div>
          <span className="text-sm font-medium text-indigo-700 mt-2 px-3 py-1 bg-white/70 rounded-full">
            {days === 1 ? "day" : "days"}
          </span>
        </div>

        <button
          onClick={incrementDays}
          disabled={days >= 365}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 text-white text-2xl font-bold hover:from-green-500 hover:to-emerald-600 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105 disabled:hover:scale-100"
        >
          +
        </button>
      </div>

      <button
        onClick={handleConfirm}
        className="w-[60%] py-3 px-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-200"
      >
        Confirm {days} {days === 1 ? "Day" : "Days"}
      </button>
    </div>
  );
}

export default SelectDays;
