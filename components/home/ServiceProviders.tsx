/*eslint-disable*/
"use client"
import React from "react";
import { Bookmark, MapPin, Star } from "lucide-react";
import ContainerWrapper from "../common/ContainerWrapper";

const services = [
    {
        name: "PowerFix",
        profession: "Electrician",
        rate: "$20/hr",
        location: "Dhaka, Bangladesh",
        experience: "5+ years",
        rating: "4.8",
        logo: "", // Optional: logo URL or leave empty for initials
    },
    {
        name: "PipeMaster",
        profession: "Plumber",
        rate: "$25/hr",
        location: "Chattogram, Bangladesh",
        experience: "7+ years",
        rating: "4.9",
        logo: "",
    },
    // Add more service providers...
];

const ServiceProviders = () => {
    const handleSave = (name: any) => {
        alert(`Saved ${name}`);
    };

    const handleHire = (name: any) => {
        alert(`Hire request sent to ${name}`);
    };

    return (

        <div className="py-16 w-full bg-gray-50">
            <ContainerWrapper>
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900">Explore Popular Service Providers</h2>
                    <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50 transition">
                        View All Providers
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-lg shadow-sm border border-gray-100 p-5 hover:shadow-md transition-shadow"
                        >
                            <div className="flex justify-between items-start">
                                {/* Logo */}
                                <div className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
                                    {service.logo ? (
                                        <img
                                            src={service.logo}
                                            alt={`${service.name} logo`}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <span className="text-white font-bold text-sm">{service.name.charAt(0)}</span>
                                    )}
                                </div>

                                {/* Save Button */}
                                <button
                                    onClick={() => handleSave(service.name)}
                                    className="text-gray-400 hover:text-gray-600 flex items-center text-sm font-medium"
                                    aria-label="Save service provider"
                                >
                                    Save <Bookmark className="ml-1 w-4 h-4" />
                                </button>
                            </div>

                            {/* Provider Name and Posted Time */}
                            <div className="mt-3 flex items-center">
                                <h3 className="font-medium text-gray-900">{service.name}</h3>
                            </div>

                            {/* Profession */}
                            <h2 className="text-xl font-bold text-gray-900 mt-1">{service.profession}</h2>

                            {/* Tags: Experience and Rating */}
                            <div className="mt-3 flex flex-wrap gap-2">
                                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm cursor-default">
                                    {service.experience} experience
                                </span>
                                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm flex items-center gap-1 cursor-default">
                                    <Star className="w-4 h-4 text-yellow-400" />
                                    {service.rating} / 5
                                </span>
                            </div>

                            {/* Rate and Location */}
                            <div className="mt-4 flex justify-between items-end">
                                <div>
                                    <div className="text-gray-900 font-bold">{service.rate}</div>
                                    <div className="text-gray-500 text-sm flex items-center gap-1">
                                        <MapPin className="w-4 h-4" /> {service.location}
                                    </div>
                                </div>

                                {/* Hire Button */}
                                <button
                                    onClick={() => handleHire(service.name)}
                                    className="bg-black hover:bg-gray-800 text-white rounded-md px-4 py-2"
                                >
                                    Hire Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </ContainerWrapper>
        </div>

    );
};

export default ServiceProviders;
