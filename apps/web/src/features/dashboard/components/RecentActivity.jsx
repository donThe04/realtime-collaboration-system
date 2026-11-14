
const RecentActivity = ({ activities }) => {
    return (
        <div className="rounded-xl border border-slate-200 bg-white p-5">

            <div className="mb-5 flex items-center justify-between">
                <h3 className="font-semibold text-slate-800">
                    Recent Activities
                </h3>

                <button className="text-sm font-medium text-indigo-600 hover:text-indigo-700">
                    View all
                </button>
            </div>

            <div className="space-y-5">
                {activities.map((activity) => (
                    <div key={activity.id} className="flex gap-3">

                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                            {activity.icon}
                        </div>

                        <div className="min-w-0 flex-1">
                            <p className="text-sm text-slate-700">
                                <span className="font-semibold">
                                    {activity.user}
                                </span>{" "}
                                {activity.action}
                            </p>

                            <p className="mt-1 text-xs text-slate-400">
                                {activity.time}
                            </p>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentActivity;
