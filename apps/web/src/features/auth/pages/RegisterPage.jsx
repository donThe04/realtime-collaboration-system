
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../../services/auth.service";

export default function RegisterPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");

    async function handleSubmit(event) {
        event.preventDefault();

        setError("");
        setSuccessMessage("");

        if (name.trim().length === 0) {
            setError("Vui lòng nhập họ và tên.");
            return;
        }

        if (password.length < 8) {
            setError("Mật khẩu phải có ít nhất 8 ký tự.");
            return;
        }

        if (password !== confirmPassword) {
            setError("Mật khẩu xác nhận không khớp.");
            return;
        }

        try {
            setIsLoading(true);

            console.log("1. Bắt đầu đăng ký tài khoản");

            const data = await registerUser({
                username: name.trim(),
                email: email.trim(),
                password: password,
            });

            console.log("3. Dữ liệu nhận được:", data);

            setSuccessMessage(
                data.message || "Đăng ký tài khoản thành công!"
            );

            console.log("4. Đăng ký thành công");

            setName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");

        } catch (error) {
            console.error("Lỗi đăng ký:", error);

            if (error instanceof TypeError) {
                setError("Không thể kết nối đến máy chủ. Vui lòng thử lại.");
            } else {
                setError(error.message || "Đã xảy ra lỗi khi đăng ký.");
            }

        } finally {
            setIsLoading(false);

            console.log("5. Kết thúc quá trình đăng ký");
        }
    }

    return (
        <main className="flex min-h-screen items-center justify-center bg-white px-4 py-10">
            <section className="w-full max-w-md">
                <div className="mb-8 text-center">
                    <p className="mb-1 text-sm font-bold tracking-[0.2em] text-indigo-600">
                        BẮT ĐẦU CÙNG COLLAB
                    </p>

                    <h1 className="text-3xl font-bold tracking-tight text-slate-950">
                        Tạo tài khoản
                    </h1>

                    <p className="mt-3 text-sm text-slate-500">
                        Đăng ký để bắt đầu cộng tác cùng đội ngũ của bạn.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label
                            htmlFor="name"
                            className="mb-2 block text-sm font-medium text-slate-800"
                        >
                            Họ và tên
                        </label>

                        <input
                            id="name"
                            name="name"
                            type="text"
                            autoComplete="name"
                            placeholder="Nhập họ và tên"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            required
                            className="h-[52px] w-full rounded-xl border border-slate-200 px-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="email"
                            className="mb-2 block text-sm font-medium text-slate-800"
                        >
                            Địa chỉ email
                        </label>

                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            placeholder="ban@example.com"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            required
                            className="h-[52px] w-full rounded-xl border border-slate-200 px-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="password"
                            className="mb-2 block text-sm font-medium text-slate-800"
                        >
                            Mật khẩu
                        </label>

                        <div className="relative">
                            <input
                                id="password"
                                name="password"
                                type={showPassword ? "text" : "password"}
                                autoComplete="new-password"
                                placeholder="Tối thiểu 8 ký tự"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                minLength={8}
                                required
                                className="h-[52px] w-full rounded-xl border border-slate-200 px-4 pr-16 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
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

                    <div>
                        <label
                            htmlFor="confirmPassword"
                            className="mb-2 block text-sm font-medium text-slate-800"
                        >
                            Xác nhận mật khẩu
                        </label>

                        <input
                            id="confirmPassword"
                            name="confirmPassword"
                            type={showPassword ? "text" : "password"}
                            autoComplete="new-password"
                            placeholder="Nhập lại mật khẩu"
                            value={confirmPassword}
                            onChange={(event) => setConfirmPassword(event.target.value)}
                            required
                            className="h-[52px] w-full rounded-xl border border-slate-200 px-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                        />
                    </div>

                    {error && (
                        <p
                            role="alert"
                            className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-600"
                        >
                            {error}
                        </p>
                    )}
                    {successMessage && (
                        <p
                            role="status"
                            className="rounded-xl border border-green-200 bg-green-50 p-3 text-sm text-green-700"
                        >
                            {successMessage}
                        </p>
                    )}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="flex h-[52px] w-full items-center justify-center gap-3 rounded-xl bg-indigo-600 text-sm font-bold text-white shadow-lg shadow-indigo-500/25 transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        {isLoading ? "Đang tạo tài khoản..." : "Tạo tài khoản"}
                        {!isLoading && <span className="text-lg">→</span>}
                    </button>
                </form>

                <p className="mt-7 text-center text-sm text-slate-500">
                    Đã có tài khoản?{" "}
                    <Link
                        to="/login"
                        className="font-semibold text-indigo-600 hover:text-indigo-800"
                    >
                        Đăng nhập
                    </Link>
                </p>

                <p className="mt-8 text-center text-xs text-slate-400">
                    © 2026 Collab · Không gian cộng tác trực tuyến
                </p>
            </section>
        </main>
    );
}
