import { Schema, model, Document } from 'mongoose';

// Interface for User document
interface IUser extends Document {
  name: string;
  email: string;
  age: number;
}

// User Schema with TypeScript
const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  age: { type: Number, required: true }
});

export const User = model<IUser>('User', userSchema); 