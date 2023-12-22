/**
 * Make safer password to display on UI
 * @param password Password plain text.
 * @returns Replaced characters with asterisks, excluding first and last three.
 */
export function hidePassword(password: string): string {
  // Replace all characters except the first and last three with asterisks
  return password.replace(/.(?=.{3})/g, "*");
}
