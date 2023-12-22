import { GroupTypes } from "../enums/group-types-of-tg.enum";

/**
 * Determines whether the chat type is group of super group
 * @param type Telegram chat type
 * @returns true - when chat type is group, false - when chat type is not group
 */
export default function (type: string): boolean {
  switch (type) {
    case GroupTypes.group:
    case GroupTypes.supergroup:
      return true;
    default:
      return false;
  }
}
