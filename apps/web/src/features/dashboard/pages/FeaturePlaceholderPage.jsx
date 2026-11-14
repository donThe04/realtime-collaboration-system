
import { Link, useLocation } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const pages = {
    "/workspaces": {
        title: "Workspaces",
        description: "Create and manage your collaborative workspaces.",
        icon: "▣",
    },
    "/documents": {
        title: "Documents",
        description: "Create and edit documents together in real time.",
        icon: "▤",
    },
    "/kanban": {
        title: "Kanban Board",
        description: "Organize tasks and collaborate with your team.",
        icon: "▦",
    },
    "/whiteboard": {
        title: "Whiteboard",
        description: "Share ideas on a collaborative canvas.",
        icon: "✎",
    },
    "/messages": {
        title: "Messages",
        description: "Communicate with your teammates.",
        icon: "☏",
    },
    "/history": {
        title: "Session History",
        description: "Review previous collaboration sessions.",
        icon: "◷",
    },
    "/settings": {
        title: "Settings",
        description: "Manage your profile and preferences.",
        icon: "⚙",
    },
};

const FeaturePlaceholderPage = () => {
    const { pathname } = useLocation();
    const page = pages[pathname];

    return (
        <div className="flex min-h-screen bg-slate-50">
            <Sidebar />

            <div className="flex min-w-0 flex-1 flex-col">
                <Header />

                <main className="flex flex-1 items-center justify-center p-6">

                    <div className="max-w-md text-center">

                        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-indigo-50 text-4xl text-indigo-600">
                            {page?.icon || "✦"}
                        </div>

                        <h1 className="mt-6 text-2xl font-bold text-slate-800">
                            {page?.title || "Page"}
                        </h1>

                        <p className="mt-3 text-sm leading-6 text-slate-500">
                            {page?.description}
                        </p>

                        <div className="mt-6 rounded-xl border border-dashed border-indigo-200 bg-white p-5">
                            <p className="font-medium text-indigo-600">
                                Coming Soon
                            </p>

                            <p className="mt-2 text-sm text-slate-500">
                                This feature is currently under development.
                            </p>
                        </div>

                        <Link
                            to="/dashboard"
                            className="mt-6 inline-flex rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
                        >
                            ← Back to Dashboard
                        </Link>

                    </div>
                </main>
            </div>
        </div>
    );
};

export default FeaturePlaceholderPage;
