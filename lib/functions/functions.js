import { resultError, isString } from "./../utils/funtionsUtils.js";
const STATUS_TRUE = {
  status: true
};
/* Required data validation */

export const isRequired = (value, messageDefault, language, id = "", title = "", requiredMessageError = "") => value === null || value === "" || value === undefined ? resultError(title, id, language, messageDefault, requiredMessageError) : STATUS_TRUE;
/* General validations */

export const generalValidations = (value, messageDefault, language, exp, id = "", title = "", textMessageError = "") => RegExp(exp).test(isString(value) ? value.trim() : value) ? STATUS_TRUE : resultError(title, id, language, messageDefault, textMessageError);
/* Validation Required Combo */

export const isRequiredCombo = (value, messageDefault, language, id = "", title = "", textMessageError = "") => value !== null && value !== -1 && value !== "" && value !== undefined ? STATUS_TRUE : resultError(title, id, language, messageDefault, textMessageError);