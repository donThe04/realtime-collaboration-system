
const Header = () => {
    return (
        <header className="flex h-20 items-center justify-between border-b border-slate-200 bg-white px-8">

            {/* Left: Page title */}
            <div>
                <h1 className="text-xl font-bold text-slate-800">
                    Dashboard
                </h1>

                <p className="mt-1 text-sm text-slate-500">
                    Welcome back! Here's what's happening in your workspace.
                </p>
            </div>

            {/* Right: Header actions */}
            <div className="flex items-center gap-5">

                {/* Search */}
                <div className="flex w-64 items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
                    <span className="text-slate-400">⌕</span>

                    <input
                        type="text"
                        placeholder="Search anything..."
                        className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
                    />

                    <span className="rounded border border-slate-200 bg-white px-1.5 py-0.5 text-xs text-slate-400">
                        /
                    </span>
                </div>

                {/* Online members */}
                <div className="flex items-center">
                    <div className="flex -space-x-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-violet-200 text-xs font-bold text-violet-700">
                            A
                        </div>

                        <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-blue-200 text-xs font-bold text-blue-700">
                            B
                        </div>

                        <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-pink-200 text-xs font-bold text-pink-700">
                            C
                        </div>
                    </div>

                    <span className="ml-3 text-xs font-medium text-slate-500">
                        +3 online
                    </span>
                </div>

                {/* Notification */}
                <button
                    type="button"
                    className="relative flex h-10 w-10 items-center justify-center rounded-lg text-xl text-slate-500 transition hover:bg-slate-100"
                    aria-label="Notifications"
                >
                    ♧

                    <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
                </button>

                {/* User profile */}
                <div className="flex items-center gap-3 border-l border-slate-200 pl-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 font-bold text-indigo-700">
                        N
                    </div>

                    <div className="hidden flex-col sm:flex">
                        <span className="text-sm font-semibold text-slate-800">
                            Nguyen User
                        </span>

                        <span className="text-xs text-slate-400">
                            Workspace Admin
                        </span>
                    </div>

                    <span className="text-xs text-slate-400">
                        ▼
                    </span>
                </div>

            </div>
        </header>
    );
};

export default Header;
