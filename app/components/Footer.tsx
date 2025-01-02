import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="flex justify-between items-center p-4   mt-10">
            {/* Left Side: Homepage Link */}
            <div className="ml-4">
                <a href="/" className="text-primary text-md font-bold hover:underline">
                    Home
                </a>
            </div>

            {/* Middle: Copyright */}
            <div className="text-center">
                <p className="">
                    &copy; {new Date().getFullYear()} My Blog. All rights reserved.
                </p>
            </div>

            {/* Right Side: Social Media Links */}
            <div className="mr-4 flex space-x-4">
                <a href="https://github.comimport React from 'react" target="_blank" rel="noopener noreferrer" className=" hover:text-blue-600">
                    <FaGithub />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className=" hover:text-blue-600">
                    <FaLinkedin />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className=" hover:text-blue-600">
                    <FaTwitter />
                </a>
            </div>
        </footer>
    );
}