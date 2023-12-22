import { ADMIN_ID_1, ADMIN_ID_2, ADMIN_ID_3 } from "../config/env.vars";
/**
 * Determines Telegram user ID has dev admin access, depend on env variables
 * @param id Telegram user ID
 * @returns true if user has admin access, false otherwise.
 */
export default function (id: number): boolean {
  switch (id) {
    case ADMIN_ID_1:
    case ADMIN_ID_2:
    case ADMIN_ID_3:
      return true;
    default:
      return false;
  }
}
