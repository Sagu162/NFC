import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
    HomeIcon, UserGroupIcon, AcademicCapIcon, CalendarIcon,
    BookOpenIcon, CreditCardIcon, ChartBarIcon, Cog6ToothIcon,
    BuildingLibraryIcon, ArrowLeftOnRectangleIcon, Bars3Icon
} from "@heroicons/react/24/solid";

const menuItems = [
    { name: "Overview", icon: HomeIcon, path: "/dashboard", color: "text-primary" },
    { name: "Departments", icon: BuildingLibraryIcon, path: "/departments", color: "text-purple-500" },
    { name: "Students", icon: AcademicCapIcon, path: "/students", color: "text-secondary" },
    { name: "Faculty", icon: UserGroupIcon, path: "/faculty", color: "text-accent" },
    { name: "Attendance", icon: CalendarIcon, path: "/attendance", color: "text-yellow-500" },
    { name: "Library", icon: BookOpenIcon, path: "/library", color: "text-indigo-500" },
    { name: "Cards", icon: CreditCardIcon, path: "/cards", color: "text-red-500" },
    { name: "Reports", icon: ChartBarIcon, path: "/reports", color: "text-teal-500" },
    { name: "Settings", icon: Cog6ToothIcon, path: "/settings", color: "text-gray-500" },
];

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);
    const location = useLocation(); // Get current route

    return (
        <div className={`bg-widget ${isOpen ? "w-64" : "w-20"} min-h-screen text-primary transition-all duration-300 shadow-widget flex flex-col`}>
            {/* Sidebar Header */}
            <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-2">
                    <div className="bg-background p-2 rounded-full shadow-card">
                        <HomeIcon className="text-primary w-6 h-6" />
                    </div>
                    {isOpen && <h1 className="text-lg font-heading">Admin Panel</h1>}
                </div>
                <button onClick={() => setIsOpen(!isOpen)} className="text-muted hover:text-heading">
                    <Bars3Icon className="w-7 h-7" />
                </button>
            </div>

            {/* Sidebar Menu */}
            <nav className="flex-1 mt-4">
                <ul className="space-y-2">
                    {menuItems.map((item, index) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <li key={index} className={`relative flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 
                                ${isActive ? "bg-primary-light text-white font-semibold shadow-button" : "hover:bg-background"}`}>
                                <Link to={item.path} className="flex items-center w-full">
                                    <item.icon className={`w-6 h-6 ${item.color}`} />
                                    {isOpen && <span className="ml-3">{item.name}</span>}
                                </Link>
                                {isActive && <div className="absolute right-0 w-2 h-full bg-primary rounded-l-lg"></div>}
                            </li>
                        );
                    })}
                </ul>
            </nav>

            {/* Logout Button */}
            <div className="mt-auto p-4">
                <button className="flex items-center gap-3 px-4 py-2 w-full text-red-500 hover:bg-red-100 transition-all rounded-lg">
                    <ArrowLeftOnRectangleIcon className="w-6 h-6 text-red-500" />
                    {isOpen && <span>Logout</span>}
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
