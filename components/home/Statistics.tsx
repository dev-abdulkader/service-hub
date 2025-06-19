import React from 'react';
import {
    User,
    Briefcase,

} from "lucide-react"
const Statistics = () => {
    return (
        <div className=" w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                {/* Live Jobs */}
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Briefcase className="w-6 h-6 text-gray-600" />
                        </div>
                        <div className="min-w-0">
                            <div className="text-2xl font-bold text-gray-900">1,75,324</div>
                            <div className="text-sm text-gray-500">Live Job</div>
                        </div>
                    </div>
                </div>

                {/* Companies */}
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                                <span className="text-white text-xs font-bold">B</span>
                            </div>
                        </div>
                        <div className="min-w-0">
                            <div className="text-2xl font-bold text-gray-900">97,354</div>
                            <div className="text-sm text-gray-500">Companies</div>
                        </div>
                    </div>
                </div>

                {/* Candidates */}
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <User className="w-6 h-6 text-gray-600" />
                        </div>
                        <div className="min-w-0">
                            <div className="text-2xl font-bold text-gray-900">38,47,154</div>
                            <div className="text-sm text-gray-500">Candidates</div>
                        </div>
                    </div>
                </div>

                {/* New Jobs */}
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Briefcase className="w-6 h-6 text-gray-600" />
                        </div>
                        <div className="min-w-0">
                            <div className="text-2xl font-bold text-gray-900">7,532</div>
                            <div className="text-sm text-gray-500">New Jobs</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;