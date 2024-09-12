import React from 'react';
import { Star, Clock, User, ChevronRight } from 'lucide-react';

const CoursePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-navy-900 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">🚀 Hands-On Heroes</h1>
          <div className="flex space-x-4">
            <button className="p-2"><Star size={24} /></button>
            <button className="p-2">...</button>
            <button className="p-2">🔍</button>
            <button className="p-2">🔔</button>
            <button className="p-2">👤</button>
          </div>
        </div>
      </header>

      <nav className="bg-gray-200 p-2">
        <div className="container mx-auto">
          <p className="text-sm">Home &gt; All Courses &gt; This course name</p>
        </div>
      </nav>

      <main className="flex-grow container mx-auto mt-8 px-4">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-2/3 pr-8">
            <h2 className="text-sm text-gray-600">Central Education Ministry</h2>
            <h1 className="text-4xl font-bold mt-2 mb-4">This course name</h1>
            <p className="text-gray-700 mb-4">The basic detail of course lorem45 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
            
            <div className="flex items-center space-x-6 mb-4">
              <div className="flex items-center">
                <User size={20} className="mr-2" />
                <span>Instructor : Arush Menaria</span>
              </div>
              <div className="flex items-center">
                <User size={20} className="mr-2" />
                <span>173+ Learners</span>
              </div>
              <div className="flex items-center">
                <Clock size={20} className="mr-2" />
                <span>Duration : 1 month</span>
              </div>
            </div>
            
            <div className="flex items-center mb-6">
              <span className="text-yellow-500 font-bold mr-2">4.8</span>
              <Star size={20} fill="yellow" color="yellow" />
              <span className="ml-2 text-gray-600">105 students</span>
            </div>

            <div className="mb-8">
              <div className="flex space-x-4 border-b">
                <button className="py-2 px-4 border-b-2 border-blue-500 font-semibold">About Course</button>
                <button className="py-2 px-4">Prerequisites</button>
                <button className="py-2 px-4">Labs</button>
                <button className="py-2 px-4">Test page</button>
                <button className="py-2 px-4">Material</button>
              </div>
              <div className="mt-4">
                <h3 className="font-semibold mb-2">The basic detail of course lorem45</h3>
                <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
                <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
                <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/3">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-semibold mb-4">This Course Includes :</h3>
              <ul className="space-y-2">
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span> 10.4 hours on-demand videos</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span> 15 Study labs</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span> Industrial resources access</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span> Certificate of completion</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span> Badges and many more !</li>
              </ul>
              <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded mt-6 flex items-center justify-center">
                <span className="mr-2">Interactive Learning</span>
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CoursePage;