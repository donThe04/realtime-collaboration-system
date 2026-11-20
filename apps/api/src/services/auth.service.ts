
import bcrypt from "bcryptjs";
import jwt, { type SignOptions } from "jsonwebtoken";
import User from "../models/User.js";

interface RegisterInput {
    username: string;
    email: string;
    password: string;
}

interface LoginInput {
    email: string;
    password: string;
}

export const register = async (input: RegisterInput) => {
    const { username, email, password } = input;

    const normalizedEmail = email.trim().toLowerCase();

    const existingUser = await User.findOne({
        email: normalizedEmail,
    });

    if (existingUser) {
        throw new Error("EMAIL_ALREADY_EXISTS");
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await User.create({
        username,
        email: normalizedEmail,
        password: hashedPassword,
    });

    return {
        id: user._id.toString(),
        username: user.username,
        email: user.email,
        status: user.status,
        createdAt: user.createdAt,
    };
};

export const login = async (input: LoginInput) => {
    const { email, password } = input;

    const normalizedEmail = email.trim().toLowerCase();

    const user = await User.findOne({
        email: normalizedEmail,
    }).select("+password");

    if (!user) {
        throw new Error("INVALID_CREDENTIALS");
    } 

    const isPasswordValid = await bcrypt.compare(
        password,
        user.password
    );

    if (!isPasswordValid) {
        throw new Error("INVALID_CREDENTIALS");
    }

    const jwtSecret = process.env.JWT_SECRET;

    if (!jwtSecret) {
        throw new Error("JWT_SECRET is not defined");
    }

    const expiresIn =
        (process.env.JWT_EXPIRES_IN || "1d") as SignOptions["expiresIn"];

    const token = jwt.sign(
        { userId: user._id.toString() },
        jwtSecret,
        { expiresIn }
    );

    return {
        token,
        user: {
            id: user._id.toString(),
            username: user.username,
            email: user.email,
            status: user.status,
        },
    };
};
