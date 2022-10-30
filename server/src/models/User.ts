import mongoose from 'mongoose';

export type UserDocument = mongoose.Document & {
    name: string;
    phoneNumber: number;
    birthdate: Date;
    accessToken: string;
}

const userSchema = new mongoose.Schema<UserDocument>({
    name: { type: String, required: true },
    phoneNumber: { type: Number, required: true },
    birthdate : { type: Date, required: false },
    accessToken : { type: String, required: true, unique: true }
}, { timestamps: true });

export const User = mongoose.model<UserDocument>('users', userSchema);