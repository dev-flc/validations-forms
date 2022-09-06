import { getResul, isString } from "../utils/utils.js"
import { EN_MESSAGE_ERRORS } from "./../constants/messages/en.js"
import { ES_MESSAGE_ERRORS } from "./../constants/messages/es.js"
import { TYPE_LANGUAGE } from "../constants/constants.js"

const STATUS = {
  TRUE: {
    status: true,
  },
  FALSE: {
    status: false,
  },
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
    : STATUS.TRUE

/* General validations */
export const validationsExpression = ({
  value,
  type,
  language,
  expression,
  id,
  title = "",
  message = "",
}) => {
  const { ES } = TYPE_LANGUAGE

  const { ERROR_EXPRESSION } =
    ES === language ? ES_MESSAGE_ERRORS : EN_MESSAGE_ERRORS

  let result = { ...STATUS.FALSE, message: ERROR_EXPRESSION, id }
  if (expression) {
    result = RegExp(expression).test(isString(value) ? value.trim() : value)
      ? STATUS.TRUE
      : getResul(title, id, language, type, message)
  }
  return result
}

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
    ? STATUS.TRUE
    : getResul(title, id, language, type, message)
