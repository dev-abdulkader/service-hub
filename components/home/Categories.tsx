import React from 'react';
import ContainerWrapper from '../common/ContainerWrapper';
import { User } from 'lucide-react';

const serviceCategories = [
    { title: 'Electrician', providers: 1234 },
    { title: 'Plumber', providers: 928 },
    { title: 'AC & Fridge Technician', providers: 591 },
    { title: 'Carpenter', providers: 745 },
    { title: 'Painter', providers: 612 },
    { title: 'Home Cleaner', providers: 803 },
    { title: 'Mechanic', providers: 486 },
    { title: 'Gardener', providers: 231 },
    { title: 'CCTV Installer', providers: 177 },
    { title: 'Laundry Service', providers: 328 },
    { title: 'Cook/Chef', providers: 920 },
    { title: 'Pest Control Expert', providers: 189 },
];

const Categories = () => {
    return (
        <div className=" w-full">
            <div className="bg-gray-50 p-8">
                <ContainerWrapper>
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 pt-10">Most Popular Categories</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {serviceCategories.map((category, index) => (
                            <div key={index} className="flex justify-between bg-white items-center space-x-4 border p-3 rounded-lg">
                                <div className='space-y-1'>
                                    <h3 className="font-semibold text-gray-900 hover:text-blue-600 cursor-pointer transition-colors">
                                        {category.title}
                                    </h3>
                                    <p className="text-sm text-gray-500">{category.providers.toLocaleString()} Providers</p>
                                </div>
                                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <User className="w-6 h-6 text-gray-600" />
                                </div>
                            </div>
                        ))}
                    </div>
                </ContainerWrapper>
            </div>
        </div>
    );
};

export default Categories;
