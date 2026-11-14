
const OnlineMembers = ({ members }) => {
    return (
        <div className="rounded-xl border border-slate-200 bg-white p-5">

            <h3 className="mb-4 font-semibold text-slate-800">
                Online Members
            </h3>

            <div className="space-y-4">
                {members.map((member) => (
                    <div key={member.id} className="flex items-center gap-3">

                        <div className="relative">
                            <div className={`flex h-10 w-10 items-center justify-center rounded-full font-semibold ${member.color}`}>
                                {member.name.charAt(0)}
                            </div>

                            <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-green-500" />
                        </div>

                        <div>
                            <p className="text-sm font-medium text-slate-800">
                                {member.name}
                            </p>

                            <p className="text-xs text-slate-400">
                                {member.role}
                            </p>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default OnlineMembers;
