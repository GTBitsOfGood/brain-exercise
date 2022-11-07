import mongoose from 'mongoose';

const bcrypt = require('bcrypt');

export type UserDocument = mongoose.Document & {
    name: string;
    phoneNumber: number;
    birthdate: Date;
    accessToken: string;
    email: string;
    username: string;
    password: string;
}

const userSchema = new mongoose.Schema<UserDocument>({
    name: { type: String, required: true },
    phoneNumber: { type: Number, required: true },
    birthdate : { type: Date, required: false },
    accessToken : { type: String, required: true, unique: true },
    email: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
}, { timestamps: true });

userSchema.pre('save', function(next) {
    const user = this;

    bcrypt.genSalt(10, function(err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);
            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

userSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

export const User = mongoose.model<UserDocument>('users', userSchema);