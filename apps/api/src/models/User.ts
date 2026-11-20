import { Schema, model, type InferSchemaType } from "mongoose";

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: [true, "Username is required"],
            trim: true,
            minlength: 3,
            maxlength: 30,
        },

        email: {
            type: String,
            required: [true, "Email is required"],
            unique: true,
            lowercase: true,
            trim: true,
        },

        password: {
            type: String,
            required: [true, "Password is required"],
            select: false,
        },

        status: {
            type: String,
            enum: ["online", "offline", "away"],
            default: "offline",
        },
    },
    {
        timestamps: true,
    }
);

export type UserType = InferSchemaType<typeof userSchema>;

const User = model<UserType>("User", userSchema);

export default User;
