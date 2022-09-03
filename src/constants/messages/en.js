import { isValidString } from "./../../utils/utils.js"
import { TYPE_VALIDATION as TV } from "./../constants.js"

export const EN_MESSAGE_ERRORS = {
  ERROR_TYPE_ARRAY: "The value of type is not an array or a string.",
  ERROR_TYPE_OBJECT: "Invalid property, a property of type object is expected.",
  ERROR_TYPE_LANGUAGE:
    'The language property is invalid, please enter only "EN" or "ES"',
  ERROR_TYPE_VALIDATION: "Validation type does not exist :(",
}

export const EN = () => ({
  [TV.C]: (title) =>
    isValidString(title)
      ? `The data is required`
      : `The data ${title} is required.`,

  [TV.CURP]: (title) =>
    isValidString(title)
      ? `The data is not valid`
      : `The data ${title} is not valid`,

  [TV.DATE]: (title) =>
    isValidString(title)
      ? `The data is not valid`
      : `The data ${title} is not valid`,

  [TV.EMAIL]: (title) =>
    isValidString(title)
      ? `The data is not valid`
      : `The data ${title} is not valid`,

  [TV.N]: (title) =>
    isValidString(title)
      ? `The data is not valid, please enter only numbers`
      : `The data ${title} is not valid, please enter only numbers`,

  [TV.R]: (title) =>
    isValidString(title)
      ? `The data is required`
      : `The data ${title} is required.`,

  [TV.RFC]: (title) =>
    isValidString(title)
      ? `The data is not valid`
      : `The data ${title} is not valid`,

  [TV.RFC_KEY_CODE]: (title) =>
    isValidString(title)
      ? `The data is not valid`
      : `The data ${title} is not valid`,

  [TV.T]: (title) =>
    isValidString(title)
      ? `The data is not valid, please enter only letters`
      : `The data ${title} is not valid, please enter only letters`,

  [TV.TN]: (title) =>
    isValidString(title)
      ? `The data is not valid, please enter only letters and numbers`
      : `The data ${title} is not valid, please enter only letters and numbers`,
})
