import { useState } from "react";
import type { FormEvent } from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
    }

    return (
        <main className="flex min-h-screen items-center justify-center bg-white px-4 py-10">
            <section className="w-full max-w-md">
                <div className="mb-8 text-center">


                    <h1 className="text-3xl font-bold tracking-tight text-slate-950">
                        Đăng nhập
                    </h1>

                    <p className="mt-3 text-sm text-slate-500">
                        Đăng nhập để tiếp tục không gian làm việc của bạn.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label
                            htmlFor="email"
                            className="mb-3 block text-sm font-medium text-slate-800"
                        >
                            Địa chỉ email
                        </label>

                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="username"
                            placeholder="ban@example.com"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            required
                            className="h-[54px] w-full rounded-xl border border-slate-200 px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                        />
                    </div>

                    <div>
                        <div className="mb-3 flex items-center justify-between">
                            <label
                                htmlFor="password"
                                className="text-sm font-medium text-slate-800"
                            >
                                Mật khẩu
                            </label>

                            <button
                                type="button"
                                className="text-sm text-indigo-600 hover:text-indigo-800"
                            >
                                Quên mật khẩu?
                            </button>
                        </div>

                        <div className="relative">
                            <input
                                id="password"
                                name="password"
                                type={showPassword ? "text" : "password"}
                                autoComplete="current-password"
                                placeholder="Nhập mật khẩu"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                required
                                className="h-[54px] w-full rounded-xl border border-slate-200 px-4 pr-16 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                            />

                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-4 text-sm text-indigo-600 hover:text-indigo-800"
                            >
                                {showPassword ? "Ẩn" : "Hiện"}
                            </button>
                        </div>
                    </div>

                    <label className="flex cursor-pointer items-center gap-3 text-sm text-slate-600">
                        <input
                            type="checkbox"
                            checked={rememberMe}
                            onChange={(event) => setRememberMe(event.target.checked)}
                            className="size-[18px] accent-indigo-600"
                        />
                        Ghi nhớ đăng nhập
                    </label>

                    <button
                        type="submit"
                        className="flex h-[54px] w-full items-center justify-center gap-3 rounded-xl bg-indigo-600 text-sm font-bold text-white shadow-lg shadow-indigo-500/25 transition hover:bg-indigo-700 active:scale-[0.99]"
                    >
                        Đăng nhập
                        <span className="text-lg">→</span>
                    </button>
                </form>

                <p className="mt-6 text-center text-sm text-slate-500">
                    Chưa có tài khoản?{" "}
                    <Link
                        to="/register"
                        className="font-medium text-indigo-600 hover:text-indigo-800"
                    >
                        Đăng ký ngay
                    </Link>
                </p>
            </section>
        </main>
    );
}
