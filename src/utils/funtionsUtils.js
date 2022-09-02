import { messageError } from "./../utils/messages.js"

export const isTitle = (title) => title === ""

export const isString = (str) =>
  Object.prototype.toString.call(str) === "[object String]"

export const isArray = (data) => Array.isArray(data)

export const isValidString = (value) =>
  value === null || value === "" || value === undefined

export const isObject = (obj) =>
  Object.prototype.toString.call(obj) === "[object Object]"

export const resultError = (
  title,
  id,
  language,
  messages,
  textMessageError
) => ({
  id,
  message: messageError(title, language, textMessageError, messages),
  status: false,
})
