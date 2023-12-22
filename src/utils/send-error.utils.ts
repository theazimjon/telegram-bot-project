import { Context } from "telegraf";
import { ADMIN_ID_1, ADMIN_ID_2 } from "../config/env.vars";
import Telegraf from "telegraf";

/**
 * To handler errors, log and send when needed.
 * @param ctx Telegraf Context.
 * @param error Type Error.
 */
export function sendError(error: Error, ctx: Context): void {
  console.log(error);

  ctx.telegram
    .sendMessage(ADMIN_ID_1, `Error occurred: ${JSON.stringify(error?.message)}`)
    .then(() => {
      console.info(`Error reported to admin: `, error?.message);
    })
    .catch(() => {
      console.log("Error: Can't report to admin", error?.message);
    });
}
