import { useState } from "react";
import { MagnifyingGlassIcon, UserCircleIcon, ChevronDownIcon } from "@heroicons/react/24/solid";

const TopBar = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    return (
        <div className="flex justify-between items-center bg-white shadow-md px-6 py-3">
            {/* Empty div for proper alignment */}
            <div></div>

            {/* Right Side: Profile & Search Bar */}
            <div className="flex items-center gap-4">
                {/* Profile Dropdown */}
                <div className="relative">
                    <button
                        onClick={() => setDropdownOpen(!isDropdownOpen)}
                        className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition"
                    >
                        <UserCircleIcon className="w-8 h-8 text-blue-500" />
                        <span className="hidden md:block font-medium">Admin</span>
                        <ChevronDownIcon className="w-5 h-5 text-gray-500" />
                    </button>

                    {/* Dropdown Menu */}
                    {isDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 shadow-lg rounded-lg py-2">
                            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Profile</a>
                            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Settings</a>
                            <a href="#" className="block px-4 py-2 text-red-500 hover:bg-red-100">Logout</a>
                        </div>
                    )}
                </div>

                {/* Search Bar (Smaller Size) */}
                <div className="flex items-center border border-gray-300 rounded-lg px-2 py-1 w-48 bg-white shadow-sm">
                    <MagnifyingGlassIcon className="w-5 h-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="ml-2 w-full bg-transparent focus:outline-none text-gray-700 text-sm"
                    />
                </div>
            </div>
        </div>
    );
};

export default TopBar;
