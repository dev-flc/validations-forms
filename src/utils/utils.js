import { EN, EN_MESSAGE_ERRORS } from "./../constants/messages/en.js"
import { ES } from "./../constants/messages/es.js"
import { TYPE_LANGUAGE as TL } from "./../constants/constants.js"

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
