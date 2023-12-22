import { Context } from "telegraf";
import isClientAdmin from "../utils/is-client-admin.utils";
import uz from "../localization/uz";

export function authClientAdmin(ctx: Context, next: Function) {
  const userId: number = ctx?.message?.from.id || 0;
  if (isClientAdmin(userId)) {
    next();
  } else {
    ctx.reply(uz.unauthorizedAccess);
  }
}
