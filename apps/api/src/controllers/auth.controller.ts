
import type { Request, Response } from "express";
import * as authService from "../services/auth.service.js";

// POST /api/auth/register
export const register = async (req: Request, res: Response) => {
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "Username, email and password are required",
            });
        }

        if (typeof username !== "string" ||
            typeof email !== "string" ||
            typeof password !== "string") {
            return res.status(400).json({
                success: false,
                message: "Invalid input data",
            });
        }

        if (password.length < 8) {
            return res.status(400).json({
                success: false,
                message: "Password must be at least 8 characters",
            });
        }

        const user = await authService.register({
            username,
            email,
            password,
        });

        return res.status(201).json({
            success: true,
            message: "Register successfully",
            data: user,
        });

    } catch (error) {
        if (error instanceof Error &&
            error.message === "EMAIL_ALREADY_EXISTS") {
            return res.status(409).json({
                success: false,
                message: "Email already exists",
            });
        }

        console.error("Register error:", error);

        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};

// POST /api/auth/login
export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and password are required",
            });
        }

        if (typeof email !== "string" ||
            typeof password !== "string") {
            return res.status(400).json({
                success: false,
                message: "Invalid input data",
            });
        }

        const result = await authService.login({
            email,
            password,
        });

        return res.status(200).json({
            success: true,
            message: "Login successfully",
            data: result,
        });

    } catch (error) {
        if (error instanceof Error &&
            error.message === "INVALID_CREDENTIALS") {
            return res.status(401).json({
                success: false,
                message: "Email or password is incorrect",
            });
        }

        console.error("Login error:", error);

        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};
