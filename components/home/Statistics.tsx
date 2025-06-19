"use client";

import React from "react";
import { Briefcase, Layers, MapPin, Users } from "lucide-react";

const stats = [
    {
        id: 1,
        label: "Service Categories",
        value: "12",
        icon: <Layers className="w-6 h-6 text-gray-600" />,
        bg: "bg-gray-100",
    },
    {
        id: 2,
        label: "Active Providers",
        value: "3,245",
        icon: <Users className="w-6 h-6 text-gray-600" />,
        bg: "bg-blue-100",
    },
    {
        id: 3,
        label: "Total Customers",
        value: "8,742",
        icon: <Briefcase className="w-6 h-6 text-gray-600" />,
        bg: "bg-gray-100",
    },
    {
        id: 4,
        label: "Locations Covered",
        value: "45",
        icon: <MapPin className="w-6 h-6 text-gray-600" />,
        bg: "bg-gray-100",
    },
];

const Statistics = () => {
    return (
        <div className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                {stats.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                    >
                        <div className="flex items-center space-x-4">
                            <div
                                className={`w-12 h-12 ${item.bg} rounded-lg flex items-center justify-center flex-shrink-0`}
                            >
                                {item.icon}
                            </div>
                            <div className="min-w-0">
                                <div className="text-2xl font-bold text-gray-900">{item.value}</div>
                                <div className="text-sm text-gray-500">{item.label}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Statistics;
