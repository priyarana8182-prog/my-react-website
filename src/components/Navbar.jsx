import React from 'react';
import { Settings, Mail, Bell, User, Menu } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = ({ toggleSidebar }) => {
    return (
        <nav className="fixed top-0 w-full bg-white shadow-md px-4 py-1 border-b border-gray-800 flex items-center justify-between z-40 mb-[4px]">
         





        {/* Logo + Sidebar Toggle */}
            <div className="flex items-center space-x-4">
                <button
                    onClick={toggleSidebar}
                    className="lg:hidden p-1 hover:bg-gray-100"
                    aria-label="Toggle sidebar"
                >
                    <Menu size={22} />
                </button>
                <img src={logo} alt="Logo" className="w-32 sm:w-40 p-2" />
            </div>

            {/* Icons - Now visible on all devices */}
            <div className="flex items-center space-x-4">
                <button className="hover:text-red-600 transition" aria-label="User profile">
                    <User size={20} />
                </button>
                <button className="hover:text-red-600 transition" aria-label="Messages">
                    <Mail size={20} />
                </button>
                <button className="hover:text-red-600 transition" aria-label="Notifications">
                    <Bell size={20} />
                </button>
                <button className="hover:text-red-600 transition" aria-label="Settings">
                    <Settings size={20} />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
