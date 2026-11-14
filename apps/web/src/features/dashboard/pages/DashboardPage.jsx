
import { Link } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const quickLinks = [
    {
        title: "Documents",
        description: "Create and edit documents together.",
        icon: "▤",
        color: "bg-blue-50 text-blue-600",
        path: "/documents",
        count: "12 documents",
    },
    {
        title: "Kanban Board",
        description: "Organize tasks and track progress.",
        icon: "▦",
        color: "bg-purple-50 text-purple-600",
        path: "/kanban",
        count: "4 boards",
    },
    {
        title: "Whiteboard",
        description: "Share ideas on a collaborative canvas.",
        icon: "✎",
        color: "bg-amber-50 text-amber-600",
        path: "/whiteboard",
        count: "3 boards",
    },
    {
        title: "Messages",
        description: "Communicate with your teammates.",
        icon: "☏",
        color: "bg-emerald-50 text-emerald-600",
        path: "/messages",
        count: "5 conversations",
    },
];

const activities = [
    {
        id: 1,
        user: "Alex Johnson",
        action: "edited Product Requirements",
        time: "5 minutes ago",
        icon: "✎",
    },
    {
        id: 2,
        user: "Sarah Wilson",
        action: "created a new Kanban task",
        time: "20 minutes ago",
        icon: "▦",
    },
    {
        id: 3,
        user: "John Smith",
        action: "joined Design Team",
        time: "1 hour ago",
        icon: "＋",
    },
];

const onlineMembers = [
    {
        id: 1,
        name: "Alex Johnson",
        role: "Product Designer",
        avatar: "A",
        color: "bg-blue-100 text-blue-700",
    },
    {
        id: 2,
        name: "Sarah Wilson",
        role: "Frontend Developer",
        avatar: "S",
        color: "bg-pink-100 text-pink-700",
    },
    {
        id: 3,
        name: "John Smith",
        role: "Project Manager",
        avatar: "J",
        color: "bg-emerald-100 text-emerald-700",
    },
];

const DashboardPage = () => {
    return (
        <div className="flex min-h-screen bg-slate-50">

            {/* Sidebar */}
            <Sidebar />

            {/* Main area */}
            <div className="flex min-w-0 flex-1 flex-col">

                <Header />

                <main className="mx-auto w-full max-w-7xl flex-1 space-y-8 p-6 lg:p-8">

                    {/* Welcome section */}
                    <section className="flex flex-wrap items-center justify-between gap-4">
                        <div>
                            <h1 className="text-2xl font-bold text-slate-800">
                                Welcome back 👋
                            </h1>

                            <p className="mt-2 text-sm text-slate-500">
                                Here's what's happening in your workspace.
                            </p>
                        </div>

                        <Link
                            to="/workspaces"
                            className="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
                        >
                            + Create Workspace
                        </Link>
                    </section>

                    {/* Overview cards */}
                    <section>
                        <h2 className="mb-4 text-lg font-semibold text-slate-800">
                            Overview
                        </h2>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">

                            <div className="rounded-xl border border-slate-200 bg-white p-5">
                                <p className="text-sm text-slate-500">
                                    My Workspaces
                                </p>

                                <p className="mt-3 text-3xl font-bold text-slate-800">
                                    04
                                </p>

                                <p className="mt-2 text-xs text-slate-400">
                                    Workspaces you belong to
                                </p>
                            </div>

                            <div className="rounded-xl border border-slate-200 bg-white p-5">
                                <p className="text-sm text-slate-500">
                                    Documents
                                </p>

                                <p className="mt-3 text-3xl font-bold text-slate-800">
                                    12
                                </p>

                                <p className="mt-2 text-xs text-slate-400">
                                    Shared documents
                                </p>
                            </div>

                            <div className="rounded-xl border border-slate-200 bg-white p-5">
                                <p className="text-sm text-slate-500">
                                    Team Members
                                </p>

                                <p className="mt-3 text-3xl font-bold text-slate-800">
                                    08
                                </p>

                                <p className="mt-2 text-xs text-emerald-600">
                                    03 members online (sample data)
                                </p>
                            </div>

                        </div>
                    </section>

                    {/* Quick access */}
                    <section>
                        <div className="mb-4 flex items-center justify-between">
                            <h2 className="text-lg font-semibold text-slate-800">
                                Quick Access
                            </h2>

                            <Link
                                to="/workspaces"
                                className="text-sm font-medium text-indigo-600 hover:text-indigo-700"
                            >
                                View all workspaces →
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

                            {quickLinks.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className="group rounded-xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-md"
                                >
                                    <div className={`flex h-11 w-11 items-center justify-center rounded-xl text-xl ${item.color}`}>
                                        {item.icon}
                                    </div>

                                    <h3 className="mt-4 font-semibold text-slate-800 group-hover:text-indigo-600">
                                        {item.title}
                                    </h3>

                                    <p className="mt-2 min-h-10 text-sm leading-5 text-slate-500">
                                        {item.description}
                                    </p>

                                    <p className="mt-4 text-xs font-medium text-slate-400">
                                        {item.count}
                                    </p>
                                </Link>
                            ))}

                        </div>
                    </section>

                    {/* Recent activity and online members */}
                    <section className="grid grid-cols-1 gap-6 xl:grid-cols-3">

                        {/* Recent activity */}
                        <div className="rounded-xl border border-slate-200 bg-white p-5 xl:col-span-2">

                            <div className="mb-5 flex items-center justify-between">
                                <h2 className="font-semibold text-slate-800">
                                    Recent Activities
                                </h2>

                                <Link
                                    to="/history"
                                    className="text-sm font-medium text-indigo-600 hover:text-indigo-700"
                                >
                                    View all
                                </Link>
                            </div>

                            <div className="space-y-5">
                                {activities.map((activity) => (
                                    <div
                                        key={activity.id}
                                        className="flex items-start gap-3"
                                    >
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                                            {activity.icon}
                                        </div>

                                        <div>
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

                        {/* Online members */}
                        <div className="rounded-xl border border-slate-200 bg-white p-5">

                            <div className="mb-5 flex items-center justify-between">
                                <h2 className="font-semibold text-slate-800">
                                    Team Members
                                </h2>

                                <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-600">
                                    3 Online
                                </span>
                            </div>

                            <div className="space-y-5">
                                {onlineMembers.map((member) => (
                                    <div
                                        key={member.id}
                                        className="flex items-center gap-3"
                                    >
                                        <div className="relative">
                                            <div className={`flex h-10 w-10 items-center justify-center rounded-full font-semibold ${member.color}`}>
                                                {member.avatar}
                                            </div>

                                            <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-emerald-500" />
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

                    </section>

                </main>
            </div>
        </div>
    );
};

export default DashboardPage;
