import Sidebar from "./Shared/Sidebar";
import TopBar from "./Shared/Topbar";
import StatsCard from "./Widgets/Overview/StatsCard";

const AdminDashboard = () => {
    return (
        <div className="flex h-screen bg-dashboard">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex flex-col flex-1">
                {/* Top Bar */}
                <TopBar />

                {/* Dashboard Content */}
                <div className="p-6">
                    <h1 className="text-2xl font-semibold">Welcome to the Admin Dashboard</h1>
                    <p className="text-gray-600 mt-2">Manage users, departments, and resources efficiently.</p>
                </div>
                <div><StatsCard/></div>
            </div>
        </div>
    );
};

export default AdminDashboard;
