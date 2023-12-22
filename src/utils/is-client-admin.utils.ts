import { CLIENT_ADMIN_ID_1, CLIENT_ADMIN_ID_2, CLIENT_ADMIN_ID_3 } from "../config/env.vars";
/**
 * Determines Telegram user ID has client admin access, depend on env variables
 * @param id Tg user ID
 * @returns Telegram if user has admin access, false otherwise.
 */
export default function (id: number): boolean {
  switch (id) {
    case CLIENT_ADMIN_ID_1:
    case CLIENT_ADMIN_ID_2:
    case CLIENT_ADMIN_ID_3:
      return true;
    default:
      return false;
  }
}
