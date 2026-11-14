
import { NavLink } from "react-router-dom";

const navItems = [
    { to: "/dashboard", label: "Dashboard", icon: "⌂", end: true },
    { to: "/workspaces", label: "Workspaces", icon: "▣" },
    { to: "/documents", label: "Documents", icon: "▤" },
    { to: "/kanban", label: "Kanban Board", icon: "▦" },
    { to: "/whiteboard", label: "Whiteboard", icon: "✎" },
    { to: "/messages", label: "Messages", icon: "☏" },
    { to: "/history", label: "Session History", icon: "◷" },
];

const Sidebar = () => {
    return (
        <aside className="sticky top-0 flex h-screen w-[250px] shrink-0 flex-col border-r border-slate-200 bg-white px-4 py-6">

            {/* Logo */}
            <div className="mb-10 flex items-center gap-3 px-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-xl font-bold text-white">
                    C
                </div>

                <span className="text-xl font-bold text-slate-800">
                    CollabSpace
                </span>
            </div>

            {/* Navigation */}
            <div>
                <p className="mb-3 px-3 text-xs font-bold tracking-wider text-slate-400">
                    WORKSPACE
                </p>

                <nav className="flex flex-col gap-1">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            end={item.end}
                            className={({ isActive }) =>
                                `flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium transition ${
                                    isActive
                                        ? "bg-indigo-50 text-indigo-600"
                                        : "text-slate-600 hover:bg-slate-100 hover:text-indigo-600"
                                }`
                            }
                        >
                            <span className="w-6 text-center text-lg">
                                {item.icon}
                            </span>

                            {item.label}
                        </NavLink>
                    ))}
                </nav>
            </div>

            {/* Bottom */}
            <div className="mt-auto">
                <NavLink
                    to="/settings"
                    className={({ isActive }) =>
                        `flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium transition ${
                            isActive
                                ? "bg-indigo-50 text-indigo-600"
                                : "text-slate-600 hover:bg-slate-100"
                        }`
                    }
                >
                    <span className="w-6 text-center text-lg">⚙</span>
                    Settings
                </NavLink>

                {/* Profile */}
                <div className="mt-5 flex items-center gap-3 border-t border-slate-200 px-2 pt-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 font-bold text-violet-700">
                        N
                    </div>

                    <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-semibold text-slate-800">
                            Nguyen User
                        </p>
                        <p className="text-xs text-slate-400">
                            Workspace Member
                        </p>
                    </div>

                    <button type="button" className="text-xl text-slate-400">
                        ⋯
                    </button>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
