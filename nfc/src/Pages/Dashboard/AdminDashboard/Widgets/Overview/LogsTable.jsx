const accessLogs = [
    { time: "05/22/2023, 8:07:23 AM", name: "John Smith", department: "Computer Science", status: "Authorized", location: "Main-Entrance", verification: "Card and Fingerprint" },
    { time: "05/22/2023, 8:15:18 AM", name: "Sarah Johnson", department: "Engineering", status: "Authorized", location: "Lab Access", verification: "Card and Fingerprint" },
    { time: "05/22/2023, 8:22:05 AM", name: "Mike Williams", department: "Biology", status: "Unauthorized", location: "Library", verification: "Card Only" },
    { time: "05/22/2023, 8:30:42 AM", name: "Lisa Brown", department: "Computer Science", status: "Authorized", location: "Side Entrance", verification: "Card and Fingerprint" },
    { time: "05/22/2023, 8:45:11 AM", name: "Robert Davis", department: "Mathematics", status: "Authorized", location: "Main-Entrance", verification: "Card and Fingerprint" },
];

const LogsTable = () => {
    return (
        <div className="bg-background p-6 rounded-xl shadow-card">
            {/* Table Header */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-heading text-xl font-bold">Recent Access Logs</h2>
                <a href="#" className="text-primary text-sm font-medium hover:underline">View All</a>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="w-full border-collapse rounded-lg overflow-hidden">
                    <thead>
                        <tr className="text-muted text-sm font-semibold bg-gray-100">
                            <th className="px-4 py-3 text-left">TIME</th>
                            <th className="px-4 py-3 text-left">NAME</th>
                            <th className="px-4 py-3 text-left">DEPARTMENT</th>
                            <th className="px-4 py-3 text-left">STATUS</th>
                            <th className="px-4 py-3 text-left">LOCATION</th>
                            <th className="px-4 py-3 text-left">VERIFICATION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {accessLogs.map((log, index) => (
                            <tr key={index} className="border-b last:border-none hover:bg-gray-50 transition">
                                <td className="px-4 py-3 text-gray-600">{log.time}</td>
                                <td className="px-4 py-3 font-medium">{log.name}</td>
                                <td className="px-4 py-3 text-gray-600">{log.department}</td>
                                <td className="px-4 py-3">
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                        log.status === "Authorized" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                                    }`}>
                                        {log.status}
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-gray-600">{log.location}</td>
                                <td className="px-4 py-3 text-gray-600">{log.verification}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default LogsTable;
