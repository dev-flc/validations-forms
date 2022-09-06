import { EN, EN_MESSAGE_ERRORS } from "./../constants/messages/en.js"
import { ES, ES_MESSAGE_ERRORS } from "./../constants/messages/es.js"
import {
  TYPE_LANGUAGE as TL,
  TYPE_VALIDATION as TV,
} from "./../constants/constants.js"

import { configurationValidations } from "../config/configurationValidations.js"

export const isString = (str) =>
  Object.prototype.toString.call(str) === "[object String]"

export const isArray = (data) => Array.isArray(data)

export const isValidString = (value) =>
  !(value === null || value === "" || value === undefined)

export const isObject = (obj) =>
  Object.prototype.toString.call(obj) === "[object Object]"

export const getResul = (title, id, language, type, message) => {
  const result = {
    id,
    message,
    status: false,
  }

  if (isValidString(message)) {
    return result
  }
  const newmessage = GET_MESSAGES(language, type, title)
  return { ...result, message: newmessage }
}

const GET_MESSAGES = (language, type, title) => {
  if (language === TL.EN) {
    return EN(type, title)
  } else if (language === TL.ES) {
    return ES(type, title)
  }

  return EN_MESSAGE_ERRORS.ERROR_TYPE_LANGUAGE
}

const GET_CUSTOM_MESSSAGE = ({ type, ...rest }) => {
  let newMessage = ""
  const typyMessage = `message${type}`
  if (rest.hasOwnProperty(typyMessage)) {
    newMessage = rest[typyMessage]
  }
  return newMessage
}

const VALIDATION_EXPRESSION_CUSTOM = (exp, expression, type) => {
  if (expression && type === TV.CUSTOM_EXP) {
    exp = expression
  }
  return exp
}

export const VALIDATIONS_CONFIG = (data) => {
  const { type, language, expression, id } = data

  const { ERROR_TYPE_VALIDATION, ERROR_ID_UNDEFINED } =
    ES === language ? ES_MESSAGE_ERRORS : EN_MESSAGE_ERRORS

  const message = id ? ERROR_TYPE_VALIDATION : ERROR_ID_UNDEFINED

  let result = { message, status: false, id }

  if (id && configurationValidations[type]) {
    const { expression: exp, func } = configurationValidations[type]

    const newExpression = VALIDATION_EXPRESSION_CUSTOM(exp, expression, type)
    result = func({
      ...data,
      expression: newExpression,
      message: GET_CUSTOM_MESSSAGE(data),
    })
  }
  return result
}

export const LOOP_TYPE_VALIDATIONS = (type, data, language) => {
  let result
  for (const NEW_TYPE of type) {
    result = VALIDATIONS_CONFIG({ ...data, type: NEW_TYPE, language })
    if (result.status === false) {
      break
    }
  }
  return result
}
