"use client"

import { Search, MapPin, Upload, Bookmark } from "lucide-react"
import Link from "next/link"

export default function ServiceProvidersPage() {
    const providers = [
        {
            id: "elite-interiors",
            name: "Elite Interiors",
            location: "Chicago, IL",
            services: "Interior Design, Space Planning",
            experience: "8 Years",
            rating: "4.8/5 (120 reviews)",
            description: "Specializing in modern residential design",
            initial: "E",
        },
        {
            id: "styleworks-studio",
            name: "StyleWorks Studio",
            location: "Chicago, IL",
            services: "Furniture Selection, Color Consultation",
            experience: "5 Years",
            rating: "4.5/5 (85 reviews)",
            description: "Experts in eclectic and contemporary styles",
            initial: "S",
        },
        {
            id: "creative-designs",
            name: "Creative Designs Inc.",
            location: "Oak Brook, IL",
            services: "Project Management, 3D Visualization",
            experience: "12 Years",
            rating: "4.9/5 (200 reviews)",
            description: "Specializing in commercial spaces",
            initial: "C",
        },
        {
            id: "modern-spaces",
            name: "Modern Spaces",
            location: "Northbrook, IL",
            services: "Interior Design, Lighting Design",
            experience: "3 Years",
            rating: "4.3/5 (60 reviews)",
            description: "Focused on sustainable design solutions",
            initial: "M",
        },
    ]

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <h1 className="text-4xl font-bold text-center mb-8">Find Top Service Providers</h1>

                    {/* Search Bar */}
                    <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
                        <div className="flex-1 relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                placeholder="Search provider name, services, or company"
                                defaultValue="Interior Design"
                                className="pl-10 h-12 text-lg w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                        <div className="flex-1 relative">
                            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                placeholder="Location"
                                defaultValue="Chicago, IL"
                                className="pl-10 h-12 bg-white text-lg w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                        <button className="h-12 px-8 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                            Search
                        </button>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid lg:grid-cols-4 gap-8">
                    {/* Filters Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
                                <button className="text-blue-600 text-sm hover:text-blue-700">Clear All</button>
                            </div>

                            {/* Service Type Filter */}
                            <div className="mb-6">
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="font-medium text-gray-900">Service Type</h3>
                                    <button className="text-blue-600 text-xs hover:text-blue-700">Clear</button>
                                </div>
                                <div className="space-y-2">
                                    {[
                                        { id: "all-services", label: "All Services (150)", checked: true },
                                        { id: "interior-design", label: "Interior Design (80)" },
                                        { id: "space-planning", label: "Space Planning (45)" },
                                        { id: "color-consultation", label: "Color Consultation (30)" },
                                        { id: "furniture-selection", label: "Furniture Selection (25)" },
                                        { id: "project-management", label: "Project Management (20)" },
                                    ].map((service) => (
                                        <div key={service.id} className="flex items-center space-x-2">
                                            <input
                                                type="checkbox"
                                                id={service.id}
                                                defaultChecked={service.checked}
                                                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                            />
                                            <label htmlFor={service.id} className="text-sm text-gray-700">{service.label}</label>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Location Filter */}
                            <div className="mb-6">
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="font-medium text-gray-900">Location</h3>
                                    <button className="text-blue-600 text-xs hover:text-blue-700">Clear</button>
                                </div>
                                <div className="space-y-2">
                                    {[
                                        { id: "chicago", label: "Chicago, IL (150)", checked: true },
                                        { id: "niles", label: "Niles, IL (30)" },
                                        { id: "oak-brook", label: "Oak Brook, IL (25)" },
                                        { id: "northbrook", label: "Northbrook, IL (20)" },
                                        { id: "skokie", label: "Skokie, IL (15)" },
                                    ].map((location) => (
                                        <div key={location.id} className="flex items-center space-x-2">
                                            <input
                                                type="checkbox"
                                                id={location.id}
                                                defaultChecked={location.checked}
                                                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                            />
                                            <label htmlFor={location.id} className="text-sm text-gray-700">{location.label}</label>
                                        </div>
                                    ))}
                                    <button className="text-blue-600 text-xs hover:text-blue-700 mt-2">More +</button>
                                </div>
                            </div>

                            {/* Experience Filter */}
                            <div className="mb-6">
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="font-medium text-gray-900">Years of Experience</h3>
                                    <button className="text-blue-600 text-xs hover:text-blue-700">Clear</button>
                                </div>
                                <div className="space-y-2">
                                    {[
                                        { id: "all-experience", label: "All (150)", checked: true },
                                        { id: "0-2", label: "0-2 Years (20)" },
                                        { id: "3-5", label: "3-5 Years (50)" },
                                        { id: "6-10", label: "6-10 Years (40)" },
                                        { id: "10-plus", label: "10+ Years (40)" },
                                    ].map((exp) => (
                                        <div key={exp.id} className="flex items-center space-x-2">
                                            <input
                                                type="checkbox"
                                                id={exp.id}
                                                defaultChecked={exp.checked}
                                                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                            />
                                            <label htmlFor={exp.id} className="text-sm text-gray-700">{exp.label}</label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-3">


                        {/* Results Header */}
                        <div className="flex items-center justify-between mb-6">
                            <p className="text-gray-600">{providers.length} service providers found</p>
                            <div className="flex items-center space-x-2">
                                <span className="text-sm text-gray-600">Sort By:</span>
                                <select className="border border-gray-300 rounded px-3 py-1 text-sm">
                                    <option>Relevance</option>
                                    <option>Experience</option>
                                    <option>Rating</option>
                                </select>
                            </div>
                        </div>

                        {/* Service Provider Listings */}
                        <div className="space-y-4">
                            {providers.map((provider) => (
                                <div key={provider.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                                    <div className="flex items-start justify-between">
                                        <div className="flex items-start space-x-4">
                                            <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                                                <span className="text-white font-bold text-sm">{provider.initial}</span>
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-lg font-semibold text-gray-900 mb-1">{provider.name}</h3>
                                                <p className="text-gray-600 mb-3">{provider.location}</p>
                                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                                                    <div>
                                                        <span className="text-gray-500">Services</span>
                                                        <p className="font-medium">{provider.services}</p>
                                                    </div>
                                                    <div>
                                                        <span className="text-gray-500">Experience</span>
                                                        <p className="font-medium">{provider.experience}</p>
                                                    </div>
                                                    <div>
                                                        <span className="text-gray-500">Rating</span>
                                                        <p className="font-medium">{provider.rating}</p>
                                                    </div>
                                                </div>
                                                <p className="text-gray-500 text-sm mt-3">{provider.description}</p>
                                            </div>
                                        </div>
                                        <button className="text-gray-400 hover:text-gray-600">
                                            <Bookmark className="w-4 h-4 mr-1" />
                                            Save Provider
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Load More */}
                        <div className="text-center mt-8">
                            <button className="border border-gray-300 bg-white text-gray-700 py-2 px-8 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                                Load More Providers
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}