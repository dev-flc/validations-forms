import { isValidString } from "./../../utils/utils.js"
import { TYPE_VALIDATION as TV } from "./../constants.js"

export const EN_MESSAGE_ERRORS = {
  ERROR_TYPE_ARRAY: "The value of type is not an array or a string.",
  ERROR_TYPE_OBJECT: "Invalid property, a property of type object is expected.",
  ERROR_TYPE_LANGUAGE:
    'The language property is invalid, please enter only "EN" or "ES"',
  ERROR_TYPE_VALIDATION: "Validation type does not exist :(",
}

const messageDefault = (title) =>
  isValidString(title)
    ? `The data ${title} is not valid`
    : `The data is not valid`

export const GET_MESSAGE = () => ({
  [TV.T]: (title) =>
    isValidString(title)
      ? `The data ${title} is not valid, please enter only letters`
      : `The data is not valid, please enter only letters`,

  [TV.R]: (title) =>
    isValidString(title)
      ? `The data ${title} is required.`
      : `The data is required`,

  [TV.N]: (title) =>
    isValidString(title)
      ? `The data ${title} is not valid, please enter only numbers`
      : `The data is not valid, please enter only numbers`,

  [TV.TN]: (title) =>
    isValidString(title)
      ? `The data ${title} is not valid, please enter only letters and numbers`
      : `The data is not valid, please enter only letters and numbers`,

  [TV.C]: (title) =>
    isValidString(title)
      ? `The data ${title} is required.`
      : `The data is required`,
})

export const EN = (type, title) => {
  let message = messageDefault(title)
  if (GET_MESSAGE().hasOwnProperty(type)) {
    message = GET_MESSAGE()[type](title)
  }
  return message
}
