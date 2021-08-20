import { Document, Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';

export interface UserDocument extends Document {
  phoneNumber: string;
  password: string;
  fullName: string;
  cover: string;
  address: string;
  createdAt: Date;
  updatedAt: Date;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

const UserSchema = new Schema(
  {
    phoneNumber: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    fullName: {
      type: String,
      required: true,
    },
    cover: {
      type: String,
    },
    address: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

UserSchema.methods.comparePassword = function (candidatePassword: string) {
  const user = this as UserDocument;
  return bcrypt.compare(candidatePassword, user.password);
};

const User = model<UserDocument>('User', UserSchema);
export default User;
