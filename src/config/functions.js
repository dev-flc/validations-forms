import { getResul, isString } from "../utils/utils.js"

const STATUS_TRUE = {
  status: true,
}

/* Required data validation */
export const isRequired = ({
  value,
  type,
  language,
  id,
  title = "",
  message = "",
}) =>
  value === null || value === "" || value === undefined
    ? getResul(title, id, language, type, message)
    : STATUS_TRUE

/* General validations */
export const validationsExpression = ({
  value,
  type,
  language,
  expression,
  id,
  title = "",
  message = "",
}) =>
  RegExp(expression).test(isString(value) ? value.trim() : value)
    ? STATUS_TRUE
    : getResul(title, id, language, type, message)

/* Validation Required Combo */
export const isRequiredCombo = ({
  value,
  type,
  language,
  id,
  title = "",
  message = "",
}) =>
  value !== null &&
  value !== "-1" &&
  value !== -1 &&
  value !== "" &&
  value !== undefined
    ? STATUS_TRUE
    : getResul(title, id, language, type, message)
