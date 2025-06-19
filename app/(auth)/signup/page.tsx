"use client"

import { useState } from "react"
import { Eye, EyeOff, User, Building2 } from "lucide-react"
import Link from "next/link"

export default function SignupPage() {
  const [userType, setUserType] = useState<"customer" | "provider">("customer")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100">


      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8">
          {/* Page Title */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Your Account</h1>
          </div>

          {/* User Type Toggle */}
          <div className="mb-8">
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setUserType("customer")}
                className={`flex-1 flex items-center cursor-pointer justify-center py-3 px-4 rounded-md text-sm font-medium transition-all ${userType === "customer" ? "bg-white text-gray-900 shadow-sm" : "text-gray-600 hover:text-gray-900"
                  }`}
              >
                <User className="w-4 h-4 mr-2" />
                Customer Registration
              </button>
              <button
                onClick={() => setUserType("provider")}
                className={`flex-1 flex items-center cursor-pointer justify-center py-3 px-4 rounded-md text-sm font-medium transition-all ${userType === "provider" ? "bg-white text-gray-900 shadow-sm" : "text-gray-600 hover:text-gray-900"
                  }`}
              >
                <Building2 className="w-4 h-4 mr-2" />
                Service Provider
              </button>
            </div>
          </div>

          {/* Form */}
          <form className="space-y-6">
            {/* Basic Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name *</label>
                <input
                  id="firstName"
                  type="text"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name *</label>
                <input
                  id="lastName"
                  type="text"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address *</label>
              <input
                id="email"
                type="email"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number *</label>
              <input
                id="phone"
                type="tel"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Password Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password *</label>
                <div className="relative mt-1">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    required
                    className="block w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-400" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password *</label>
                <div className="relative mt-1">
                  <input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    required
                    className="block w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-400" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Customer-specific fields */}
            {userType === "customer" && (
              <>
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
                  <input
                    id="location"
                    type="text"
                    placeholder="City, State"
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="interests" className="block text-sm font-medium text-gray-700">Areas of Interest</label>
                  <div className="mt-2 grid grid-cols-2 md:grid-cols-3 gap-3">
                    {[
                      "Residential Design",
                      "Commercial Design",
                      "Kitchen Design",
                      "Bathroom Design",
                      "Furniture Design",
                      "Lighting Design",
                    ].map((interest) => (
                      <div key={interest} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id={interest.toLowerCase().replace(" ", "-")}
                          className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <label htmlFor={interest.toLowerCase().replace(" ", "-")} className="text-sm text-gray-700">
                          {interest}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* Service Provider-specific fields */}
            {userType === "provider" && (
              <>
                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">Company Name *</label>
                  <input
                    id="companyName"
                    type="text"
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label htmlFor="businessType" className="block text-sm font-medium text-gray-700">Business Type *</label>
                    <select
                      id="businessType"
                      required
                      className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select business type</option>
                      <option value="individual">Individual Designer</option>
                      <option value="studio">Design Studio</option>
                      <option value="firm">Design Firm</option>
                      <option value="contractor">Contractor</option>
                      <option value="retailer">Furniture Retailer</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium text-gray-700">Years of Experience *</label>
                    <select
                      id="experience"
                      required
                      className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select experience</option>
                      <option value="0-1">0-1 years</option>
                      <option value="2-5">2-5 years</option>
                      <option value="6-10">6-10 years</option>
                      <option value="10+">10+ years</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="services" className="block text-sm font-medium text-gray-700">Services Offered *</label>
                  <div className="mt-2 grid grid-cols-2 md:grid-cols-3 gap-3">
                    {[
                      "Interior Design",
                      "Space Planning",
                      "Color Consultation",
                      "Furniture Selection",
                      "Project Management",
                      "3D Visualization",
                    ].map((service) => (
                      <div key={service} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id={service.toLowerCase().replace(" ", "-")}
                          className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <label htmlFor={service.toLowerCase().replace(" ", "-")} className="text-sm text-gray-700">
                          {service}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>


                <div>
                  <label htmlFor="bio" className="block text-sm font-medium text-gray-700">Professional Bio</label>
                  <textarea
                    id="bio"
                    placeholder="Tell us about your experience and design philosophy..."
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    rows={4}
                  />
                </div>

              </>
            )}

            {/* Terms and Conditions */}
            <div className="flex items-start space-x-2">
              <input
                type="checkbox"
                id="terms"
                required
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="terms" className="text-sm text-gray-700 leading-5">
                I agree to the{" "}
                <Link href="/terms" className="text-blue-600 hover:text-blue-700">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-blue-600 hover:text-blue-700">
                  Privacy Policy
                </Link>
              </label>
            </div>


            <div className="text-sm text-gray-600 flex items-end justify-end pt-5 w-full gap-1">
              Already have an account?{" "}
              <Link href="/login" className="text-blue-600 hover:text-blue-700 font-medium">
                Login
              </Link>
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-3 px-4 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
            >
              Create Account
            </button>
          </form>

        </div>
      </div>
    </div>
  )
}