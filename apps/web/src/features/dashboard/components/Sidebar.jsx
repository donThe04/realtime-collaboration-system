
const Sidebar = () => {
    return (
        <aside className="flex min-h-screen w-[250px] flex-col border-r border-slate-200 bg-white px-4 py-6">

            {/* Logo */}
            <div className="mb-10 flex items-center gap-3 px-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-xl font-bold text-white">
                    C
                </div>

                <span className="text-xl font-bold text-slate-800">
                    CollabSpace
                </span>
            </div>

            {/* Main menu */}
            <div>
                <p className="mb-3 px-3 text-xs font-bold tracking-wider text-slate-400">
                    MENU
                </p>

                <nav className="flex flex-col gap-1">

                    <a
                        href="/dashboard"
                        className="flex items-center gap-3 rounded-lg bg-indigo-50 px-3 py-3 text-sm font-semibold text-indigo-600"
                    >
                        <span className="text-lg">⌂</span>
                        Dashboard
                    </a>

                    <a
                        href="#"
                        className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-indigo-600"
                    >
                        <span className="text-lg">▣</span>
                        Workspaces
                    </a>

                    <a
                        href="#"
                        className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-indigo-600"
                    >
                        <span className="text-lg">▤</span>
                        Documents
                    </a>

                    <a
                        href="#"
                        className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-indigo-600"
                    >
                        <span className="text-lg">▦</span>
                        Kanban Board
                    </a>

                    <a
                        href="#"
                        className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-indigo-600"
                    >
                        <span className="text-lg">✎</span>
                        Whiteboard
                    </a>

                    <a
                        href="#"
                        className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-indigo-600"
                    >
                        <span className="text-lg">☏</span>
                        Messages
                    </a>

                    <a
                        href="#"
                        className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-indigo-600"
                    >
                        <span className="text-lg">◷</span>
                        Session History
                    </a>

                </nav>
            </div>

            {/* Bottom menu */}
            <div className="mt-auto">

                <a
                    href="#"
                    className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-100"
                >
                    <span className="text-lg">⚙</span>
                    Settings
                </a>

                {/* User profile */}
                <div className="mt-5 flex items-center gap-3 border-t border-slate-200 px-2 pt-5">

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 font-bold text-violet-700">
                        N
                    </div>

                    <div className="flex flex-1 flex-col">
                        <span className="text-sm font-semibold text-slate-800">
                            Nguyen User
                        </span>

                        <span className="text-xs text-slate-400">
                            Free Plan
                        </span>
                    </div>

                    <span className="cursor-pointer text-xl text-slate-500">
                        ⋯
                    </span>

                </div>
            </div>

        </aside>
    );
};

export default Sidebar;
