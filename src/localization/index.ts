import { Language } from "../enums/languages.enum";
import uz from "./uz";

/**
 * Object for getting texts depending on chosen language.
 */
export const localization = {
  [Language.UZ]: uz,
};
