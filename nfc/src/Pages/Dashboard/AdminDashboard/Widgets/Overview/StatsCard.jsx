import { BanknotesIcon, CheckCircleIcon, XCircleIcon, CreditCardIcon } from "@heroicons/react/24/solid";

const stats = [
    { title: "Total Access Today", value: 125, icon: BanknotesIcon, color: "bg-primary-light", textColor: "text-primary" },
    { title: "Authorized Access", value: 112, icon: CheckCircleIcon, color: "bg-green-100", textColor: "text-green-600" },
    { title: "Unauthorized Attempts", value: 13, icon: XCircleIcon, color: "bg-red-100", textColor: "text-red-600" },
    { title: "Active Cards", value: 450, icon: CreditCardIcon, color: "bg-purple-100", textColor: "text-purple-600" },
];

const StatsCard = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
                <div key={index} className="bg-widget p-6 rounded-lg shadow-card flex items-center justify-between">
                    <div>
                        <h4 className="text-muted text-sm">{stat.title}</h4>
                        <p className="text-heading text-2xl font-bold">{stat.value}</p>
                    </div>
                    <div className={`${stat.color} p-3 rounded-full`}>
                        <stat.icon className={`w-6 h-6 ${stat.textColor}`} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default StatsCard;
