import { Utensils } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
    return (

        <Link href="/" className="flex items-center ">
            <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">RNT</span>
            </div>
        </Link>
    );
};

export default Logo;