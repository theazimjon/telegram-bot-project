import { config } from "dotenv";
config({
  path: process.env.NODE_ENV === "production" ? ".env" : ".env.development",
});

export const BOT_TOKEN: string = process.env.BOT_TOKEN!,
  ADMIN_ID_1: number = parseInt(process.env.ADMIN_ID_1 || "0")!,
  ADMIN_ID_2: number = parseInt(process.env.ADMIN_ID_2 || "0")!,
  ADMIN_ID_3: number = parseInt(process.env.ADMIN_ID_3 || "0")!,
  CLIENT_ADMIN_ID_1: number = parseInt(process.env.CLIENT_ADMIN_ID_1 || "0")!,
  CLIENT_ADMIN_ID_2: number = parseInt(process.env.CLIENT_ADMIN_ID_2 || "0")!,
  CLIENT_ADMIN_ID_3: number = parseInt(process.env.CLIENT_ADMIN_ID_3 || "0")!,
  MONGODB_URL: string = process.env.MONGODB_URL!;
