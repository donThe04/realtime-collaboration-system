
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function LoginPage() {
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    async function handleSubmit(event) {
        event.preventDefault();

        setErrorMessage("");
        setIsLoading(true);

        try {
            const response = await fetch(
                "http://localhost:5000/api/auth/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email: email.trim(),
                        password,
                    }),
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Đăng nhập thất bại.");
            }

            navigate("/dashboard");

        } catch (error) {
            console.error("Lỗi đăng nhập:", error);

            if (error instanceof TypeError) {
                setErrorMessage(
                    "Không thể kết nối đến máy chủ. Vui lòng thử lại."
                );
            } else {
                setErrorMessage(
                    error.message || "Đã xảy ra lỗi khi đăng nhập."
                );
            }

        } finally {
            setIsLoading(false);
        }
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
                            <Link
                                to="/forgot-password"
                                className="text-sm text-indigo-600 hover:text-indigo-800"
                            >
                                Quên mật khẩu?
                            </Link>
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
                    {errorMessage && (
                        <p
                            role="alert"
                            className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-600"
                        >
                            {errorMessage}
                        </p>
                    )}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="flex h-[54px] w-full items-center justify-center gap-3 rounded-xl bg-indigo-600 text-sm font-bold text-white shadow-lg shadow-indigo-500/25 transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        {isLoading ? "Đang đăng nhập..." : "Đăng nhập"}
                        {!isLoading && <span className="text-lg">→</span>}
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
