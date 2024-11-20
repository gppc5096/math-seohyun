import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-purple-600">
            서현이의 수학모험
          </Link>
          <div className="flex space-x-4">
            <Link to="/garden" className="text-gray-600 hover:text-purple-600">
              수학성적표 📊
            </Link>
            <Link to="/study" className="text-gray-600 hover:text-purple-600">
              학습하기 ✏️
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 