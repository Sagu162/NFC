import { useState } from "react";
import { MagnifyingGlassIcon, UserCircleIcon, ChevronDownIcon } from "@heroicons/react/24/solid";

const TopBar = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    return (
        <div className="flex justify-between items-center bg-widget shadow-card px-6 py-3">
            {/* Empty div for spacing */}
            <div></div>

            {/* Right Side: Profile & Search Bar */}
            <div className="flex items-center gap-4">
                {/* Profile Dropdown */}
                <div className="relative">
                    <button
                        onClick={() => setDropdownOpen(!isDropdownOpen)}
                        className="flex items-center gap-2 text-primary hover:text-heading transition"
                    >
                        <UserCircleIcon className="w-8 h-8 text-primary" />
                        <span className="hidden md:block font-medium">Admin</span>
                        <ChevronDownIcon className="w-5 h-5 text-muted" />
                    </button>

                    {/* Dropdown Menu */}
                    {isDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-40 bg-widget border border-border shadow-widget rounded-lg py-2">
                            <a href="#" className="block px-4 py-2 text-primary hover:bg-background">Profile</a>
                            <a href="#" className="block px-4 py-2 text-primary hover:bg-background">Settings</a>
                            <a href="#" className="block px-4 py-2 text-red-500 hover:bg-red-100">Logout</a>
                        </div>
                    )}
                </div>

                {/* Search Bar (Styled to Match Theme) */}
                <div className="flex items-center border border-border-dark rounded-lg px-3 py-1 w-48 bg-background shadow-sm">
                    <MagnifyingGlassIcon className="w-5 h-5 text-muted" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="ml-2 w-full bg-transparent focus:outline-none text-primary text-sm"
                    />
                </div>
            </div>
        </div>
    );
};

export default TopBar;
