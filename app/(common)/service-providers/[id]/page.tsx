"use client"

import Link from "next/link"
import { MapPin, Briefcase, Star, Upload, Mail, Phone } from "lucide-react"

export default function ProviderDetailsPage() {
    // Sample provider data (in a real app, this would come from props or a data fetch)
    const provider = {
        id: "elite-interiors",
        name: "Elite Interiors",
        location: "Chicago, IL",
        services: ["Interior Design", "Space Planning", "Color Consultation"],
        experience: "8 Years",
        rating: "4.8/5 (120 reviews)",
        description: "Specializing in modern residential design, Elite Interiors transforms spaces into elegant, functional environments with a focus on client satisfaction and innovative design solutions.",
        bio: "Elite Interiors was founded in 2017 with a mission to bring modern, sustainable design to homes across Chicago. Our team of experienced designers works closely with clients to create personalized spaces that reflect their unique style and needs. We pride ourselves on attention to detail and a commitment to quality.",
        portfolio: [
            { id: 1, title: "Modern Loft Renovation", image: "/portfolio/loft.jpg", description: "A complete redesign of a downtown Chicago loft, featuring open-concept living and custom furniture." },
            { id: 2, title: "Cozy Family Home", image: "/portfolio/family-home.jpg", description: "Transformed a suburban home with warm tones and functional spaces for a growing family." },
        ],
        contact: {
            email: "contact@eliteinteriors.com",
            phone: "(312) 555-1234",
            website: "https://eliteinteriors.com",
        },
        initial: "E",
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="flex items-center justify-between">
                        <Link href="/service-providers" className="text-white hover:text-gray-200">
                            ← Back to Service Providers
                        </Link>
                        <div className="flex items-center space-x-4">
                            <button className="text-gray-200 hover:text-white">
                                <Star className="w-5 h-5 mr-1 inline-block" />
                                Save Provider
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Provider Overview */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
                    <div className="flex items-start space-x-6">
                        <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-bold text-lg">{provider.initial}</span>
                        </div>
                        <div className="flex-1">
                            <h1 className="text-3xl font-bold text-gray-900 mb-2">{provider.name}</h1>
                            <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                                <div className="flex items-center">
                                    <MapPin className="w-4 h-4 mr-1" />
                                    {provider.location}
                                </div>
                                <div className="flex items-center">
                                    <Star className="w-4 h-4 mr-1 text-yellow-400" />
                                    {provider.rating}
                                </div>
                            </div>
                            <p className="text-gray-600">{provider.description}</p>
                        </div>
                    </div>
                </div>

                {/* Provider Details */}
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* About Section */}
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">About {provider.name}</h2>
                            <p className="text-gray-600">{provider.bio}</p>
                        </div>

                        {/* Services Offered */}
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">Services Offered</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {provider.services.map((service, index) => (
                                    <div key={index} className="flex items-center space-x-2">
                                        <Briefcase className="w-4 h-4 text-blue-600" />
                                        <span className="text-gray-700">{service}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Portfolio */}
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">Portfolio</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {provider.portfolio.map((project) => (
                                    <div key={project.id} className="space-y-2">
                                        <div className="w-full h-48 bg-gray-200 rounded-md flex items-center justify-center">
                                            <span className="text-gray-500">[Image: {project.title}]</span>
                                        </div>
                                        <h3 className="text-lg font-medium text-gray-900">{project.title}</h3>
                                        <p className="text-sm text-gray-600">{project.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-8">
                            {/* Contact Information */}
                            <div className="mb-6">
                                <h2 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h2>
                                <div className="space-y-3">
                                    <div className="flex items-center space-x-2">
                                        <Mail className="w-4 h-4 text-gray-600" />
                                        <a href={`mailto:${provider.contact.email}`} className="text-blue-600 hover:text-blue-700">{provider.contact.email}</a>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Phone className="w-4 h-4 text-gray-600" />
                                        <a href={`tel:${provider.contact.phone}`} className="text-blue-600 hover:text-blue-700">{provider.contact.phone}</a>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                        </svg>
                                        <a href={provider.contact.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">{provider.contact.website}</a>
                                    </div>
                                </div>
                            </div>

                            {/* Experience */}
                            <div className="mb-6">
                                <h2 className="text-lg font-semibold text-gray-900 mb-4">Experience</h2>
                                <div className="flex items-center space-x-2">
                                    <Briefcase className="w-4 h-4 text-gray-600" />
                                    <span className="text-gray-700">{provider.experience}</span>
                                </div>
                            </div>

                            {/* Contact Button */}
                            <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                                Contact Provider
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}