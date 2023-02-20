import mongoose from "mongoose";

export type TimeDocument = mongoose.Document & {
    name: string;
    googleId: string; 
    readingTime: number;
    writingTime: number;
    mathTime: number;
    totalScreenTime: number;
};

const timeSchema = new mongoose.Schema<TimeDocument>({
    name: {type: String, required: true},
    googleId: {type: String, required: false},
    readingTime: {type: Number, default: 0, required: true},
    writingTime: {type: Number, default: 0, required: true},
    mathTime: {type: Number, default: 0, required: true}, 
    totalScreenTime: {type: Number, default: 0, required: false},
});

export const Time = mongoose.model<TimeDocument>("times", timeSchema);