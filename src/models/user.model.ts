import mongoose, { Schema, Document } from "mongoose";

interface IUserSchema extends Document {
  telegram_user: {
    id: number;
    is_bot: boolean;
    first_name: string;
    last_name: string;
    phone_number: string;
  };
}

const UserSchema: Schema = new Schema(
  {
    telegram_user: {
      id: {
        type: Number,
        unique: true,
      },
      is_bot: Boolean,
      first_name: {
        type: String,
        required: true,
      },
      last_name: {
        type: String,
        required: false,
      },
      phone_number: {
        type: String,
        required: false,
        unique: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model<IUserSchema>("User", UserSchema);
