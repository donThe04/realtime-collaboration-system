
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        setSubmitted(true);
    }

    return (
        <main className="flex min-h-screen items-center justify-center bg-white px-4 py-10">
            <section className="w-full max-w-md">
                <div className="mb-8 text-center">
                    <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-2xl bg-indigo-50">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            className="size-8 text-indigo-600"
                        >
                            <rect
                                x="3"
                                y="10"
                                width="18"
                                height="11"
                                rx="2"
                            />
                            <path d="M7 10V7a5 5 0 0 1 10 0v3" />
                            <path d="M12 14v3" />
                        </svg>
                    </div>

                    <h1 className="text-3xl font-bold tracking-tight text-slate-950">
                        Quên mật khẩu?
                    </h1>

                    <p className="mt-3 text-sm leading-6 text-slate-500">
                        Đừng lo lắng! Hãy nhập địa chỉ email đã đăng ký.
                        Chúng tôi sẽ hướng dẫn bạn đặt lại mật khẩu.
                    </p>
                </div>

                {submitted ? (
                    <div
                        role="status"
                        className="rounded-xl border border-green-200 bg-green-50 p-5 text-center"
                    >
                        <div className="mx-auto mb-3 flex size-12 items-center justify-center rounded-full bg-green-100">
                            <span className="text-xl text-green-600">✓</span>
                        </div>

                        <h2 className="font-semibold text-slate-900">
                            Yêu cầu đã được ghi nhận!
                        </h2>

                        <p className="mt-2 text-sm leading-6 text-slate-600">
                            Nếu email <strong>{email}</strong> đã được đăng ký,
                            bạn sẽ nhận được hướng dẫn đặt lại mật khẩu.
                            Vui lòng kiểm tra hộp thư của mình.
                        </p>

                        <button
                            type="button"
                            onClick={() => setSubmitted(false)}
                            className="mt-4 text-sm font-medium text-indigo-600 hover:text-indigo-800"
                        >
                            Gửi lại yêu cầu
                        </button>
                    </div>
                ) : (
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
                                autoComplete="email"
                                placeholder="ban@example.com"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                required
                                className="h-[54px] w-full rounded-xl border border-slate-200 px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                            />
                        </div>

                        <button
                            type="submit"
                            className="flex h-[54px] w-full items-center justify-center gap-3 rounded-xl bg-indigo-600 text-sm font-bold text-white shadow-lg shadow-indigo-500/25 transition hover:bg-indigo-700 active:scale-[0.99]"
                        >
                            Gửi hướng dẫn đặt lại mật khẩu
                            <span className="text-lg">→</span>
                        </button>
                    </form>
                )}

                <div className="mt-8 text-center">
                    <Link
                        to="/login"
                        className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-800"
                    >
                        <span>←</span>
                        Quay lại đăng nhập
                    </Link>
                </div>

                <p className="mt-10 text-center text-xs text-slate-400">
                    © 2026 Collab · Không gian cộng tác trực tuyến
                </p>
            </section>
        </main>
    );
}
