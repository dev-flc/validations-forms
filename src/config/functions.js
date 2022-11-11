import { getResul, isString } from "../utils/utils.js"
import { EN_MESSAGE_ERRORS } from "./../constants/messages/en.js"
import { ES_MESSAGE_ERRORS } from "./../constants/messages/es.js"
import {
  TYPE_LANGUAGE,
  TYPE_VALIDATION as TV,
} from "./../constants/constants.js"

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
  applyReturnType = false,
}) => {
  const { ES } = TYPE_LANGUAGE

  const { ERROR_EXPRESSION } =
    ES === language ? ES_MESSAGE_ERRORS : EN_MESSAGE_ERRORS

  let result = { ...STATUS.FALSE, message: ERROR_EXPRESSION, id }
  if (expression) {
    const resultMessage = getResul(title, id, language, type, message)
    result = RegExp(expression).test(isString(value) ? value.trim() : value)
      ? applyReturnType
        ? { ...resultMessage, ...STATUS.TRUE, type }
        : STATUS.TRUE
      : applyReturnType
      ? { ...resultMessage, type }
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

/* Validation password */
export const validationsPassword = ({
  value,
  type,
  language,
  expression,
  id,
  title = "",
  message = "",
}) => {
  const validations = [
    {
      id,
      newExpression: expression[TV.PASSWORD_LOWERCASE],
      type: TV.PASSWORD_LOWERCASE,
    },
    {
      id,
      newExpression: expression[TV.PASSWORD_UPPERCASE],
      type: TV.PASSWORD_UPPERCASE,
    },
    {
      id,
      newExpression: expression[TV.PASSWORD_DIGIT],
      type: TV.PASSWORD_DIGIT,
    },
    {
      id,
      newExpression: expression[TV.PASSWORD_SPECIAL_CHARACTER],
      type: TV.PASSWORD_SPECIAL_CHARACTER,
    },
    {
      id,
      newExpression: expression[TV.PASSWORD_MIN],
      type: TV.PASSWORD_MIN,
    },
    {
      id,
      newExpression: expression[TV.PASSWORD_MAX],
      type: TV.PASSWORD_MAX,
    },
  ]

  const data = validations.map((NEW_DATA) => {
    const { message, newExpression: expression, id, type } = NEW_DATA
    const data = validationsExpression({
      value,
      type,
      language,
      expression,
      id,
      message,
      applyReturnType: true,
    })
    return data
  })

  const errorsLength = data.filter((item) => item.status === false).length

  const errors = data.reduce((newObject, item) => {
    return { ...newObject, [item.type]: item }
  }, {})

  const result =
    !errorsLength >= 1
      ? { status: true }
      : getResul(title, id, language, type, message)

  return { ...result, errors }
}

export const validationsPasswordVerify = ({
  value,
  valueCompare,
  type,
  language,
  id,
  title = "",
  message = "",
}) =>
  value === valueCompare
    ? STATUS.TRUE
    : getResul(title, id, language, type, message)
