
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const DashboardPage = () => {
    return (
        <div className="flex min-h-screen bg-slate-50">

            {/* Sidebar */}
            <Sidebar />

            {/* Main area */}
            <div className="flex min-w-0 flex-1 flex-col">

                {/* Header */}
                <Header />

                {/* Dashboard content */}
                <main className="flex-1 p-8">

                    <h2 className="text-2xl font-bold text-slate-800">
                        Welcome to CollabSpace 
                    </h2>

                    <p className="mt-2 text-sm text-slate-500">
                        Your real-time collaboration workspace.
                    </p>

                </main>

            </div>
        </div>
    );
};

export default DashboardPage;
