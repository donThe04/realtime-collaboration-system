
const WorkspaceCard = ({ workspace }) => {
    return (
        <div className="rounded-xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-md">

            <div className="flex items-start justify-between">
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${workspace.color}`}>
                    <span className="text-xl">{workspace.icon}</span>
                </div>

                <button className="text-xl text-slate-400 hover:text-slate-700">
                    ⋯
                </button>
            </div>

            <h3 className="mt-4 text-base font-semibold text-slate-800">
                {workspace.name}
            </h3>

            <p className="mt-1 text-sm text-slate-500">
                {workspace.description}
            </p>

            <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">

                <div className="flex -space-x-2">
                    {workspace.members.map((member) => (
                        <div
                            key={member.id}
                            title={member.name}
                            className={`flex h-8 w-8 items-center justify-center rounded-full border-2 border-white text-xs font-semibold ${member.color}`}
                        >
                            {member.name.charAt(0)}
                        </div>
                    ))}
                </div>

                <span className="text-xs text-slate-500">
                    {workspace.memberCount} members
                </span>
            </div>
        </div>
    );
};

export default WorkspaceCard;
