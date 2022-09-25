import { Schema, model } from "mongoose";

interface User {
    name: string;
    phoneNumber: number;
    birthdate: Date;
    accessToken: string;
}

const UserSchema = new Schema<User>({
    name: { type: String, required: true },
    phoneNumber: { type: Number, required: true },
    birthdate : { type: Date, required: false },
    accessToken : { type: String, required: true, unique: true }
}, { timestamps: true });

const UserModel = model<User>('user', UserSchema);

export default UserModel;